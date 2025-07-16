from flask import Blueprint, request, jsonify
from models.record import Record, RecordSchema
from models import db

record_bp = Blueprint('record', 'record', url_prefix='/record')
record_schema = RecordSchema()
records_schema = RecordSchema(many=True)

@record_bp.route('/', methods=['POST'])
def add_record():
    data = request.get_json()
    new_record = Record(**data)
    db.session.add(new_record)
    db.session.commit()
    return record_schema.jsonify(new_record), 201

@record_bp.route('/<int:user_id>', methods=['GET'])
def get_records(user_id):
    records = Record.query.filter_by(user_id=user_id).all()
    return records_schema.jsonify(records)