const app = require('express')();
const fs = require('fs');
const gaze = require('gaze');
const tinylr = require('tiny-lr');
const remarkable = require('remarkable');
const md = new remarkable();

const PORT = 35729;

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
        <script src="http://localhost:${PORT}/livereload.js"></script>
      </body>
    </html>
  `);
});

app.listen(5000);

const server = tinylr();
server.listen(PORT, function() {
  console.log('Livereload listening on %s ...', PORT);
})

// gaze watches some specified files and triggers a callback when they change.
gaze('docs/**/*', function () {
  // Trigger on all kinds of file changes - modified/added/deleted.
  this.on('all', function () {
    // Notify LiveReload clients that there's a change.
    // Typically, LiveReload will only refresh the changed paths.
    // Hence we use / here so that the clients are informed that
    // the root has changed, so they will do a full-page refresh.
    server.notifyClients(['/']);
  });
});
