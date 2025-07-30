from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from server.extensions import db
from server.controllers.auth_controller import login_bp ,register_bp
from server.controllers.user_controller import user_bp
from server.controllers.record_controller import record_bp
from server.controllers.profile_controller import profile_bp
from server.seed import seed_data

from server.extensions import JWTManager

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///poverty_line.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True 

app.config['JWT_SECRET_KEY'] = 'Kq9yJaLzG8X3sH5R5bTcW0pNqZ7591X0bntG1oLkPl'
CORS(app, methods=['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'], allow_headers=['Content-Type', 'Authorization'])

jwt = JWTManager(app)

db.init_app(app)
migrate=Migrate(app,db)

@app.before_serving
def initialize_database():
    seed_data()


app.register_blueprint(register_bp)
app.register_blueprint(login_bp)
app.register_blueprint(user_bp)
app.register_blueprint(record_bp)
app.register_blueprint(profile_bp)

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return {'status': 'healthy'}, 200

if __name__ == '__main__':
    app.run(debug=True)
