from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/add', methods=['POST'])
def add_numbers():
    request_data = request.get_json()
    num1 = request_data.get('num1', 0)
    num2 = request_data.get('num2', 0)

    result = int(num1) + int(num2)

    return jsonify(result=result)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)