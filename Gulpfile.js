const gulp = require('gulp');
const runSequence = require('run-sequence');

// incude external tasks
require('./gulp');

// task runners
gulp
	.task('default', () => {
		runSequence(
			'clean',
			['build'],
			['connect', 'watch']
		);
	})
	.task('build', ['templates', 'styles', 'js'])
  .task('js', () => {
    runSequence('clean:js', 'js:babel', 'js:runner')
  })
	.task('styles', () => {
		runSequence(
			['compass', 'includes:css'],
			'clean:css'
		);
	})
	.task('test', ['tests']);