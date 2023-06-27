const { program } = require('commander')
const { createProject } = require('./action')

const registryCommand = () => {
	program
		.command('create <project> [otherArgs...]')
		.description('clone a repository into a newly created directory')
		.action(createProject)
}

module.exports = registryCommand
