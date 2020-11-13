const fs = require('fs');
if (!fs.existsSync('./src/interfaces/generated-types.tsx'))
  throw new Error(
    'You have not generated the files needed for the connection to the backend, please run "npm install" again'
  );