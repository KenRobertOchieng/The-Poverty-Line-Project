from server.extensions import db
from datetime import datetime


class Record(db.Model):
    __tablename__='recipe'

    id=db.Column(db.Integer,primary_key=True)
    income=db.Column(db.String)
    poverty_classification=db.Column(db.String)
    timestamp=db.Column(db.Datetime,default=datetime.utcnow())

    user_id=db.Column(db.Integer,db.ForeignKey('user.id'))
    user=db.relationship('User',back_populates='recipe')

    def __repr__(self):
     return f'<Record {self.id},{self.income},{self.poverty_classification}'
