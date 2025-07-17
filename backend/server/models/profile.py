from server.extensions import db


class Profile(db.Model):
    __tablename__='profile'

    id=db.Column(db.Integer,primary_key=True)
    age=db.Column(db.Integer)
    gender=db.Column(db.String)
    social_category=db.Column(db.String)

    user_id=db.COlumn(db.Integer,db.ForeignKey('user.id'))
    user=db.relationship('User',back_populates='user')


    def __repr__(self):
        return f'<Profile {self.id},{self.age},{self.social_category}'
