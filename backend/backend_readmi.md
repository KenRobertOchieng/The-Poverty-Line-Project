# Poverty Line Backend

A Flask-based REST API for managing users, profiles, and income records in the Poverty Line Project.

# Tech Stack

  Python ≥ 3.10
  Flask
  Flask-Migrate (Alembic migrations)
  Flask-JWT-Extended (JWT auth)
  Flask-CORS
  SQLAlchemy (ORM)
  Marshmallow (serialization & validation)

# Quickstart

Clone & venv
git clone https://github.com/KenRobertOchieng/The-Poverty-Line-Project.git
cd The-Poverty-Line-Project/backend
python3 -m venv venv
source venv/bin/activate


# Install dependencies

pip install -r requirements.txt

# Environment variables

export FLASK_APP=server.app
export FLASK_ENV=development
export JWT_SECRET_KEY="<your_jwt_secret>"
# (Optional) override default SQLite:
export DATABASE_URL="postgresql://user:pass@host:port/dbname"


# Database setup & migrations

  flask db init 
  flask db migrate -m "Initial models"
  flask db upgrade


# Seed initial data

 On first run the app will auto-seed. To force seed manually:

  python -m server.seed


# Run locally
flask run
# or with Gunicorn:
gunicorn server.app:app
The API will be available at http://127.0.0.1:5000.