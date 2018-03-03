const fs = require('fs');
const path = require('path');
module.exports = function(dir, ext, cb) {
  ext = '.' + ext;

  fs.readdir(dir, (err, filenames) => {
    if (err) {
      cb(err);
    } else {
      cb(null, filenames.filter(
        filename => path.extname(filename) === ext
      ));
    }
  })
}
