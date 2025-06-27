
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
    "redirectTo": "/FE-BHC-ADMIN/admin-dashboard",
    "route": "/FE-BHC-ADMIN/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 857, hash: 'dd1e4f6fa8f854260699ec27d7c9f148ab15021e01b4a8a8e3ec8eb3f69fd35e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '8282c1f7e39826f6419cc9be58a869fc83e347497a60ab2494fb5a913db6157d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12141, hash: '96b95ac0477634461c7feecbe39e17c9faddf3380f865f5f7c422763fded93e8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'faculty/index.html': {size: 38671, hash: '0dace1502cd8a7f741dd146e8d5957f1626edc5637059799b10ea1aed93fc27b', text: () => import('./assets-chunks/faculty_index_html.mjs').then(m => m.default)},
    'admin-dashboard/audit/index.html': {size: 46555, hash: 'f1f793294d78d5298993f55ba70e2cc3d259055b08b90e63534db8eb70a3ca1d', text: () => import('./assets-chunks/admin-dashboard_audit_index_html.mjs').then(m => m.default)},
    'admin-dashboard/settings/index.html': {size: 52478, hash: '6d9850a52d5ea95c26857506590a0d6f76772ff6e5474e93dcfe5ecb742fe7f9', text: () => import('./assets-chunks/admin-dashboard_settings_index_html.mjs').then(m => m.default)},
    'students/index.html': {size: 38516, hash: '7444f6b4c7504b3ad61eda8498cb3138fb6071084839681569ae90eee9a632cf', text: () => import('./assets-chunks/students_index_html.mjs').then(m => m.default)},
    'admin-dashboard/users/index.html': {size: 44662, hash: '6b7ac425da35a398ea93f2e479aeb09c698742da3c10543774fcf30a39129188', text: () => import('./assets-chunks/admin-dashboard_users_index_html.mjs').then(m => m.default)},
    'admin-dashboard/overview/index.html': {size: 69060, hash: '0a23d54bd5b7a69c873c23e391a4b6e84518eabc12560315df1eee3fbc644db7', text: () => import('./assets-chunks/admin-dashboard_overview_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 12141, hash: '96b95ac0477634461c7feecbe39e17c9faddf3380f865f5f7c422763fded93e8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-IY6XNZSL.css': {size: 412, hash: 'ZYduHRkiNDg', text: () => import('./assets-chunks/styles-IY6XNZSL_css.mjs').then(m => m.default)}
  },
};
