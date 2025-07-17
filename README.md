The Poverty Line Project - Backend API
Overview
This repository contains the backend server for "The Poverty Line Project," which is designed to manage and process data related to poverty records. The backend is built using Flask, a lightweight Python web framework.

Directory Structure
backend/server : Contains the main server files.
controllers : Handles business logic and routes.
record_controller.py: Manages CRUD operations for records.
user_controller.py: Manages user-related operations.
schemas : Defines serialization/deserialization schemas for API responses.
record_schema.py: Schema for Record objects.
user_schema.py: Schema for User objects.
README.md : This file.
Key Features
Record Management :
POST /records : Creates a new record by accepting JSON data in the request body.
python code
@record_bp.route('/', methods=['POST'])
def add_record():
    data = request.get_json()
    # Logic to add a new record directly without models
    db.session.execute("INSERT INTO records (field1, field2, user_id) VALUES (:field1, :field2, :user_id)", data)
    db.session.commit()
    return jsonify({"message": "Record added successfully"}), 201
    GET /records/<int:user_id> : Retrieves all records associated with a specific user_id.
python
@record_bp.route('/<int:user_id>', methods=['GET'])
def get_records(user_id):
    records = db.session.execute("SELECT * FROM records WHERE user_id = :user_id", {'user_id': user_id}).fetchall()
    return jsonify([dict(record) for record in records])
    Database Integration :
Uses raw SQL queries for database interactions.
Data is directly processed without relying on ORM models.
Schemas (RecordSchema, UserSchema) are used for serializing/deserializing data for API responses.
Flask Blueprint :
Organizes routes and controllers using Flask Blueprints for better modularity.
The record_bp blueprint handles all record-related endpoints.
Dependencies
Flask : Web framework for building APIs.
Flask-SQLAlchemy : For database connectivity and raw SQL execution.
Marshmallow : Used for data serialization/deserialization via schemas.
Getting Started
Install Dependencies :
bash
pip install flask flask-sqlalchemy marshmallow
Initialize Database :
Ensure the database tables (records, users) exist with the necessary fields.
Run the Server :
bash
python app.py
API Endpoints
POST /records : Add a new poverty record.
GET /records/<int:user_id> : Get all records for a specific user.
POST /users : Add a new user.
GET /users : Retrieve all users.
Contributing
Feel free to contribute improvements, bug fixes, or additional features to the project.





