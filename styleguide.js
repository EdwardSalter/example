const styleguidist = require('react-styleguidist');
const styleguide = styleguidist({
	verbose: true
});

styleguide.server((err, config) => {
   console.log("Verbose should be on? ", config.verbose);
	
  if (err) {
    console.log(err);
  }
  else {
    console.log('Listening at http://' + config.serverHost + ':' + config.serverPort);
  }
});