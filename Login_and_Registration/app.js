const express = require('express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use( session({
    secret: "Keimoto",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 },
}));

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//test view lang po ito
// app.get('/', (req, res) => {
//     res.render('index');
// })

require("./routes")(app);

app.listen(7000, () => {
    console.log("Server running on port 7000");
});