const styleguidist = require('react-styleguidist');
const config = require('./styleguide.verbose.config')
const styleguide = styleguidist(config);
const chalk = require('chalk');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');

const compiler = styleguide.server((err, config) => {
   console.log("Verbose should be on? ", config.verbose);

  if (err) {
    console.log(err);
  }
  else {
    console.log('Listening at http://' + config.serverHost + ':' + config.serverPort);
  }
});

// Show message when Webpack is recompiling the bundle
compiler.plugin('invalid', function() {
  logger.info('Compiling…');
});

// Custom error reporting
compiler.plugin('done', function(stats) {
  const messages = formatWebpackMessages(stats.toJson({}, true));

  if (!messages.errors.length && !messages.warnings.length) {
    logger.info(chalk.green('Compiled successfully!'));
  }

  printAllErrorsAndWarnings(messages, stats.compilation);
});




function printErrors(header, errors, originalErrors, printer) {
	console.error(printer(header));
	const messages = argv.verbose ? originalErrors : errors;
	messages.forEach(message => {
		console.error(message.message || message);
	});
}

function printAllErrorsAndWarnings(messages, compilation) {
	// If errors exist, only show errors.
	if (messages.errors.length) {
		printAllErrors(messages.errors, compilation.errors);
		return true;
	}

	// Show warnings if no errors were found.
	if (messages.warnings.length) {
		printAllWarnings(messages.warnings, compilation.warnings);
	}

	return false;
}

function printAllErrors(errors, originalErrors) {
	printStyleguidistError(errors);
	printNoLoaderError(errors);
	printErrors('Failed to compile.', errors, originalErrors, chalk.red);
}

function printAllWarnings(warnings, originalWarnings) {
	printErrors('Compiled with warnings.', warnings, originalWarnings, chalk.yellow);
}

function printErrorWithLink(message, linkTitle, linkUrl) {
	console.error(`${chalk.bold.red(message)}\n\n${linkTitle}\n${chalk.underline(linkUrl)}\n`);
}


function printNoLoaderError(errors) {
	const noLoaderError = errors.find(message =>
		message.includes('You may need an appropriate loader')
	);
	if (!noLoaderError) {
		return;
	}

	printErrorWithLink(
		noLoaderError,
		'Learn how to add webpack loaders to your style guide:'
	);
	process.exit(1);
}

function printStyleguidistError(errors) {
	const styleguidistError = errors.find(message =>
		message.includes('Module build failed: Error: Styleguidist:')
	);
	if (!styleguidistError) {
		return;
	}

	const m = styleguidistError.match(/Styleguidist: (.*?)\n/);
	printErrorWithLink(m[1], 'Learn how to configure your style guide:', consts.DOCS_CONFIG);
	process.exit(1);
}
