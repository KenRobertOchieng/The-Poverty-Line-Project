from flask import Blueprint, request, jsonify
<<<<<<< HEAD
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
=======
from backend.server.models.user import User
from werkzeug.security import generate_password_hash , check_password_hash
from flask_jwt_extended import create_access_token
from backend.server.extensions import db

login_bp = Blueprint('login', __name__,url_prefix='/login')
register_bp= Blueprint('register',__name__,url_prefix='/register')

@register_bp.route('', methods=['POST'])
def register():
    # get the json for registering a user
    # user password hashing for safety of password

    data=request.get_json()

    registeration_for_user=User(username=data.get('username'),email=data.get('email'), password=generate_password_hash(data.get('password')))
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2

    # add and save registeration to session
    db.session.add(registeration_for_user)
    db.session.commit()
    return jsonify(message="User created"), 201

@login_bp.route('',methods=['POST'])
def login():
    # get the json for login of a user
    # we are going to check the password_hash against the password itself
    # creation of access token to identify users

  data=request.get_json()

  login_of_user=User.query.filter_by(password=data.get('password')).first()

  if login_of_user and check_password_hash(login_of_user.password,data.get('password')):
    # and by providing this key login_of_user.id actually means we are returning a key via a person who has logged in
     
     thee_token=create_access_token(identity=login_bp.id)
     return jsonify(access_token=thee_token), 200
  else:
      return jsonify(error="Oops...invalid credentials"), 401
  

     


<<<<<<< HEAD
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
=======
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2
