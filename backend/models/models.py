# models.py
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class CourseModel(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    short_description = db.Column(db.String(255), nullable=False)
    long_description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    discount = db.Column(db.Float, default=0.0)
    completed = db.Column(db.Boolean, default=False)
    ratings = db.Column(db.PickleType, default=[])
    comments = db.Column(db.PickleType, default=[])
    tags = db.Column(db.PickleType, default=[])
    students = db.Column(db.PickleType, default=[])
    is_published = db.Column(db.Boolean, default=False)
    category = db.Column(db.String(50), default='')
    level = db.Column(db.String(50), default='')
