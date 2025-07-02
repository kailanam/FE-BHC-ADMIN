
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FE-BHC-ADMIN/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/FE-BHC-ADMIN/admin-dashboard/overview",
    "route": "/FE-BHC-ADMIN/admin-dashboard"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/admin-dashboard/overview"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/admin-dashboard/users"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/admin-dashboard/settings"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/admin-dashboard/audit"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/faculty"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/students"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/classlist-management"
  },
  {
    "renderMode": 2,
    "route": "/FE-BHC-ADMIN/faculty-evalscore"
  },
  {
    "renderMode": 2,
    "redirectTo": "/FE-BHC-ADMIN/admin-dashboard",
    "route": "/FE-BHC-ADMIN/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 857, hash: '43e7b9f76e0c0e4c187d80ff77d1338423e980698ef8c0030cf2f83a94edc873', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '99e0dbcb27e9e3c980f531c0f39e18d7a52389627f650e59c0bfc2646d3413cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12258, hash: 'f17c6cb968c1d16bab4520b2ec323ff610cc9a6efc6272e9d1419f313c476dbc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'admin-dashboard/overview/index.html': {size: 40243, hash: 'cca54f99f2a5ff8156e45e55bfc25cb4556c555f1a4ece699f77d84564bf385f', text: () => import('./assets-chunks/admin-dashboard_overview_index_html.mjs').then(m => m.default)},
    'admin-dashboard/settings/index.html': {size: 40243, hash: 'cca54f99f2a5ff8156e45e55bfc25cb4556c555f1a4ece699f77d84564bf385f', text: () => import('./assets-chunks/admin-dashboard_settings_index_html.mjs').then(m => m.default)},
    'faculty/index.html': {size: 39500, hash: '81d3200a59c4e3ff1a87ecda9f97a19806537ba8d31923b7a3687ae23000afce', text: () => import('./assets-chunks/faculty_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12258, hash: 'f17c6cb968c1d16bab4520b2ec323ff610cc9a6efc6272e9d1419f313c476dbc', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin-dashboard/users/index.html': {size: 40243, hash: 'e9016ef7fa2b575cd8ef2ed4fa7a4e0ca31779ffa1e122fd06a6a35fc14ffb6f', text: () => import('./assets-chunks/admin-dashboard_users_index_html.mjs').then(m => m.default)},
    'classlist-management/index.html': {size: 47914, hash: '0ad8570b1df6b28c952f64704dc2ed4559ca0dae002002bbf8fa8f1e653bd76c', text: () => import('./assets-chunks/classlist-management_index_html.mjs').then(m => m.default)},
    'admin-dashboard/audit/index.html': {size: 40243, hash: 'cca54f99f2a5ff8156e45e55bfc25cb4556c555f1a4ece699f77d84564bf385f', text: () => import('./assets-chunks/admin-dashboard_audit_index_html.mjs').then(m => m.default)},
    'students/index.html': {size: 39346, hash: 'c07f285486e92bc3aee2fe356770fdeca0e2d7ddaa79bf37b85e76d1368090e1', text: () => import('./assets-chunks/students_index_html.mjs').then(m => m.default)},
    'faculty-evalscore/index.html': {size: 48223, hash: 'f42ed2d1c81a2b609df776bdd06df468796b9907dd6474e1766956ffa1f28895', text: () => import('./assets-chunks/faculty-evalscore_index_html.mjs').then(m => m.default)},
    'styles-IY6XNZSL.css': {size: 412, hash: 'ZYduHRkiNDg', text: () => import('./assets-chunks/styles-IY6XNZSL_css.mjs').then(m => m.default)}
  },
};
