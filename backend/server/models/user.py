<<<<<<< HEAD
from server.extensions import db
from werkzeug.security import generate_password_hash, check_password_hash
=======
from backend.server.extensions import db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f
from datetime import datetime
from sqlalchemy_serializer import SerializerMixin

<<<<<<< HEAD
class User(db.Model):
    __tablename__ = 'user'
=======
class User(db.Model,SerializerMixin):
    __tablename__='user'

    serialize_rules=('-password',)

    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String,unique=True,nullable=False)
    email=db.Column(db.String,unique=True,nullable=False)
    timestamp=db.Column(db.DateTime,default=datetime.utcnow(),nullable=False)
    password=db.Column(db.String)

    record=db.relationship('Record',back_populates='user',cascade='all, delete-orphan')
    profile=db.relationship('Profile',back_populates='user', uselist=False,cascade='all, delete-orphan')
>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String, unique=True, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    password_hash = db.Column(db.String)

    def __str__(self):
        return f'<User {self.id},{self.username},{self.email}>'
    
<<<<<<< HEAD
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
=======
    def thee_password(self,password):
        self.password=generate_password_hash(password)

    def thee_checker_password(self,password):
        self.password=check_password_hash(password)
        
>>>>>>> abcadbd1d6a0b7dbb446cccabe425290ccd65f6f
