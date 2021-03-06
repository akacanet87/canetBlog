const express = require('express')
const consola = require('consola')
const nocache = require('nocache')

const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')

console.log('config', config)

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nocache())
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, '0.0.0.0')
  consola.ready({
    message: `Server listening on http://0.0.0.0:${port}`,
    badge: true,
  })
}

start()
