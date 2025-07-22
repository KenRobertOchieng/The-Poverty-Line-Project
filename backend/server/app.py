from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from server.extensions import db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///poverty_line.db'
app.config['JWT_SECRET_KEY'] = 'your-very-secret-key-123' 

db.init_app(app)
jwt = JWTManager(app)
migrate = Migrate(app, db)

from controllers.auth_controller import auth_bp
from controllers.user_controller import record_bp  

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(record_bp) 

if __name__ == '__main__':
    app.run(debug=True)