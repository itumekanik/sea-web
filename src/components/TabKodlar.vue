<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-card class="my-card">
        <!-- <q-img src="~assets/img/book1_kapak.jpeg" /> -->

        <q-card-section> </q-card-section>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="laptop"
            class="absolute"
            flat
            style="top: 0; right: 7px; transform: translateY(-10%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Kodlar</div>
            <div
              class="
                col-auto
                text-caption text-bold
                q-pt-md q-pr-xs
                row
                no-wrap
                items-center
              "
            >
              <!-- <q-icon name="place" /> -->
              İndir
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="18px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>Bölüm 1</q-item-label>
                <q-item-label caption lines="2"
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>5 min ago</q-item-label>
                <q-icon name="star" color="yellow" />
              </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>Voted!</q-item-label>
              </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-badge color="teal" label="10k" />
              </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>2 min ago</q-item-label>
                <div class="text-orange">
                  <q-icon name="star" />
                  <q-icon name="star" />
                  <q-icon name="star" />
                </div>
              </q-item-section>
            </q-item>

            <q-separator spaced inset />

            <q-item>
              <q-item-section>
                <q-item-label>Single line item</q-item-label>
                <q-item-label caption
                  >Secondary line text. Lorem ipsum dolor sit amet, consectetur
                  adipiscit elit.</q-item-label
                >
              </q-item-section>

              <q-item-section side top>
                <q-item-label caption>meta</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <!-- <div class="text-subtitle1">$・Italian, Cafe</div>
          <div class="text-caption text-grey">
            Small plates, salads & sandwiches in an intimate setting.
          </div> -->
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="save" />
          <!-- <q-icon name="github"></q-icon> -->
          <q-btn flat color="primary"> Github </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'TabKodlae',

  setup() {
    const data = reactive({
    });

    const editorInit = () => {};

    return { ...toRefs(data), editorInit };
  },
});
</script>
