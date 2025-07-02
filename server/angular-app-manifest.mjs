
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
    'index.csr.html': {size: 857, hash: '900504e952ee90c503d335cb6fc3b36c50d76a1062168819662964957101131f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: 'a6900ab1a331df734c867241ddb47d9cebd31d5b435ead456cdc4f2d5a0f3a12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12141, hash: 'a798c71f443ef0b933b6804b5ff19827e16c6956c5b1bfc95f9da72e53aa2a26', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faculty-evalscore/index.html': {size: 46337, hash: '7f332da49d6b64dbe5db402e28fccdc74548b53cc54dd396c6543b78eed80ec0', text: () => import('./assets-chunks/faculty-evalscore_index_html.mjs').then(m => m.default)},
    'admin-dashboard/settings/index.html': {size: 40243, hash: '548ad338282cc3face0c11be91dfb632cb16089b9b2380973eded196a2af19c3', text: () => import('./assets-chunks/admin-dashboard_settings_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12141, hash: 'a798c71f443ef0b933b6804b5ff19827e16c6956c5b1bfc95f9da72e53aa2a26', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin-dashboard/users/index.html': {size: 40243, hash: 'e8e874fba832c2fda786080cb88eaff4708cd538593b4a602262963239b0aa1d', text: () => import('./assets-chunks/admin-dashboard_users_index_html.mjs').then(m => m.default)},
    'faculty/index.html': {size: 39371, hash: 'e8b740f42fdc028a4f280efd867bea365ad5b5269602bb6251fc0cd88b772234', text: () => import('./assets-chunks/faculty_index_html.mjs').then(m => m.default)},
    'classlist-management/index.html': {size: 47793, hash: 'a4feeb9630bbb57b6629625b8e024a436a58301bb5d57a5f20649fd758537825', text: () => import('./assets-chunks/classlist-management_index_html.mjs').then(m => m.default)},
    'admin-dashboard/overview/index.html': {size: 40243, hash: 'e8e874fba832c2fda786080cb88eaff4708cd538593b4a602262963239b0aa1d', text: () => import('./assets-chunks/admin-dashboard_overview_index_html.mjs').then(m => m.default)},
    'students/index.html': {size: 39216, hash: 'e1ec63e2f77eec4c73368dc17ad375f64374ba37667b6b338ae5e12a98474253', text: () => import('./assets-chunks/students_index_html.mjs').then(m => m.default)},
    'admin-dashboard/audit/index.html': {size: 40243, hash: 'e8e874fba832c2fda786080cb88eaff4708cd538593b4a602262963239b0aa1d', text: () => import('./assets-chunks/admin-dashboard_audit_index_html.mjs').then(m => m.default)},
    'styles-IY6XNZSL.css': {size: 412, hash: 'ZYduHRkiNDg', text: () => import('./assets-chunks/styles-IY6XNZSL_css.mjs').then(m => m.default)}
  },
};
