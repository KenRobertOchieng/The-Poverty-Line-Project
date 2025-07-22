from flask import Blueprint, request , jsonify
from backend.server.models.record import Record
from backend.server.schemas.record_schema import RecordSchema
from backend.server.extensions import db
from flask_jwt_extended import jwt_required ,get_jwt_identity

record_bp = Blueprint('record',__name__, url_prefix='/records')
records_schema = RecordSchema(many=True)
record_schema = RecordSchema()

@record_bp.route('',methods=['GET'])
def get_all_records():
 records=Record.query.all()
 return { "message": records_schema.dump(records) }


@record_bp.route('', methods=['POST'])
@jwt_required()
def add_record():
    current_record_post=get_jwt_identity()
    data = request.get_json()

    data['user_id']=current_record_post
    new_record = Record(**data)
    db.session.add(new_record)
    db.session.commit()
    return record_schema.jsonify(new_record), 201

@record_bp.route('/<int:record_id>', methods=['GET'])
def get_records(record_id):
    records = Record.query.get_or_404(record_id)
    return record_schema.jsonify(records),200

@record_bp.route('/<int:record_id>',methods=['DELETE'])
@jwt_required()
def delete_records(record_id):
   delete_record=Record.query.get_or_404(record_id)
   
   current_record_deleting=get_jwt_identity()

   if delete_record.user_id !=current_record_deleting:
        return jsonify({"msg": "Unauthorized"}), 403
   db.session.delete(delete_record)
   db.session.commit()
   return jsonify({ "id": record_id })


@record_bp.route('/<int:record_id>',methods=['PUT'])
@jwt_required()
def patch_user(record_id):
    the_current_logged_in_user_patch_record=get_jwt_identity()

    user_patch = Record.query.get_or_404(record_id)

    if user_patch.user_id != the_current_logged_in_user_patch_record:
        return jsonify({"msg": "Unauthorized"}), 403
  
    data = request.get_json() or {}
    for field in ('income', 'poverty_classification'):
        if field in data:
            setattr(user_patch, field, data[field])

    db.session.commit()
    return record_schema.jsonify(user_patch), 200

