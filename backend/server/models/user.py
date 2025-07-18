from server.extensions import db
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from datetime import datetime

class User(db.Model):
    __tablename__='user'

    id=db.Column(db.Integer,primary_key=True)
    username=db.Column(db.String,unique=True,nullable=False)
    email=db.Column(db.String,unique=True,nullable=False)
    timestamp=db.Column(db.Datetime,default=datetime.utcnow())
    password_hash=db.Column(db.String)


    def __str__(self):
        return f'(<User {self.id},{self.username},{self.email}>)'
    
    def thee_password(self,password):
        self.password_hash=generate_password_hash(password)

    def thee_checker_password(self,check_password):
        self.password_hash=check_password_hash(check_password)    