from flask import Blueprint, request , jsonify
from backend.server.models.profile import Profile
from backend.server.schemas.profile_schema import ProfileSchema
from backend.server.extensions import db

profile_bp = Blueprint('profile',__name__, url_prefix='/profile')

profiles_schema = ProfileSchema(many=True)
profile_schema = ProfileSchema()

@profile_bp.route('',methods=['GET'])
def get_all_records():
 profile=Profile.query.all()
 return profiles_schema.dump(profile),200

@profile_bp.route('', methods=['POST'])
def add_record():
    data = request.get_json()
    new_profile = Profile(**data)
    db.session.add(new_profile)
    db.session.commit()
    return profile_schema.jsonify(new_profile), 201

@profile_bp.route('/<int:profile_id>', methods=['GET'])
def get_records(profile_id):
    profile = Profile.query.get_or_404(profile_id)
    return profile_schema.jsonify(profile),200