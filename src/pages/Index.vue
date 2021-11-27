<template>
  <q-page class="flex">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" flat bordered style="width: 500px">
        <q-card-section horizontal>
          <q-card-section class="q-pt-xs">
            <!-- <div class="text-overline">Dr. Murat YILMAZ</div> -->
            <div class="text-h5 q-mt-sm q-mb-xs">Sonlu Elemanlar Analizi</div>
            <div class="text-caption text-grey">
              Teori ve Python Uygulamaları <br />
              Katı Mekaniğinde Doğrusal ve Statik Çözümlemeler
            </div>
          </q-card-section>

          <q-card-section class="col-9 flex flex-center">
            <q-img class="rounded-borders" src="~assets/img/book1_kapak.jpeg" />
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="event" />
          <!-- <q-btn flat> 7:30PM </q-btn> -->
          <q-btn flat color="primary"> Satın Al </q-btn>
        </q-card-actions>
      </q-card>

      <!-- <q-card class="my-card">
        <q-img src="~assets/img/book1_kapak.jpeg" />

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Cafe Basilico</div>
            <div
              class="
                col-auto
                text-grey text-caption
                q-pt-md
                row
                no-wrap
                items-center
              "
            >
              <q-icon name="place" />
              250 ft
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">$・Italian, Cafe</div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="save" />
          <q-icon name="github"></q-icon>
          <q-btn flat color="primary"> Satın Al </q-btn>
        </q-card-actions>
      </q-card> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
// import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',

  setup() {
    const data = reactive({
      stars: 4,
    });

    const editorInit = () => {};

    return { ...toRefs(data), editorInit };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px
</style>
