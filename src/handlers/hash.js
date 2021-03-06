/**
 * @fileOverview Generates the manifest hash
 * @name hash.js<handlers>
 * @author Travis Crist
 */

// TODO: replace import with inclusion of public `codius-manifest` manifest package
const { hashManifest } = require('codius-manifest')
const fse = require('fs-extra')

async function hash ({ manifest }) {
  const manifestField = (await fse.readJson(manifest)).manifest
  console.log(hashManifest(manifestField))
}

module.exports = {
  hash
}
