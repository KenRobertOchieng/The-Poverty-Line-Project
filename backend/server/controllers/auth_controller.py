from flask import Blueprint, request, jsonify
from marshmallow import ValidationError
from schemas.user_schema import UserSchema
from models.user import User
from models import db

auth_bp = Blueprint('auth', __name__)
user_schema = UserSchema()

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    # Deserialize and validate input
    try:
        user_data = user_schema.load(data)
    except ValidationError as err:
        return jsonify(err.messages), 400

    new_user = User(
        username=user_data['username'],
        email=user_data['email'],
        password=user_data['password']
    )

    db.session.add(new_user)
    db.session.commit()

    return user_schema.dump(new_user), 201