from backend.server.extensions import ma
from backend.server.models.user import User
from marshmallow import fields, validate, validates_schema, ValidationError

class UserSchema(ma.SQLAlchemyAutoSchema):
    username = fields.String(required=True, validate=validate.Length(min=3, max=80))
    email = fields.Email(required=True)
    password = fields.String(required=True, validate=validate.Length(min=6), load_only=True)

    class Meta:
        model = User
        include_fk = True
        load_instance = True
        include_relationships = True

    @validates_schema
    def validate_unique_fields(self, data, **kwargs):
        username = data.get("username")
        email = data.get("email")

        if User.query.filter_by(username=username).first():
            raise ValidationError({"username": "Username already exists."})

        if User.query.filter_by(email=email).first():
            raise ValidationError({"email": "Email is already registered."})

        return data