#!/usr/bin/env node
const { program } = require('commander')
const registryOptions = require('../core/options')

// 解析 version
const pkg = require('../../package.json')
program.version(pkg.version)

// 增加选项
registryOptions()

// 增加子命令

program.parse(process.argv)
