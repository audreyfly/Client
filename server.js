import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import path from 'path';

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = "";

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await user.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await user.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  res.json(passOk);
  if (passOk) {
    jwt.sign({ username: userDoc.id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie(token, 'token').json('ok');
    });
  } else {
    res.status(400).json("Wrong Credentials");
  }
});

app.get('/profile', (req, res) => {
  const token = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.cookie('info').json('ok');
  });
});

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, './react-ui/build/index.html'));
});

app.post('/post', uploadMIddleware.single('file'), (req, res) => {
  const { originalname } = req.file;
  res.json({ files: req.file });
});

app.use(express.static(path.join(__dirname, "build")));

  
   
  
  






app.listen(5000)