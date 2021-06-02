

module.exports = (app) => {
    const user = require("./controllers/Users");
    app.get("/", user.index);
    app.get("/welcome", user.welcome);
    app.get("/register", user.create);
    app.get("/login_process", user.login_process);
    app.get("/logoff", user.logoff);
}