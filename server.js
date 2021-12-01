const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');



// //        multer example:

// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     console.log(file);
//     cb(null, './images')

//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + '-' + file.originalname)
//   }
// });

// //file validation

// const fileFilter = (req, file,  cb) => {
//   if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//     cb(null, true)
//   }
//   else{
//     //prevent upload

//     cb({message: 'Unsopported file format'}, false)
//   }
// }

// const upload = multer({
//   storage: storage,
//   limits:{fileSize:1024*1024},
//   fileFilter: fileFilter
// });

// multer option


// app.get("/upload", (req, res) =>{
//   res.render("Uploaded")
// });

// app.post("/upload", upload.single("image"), (req, res) =>{
//   res.send("Image Uploaded")
// });

// app.use('/upload-images', upload.array('image'), async (req, res) => {

//   const uploader = async (path) => await cloudinary.uploads(path, "Images")

//   if (req.method === 'POST') {
//     const urls = []
//     const files = req.files

//     for (const file of files) {
//       const { path } = file
//       const newPath = await uploader(path)

//       urls.push(newPath)

//       fs.unlinkSync(path)
//     }

//     res.status(200).json({
//       message: 'Images uploaded succesfully',
//       data: urls
//     })
//   } else{
//     res.status(405).json({
//       err:"Images not uploaded succesfully"
//     })
//   }
// })

// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  // Starts the server to begin listening
  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  })
});

