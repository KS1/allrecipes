//        multer example:

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file);
    cb(null, './images')

  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

//file validation
const fileFilter = (req, file,  cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  }
  else{
    //prevent upload
    cb({message: 'Unsopported file format'}, false)
  }
}

const upload = multer({
  storage: storage,
  limits:{fileSize:1024*1024},
  fileFilter: fileFilter
});