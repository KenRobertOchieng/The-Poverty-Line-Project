from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from server.models.record import Record
from server.schemas.record_schema import RecordSchema
from server.extensions import db

record_bp = Blueprint('record', __name__, url_prefix='/records')
records_schema = RecordSchema(many=True)
record_schema  = RecordSchema()

@record_bp.route('', methods=['GET'])
def get_all_records():
    all_recs = Record.query.all()
    return jsonify(message=records_schema.dump(all_recs)), 200

@record_bp.route('', methods=['POST'])
@jwt_required()
def add_record():
    user_id = get_jwt_identity()
    data    = request.get_json() or {}
    data['user_id'] = user_id

    rec = Record(**data)
    db.session.add(rec)
    db.session.commit()
    # ← dump → jsonify, don't call schema.jsonify()
    return jsonify(record_schema.dump(rec)), 201

@record_bp.route('/<int:record_id>', methods=['GET'])
def get_record(record_id):
    rec = Record.query.get_or_404(record_id)
    return jsonify(record_schema.dump(rec)), 200

@record_bp.route('/<int:record_id>', methods=['DELETE'])
@jwt_required()
def delete_record(record_id):
    rec = Record.query.get_or_404(record_id)
    if rec.user_id != get_jwt_identity():
        return jsonify(msg="Unauthorized"), 403

    db.session.delete(rec)
    db.session.commit()
    return jsonify(id=record_id), 200

@record_bp.route('/<int:record_id>', methods=['PUT'])
@jwt_required()
def update_record(record_id):
    rec = Record.query.get_or_404(record_id)
    if rec.user_id != get_jwt_identity():
        return jsonify(msg="Unauthorized"), 403

    patch = request.get_json() or {}
    for f in ('income', 'poverty_classification'):
        if f in patch:
            setattr(rec, f, patch[f])

    db.session.commit()
    return jsonify(record_schema.dump(rec)), 200
