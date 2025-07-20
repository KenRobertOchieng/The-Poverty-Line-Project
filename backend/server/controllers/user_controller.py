from flask import Blueprint, request, jsonify
<<<<<<< HEAD
from models.user import User
from models.record import Record, RecordSchema
from schemas.user_schema import UserSchema
from server.extensions import db
from flask_cors import cross_origin

# Create blueprints for different routes
user_bp = Blueprint('user', __name__, url_prefix='/api/users')
record_bp = Blueprint('record', __name__, url_prefix='/api/records')

# Initialize schemas
user_schema = UserSchema()
users_schema = UserSchema(many=True)
record_schema = RecordSchema()
records_schema = RecordSchema(many=True)

# User routes
@user_bp.route('/', methods=['GET'])
@cross_origin()
def get_users():
    """Get all users"""
    users = User.query.all()
    return users_schema.jsonify(users)

@user_bp.route('/<int:user_id>', methods=['GET'])
@cross_origin()
def get_user(user_id):
    """Get a specific user by ID"""
    user = User.query.get_or_404(user_id)
    return user_schema.jsonify(user)

# Record routes
@record_bp.route('/', methods=['POST'])
@cross_origin()
def add_record():
    """Create a new record"""
    data = request.get_json()
    new_record = Record(**data)
    db.session.add(new_record)
=======
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

@user_bp.route('/<int:user_id>',methods=['DELETE'])
def delete_user(user_id):
    user_delete = User.query.get_or_404(user_id)
    db.session.delete(user_delete)
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2
    db.session.commit()
    return jsonify({ "id": user_id }),200

<<<<<<< HEAD
@record_bp.route('/user/<int:user_id>', methods=['GET'])
@cross_origin()
def get_user_records(user_id):
    """Get all records for a specific user"""
    records = Record.query.filter_by(user_id=user_id).all()
    return records_schema.jsonify(records)
=======
   
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2
