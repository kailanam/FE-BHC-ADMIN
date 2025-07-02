
export default {
  basePath: '/FE-BHC-ADMIN',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
