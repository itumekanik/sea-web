<template>
  <div class="q-pa-xs">
    <!-- <div class="q-gutter-y-md" style="max-width: 600px"> -->
    <div class="q-gutter-y-md">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="bg-grey-1"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="onsoz" label="Önsöz" no-caps />
          <q-tab name="content" label="İçindekiler" no-caps />
          <q-tab name="codes" label="Kodlar ve Sunumlar" no-caps />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="onsoz">
            <!-- <div class="text-h6">Önsöz</div> -->
            <p>
              Sayın Hocam, Prof. Dr. Ahmet Yalçın Aköz, İstanbul Teknik
              Üniversitesi İnşaat Fakültesinde vermekte olduğu bir lisans
              dersinde, Sonlu Elemanlar yazılımlarını kastederek; “Bilgisayar
              programları kapalı birer kutu gibidir. Eğer kutunun içinde neler
              döndüğünü merak ediyorsanız, odama bir ara uğrayın, konuşalım”
              demişti. Henüz toy bir lisans öğrencisi olarak o odanın kapısını
              çaldım ve konuşmamız, tam yirmi üç yıl aralıksız devam etti.
              Rahmetli hocamı saygı ve sevgi ile anıyorum.
            </p>

            <p>
              Bu kitap, İTÜ İnşaat Fakültesinde on-iki dönem boyunca aralıksız
              vermekte olduğum “Finite Element Methods” dersinde edinmiş olduğum
              tecrübeler ışığında, Sonlu Elemanlar konusunun hem öğrenimini hem
              de bir anlamda öğretimini kolaylaştırmak için okuyucuya ve kendime
              sunmuş olduğum bir başlangıç-eser niteliğindedir. Ele alınan
              konular itibari ile hem teorik bilgiler anlamında hem de uygulama
              bakımından eserin doyurucu bir referans kaynak olmasını umut
              ediyorum.
            </p>

            <p>
              Kitabın yazımında, başta Prof. Dr. A. Yalçın Aköz olmak üzere,
              desteklerini ve bilgilerini benden esirgemeyen tüm hocalarıma,
              birlikte çalıştığım meslektaşlarıma, arkadaşlarıma, öğrencilerime
              ve aileme sonsuz teşekkürü bir borç bildiğimi belirtmek isterim.
              Kapak tasarımını yapan Sayın Olgaç Dölek’e ve bölüm
              başlıklarındaki figürleri hazırlayan Sayın Can Eğridere’ye de
              katkılarından ötürü ayrıca teşekkür ederim. Kitabın okuyucunun
              hizmetine sunulmasında katkıda bulunan yayınevi ve dağıtım
              merkezleri yönetici ve çalışanlarına ve kitabı okuyacak olan siz
              değerli okuyuculara sevgi, saygı ve minnetimi içtenlikle
              sunuyorum.
            </p>

            <br />
            MURAT YILMAZ 2021
          </q-tab-panel>

          <q-tab-panel name="content">
            <!-- <div class="text-h6">İçindekiler</div> -->
            <!-- İÇİNDEKİLER -->
            <ul>
              <li><b>1. </b><b>Giriş</b></li>
              <ul>
                <li><b>1.1 </b> Adım adım Sonlu Elemanlar</li>
                <li><b>1.2 </b> Kitapta neler var</li>
              </ul>
            </ul>

            <ul>
              <li>
                <b>2. </b
                ><b>Matematik Modelleme ve Sayısal Yöntemler Üzerine</b>
              </li>
              <ul>
                <li>
                  <b>2.1</b> Matematiksel modellemenin esasları ve sayısal çözüm
                  yöntemlerinin gerekliliği
                </li>
                <li>
                  <b>2.2</b> Zayıf formülasyon: Virtüel yer-değiştime teoremi
                </li>
                <li>
                  <b>2.3</b> Tansör gösteriminden eşdeğer vektör gösterimine
                  geçiş: VoIgt gösterimi
                </li>
                <li>
                  <b>2.4</b> Mühendislik-sabitleri ile Lame-sabitleri arasındaki
                  ilişkiler
                </li>
                <li>
                  <b>2.5</b> Tekil kuvvetlerin virtüel iş denklemine etkisi
                </li>
                <li><b>2.6</b> Düzlem-gerilme problemi</li>
              </ul>
            </ul>

            <ul>
              <li><b>3. </b><b>Sonlu Elemanlar Yönteminin Esasları</b></li>
              <ul>
                <li><b>3.1 </b> Eleman ağının oluşturulması</li>
                <li>
                  <b>3.2 </b> Elemanlardan sistem denklemine geçiş (Birleştirme)
                </li>
                <li><b>3.3 </b> Eleman denklemi</li>
                <li>
                  <b>3.4 </b> Problemin ana bilinmeyenlerinin seçimi ve
                  noktasallaştırma kavramı
                </li>
                <li><b>3.5 </b> Eleman yer-değiştirme alanının seçimi</li>
                <li><b>3.6 </b> Eleman şekil fonksiyonları</li>
                <li><b>3.7 </b> Eleman gerilme ve şekil değiştirme alanları</li>
                <li><b>3.8 </b> Eleman denkleminin oluşturulması</li>
                <li><b>3.9 </b> Sistem denkleminin oluşturulması</li>
                <li>
                  <b>3.10 </b> Sistem denkleminin oluşturulması (Düzlem gerilme
                  elemanı)
                </li>
                <li><b>3.11 </b> Sistem denkleminin çözümü</li>
                <li><b>3.12 </b> Çözümün elamanlar üzerinde gerçeklenmesi</li>
                <li><b>3.13 </b> Örnek uygulama: Düzlem gerilme</li>
                <li>
                  <b>3.14 </b> Virtüel İş Denkleminin açık formlarda ispatı:
                  Düzlem gerilme
                </li>
              </ul>
            </ul>

            <ul>
              <li>
                <b>4. </b
                ><b>Sayısal İntegrasyon, Veri İşleme ve Büyük Sistemler</b>
              </li>
              <ul>
                <li><b>4.1 </b> Master eleman</li>
                <li><b>4.2 </b> Sayısal integrasyon: Gauss yöntemi</li>
                <li>
                  <b>4.3 </b> Eleman denklemlerinin master-eleman ve sayısal
                  integrasyonla elde edilmesi
                </li>
                <li>
                  <b>4.4 </b> Çözüm öncesi ve sonrası verilerin işlenmesi (ing:
                  pre-post processIng)
                  <ul>
                    <li><b>4.4.1 </b> Analiz öncesi veri işleme</li>
                    <li><b>4.4.2 </b> Analiz sonrası veri işleme</li>
                  </ul>
                </li>
                <li>
                  <b>4.5 </b> Seyrek matris içeren denklemlerin hafıza-efektif
                  çözümü
                </li>
              </ul>
            </ul>
          </q-tab-panel>

          <q-tab-panel name="codes">
            <div class="text-h6">Kodlar ve Sunumlar</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'MultiTab',

  setup() {
    const data = reactive({
      tab: 'content',
    });

    const editorInit = () => {};

    return { ...toRefs(data), editorInit };
  },
});
</script>
