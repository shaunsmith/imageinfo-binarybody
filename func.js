const fdk = require('@fnproject/fdk');
const im = require('imagemagick');
const fs = require('fs');
const tmp = require('tmp');

fdk.handle(extractDimensions, { inputMode: 'buffer' });

function extractDimensions(buffer, ctx) {
  return new Promise((resolve, reject) => {
    tmp.tmpName((err, tmpFile) => {
      if (err) throw err;
      fs.writeFile(tmpFile, buffer, (err) => {
        if (err) throw err;
        im.identify(['-format', '{"width": %w, "height": %h}', tmpFile],
          (err, output) => {
            if (err) {
              reject(err);
            } else {
              resolve(JSON.parse(output));
            }
          }
        );
      });
    });
  });
}
