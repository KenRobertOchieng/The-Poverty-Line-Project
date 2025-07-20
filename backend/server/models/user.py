from backend.server.extensions import db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from datetime import datetime
from sqlalchemy_serializer import SerializerMixin

class User(db.Model,SerializerMixin):
    __tablename__='user'

    serialize_rules=('-password',)

    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String,unique=True,nullable=False)
    email=db.Column(db.String,unique=True,nullable=False)
    timestamp=db.Column(db.DateTime,default=datetime.utcnow(),nullable=False)
    password_hash=db.Column(db.String)

    record=db.relationship('Record',back_populates='user',cascade='all, delete-orphan')
    profile=db.relationship('Profile',back_populates='user', uselist=False,cascade='all, delete-orphan')


    def __str__(self):
        return f'(<User {self.id},{self.username},{self.email}>)'
    
    def thee_password(self,password):
        self.password_hash=generate_password_hash(password)

    def thee_checker_password(self,password):
        self.password_hash=check_password_hash(password)
        