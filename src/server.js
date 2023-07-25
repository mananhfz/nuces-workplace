const app = require('./config/expressConfig');
const users = require('./controller/registerController.js');

users.getUserInfo("eqan");

const PORT = process.env.PORT || 8080;

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

app.listen(PORT, console.log(`Server started on port ${PORT}`));