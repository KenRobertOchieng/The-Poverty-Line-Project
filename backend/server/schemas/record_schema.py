<<<<<<< HEAD
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from models.record import Record
from marshmallow import fields, validate, ValidationError, validates_schema

class RecordSchema(SQLAlchemyAutoSchema):
=======
from backend.server.extensions import ma
from backend.server.models.record import Record
from marshmallow import fields, validate, ValidationError, validates_schema

class RecordSchema(ma.SQLAlchemyAutoSchema):
>>>>>>> master
    income = fields.Float(
        required=True,
        validate=validate.Range(min=0)
    )
    household_size = fields.Integer(
        required=True,
        validate=validate.Range(min=1)
    )
    is_below_poverty_line = fields.Boolean(required=False)

    class Meta:
        model = Record
        load_instance = True
        include_fk = True  # Include user_id if needed in request/response

    @validates_schema
    def validate_record(self, data, **kwargs):
        # You can add custom validations here if needed
        return data