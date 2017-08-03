import compression from 'compression';
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
app.use(compression());
app.enable('trust proxy');

app.use((req, res, next) => {
  if (req.secure || req.headers.host === `localhost:${port}`) {
    next();
  } else {
    res.redirect(`https://${req.headers.host}${req.url}`);
  }
});

app.use(express.static('./build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`App and API is live at http://localhost:${port}`);
});
