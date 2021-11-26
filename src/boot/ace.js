import { boot } from 'quasar/wrappers';

import ace from 'ace-builds';
import 'ace-builds/webpack-resolver';

// ace.config.set(
//   'basePath',
//   '/js/',
// );

export default boot(({ app }) => {
  app.config.globalProperties.$ace = ace;
});

export { ace };
