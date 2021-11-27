<template>
  <q-page class="flex">
    <v-ace-editor
      v-model:value="content"
      lang="python"
      @init="editorInit"
      theme="Xcode"
      style="width: 100%"
    />
  </q-page>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

import { VAceEditor } from 'vue3-ace-editor';
// import 'ace-builds/webpack-resolver';
// import 'ace-builds/src-noconflict/mode-python';

// const code = require.context('../assets/codes/', false, /\.txt$/);

// console.log(code);

// const code = () => {
//   const filename = 'code1_python';
//   const codes = require.context(
//     'src/assets/codes/',
//     false,
//     /\.txt$/,
//   );
//   return codes(`./${filename}.txt`);
// };

// const code = 'import';

// import txt from 'raw-loader!../assets/codes/code1_python.txt';

const txt = require('raw-loader!src/assets/codes/code1_python.txt').default;

// console.log(txt);

export default defineComponent({
  name: 'IndexCode',
  components: {
    VAceEditor,
  },
  setup() {
    const data = reactive({
      content: txt,
    });

    const editorInit = () => {};

    return { ...toRefs(data), editorInit };
  },
});
</script>
