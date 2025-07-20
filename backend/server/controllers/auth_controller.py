from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from schemas.user_schema import UserSchema
from models.user import User
from server.extensions import db, jwt
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_cors import cross_origin

auth_bp = Blueprint('auth', __name__, url_prefix='/api/auth')
user_schema = UserSchema()

@auth_bp.route('/register', methods=['POST'])
@cross_origin()
def register():
    """Register a new user"""
    data = request.get_json()

    # Check if user already exists
    if User.query.filter_by(email=data.get('email')).first():
        return jsonify({'message': 'Email already registered'}), 409
    
    if User.query.filter_by(username=data.get('username')).first():
        return jsonify({'message': 'Username already taken'}), 409

    # Deserialize and validate input
    try:
        user_data = user_schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    # Create new user
    new_user = User(
        username=user_data['username'],
        email=user_data['email']
    )
    new_user.thee_password(user_data['password'])

    db.session.add(new_user)
    db.session.commit()

    # Create access token
    access_token = create_access_token(identity=new_user.id)

    return jsonify({
        'user': user_schema.dump(new_user),
        'access_token': access_token
    }), 201

@auth_bp.route('/login', methods=['POST'])
@cross_origin()
def login():
    """Login a user"""
    data = request.get_json()
    
    # Find user by email
    user = User.query.filter_by(email=data.get('email')).first()
    
    # Check if user exists and password is correct
    if not user or not user.thee_checker_password(data.get('password')):
        return jsonify({'message': 'Invalid email or password'}), 401
    
    # Create access token
    access_token = create_access_token(identity=user.id)
    
    return jsonify({
        'user': user_schema.dump(user),
        'access_token': access_token
    }), 200

@auth_bp.route('/me', methods=['GET'])
@jwt_required()
@cross_origin()
def get_current_user():
    """Get current authenticated user"""
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    
    if not user:
        return jsonify({'message': 'User not found'}), 404
    
    return user_schema.jsonify(user)