from flask import Blueprint, request, jsonify
from server.models.user import User
from werkzeug.security import generate_password_hash , check_password_hash
from flask_jwt_extended import create_access_token
from server.extensions import db
from server.schemas.user_schema import UserSchema

login_bp = Blueprint('login', __name__,url_prefix='/login')
register_bp= Blueprint('register',__name__,url_prefix='/register')

@register_bp.route('', methods=['POST'])
def register():
    try:
        data = request.get_json()

        # Validation
        if not data.get('username') or not data.get('email') or not data.get('password'):
            return jsonify({'msg': 'Missing fields'}), 400

        # Check for duplicates
        if User.query.filter_by(email=data['email']).first():
            return jsonify({'msg': 'Email already exists'}), 409

        # Create user
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=generate_password_hash(data['password'])
        )
        db.session.add(new_user)
        db.session.commit()

        return UserSchema().jsonify(new_user), 201

    except Exception as e:
        print(f"❌ Registration error: {e}")
        return jsonify({'msg': 'Internal server error', 'error': str(e)}), 500

@login_bp.route('',methods=['POST'])
def login():
    # get the json for login of a user
    # we are going to check the password_hash against the password itself
    # creation of access token to identify users

    data=request.get_json()
    data = request.get_json(silent=True) or {}
    username = data.get('username')
    password = data.get('password')

    # ❌ Missing fields → 400 Bad Request
    if not username or not password:
        return jsonify({ "msg": "Username and password are required" }), 400

    # ✅ Safe to look up user now
    user = User.query.filter_by(username=username).first()
    if not user:
        return jsonify({ "msg": "Bad credentials" }), 401

    if not check_password_hash(user.password,password):
      return jsonify({ "msg": "Bad credentials" }), 401
    # and by providing this key login_of_user.id actually means we are returning a key via a person who has logged in
     
    thee_token=create_access_token(identity=user.id)
    return jsonify({
      "access_token": thee_token,
      # <-- serialize the full user so your React code can read it
      "user": UserSchema().dump(user)
    }), 200
  

     


