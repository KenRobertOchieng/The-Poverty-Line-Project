from server.extensions import db
from server.models.user import User
from server.models.record import Record
from server.models.profile import Profile

def seed_data():
    # Ensure tables exist
    db.create_all()

    # If we’ve already seeded at least one user, bail out
    if User.query.first():
        print("⚠️  Data already seeded; skipping.")
        return

    user1 = User(username='roberrober',   email='rober@gmail.com');    user1.thee_password('7882')
    user2 = User(username='eliudrotich',  email='eliud@gmail.com');    user2.thee_password('5241')
    user3 = User(username='makenaotis',   email='makena@gmail.com');   user3.thee_password('1124889')
    user4 = User(username='theekeneth',   email='keneth@gmail.com');   user4.thee_password('7882')
    user5 = User(username='mariko',       email='mark@gmail.com');     user5.thee_password('5241')
    user6 = User(username='zakayo',       email='zakayo@gmail.com');   user6.thee_password('1124889')
    user7 = User(username='omolo254',     email='omolo@gmail.com');    user7.thee_password('48531031')
    user8 = User(username='amanda967',    email='amanda@gmail.com');   user8.thee_password('8412500')


    profile1 = Profile(age=28, gender='Male',   social_category='Youth',  user=user1)
    profile2 = Profile(age=34, gender='Male',   social_category='Adult',  user=user2)
    profile3 = Profile(age=22, gender='Female', social_category='Youth',  user=user3)
    profile4 = Profile(age=30, gender='Male',   social_category='Adult',  user=user4)
    profile5 = Profile(age=27, gender='Female', social_category='Youth',  user=user5)
    profile6 = Profile(age=45, gender='Male',   social_category='Senior', user=user6)
    profile7 = Profile(age=19, gender='Male',   social_category='Senior', user=user7)


    user1.record.append(Record(income='180', poverty_classification='extreme'))
    user2.record.append(Record(income='250', poverty_classification='moderate'))
    user3.record.append(Record(income='200', poverty_classification='extreme'))
    user4.record.append(Record(income='190', poverty_classification='extreme'))
    user5.record.append(Record(income='300', poverty_classification='above-line'))
    user6.record.append(Record(income='220', poverty_classification='moderate'))
    user7.record.append(Record(income='700', poverty_classification='above-line'))
    user8.record.append(Record(income='500', poverty_classification='extreme'))

    # ——— Persist everything ———
    db.session.add_all([
        user1, user2, user3, user4,
        user5, user6, user7, user8,
        profile1, profile2, profile3,
        profile4, profile5, profile6, profile7
    ])
    db.session.commit()
    print("✅ Database tables created & seeded successfully.")
