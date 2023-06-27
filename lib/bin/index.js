#!/usr/bin/env node
const { program } = require('commander')
const registryOptions = require('../core/options')
const registryCommand = require('../core/command')

// 解析 version
const pkg = require('../../package.json')
program.version(pkg.version)

// 增加选项
registryOptions()

// 增加子命令
registryCommand()

program.parse(process.argv)
