from flask import Blueprint, request , jsonify
from server.models.profile import Profile
from server.schemas.profile_schema import ProfileSchema
from server.extensions import db
from flask_jwt_extended import jwt_required ,get_jwt_identity

profile_bp = Blueprint('profile',__name__, url_prefix='/profile')

profiles_schema = ProfileSchema(many=True)
profile_schema = ProfileSchema()

@profile_bp.route('',methods=['GET'])
def get_all_records():
 profile=Profile.query.all()
 return profiles_schema.dump(profile)

@profile_bp.route('', methods=['POST'])
@jwt_required()
def add_record():
    current_user_post=get_jwt_identity()

    data = request.get_json()

    data['user_id']= current_user_post
    new_profile = Profile(**data)
    db.session.add(new_profile)
    db.session.commit()
    return profile_schema.jsonify(new_profile), 201

@profile_bp.route('/<int:profile_id>', methods=['GET'])
def get_records(profile_id):
    profile = Profile.query.get_or_404(profile_id)
    return profile_schema.jsonify(profile),200

@profile_bp.route('/<int:profile_id>',methods=['DELETE'])
@jwt_required()
def delete_user(profile_id):
    profile_delete = Profile.query.get_or_404(profile_id)

    current_person_deleting=get_jwt_identity()
    
    if profile_delete.user_id != current_person_deleting :
        return jsonify({"msg": "Unauthorized"}), 403
    db.session.delete(profile_delete)
    db.session.commit()
    return jsonify({ "id": profile_id }),200

   