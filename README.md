# funky-lib

[![Build Status](https://travis-ci.com/stygian91/funky-lib.svg?branch=master)](https://travis-ci.com/stygian91/funky-lib)
[![Coverage Status](https://coveralls.io/repos/github/stygian91/funky-lib/badge.svg)](https://coveralls.io/github/stygian91/funky-lib)

A FUNctional libary.

> Hey, this looks like https://github.com/ramda/ramda.

Yup, this thing started as an exercise. Most of the functions have the same signatures, there are some implementation differences. Most notably the functions that have a native equivalent are usually just wrapped so you can pass all arguments to them (although the arguments are always ordered in such a way that the data to be operated on is last).

## Test

`npm run test` - runs all tests once

`npm run test:watch` - runs jest in 'watch' mode which will run only tests on affected files

## Build

`npm run build` - builds the library as CJS and ES (preset env)
