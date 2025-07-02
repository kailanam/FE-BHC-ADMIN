
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/FE-BHC-ADMIN',
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
    'index.csr.html': {size: 856, hash: '2a2a0d699ee8e45ba6db9ca2a3847b5a5dc4fee38e7c54c1f0aaccad29a7be14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 960, hash: '9398dd71e762e9e3944a43d82d0dec077fce03a98951d7f5a63cb0296f0b9041', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12140, hash: '817e8f89dbf8e4ea2b54f262443af1593f6b8a83464baf8447008051f19523e5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'admin-dashboard/overview/index.html': {size: 40242, hash: 'cdd1bd14e4b78024a18486cc845b76abad306eeaba2116b48438f4146b6a1718', text: () => import('./assets-chunks/admin-dashboard_overview_index_html.mjs').then(m => m.default)},
    'admin-dashboard/audit/index.html': {size: 40242, hash: 'cdd1bd14e4b78024a18486cc845b76abad306eeaba2116b48438f4146b6a1718', text: () => import('./assets-chunks/admin-dashboard_audit_index_html.mjs').then(m => m.default)},
    'admin-dashboard/settings/index.html': {size: 40242, hash: 'cdd1bd14e4b78024a18486cc845b76abad306eeaba2116b48438f4146b6a1718', text: () => import('./assets-chunks/admin-dashboard_settings_index_html.mjs').then(m => m.default)},
    'admin-dashboard/users/index.html': {size: 40242, hash: 'cdd1bd14e4b78024a18486cc845b76abad306eeaba2116b48438f4146b6a1718', text: () => import('./assets-chunks/admin-dashboard_users_index_html.mjs').then(m => m.default)},
    'classlist-management/index.html': {size: 47784, hash: 'c0ba44faff88af539c6c45327dd5f98eb9333308e9c72d330038e75851f4f136', text: () => import('./assets-chunks/classlist-management_index_html.mjs').then(m => m.default)},
    'faculty-evalscore/index.html': {size: 46336, hash: 'faeedc79eb8df2a008ef78548b2c895b8922d324fae9bae4894ec6f0ee53f5a4', text: () => import('./assets-chunks/faculty-evalscore_index_html.mjs').then(m => m.default)},
    'students/index.html': {size: 39219, hash: 'b0a023f1a0ed6c71839cad5984c231311b38e33d2956136e1332d3094ba3d062', text: () => import('./assets-chunks/students_index_html.mjs').then(m => m.default)},
    'index.html': {size: 12140, hash: '817e8f89dbf8e4ea2b54f262443af1593f6b8a83464baf8447008051f19523e5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faculty/index.html': {size: 39370, hash: 'c9ea0477092e7e6ab154c66d4fb0b0ddff2fa034e23d1aa01cf606450a3cd475', text: () => import('./assets-chunks/faculty_index_html.mjs').then(m => m.default)},
    'styles-IY6XNZSL.css': {size: 412, hash: 'ZYduHRkiNDg', text: () => import('./assets-chunks/styles-IY6XNZSL_css.mjs').then(m => m.default)}
  },
};
