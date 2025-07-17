from flask import Flask
from flask_migrate import Migrate
from server.extensions import db


app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///poverty_line.db'

db.init_app(app)

migrate=Migrate(app,db)

if __name__=='__main__':
    app.run(debug=True)


