/**
Tasks - An array of async functions to run. Each function should complete with any number of result values. The result values will be passed as arguments, in order, to the next task.

callback -  A callback to run once all the functions have completed. This will be passed the results of the last task's callback. Invoked with (err, [results]).
*/
function AsyncWaterfall(tasks, done) {
	let i = 0;
	function middle(err, ...args) {
		if (!err && i < tasks.length - 1) {
			tasks[++i](...args, middle);
		} else {
			done(err, ...args);
		}
	}

	tasks[i](middle);
}

AsyncWaterfall(
	[
		function One(callback) {
			console.log("One called with", arguments);
			callback(null, "one", "two");
		},
		function Two(arg1, arg2, callback) {
			console.log("Two called with", arguments);
			// arg1 now equals 'one' and arg2 now equals 'two'
			setTimeout(function () {
				callback(true, "three");
			}, 1500);
		},
		function Three(arg1, callback) {
			console.log("Three called with", arguments);
			// arg1 now equals 'three'
			callback(null, "done");
		},
	],
	function Done(err, result) {
		if (err) {
			console.log("Error!", err);
		} else {
			console.log("Done", result);
		}
	}
);
