const app = require('express')();
const fs = require('fs');
const remarkable = require('remarkable');
const md = new remarkable();

// ----- Allow CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('*', function(req, res) {
  const path = req.originalUrl;
  const file = fs.readFileSync(`docs${path.replace('.html', '')}.md`);
  const convertedFile = md.render(String(file));
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!doctype html>
    <html>
      <head>
      </head>
      <body>
        ${convertedFile}
      </body>
    </html>
  `);
});

app.listen(5000);
