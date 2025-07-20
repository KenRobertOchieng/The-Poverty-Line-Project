from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
<<<<<<< HEAD
from server.extensions import db, jwt
from controllers.user_controller import user_bp, record_bp
from controllers.auth_controller import auth_bp
=======
from backend.server.extensions import db
from backend.server.controllers.auth_controller import login_bp ,register_bp
from backend.server.controllers.user_controller import user_bp
from backend.server.controllers.record_controller import record_bp
from backend.server.controllers.profile_controller import profile_bp
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2

# Initialize Flask app
app = Flask(__name__)

<<<<<<< HEAD
# Configure app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///poverty_line.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'poverty-line-secret-key'  # Change this in production
=======
from backend.server.extensions import JWTManager

app=Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///poverty_line.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True 

app.config['JWT_SECRET_KEY'] = 'Kq9yJaLzG8X3sH5R5bTcW0pNqZ7591X0bntG1oLkPl'
CORS(app, methods=['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'], allow_headers=['Content-Type', 'Authorization'])

jwt = JWTManager(app)
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2

# Initialize extensions
db.init_app(app)
<<<<<<< HEAD
jwt.init_app(app)
migrate = Migrate(app, db)

# Enable CORS
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Register blueprints
app.register_blueprint(user_bp)
app.register_blueprint(record_bp)
app.register_blueprint(auth_bp)
=======
migrate=Migrate(app,db)

app.register_blueprint(register_bp)
app.register_blueprint(login_bp)
app.register_blueprint(user_bp)
app.register_blueprint(record_bp)
app.register_blueprint(profile_bp)

if __name__=='__main__':
    app.run(debug=True)
>>>>>>> 8d41d962b0ad454f8ef351770add259fd2a2f6f2

# Create database tables
@app.before_first_request
def create_tables():
    db.create_all()

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return {'status': 'healthy'}, 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
