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
          <!-- <q-tab name="codes" label="Kodlar ve Sunumlar" no-caps /> -->
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
              çaldım ve konuşmamız tam yirmi üç yıl aralıksız devam etti.
              Rahmetli hocamı saygı ve sevgi ile anıyorum.
            </p>

            <p>
              İTÜ İnşaat Fakültesinde on iki dönem boyunca vermekte olduğum
              “Finite Element Methods” dersinde edinmiş olduğum tecrübeler
              ışığında hazırlanmış olan bu kitap, Sonlu Elemanlar konusunun hem
              öğrenimini hem de öğretimini kolaylaştırmak amacıyla, okuyucuya ve
              kendime sunmuş olduğum bir başlangıç-eser niteliğindedir. Eserin,
              ele alınan konular itibari ile hem teorik bilgiler anlamında hem
              de uygulama bakımından doyurucu bir referans kaynak olmasını umut
              ediyorum.
            </p>

            <p>
              Kitabın yazımında, başta Prof. Dr. A. Yalçın Aköz olmak üzere,
              desteklerini ve bilgilerini benden esirgemeyen tüm hocalarıma,
              birlikte çalıştığım meslektaşlarıma, arkadaşlarıma, öğrencilerime
              ve aileme sonsuz teşekkürü bir borç bildiğimi belirtmek isterim.
              Kapak tasarımındaki katkılarından ötürü Sayın Olgaç Dölek’e ve
              bölüm başlıklarındaki figürleri hazırlayan Sayın Can Eğridere’ye
              de ayrıca teşekkür ederim. Kitabın okuyucunun hizmetine
              sunulmasını mümkün kılan; sponsor firmalar, yayınevi, matbaa ve
              dağıtım merkezlerinin yönetici ve çalışanlarına ve tabii ki kitabı
              okuyacak olan siz değerli okuyuculara sevgi, saygı ve minnetimi
              içtenlikle sunuyorum.
            </p>

            <br />
            <p style="text-align:right;">MURAT YILMAZ / Şubat 2022</p>

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

            <ul>
              <li><b>5. </b><b>Çubuk Sistemler</b></li>
              <ul>
                <li><b>5.1 </b> Eksenel-Çubuk modeli</li>
                <li><b>5.2 </b> İki boyutlu kafes çubuk modeli</li>
                <li><b>5.3 </b> Burulma Çubuğu Modeli</li>
                <li><b>5.4 </b> Çubuklarda eğilme problemi (kirişler)</li>
                <li><b>5.5 </b> İki boyutlu çerçeve eleman</li>
                <li>
                  <b>5.6 </b> İki boyutlu çerçeve elemana farklı bir bakış açısı
                </li>
                <li>
                  <b>5.7 </b> Eleman uçlarında mafsal (ing: release) olması
                  durumu
                </li>
                <li>
                  <b>5.8 </b> Eleman uçlarında Elastik Bağlantı (Redör) (ing:
                  hinge) durumu
                </li>
                <li><b>5.9 </b> Eğik serbestlik durumu</li>
                <li><b>5.10 </b> Üç boyutlu kiriş eleman</li>
                <li><b>5.11 </b> Üç boyutlu çerçeve eleman</li>
                <li><b>5.12 </b> Üç boyutlu çubuk çerçeve örneği</li>
              </ul>
            </ul>

            <ul>
              <li>
                <b>6. </b
                ><b>Çubuklarda Keyfi Geometrili Kesitlerin Burulma Rijitliği</b>
              </li>
              <ul>
                <li><b>6.1 </b> Saint-Venant Burulması</li>
                <li><b>6.2 </b> Zayıf formun elde edilmesi</li>
                <li><b>6.3 </b> Burulma Elemanı</li>
                <li><b>6.4 </b> Örnek uygulama (Python)</li>
              </ul>
            </ul>

            <ul>
              <li><b>7. </b><b>Lineer-Elastisite Teorisine Özet Bakış</b></li>
              <ul>
                <li><b>7.1 </b> Şekil değiştirme</li>
                <li><b>7.2 </b> Gerilme</li>
                <li><b>7.3 </b> Gerilme-Şekil değiştirme bağıntıları</li>
                <li><b>7.4 </b> Denge denklemleri</li>
                <li><b>7.5 </b> Sıcaklık değişimi etkileri</li>
              </ul>
            </ul>

            <ul>
              <li><b>8. </b><b>Üç Boyutlu Elastisite Elemanları</b></li>
              <ul>
                <li>
                  <b>8.1 </b> Sekiz nodlu Tuğla Eleman fomülasyonu
                  <ul>
                    <li>
                      <b>8.1.1 </b> Uzaysal koordinat dönüşümü (master-eleman)
                    </li>
                    <li>
                      <b>8.1.2 </b> Eleman matris denklem takımının elde
                      edilmesi
                    </li>
                    <li>
                      <b>8.1.3 </b> Dış-sınır yüzey gerilmelerinin integre
                      edilmesi
                    </li>
                    <li><b>8.1.4 </b> Örnek problem ve Python programlaması</li>
                  </ul>
                </li>
                <li>
                  <b>8.2 </b> Dört nodlu Dört-yüzlü Eleman fomülasyonu
                  <ul>
                    <li>
                      <b>8.2.1 </b> Uzaysal koordinat dönüşümü (master-eleman)
                    </li>
                    <li><b>8.2.2 </b> Örnek problem ve Python programlaması</li>
                  </ul>
                </li>
              </ul>
            </ul>

            <ul>
              <li><b>9. </b><b>Programlama ve Sonlu Elemanlar</b></li>
              <ul>
                <li><b>9.1 </b> Programlamanın temel unsurları</li>
                <li><b>9.2 </b> Nesnesel programlama ve Python</li>

                <li>
                  <b>9.3 </b> Koleksiyonlar, Gezinilebilirler, Döngüler ve
                  Python
                </li>
                <li>
                  <b>9.4 </b> Kütüphaneler ve Python
                  <ul>
                    <li><b>9.4.1 </b> numpy</li>
                    <li>
                      <b>9.4.2 </b> scipy ile seyrek matris denklem takımı
                      çözümü
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </q-tab-panel>

          <q-tab-panel name="codes">
            <div class="text-h6">Kodlar ve Sunumlar</div>
            <!-- <q-btn
              round
              dense
              flat
              :ripple="false"
              :icon="fabGithub"
              size="19px"
              class="q-mr-sm"
              no-caps
            /> -->
            <q-item
              clickable
              tag="a"
              target="_blank"
              href="https://github.com/itumekanik/sonlu-elemanlar-analizi"
            >
              <q-item-section avatar>
                <q-btn
                  round
                  dense
                  flat
                  :ripple="false"
                  :icon="fabGithub"
                  size="19px"
                  class="q-mr-sm"
                  no-caps
                />
              </q-item-section>

              <q-item-section>
                <q-item-label
                  >Tüm kodları ve sunumları buraya tıklayarak
                  indirebilirsiniz</q-item-label
                >
                <q-item-label caption>
                  github.com/itumekanik/sonlu-elemanlar-analizi
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';

import { fabGithub } from '@quasar/extras/fontawesome-v5';

export default defineComponent({
  name: 'MultiTab',

  setup() {
    const data = reactive({
      tab: 'content',
    });

    const editorInit = () => {};

    return { ...toRefs(data), editorInit, fabGithub };
  },
});
</script>
