from backend.server.extensions import db
from datetime import datetime


class Record(db.Model):
    __tablename__='record'

    id=db.Column(db.Integer,primary_key=True)
    income=db.Column(db.String)
    poverty_classification=db.Column(db.String)
    timestamp=db.Column(db.DateTime,default=datetime.utcnow(),nullable=False)

    user_id=db.Column(db.Integer,db.ForeignKey('user.id'))
    user=db.relationship('User',back_populates='record')

    def __repr__(self):
     return f'<Record {self.id},{self.income},{self.poverty_classification}'
