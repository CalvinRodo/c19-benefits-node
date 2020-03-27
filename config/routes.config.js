// 1) add your route(s) here ⬇️
const routes = [
  { name: 'start', path: { en: '/start', fr: '/debut' } },
  { name: 'personal', path: { en: '/personal', fr: '/personnel' } },
  { name: 'confirmation', path: '/confirmation' },
  { name: 'result-ei-sickness', path: { en: '/result-ei-sickness', fr: '/result-ei-sickness'}},
  { name: 'result-ccb-and-gst', path: { en: '/result-ccb-and-gst', fr: '/result-ccb-and-gst'}},
  
]

const locales = ['en', 'fr']

// note: you can define and export a custom configRoutes function here
// see route.helpers.js which is where the default one is defined
// if configRoutes is defined here it will be used in pacle of the default

module.exports = {
  routes,
  locales,
}
