from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


db = sqlite3.connect("cashier.db")
cr = db.cursor()    
# db.execute("CREATE TABLE invoice(date TEXT, item_name TEXT, price INTEGER)")


@app.route("/", method=['GET','POST'])
def cashier():
    
    if(request.method == 'POST'):
        item = request.form.get('#con')

        cr.execute("INSERT INTO invoice(item) VALUES (?)", item )
        return render_template("index.html")
    else:
        return "hhh"
    
    
    


if(__name__) == "__main__":
    app.run(debug=True, port=7000)