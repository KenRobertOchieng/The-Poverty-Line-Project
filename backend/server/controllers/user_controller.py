from flask import Blueprint, request, jsonify
from server.models.user import User
from server.schemas.user_schema import UserSchema
from flask_jwt_extended import jwt_required ,get_jwt_identity

from server.extensions import db

user_bp = Blueprint('user',__name__,url_prefix='/users')
users_schema = UserSchema(many=True)
user_schema = UserSchema()

@user_bp.route('',methods=['GET'])
def get_all_users():
 users=User.query.all()
 return {"message":users_schema.dump(users)},200


@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return user_schema.jsonify(user),200

@user_bp.route('/<int:user_id>',methods=['DELETE'])
@jwt_required()
def delete_user(user_id):
    the_current_logged_in_user=get_jwt_identity()

    if user_id != the_current_logged_in_user:
        return jsonify({"msg": "Unauthorized"}), 403
       
    user_delete = User.query.get_or_404(user_id)
    db.session.delete(user_delete)
    db.session.commit()
    return jsonify({ "id": user_id }),200

@user_bp.route('/<int:user_id>', methods=['PUT,PATCH'])
@jwt_required()
def patch_user(user_id):
    current_user_id = get_jwt_identity()
    if user_id != current_user_id:
        return jsonify({"msg": "Unauthorized"}), 403

    user = User.query.get_or_404(user_id)

    data = request.get_json() or {}
    for field in ('username', 'email'):
        if field in data:
            setattr(user, field, data[field])

    db.session.commit()

    return user_schema.jsonify(user), 200
