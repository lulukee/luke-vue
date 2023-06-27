const cp = require('child_process')

const spawnCommand = (...args) => {
	return new Promise((resolve, reject) => {
		const childProcess = cp.spawn(...args)
		childProcess.stdout.on('data', function (chunk) {
			console.log(chunk.toString())
		})
		childProcess.stderr.on('data', function (chunk) {
			console.log(chunk.toString())
		})
		childProcess.on('close', () => {
			resolve()
		})
	})
}

module.exports = {
	spawn: spawnCommand
}
22222
