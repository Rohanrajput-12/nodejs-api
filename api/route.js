
const multer = require('multer');

var storage = multer.diskStorage({
    destination:'user_img/',
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})
const upload = multer({ storage: storage });

module.exports = (app) => {
    const user = require('./controller.js');

     app.get('/', function (req, res) {
        res.sendFile(__dirname+'/index.html');
        });

      // Create a new user
      app.post('/new_user',upload.single('photo'), user.create);




}