from flask import Blueprint, request, jsonify
<<<<<<< HEAD
from werkzeug.security import check_password_hash
from models.user import User
from flask_jwt_extended import create_access_token

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if not user or not user.check_password(password):
        return jsonify({"error": "Invalid username or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({
        "message": "Login successful",
        "access_token": access_token,
        "user_id": user.id
    }), 200
=======
from backend.server.models.user import User
from werkzeug.security import generate_password_hash , check_password_hash
from flask_jwt_extended import create_access_token
from backend.server.extensions import db
from backend.server.schemas.user_schema import UserSchema

login_bp = Blueprint('login', __name__,url_prefix='/login')
register_bp= Blueprint('register',__name__,url_prefix='/register')

@register_bp.route('', methods=['POST'])
def register():
    # get the json for registering a user
    # user password hashing for safety of password

    data=request.get_json()

    registeration_for_user=User(username=data.get('username'),email=data.get('email'), password=generate_password_hash(data.get('password')))

    # add and save registeration to session
    db.session.add(registeration_for_user)
    db.session.commit()
    return UserSchema().jsonify(registeration_for_user), 201

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
  

     


>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f
