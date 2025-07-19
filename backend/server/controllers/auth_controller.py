from flask import Blueprint, request, jsonify
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
  

     


