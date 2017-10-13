## Stlyeguide run from the CLI - Working

```bash
$ npm run styleguide:cli

> styleguidetest@0.1.0 styleguide:cli C:\Development\Other\styleguidetest
> styleguidist server

You can now view style guide in the browser.

Local:            http://localhost:6060/

On your network:  http://10.0.75.1:6060/

Compiled successfully!
```


## Stlyeguide run from the CLI with verbose flag - Working

```bash
$ npm run styleguide:cli:verbose
...
    global: true,
    Buffer: true,
    setImmediate: true,
    __filename: 'mock',
    __dirname: 'mock'
  },
  cache: true,
  context: 'C:\Development\Other\styleguidetest',
  target: 'web',
  resolveLoader: {
    unsafeCache: true,
    mainFields: [
      'loader',
      'main'
    ],
    extensions: [
      '.js',
      '.json'
    ],
    mainFiles: [
      'index'
    ],
    cacheWithContext: false
  }
}

You can now view style guide in the browser.

Local:            http://localhost:6060/

On your network:  http://10.0.75.1:6060/

Loading components:

Compiled successfully!
```


## Stlyeguide run from the CLI with verbose enabled in config - Working

```bash
$ npm run styleguide:cli:config
...
    __dirname: 'mock'
  },
  cache: true,
  context: 'C:\Development\Other\styleguidetest',
  target: 'web',
  resolveLoader: {
    unsafeCache: true,
    mainFields: [
      'loader',
      'main'
    ],
    extensions: [
      '.js',
      '.json'
    ],
    mainFiles: [
      'index'
    ],
    cacheWithContext: false
  }
}

You can now view style guide in the browser.

Local:            http://localhost:6060/

On your network:  http://10.0.75.1:6060/

Loading components:

Compiled successfully!
```


## Styleguide run the node API - Broken
When run using the following script (styleguide.js):
```js
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
```

no output is received other than the log statements from the styleguide.js.


```bash
$ npm run styleguide:node

> styleguidetest@0.1.0 styleguide:node C:\Development\Other\styleguidetest
> node styleguide.js

Verbose should be on?  true
Listening at http://0.0.0.0:6060
```
