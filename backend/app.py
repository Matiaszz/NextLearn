# type: ignore
from flask import Flask, request, jsonify
from models.models import db, CourseModel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///courses.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route('/courses', methods=['POST'])
def create_course():
    data = request.json
    new_course = CourseModel(
        owner_id=data['owner_id'],
        title=data['title'],
        short_description=data['short_description'],
        long_description=data['long_description'],
        price=data['price'],
        discount=data.get('discount', 0.0),
        completed=data.get('completed', False),
        is_published=data.get('is_published', False),
        category=data.get('category', ''),
        level=data.get('level', ''),
        video_duration=data.get('video_duration', 0)
    )
    db.session.add(new_course)
    db.session.commit()
    return jsonify({'message': 'Course created', 'course_id': new_course.id})


@app.route('/courses/<int:course_id>', methods=['GET'])
def get_course(course_id):
    course = CourseModel.query.get(course_id)
    if not course:
        return jsonify({'message': 'Course not found'}), 404
    return jsonify({
        'id': course.id,
        'owner_id': course.owner_id,
        'title': course.title,
        'short_description': course.short_description,
        'long_description': course.long_description,
        'price': course.price,
        'discount': course.discount,
        'completed': course.completed,
        'ratings': course.ratings,
        'comments': course.comments,
        'tags': course.tags,
        'students': course.students,
        'is_published': course.is_published,
        'category': course.category,
        'level': course.level,
        'video_duration': course.video_duration
    }), 200


if __name__ == '__main__':
    app.run(debug=True)
