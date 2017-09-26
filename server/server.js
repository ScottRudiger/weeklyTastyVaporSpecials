const app = require('./server-config.js');

const port = process.env.PORT || 8000;

module.exports = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
