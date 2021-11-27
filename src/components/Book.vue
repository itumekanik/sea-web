<template>
  <!-- <div class="q-pa-md row items-start q-gutter-md"> -->
  <div class="q-pa-xs row items-start q-gutter-md">
    <!-- <q-card class="my-card" flat bordered style="width: 500px"> -->
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-12 flex flex-center">
          <q-img
            @click="BUY"
            class="rounded-borders"
            src="~assets/img/book1_kapak.jpeg"
            style="cursor: pointer"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="shopping_cart" />
        <q-btn flat color="primary" @click="BUY"> Satın Al </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'Book',

  setup() {
    const data = reactive({
      stars: 5,
    });

    const BUY = () => {
      openURL(
        'https://www.birsenyayinevi.com/yapi-muhendisligi-problemlerinde-sap2000-uygulamalari',
        null, // in this example we don't care about the rejectFn()

        // this is the windowFeatures Object param:
        // {
        //   noopener: true, // this is set by default for security purposes
        //   // but it can be disabled if specified with a Boolean false value
        //   menubar: true,
        //   toolbar: true,
        //   noreferrer: true,
        //   // .....any other window features
        // },
      );
    };

    return { ...toRefs(data), BUY };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
