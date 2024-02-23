from flask import Flask
from flask import render_template
import mimetypes

print(mimetypes.guess_type("notExists.js"))

app = Flask(__name__, static_folder="")
#app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

home_button = (
        """
        <div>
            <a href="/">Home</a>
        </div>
        """
        )

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/page1")
def page1():
    return "Page 1" + home_button

@app.route("/page2")
def page2():
    return "Page 2" + home_button


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=9080, debug=True)
