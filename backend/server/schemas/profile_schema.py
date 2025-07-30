from server.models.profile import Profile
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import fields, validate, ValidationError, validates_schema

class ProfileSchema(SQLAlchemyAutoSchema):
    age = fields.Integer(required=True, validate=validate.Range(min=0, max=120))
    gender = fields.String(
        required=True,
        validate=validate.OneOf(["male", "female", "other", "prefer_not_to_say"])
    )
    region = fields.String(required=True, validate=validate.Length(min=2, max=100))

    class Meta:
        model = Profile
        load_instance = True

    @validates_schema
    def validate_profile(self, data, **kwargs):
        # Example: You can add custom validations here if needed
        return data