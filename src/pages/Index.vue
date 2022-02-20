<template>
  <q-page class="">
    <div class="row justify-left">
      <div class="col-xs-12 col-md-4">
        <book />
      </div>
      <div class="col-xs-12 col-md-8">
        <multi-tab />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import MultiTab from 'components/MultiTab';
import Book from 'components/Book';

export default defineComponent({
  name: 'PageIndex',

  components: {
    MultiTab,
    Book,
  },

  setup() {
    const data = reactive({
      stars: 5,
    });

    const editorInit = () => {};

    return { ...toRefs(data), editorInit };
  },
});
</script>

<style lang="sass" scoped>
// .my-card
//   width: 100%
//   max-width: 500px
</style>
