(self["webpackChunkbook1"]=self["webpackChunkbook1"]||[]).push([[58],{46058:(l,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>tl});var a=n(83673);const i={class:"row justify-left"},u={class:"col-xs-12 col-md-4"},r={class:"col-xs-12 col-md-8"};function m(l,e,n,m,t,s){const o=(0,a.up)("book"),k=(0,a.up)("multi-tab"),_=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(_,{class:""},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a._)("div",u,[(0,a.Wm)(o)]),(0,a._)("div",r,[(0,a.Wm)(k)])])])),_:1})}var t=n(61959);const s={class:"q-pa-xs"},o={class:"q-gutter-y-md"},k=(0,a._)("p",null," Sayın Hocam, Prof. Dr. Ahmet Yalçın Aköz, İstanbul Teknik Üniversitesi İnşaat Fakültesinde vermekte olduğu bir lisans dersinde, Sonlu Elemanlar yazılımlarını kastederek; “Bilgisayar programları kapalı birer kutu gibidir. Eğer kutunun içinde neler döndüğünü merak ediyorsanız, odama bir ara uğrayın, konuşalım” demişti. Henüz toy bir lisans öğrencisi olarak o odanın kapısını çaldım ve konuşmamız tam yirmi üç yıl aralıksız devam etti. Rahmetli hocamı saygı ve sevgi ile anıyorum. ",-1),_=(0,a._)("p",null," İTÜ İnşaat Fakültesinde on iki dönem boyunca vermekte olduğum “Finite Element Methods” dersinde edinmiş olduğum tecrübeler ışığında hazırlanmış olan bu kitap, Sonlu Elemanlar konusunun hem öğrenimini hem de öğretimini kolaylaştırmak amacıyla, okuyucuya ve kendime sunmuş olduğum bir başlangıç-eser niteliğindedir. Eserin, ele alınan konular itibari ile hem teorik bilgiler anlamında hem de uygulama bakımından doyurucu bir referans kaynak olmasını umut ediyorum. ",-1),b=(0,a._)("p",null," Kitabın yazımında, başta Prof. Dr. A. Yalçın Aköz olmak üzere, desteklerini ve bilgilerini benden esirgemeyen tüm hocalarıma, birlikte çalıştığım meslektaşlarıma, arkadaşlarıma, öğrencilerime ve aileme sonsuz teşekkürü bir borç bildiğimi belirtmek isterim. Kapak tasarımındaki katkılarından ötürü Sayın Olgaç Dölek’e ve bölüm başlıklarındaki figürleri hazırlayan Sayın Can Eğridere’ye de ayrıca teşekkür ederim. Kitabın okuyucunun hizmetine sunulmasını mümkün kılan; sponsor firmalar, yayınevi, matbaa ve dağıtım merkezlerinin yönetici ve çalışanlarına ve tabii ki kitabı okuyacak olan siz değerli okuyuculara sevgi, saygı ve minnetimi içtenlikle sunuyorum. ",-1),d=(0,a._)("br",null,null,-1),c=(0,a._)("p",{style:{"text-align":"right"}},"MURAT YILMAZ / Şubat 2022",-1),y=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"1. "),(0,a._)("b",null,"Giriş")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"1.1 "),(0,a.Uk)(" Adım adım Sonlu Elemanlar")]),(0,a._)("li",null,[(0,a._)("b",null,"1.2 "),(0,a.Uk)(" Kitapta neler var")])])],-1),p=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"2. "),(0,a._)("b",null,"Matematik Modelleme ve Sayısal Yöntemler Üzerine")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"2.1"),(0,a.Uk)(" Matematiksel modellemenin esasları ve sayısal çözüm yöntemlerinin gerekliliği ")]),(0,a._)("li",null,[(0,a._)("b",null,"2.2"),(0,a.Uk)(" Zayıf formülasyon: Virtüel yer-değiştime teoremi ")]),(0,a._)("li",null,[(0,a._)("b",null,"2.3"),(0,a.Uk)(" Tansör gösteriminden eşdeğer vektör gösterimine geçiş: VoIgt gösterimi ")]),(0,a._)("li",null,[(0,a._)("b",null,"2.4"),(0,a.Uk)(" Mühendislik-sabitleri ile Lame-sabitleri arasındaki ilişkiler ")]),(0,a._)("li",null,[(0,a._)("b",null,"2.5"),(0,a.Uk)(" Tekil kuvvetlerin virtüel iş denklemine etkisi ")]),(0,a._)("li",null,[(0,a._)("b",null,"2.6"),(0,a.Uk)(" Düzlem-gerilme problemi")])])],-1),U=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"3. "),(0,a._)("b",null,"Sonlu Elemanlar Yönteminin Esasları")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"3.1 "),(0,a.Uk)(" Eleman ağının oluşturulması")]),(0,a._)("li",null,[(0,a._)("b",null,"3.2 "),(0,a.Uk)(" Elemanlardan sistem denklemine geçiş (Birleştirme) ")]),(0,a._)("li",null,[(0,a._)("b",null,"3.3 "),(0,a.Uk)(" Eleman denklemi")]),(0,a._)("li",null,[(0,a._)("b",null,"3.4 "),(0,a.Uk)(" Problemin ana bilinmeyenlerinin seçimi ve noktasallaştırma kavramı ")]),(0,a._)("li",null,[(0,a._)("b",null,"3.5 "),(0,a.Uk)(" Eleman yer-değiştirme alanının seçimi")]),(0,a._)("li",null,[(0,a._)("b",null,"3.6 "),(0,a.Uk)(" Eleman şekil fonksiyonları")]),(0,a._)("li",null,[(0,a._)("b",null,"3.7 "),(0,a.Uk)(" Eleman gerilme ve şekil değiştirme alanları")]),(0,a._)("li",null,[(0,a._)("b",null,"3.8 "),(0,a.Uk)(" Eleman denkleminin oluşturulması")]),(0,a._)("li",null,[(0,a._)("b",null,"3.9 "),(0,a.Uk)(" Sistem denkleminin oluşturulması")]),(0,a._)("li",null,[(0,a._)("b",null,"3.10 "),(0,a.Uk)(" Sistem denkleminin oluşturulması (Düzlem gerilme elemanı) ")]),(0,a._)("li",null,[(0,a._)("b",null,"3.11 "),(0,a.Uk)(" Sistem denkleminin çözümü")]),(0,a._)("li",null,[(0,a._)("b",null,"3.12 "),(0,a.Uk)(" Çözümün elamanlar üzerinde gerçeklenmesi")]),(0,a._)("li",null,[(0,a._)("b",null,"3.13 "),(0,a.Uk)(" Örnek uygulama: Düzlem gerilme")]),(0,a._)("li",null,[(0,a._)("b",null,"3.14 "),(0,a.Uk)(" Virtüel İş Denkleminin açık formlarda ispatı: Düzlem gerilme ")])])],-1),g=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"4. "),(0,a._)("b",null,"Sayısal İntegrasyon, Veri İşleme ve Büyük Sistemler")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"4.1 "),(0,a.Uk)(" Master eleman")]),(0,a._)("li",null,[(0,a._)("b",null,"4.2 "),(0,a.Uk)(" Sayısal integrasyon: Gauss yöntemi")]),(0,a._)("li",null,[(0,a._)("b",null,"4.3 "),(0,a.Uk)(" Eleman denklemlerinin master-eleman ve sayısal integrasyonla elde edilmesi ")]),(0,a._)("li",null,[(0,a._)("b",null,"4.4 "),(0,a.Uk)(" Çözüm öncesi ve sonrası verilerin işlenmesi (ing: pre-post processIng) "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"4.4.1 "),(0,a.Uk)(" Analiz öncesi veri işleme")]),(0,a._)("li",null,[(0,a._)("b",null,"4.4.2 "),(0,a.Uk)(" Analiz sonrası veri işleme")])])]),(0,a._)("li",null,[(0,a._)("b",null,"4.5 "),(0,a.Uk)(" Seyrek matris içeren denklemlerin hafıza-efektif çözümü ")])])],-1),v=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"5. "),(0,a._)("b",null,"Çubuk Sistemler")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"5.1 "),(0,a.Uk)(" Eksenel-Çubuk modeli")]),(0,a._)("li",null,[(0,a._)("b",null,"5.2 "),(0,a.Uk)(" İki boyutlu kafes çubuk modeli")]),(0,a._)("li",null,[(0,a._)("b",null,"5.3 "),(0,a.Uk)(" Burulma Çubuğu Modeli")]),(0,a._)("li",null,[(0,a._)("b",null,"5.4 "),(0,a.Uk)(" Çubuklarda eğilme problemi (kirişler)")]),(0,a._)("li",null,[(0,a._)("b",null,"5.5 "),(0,a.Uk)(" İki boyutlu çerçeve eleman")]),(0,a._)("li",null,[(0,a._)("b",null,"5.6 "),(0,a.Uk)(" İki boyutlu çerçeve elemana farklı bir bakış açısı ")]),(0,a._)("li",null,[(0,a._)("b",null,"5.7 "),(0,a.Uk)(" Eleman uçlarında mafsal (ing: release) olması durumu ")]),(0,a._)("li",null,[(0,a._)("b",null,"5.8 "),(0,a.Uk)(" Eleman uçlarında Elastik Bağlantı (Redör) (ing: hinge) durumu ")]),(0,a._)("li",null,[(0,a._)("b",null,"5.9 "),(0,a.Uk)(" Eğik serbestlik durumu")]),(0,a._)("li",null,[(0,a._)("b",null,"5.10 "),(0,a.Uk)(" Üç boyutlu kiriş eleman")]),(0,a._)("li",null,[(0,a._)("b",null,"5.11 "),(0,a.Uk)(" Üç boyutlu çerçeve eleman")]),(0,a._)("li",null,[(0,a._)("b",null,"5.12 "),(0,a.Uk)(" Üç boyutlu çubuk çerçeve örneği")])])],-1),f=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"6. "),(0,a._)("b",null,"Çubuklarda Keyfi Geometrili Kesitlerin Burulma Rijitliği")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"6.1 "),(0,a.Uk)(" Saint-Venant Burulması")]),(0,a._)("li",null,[(0,a._)("b",null,"6.2 "),(0,a.Uk)(" Zayıf formun elde edilmesi")]),(0,a._)("li",null,[(0,a._)("b",null,"6.3 "),(0,a.Uk)(" Burulma Elemanı")]),(0,a._)("li",null,[(0,a._)("b",null,"6.4 "),(0,a.Uk)(" Örnek uygulama (Python)")])])],-1),z=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"7. "),(0,a._)("b",null,"Lineer-Elastisite Teorisine Özet Bakış")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"7.1 "),(0,a.Uk)(" Şekil değiştirme")]),(0,a._)("li",null,[(0,a._)("b",null,"7.2 "),(0,a.Uk)(" Gerilme")]),(0,a._)("li",null,[(0,a._)("b",null,"7.3 "),(0,a.Uk)(" Gerilme-Şekil değiştirme bağıntıları")]),(0,a._)("li",null,[(0,a._)("b",null,"7.4 "),(0,a.Uk)(" Denge denklemleri")]),(0,a._)("li",null,[(0,a._)("b",null,"7.5 "),(0,a.Uk)(" Sıcaklık değişimi etkileri")])])],-1),h=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"8. "),(0,a._)("b",null,"Üç Boyutlu Elastisite Elemanları")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"8.1 "),(0,a.Uk)(" Sekiz nodlu Tuğla Eleman fomülasyonu "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"8.1.1 "),(0,a.Uk)(" Uzaysal koordinat dönüşümü (master-eleman) ")]),(0,a._)("li",null,[(0,a._)("b",null,"8.1.2 "),(0,a.Uk)(" Eleman matris denklem takımının elde edilmesi ")]),(0,a._)("li",null,[(0,a._)("b",null,"8.1.3 "),(0,a.Uk)(" Dış-sınır yüzey gerilmelerinin integre edilmesi ")]),(0,a._)("li",null,[(0,a._)("b",null,"8.1.4 "),(0,a.Uk)(" Örnek problem ve Python programlaması")])])]),(0,a._)("li",null,[(0,a._)("b",null,"8.2 "),(0,a.Uk)(" Dört nodlu Dört-yüzlü Eleman fomülasyonu "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"8.2.1 "),(0,a.Uk)(" Uzaysal koordinat dönüşümü (master-eleman) ")]),(0,a._)("li",null,[(0,a._)("b",null,"8.2.2 "),(0,a.Uk)(" Örnek problem ve Python programlaması")])])])])],-1),E=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"9. "),(0,a._)("b",null,"Programlama ve Sonlu Elemanlar")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"9.1 "),(0,a.Uk)(" Programlamanın temel unsurları")]),(0,a._)("li",null,[(0,a._)("b",null,"9.2 "),(0,a.Uk)(" Nesnesel programlama ve Python")]),(0,a._)("li",null,[(0,a._)("b",null,"9.3 "),(0,a.Uk)(" Koleksiyonlar, Gezinilebilirler, Döngüler ve Python ")]),(0,a._)("li",null,[(0,a._)("b",null,"9.4 "),(0,a.Uk)(" Kütüphaneler ve Python "),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("b",null,"9.4.1 "),(0,a.Uk)(" numpy")]),(0,a._)("li",null,[(0,a._)("b",null,"9.4.2 "),(0,a.Uk)(" scipy ile seyrek matris denklem takımı çözümü ")])])])])],-1),w=(0,a._)("div",{class:"text-h6"},"Kodlar ve Sunumlar",-1),S=(0,a.Uk)("Tüm kodları ve sunumları buraya tıklayarak indirebilirsiniz"),Z=(0,a.Uk)(" github.com/itumekanik/sonlu-elemanlar-analizi ");function W(l,e,n,i,u,r){const m=(0,a.up)("q-tab"),t=(0,a.up)("q-tabs"),W=(0,a.up)("q-separator"),q=(0,a.up)("q-tab-panel"),B=(0,a.up)("q-btn"),Q=(0,a.up)("q-item-section"),D=(0,a.up)("q-item-label"),P=(0,a.up)("q-item"),T=(0,a.up)("q-tab-panels"),K=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(t,{modelValue:l.tab,"onUpdate:modelValue":e[0]||(e[0]=e=>l.tab=e),dense:"",class:"bg-grey-1","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"onsoz",label:"Önsöz","no-caps":""}),(0,a.Wm)(m,{name:"content",label:"İçindekiler","no-caps":""}),(0,a.Wm)(m,{name:"codes",label:"Kodlar ve Sunumlar","no-caps":""})])),_:1},8,["modelValue"]),(0,a.Wm)(W),(0,a.Wm)(T,{modelValue:l.tab,"onUpdate:modelValue":e[1]||(e[1]=e=>l.tab=e),animated:""},{default:(0,a.w5)((()=>[(0,a.Wm)(q,{name:"onsoz"},{default:(0,a.w5)((()=>[k,_,b,d,c])),_:1}),(0,a.Wm)(q,{name:"content"},{default:(0,a.w5)((()=>[y,p,U,g,v,f,z,h,E])),_:1}),(0,a.Wm)(q,{name:"codes"},{default:(0,a.w5)((()=>[w,(0,a.Wm)(P,{clickable:"",tag:"a",target:"_blank",href:"https://github.com/itumekanik/sonlu-elemanlar-analizi"},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(B,{round:"",dense:"",flat:"",ripple:!1,icon:l.fabGithub,size:"19px",class:"q-mr-sm","no-caps":""},null,8,["icon"])])),_:1}),(0,a.Wm)(Q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(D,{caption:""},{default:(0,a.w5)((()=>[Z])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})])])}var q=n(35640);const B=(0,a.aZ)({name:"MultiTab",setup(){const l=(0,t.qj)({tab:"content"}),e=()=>{};return{...(0,t.BK)(l),editorInit:e,fabGithub:q.hjv}}});var Q=n(74260),D=n(10151),P=n(75602),T=n(3269),K=n(65869),I=n(5906),x=n(86602),A=n(48240),C=n(83414),M=n(52035),V=n(2350),j=n(7518),G=n.n(j);const Y=(0,Q.Z)(B,[["render",W]]),L=Y;G()(B,"components",{QCard:D.Z,QTabs:P.Z,QTab:T.Z,QSeparator:K.Z,QTabPanels:I.Z,QTabPanel:x.Z,QBtn:A.Z,QItem:C.Z,QItemSection:M.Z,QItemLabel:V.Z});var R=n(88695),F=n.n(R);const H={class:"q-pa-xs row items-start q-gutter-md"},N=(0,a.Uk)(" Satın Al ");function O(l,e,n,i,u,r){const m=(0,a.up)("q-img"),t=(0,a.up)("q-card-section"),s=(0,a.up)("q-separator"),o=(0,a.up)("q-space"),k=(0,a.up)("q-btn"),_=(0,a.up)("q-card-actions"),b=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",H,[(0,a.Wm)(b,{class:"my-card",flat:"",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{horizontal:""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{class:"col-12 flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{onClick:l.BUY,class:"rounded-borders",src:F(),style:{cursor:"pointer"}},null,8,["onClick"])])),_:1})])),_:1}),(0,a.Wm)(s),(0,a.Wm)(_,null,{default:(0,a.w5)((()=>[(0,a.Wm)(o),(0,a.Wm)(k,{flat:"",round:"",icon:"shopping_cart"}),(0,a.Wm)(k,{flat:"",color:"primary",onClick:l.BUY},{default:(0,a.w5)((()=>[N])),_:1},8,["onClick"])])),_:1})])),_:1})])}var J=n(33437);const X=(0,a.aZ)({name:"Book",setup(){const l=(0,t.qj)({stars:5}),e=()=>{(0,J.Z)("https://www.birsenyayinevi.com/sonlu-elemanlar-analizi-ins-muh-dr-murat-yilmaz",null)};return{...(0,t.BK)(l),BUY:e}}});var $=n(25589),ll=n(24027),el=n(99367),nl=n(62025);const al=(0,Q.Z)(X,[["render",O],["__scopeId","data-v-1e172346"]]),il=al;G()(X,"components",{QCard:D.Z,QCardSection:$.Z,QImg:ll.Z,QSeparator:K.Z,QCardActions:el.Z,QSpace:nl.Z,QBtn:A.Z});const ul=(0,a.aZ)({name:"PageIndex",components:{MultiTab:L,Book:il},setup(){const l=(0,t.qj)({stars:5}),e=()=>{};return{...(0,t.BK)(l),editorInit:e}}});var rl=n(24379);const ml=(0,Q.Z)(ul,[["render",m],["__scopeId","data-v-536471e0"]]),tl=ml;G()(ul,"components",{QPage:rl.Z})},88695:(l,e,n)=>{l.exports=n.p+"img/book1_kapak.9bff49b7.jpeg"}}]);