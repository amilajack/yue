#!/usr/bin/env node

// Copyright 2016 Cheng Zhao. All rights reserved.
// Use of this source code is governed by the MIT license that can be
// found in the LICENSE file.

const {gn, execSync} = require('./common')

if (process.platform !== 'win32') {
  execSync('python tools/clang/scripts/update.py')
}

execSync('git submodule sync --recursive')
execSync('git submodule update --init --recursive')
execSync(`${gn} gen out/Default`)