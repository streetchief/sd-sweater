#!/usr/bin/env node
const yargs = require("yargs/yargs");

/**
 * Note: hideBin is a shorthand for process.argv.slice(2).
 * It has the benefit that it takes into account variations in some environments, e.g., Electron.
 */
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .usage(`Usage: ./$0 -c [city] -s [state]`)
  .usage(`For a city with spaces: ./$0 -c "[city]" -s [state]`)
  .option(`city`, {
    alias: `c`,
    describe: `city to check`,
    default: `new york`,
    demandOption: true,
  })
  .option(`state`, {
    alias: `s`,
    describe: `two letter state code to check, e.g. NY`,
    default: `NY`,
    demandOption: true,
  })
  .help()
  .parse();