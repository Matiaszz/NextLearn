from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)

# TODO: We need to restrict access to the API.
CORS(app)


@app.route('/api', methods=['GET'])
def api():
    return jsonify({
        'question': 'answer'
    })


if __name__ == '__main__':
    app.run(debug=True)
