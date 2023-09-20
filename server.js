const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath = req.url;

  // If the root URL (/) is requested, resolve it to index.html
  if (filePath === '/') {
    filePath = '/index.html';
  }

  // Construct the file path and sanitize it to prevent directory traversal attacks
  filePath = path.join(__dirname, 'out', filePath);

  // Check if the requested file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    // Read and serve the file
    fs.createReadStream(filePath).pipe(res);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
