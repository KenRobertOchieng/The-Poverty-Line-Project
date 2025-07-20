from flask import Blueprint, request , jsonify
from backend.server.models.record import Record
from backend.server.schemas.record_schema import RecordSchema
from backend.server.extensions import db

record_bp = Blueprint('record',__name__, url_prefix='/records')
records_schema = RecordSchema(many=True)
record_schema = RecordSchema()

@record_bp.route('',methods=['GET'])
def get_all_records():
 records=Record.query.all()
 return { "message": records_schema.dump(records) }


@record_bp.route('', methods=['POST'])
def add_record():
    data = request.get_json()
    new_record = Record(**data)
    db.session.add(new_record)
    db.session.commit()
    return record_schema.jsonify(new_record), 201

@record_bp.route('/<int:record_id>', methods=['GET'])
def get_records(record_id):
    records = Record.query.get_or_404(record_id)
    return record_schema.jsonify(records),200

@record_bp.route('/<int:record_id>',methods=['DELETE'])
def delete_records(record_id):
   delete_record=Record.query.get_or_404(record_id)
   db.session.delete(delete_record)
   db.session.commit()
   return jsonify({ "id": record_id })
