from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})


@app.route('/api')
def api():
    return jsonify({
        'question': 'answer'
    })


if __name__ == '__main__':
    app.run(debug=True)
