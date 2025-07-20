from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from server.extensions import db, jwt
from controllers.user_controller import user_bp, record_bp
from controllers.auth_controller import auth_bp

# Initialize Flask app
app = Flask(__name__)

# Configure app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///poverty_line.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'poverty-line-secret-key'  # Change this in production

# Initialize extensions
db.init_app(app)
jwt.init_app(app)
migrate = Migrate(app, db)

# Enable CORS
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Register blueprints
app.register_blueprint(user_bp)
app.register_blueprint(record_bp)
app.register_blueprint(auth_bp)

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
