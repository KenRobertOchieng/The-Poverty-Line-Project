from flask import Blueprint, request, jsonify
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
    db.session.commit()
    return record_schema.jsonify(new_record), 201

@record_bp.route('/user/<int:user_id>', methods=['GET'])
@cross_origin()
def get_user_records(user_id):
    """Get all records for a specific user"""
    records = Record.query.filter_by(user_id=user_id).all()
    return records_schema.jsonify(records)