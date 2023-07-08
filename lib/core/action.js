const log = require('../utils/log')
const { promisify } = require('util')
const downloadRepe = promisify(require('download-git-repo'))
const ternimal = require('../utils/terminal')
const { vueGitRepo } = require('../config/repo_config')

const createProject = async (project, otherArg) => {
	// 1. 提示信息
	log.hint('正在帮你创建项目, 请稍等片刻')

	// 2. git clone
	await downloadRepe(vueGitRepo, project, {
		clone: true
	})

	log.hint('clone成功')

	// 3. 在 child_process 中执行 npm install
	const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
	await ternimal.spawn(npm, ['install'], { cwd: `./${project}` })

	// 运行项目
	ternimal.spawn(npm, ['run', 'dev'], { cwd: `./${project}` })
}

module.exports = {
	createProject
}
