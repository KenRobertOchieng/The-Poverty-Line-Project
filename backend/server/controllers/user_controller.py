from flask import Blueprint, request, jsonify
from backend.server.models.user import User
from backend.server.schemas.user_schema import UserSchema

from backend.server.extensions import db

user_bp = Blueprint('user',__name__,url_prefix='/users')
users_schema = UserSchema(many=True)
user_schema = UserSchema()

@user_bp.route('',methods=['GET'])
def get_all_users():
 records=User.query.all()
 return users_schema.dump(records),200


@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return user_schema.jsonify(user),200