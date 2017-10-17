const styleguidist = require('react-styleguidist');
const config = require('./styleguide.verbose.config')
const styleguide = styleguidist(config);

styleguide.server((err, config) => {
   console.log("Verbose should be on? ", config.verbose);

  if (err) {
    console.log(err);
  }
  else {
    console.log('Listening at http://' + config.serverHost + ':' + config.serverPort);
  }
});
