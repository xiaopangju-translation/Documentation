/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "63ec5f0457b89089f379f0bf9e5e9e4e"
  },
  {
    "url": "about/analysis.html",
    "revision": "9eeafdc3516f6deef9c5deece4abdaa1"
  },
  {
    "url": "about/do-you-know.html",
    "revision": "5320a32fa647c55ea069b46fc5c5d650"
  },
  {
    "url": "about/donate.html",
    "revision": "ee7a50bedd5dddecc430563b0f7c8575"
  },
  {
    "url": "about/index.html",
    "revision": "d8b8439117c12800fa43f21ac00cc7dc"
  },
  {
    "url": "about/logo.html",
    "revision": "c9a9a1c691e8b2bcc0f061ab5e6a1dc2"
  },
  {
    "url": "assets/css/0.styles.158d9640.css",
    "revision": "cb05e5e2fd0388a18cb44bb683e10d0f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d9735345.js",
    "revision": "43858ffbcde7fc0bf0db998201083524"
  },
  {
    "url": "assets/js/11.9a273e91.js",
    "revision": "503577a39c62819c24bb89605a674495"
  },
  {
    "url": "assets/js/12.8a4878fa.js",
    "revision": "0a8fa820ecbd91eaa0656bf9589c31f8"
  },
  {
    "url": "assets/js/13.00f044a6.js",
    "revision": "98c67aea0a9bc7eee4d9ff34e750a4a3"
  },
  {
    "url": "assets/js/14.ff7e51c1.js",
    "revision": "aaf7f679f822e2b637122b93fd72a603"
  },
  {
    "url": "assets/js/15.39d278f1.js",
    "revision": "61ed59a661ad6e2f30aa0676333a0335"
  },
  {
    "url": "assets/js/16.4f192d0b.js",
    "revision": "72a5cbde026a7abf5ae5b701c8e6d0d9"
  },
  {
    "url": "assets/js/17.49a99d97.js",
    "revision": "b2945976cec87a5116e43b7078908996"
  },
  {
    "url": "assets/js/18.5786e6ff.js",
    "revision": "1c5dc6618c50b0cd12f776ca6face2db"
  },
  {
    "url": "assets/js/19.30590c6f.js",
    "revision": "580dfd191f7ded5369e26b6e31daf7eb"
  },
  {
    "url": "assets/js/2.e6313fce.js",
    "revision": "6c0a96b1e11988fdc984eb2d0fdbf04e"
  },
  {
    "url": "assets/js/20.b7da5583.js",
    "revision": "9454deda9ed55d93f8bb642d1fe8708d"
  },
  {
    "url": "assets/js/21.153a1cfd.js",
    "revision": "e611fbd22770be8a1fe115834c3add68"
  },
  {
    "url": "assets/js/22.fa747f10.js",
    "revision": "39ffadb749993303f39c86a16d6ddde0"
  },
  {
    "url": "assets/js/23.048130a3.js",
    "revision": "c32614bf62322b3eb6474d3f697bc9c7"
  },
  {
    "url": "assets/js/24.c43e38ee.js",
    "revision": "da51ac3a6117037d0b95824464f54d6e"
  },
  {
    "url": "assets/js/25.ea2eeefb.js",
    "revision": "2c9168a924f0e333cc8b58a3ba56c469"
  },
  {
    "url": "assets/js/26.695ce0fc.js",
    "revision": "5486d32e6d857c205df00ace798703bb"
  },
  {
    "url": "assets/js/27.eb212f4c.js",
    "revision": "ea58e1b3fc8884702eadfcae910c45c3"
  },
  {
    "url": "assets/js/28.1f8d7704.js",
    "revision": "e4e92fcccbf773e7cf5c180ee77ef4c0"
  },
  {
    "url": "assets/js/29.afc9c7af.js",
    "revision": "921dc442fe72e5cac2ec2fa1f8c2d315"
  },
  {
    "url": "assets/js/3.d305887f.js",
    "revision": "fc2c6282106d0bbd5c9aeadcb885f418"
  },
  {
    "url": "assets/js/30.a71e4a52.js",
    "revision": "d2b1481de8d9c96ae24d6ed3c584d5a4"
  },
  {
    "url": "assets/js/31.a1e0ade4.js",
    "revision": "89c64dde597f71fa60130beb1798cdf5"
  },
  {
    "url": "assets/js/32.d6fe6f1e.js",
    "revision": "67426b3239ba6ce3fbed2bc89cc4898e"
  },
  {
    "url": "assets/js/33.e7047f23.js",
    "revision": "52c18476499b1bd9966099b901e54cd9"
  },
  {
    "url": "assets/js/34.cfbe1c20.js",
    "revision": "40fc0c093a13ba2423eb2e4ea679ee8f"
  },
  {
    "url": "assets/js/35.4defe42b.js",
    "revision": "b065dd2c3f2d38b97f9be252e4a4789f"
  },
  {
    "url": "assets/js/36.dd7120a0.js",
    "revision": "5f2ba035bfd7e5b3aecfbc1cd8d6733b"
  },
  {
    "url": "assets/js/37.172ab499.js",
    "revision": "c76c482261cc6182ab2ff10c145a4fe3"
  },
  {
    "url": "assets/js/38.8d652ad0.js",
    "revision": "fff3dea2d8cd0908c96bcd322d0bcc6d"
  },
  {
    "url": "assets/js/39.e1a97d88.js",
    "revision": "642e5204e8cd40b1b2f8c2e32800c9df"
  },
  {
    "url": "assets/js/4.c80bebf0.js",
    "revision": "6adb27e38ad91f0fe0e895ba726532da"
  },
  {
    "url": "assets/js/40.9376b9ff.js",
    "revision": "e4f9273a24eb8e536eea036ac918e61f"
  },
  {
    "url": "assets/js/41.316a95e6.js",
    "revision": "7b21e5a093d80569b03e2d4ca0ee6a82"
  },
  {
    "url": "assets/js/42.3364694e.js",
    "revision": "7d7c5e8afa229cd93dfeae04be49dd32"
  },
  {
    "url": "assets/js/43.f5709261.js",
    "revision": "41d498bfaf120c1f10c04b2b39298d11"
  },
  {
    "url": "assets/js/44.79e4662e.js",
    "revision": "525dd4c167d5fa753d0e81e367ae27c0"
  },
  {
    "url": "assets/js/45.2783ba40.js",
    "revision": "7c3c6f8eccbd5ac2920745e016d203d6"
  },
  {
    "url": "assets/js/46.ed3aefdd.js",
    "revision": "1e7ff3c7aab443dbfa95eb95493f4579"
  },
  {
    "url": "assets/js/47.e36a7a88.js",
    "revision": "ad5986c9e62d79fe6933e885eaaf603a"
  },
  {
    "url": "assets/js/48.d357175b.js",
    "revision": "a9d0ca53b06ba9cd6599cc2ce47bb566"
  },
  {
    "url": "assets/js/49.59e410d9.js",
    "revision": "4d5afc2dcdcc22ed515ccef5c1e19e95"
  },
  {
    "url": "assets/js/5.3f4a2835.js",
    "revision": "b9669794a4cd871163112d8354942746"
  },
  {
    "url": "assets/js/50.ca742a04.js",
    "revision": "8b187a5087718fd0a4c408ae0ad4e7f2"
  },
  {
    "url": "assets/js/51.bdf40769.js",
    "revision": "e7ad207cb38b993ffd204feb2d522952"
  },
  {
    "url": "assets/js/52.4a57eb0e.js",
    "revision": "e7b50f9fe6df04bb499dfa15666e1ec6"
  },
  {
    "url": "assets/js/53.85acbdeb.js",
    "revision": "f70602c3269c5567cb61c7deb43c2f85"
  },
  {
    "url": "assets/js/54.3bf73f35.js",
    "revision": "e7c7a6407798d6b172ff162be57e1e1f"
  },
  {
    "url": "assets/js/55.e671b09c.js",
    "revision": "02b7283b8a019ad0c5a858b20c8cfa23"
  },
  {
    "url": "assets/js/56.de31b547.js",
    "revision": "7ef0e2014e037c337696ada857672060"
  },
  {
    "url": "assets/js/57.a7854a96.js",
    "revision": "52e9307c36eb8685351933708635ba07"
  },
  {
    "url": "assets/js/58.89c8dc75.js",
    "revision": "abd4ed7de0c60a92d199856307d95629"
  },
  {
    "url": "assets/js/59.1e948201.js",
    "revision": "2456418b134787ad808afee803521c7e"
  },
  {
    "url": "assets/js/6.4bd256ec.js",
    "revision": "0525dd7be7db6128daf6c1982a2c54e4"
  },
  {
    "url": "assets/js/60.30314bd2.js",
    "revision": "54b78d3e61d69d21be7142d00548d265"
  },
  {
    "url": "assets/js/61.ffedd304.js",
    "revision": "a4a305818b11f30b2b6298850a887cb3"
  },
  {
    "url": "assets/js/62.2f60e9ca.js",
    "revision": "8f668f129383e7182f2de9898fda78cc"
  },
  {
    "url": "assets/js/63.d9916b51.js",
    "revision": "fae93062a049ced0d3ab69d193500615"
  },
  {
    "url": "assets/js/64.0d65874b.js",
    "revision": "7b21f5c4f66ce83ffb02268e5be96274"
  },
  {
    "url": "assets/js/65.e04e489b.js",
    "revision": "8a3ba1b7c34171ec2924fab764180d88"
  },
  {
    "url": "assets/js/66.3d955e7e.js",
    "revision": "30ecf21cc58fc0b0bc0c2903cbaae73f"
  },
  {
    "url": "assets/js/67.8f5b5c19.js",
    "revision": "965ae5c82f423d8d763f0725b9b14a86"
  },
  {
    "url": "assets/js/68.3e511889.js",
    "revision": "7c731c9c45cc7f7cf1a99c2dd282511e"
  },
  {
    "url": "assets/js/69.daf0192b.js",
    "revision": "85a2c878c37339d75c30db78f935bdb3"
  },
  {
    "url": "assets/js/7.8fd3c3f1.js",
    "revision": "c9a985bd21b9a16c5dc2e3825ea8af24"
  },
  {
    "url": "assets/js/70.b659422f.js",
    "revision": "a94a5c2c71ca0115d51c73ce77cf953d"
  },
  {
    "url": "assets/js/71.da832b8d.js",
    "revision": "f62611d61f68056fa26fa526b06f14f1"
  },
  {
    "url": "assets/js/72.5d7bb399.js",
    "revision": "73f3a4ec31b92db71edd0fb8ae1c3d95"
  },
  {
    "url": "assets/js/8.580cfd64.js",
    "revision": "b10abd0377ed445e6b2882f0062f28c9"
  },
  {
    "url": "assets/js/9.79ef242d.js",
    "revision": "a037deb6a52c0be4897e0bcdab8b387a"
  },
  {
    "url": "assets/js/app.8b0153a7.js",
    "revision": "da199ccfad4d5d1c9c7bc9bb1acaafd5"
  },
  {
    "url": "develop/analysis/index.html",
    "revision": "0f9e07f6d3ce552661bdb29ecff093ba"
  },
  {
    "url": "develop/analysis/v2.html",
    "revision": "909af61f0137e1a92fb3bad6a275f912"
  },
  {
    "url": "develop/analysis/v3.html",
    "revision": "2184277ac26e2407efa464fea1c0ee76"
  },
  {
    "url": "develop/analysis/v4.html",
    "revision": "10eb73a786fab3e014c4335eb1703eb3"
  },
  {
    "url": "develop/api.html",
    "revision": "82964161f2c75339956613989177bf92"
  },
  {
    "url": "develop/hook.html",
    "revision": "60e5350a2a1307f65b5d927967a7500c"
  },
  {
    "url": "develop/index.html",
    "revision": "3e5a5df5a949fa2a4e04ce175146d0c3"
  },
  {
    "url": "develop/nouns.html",
    "revision": "fd4a5d0b44c5d91be2aadece6b6c7010"
  },
  {
    "url": "develop/plugin.html",
    "revision": "5f08c6ed735e69620737c609c1a82990"
  },
  {
    "url": "en/about/donate.html",
    "revision": "80b4fba0b0547b31fcdb992bbdcf2753"
  },
  {
    "url": "en/about/index.html",
    "revision": "74d85b96e191018a2a15ba7c4fcc4bfc"
  },
  {
    "url": "en/about/logo.html",
    "revision": "6244457b243abf2e399dc7b11a822d2a"
  },
  {
    "url": "en/api/hook.html",
    "revision": "d0e9f1a4ba8713db51d8a12704b452aa"
  },
  {
    "url": "en/api/index.html",
    "revision": "fac43d7a0b6cc92ee15b800d4651653f"
  },
  {
    "url": "en/guide/install/gadget.html",
    "revision": "97c285e5cbfedcfa7c5ca32cf3c20a6d"
  },
  {
    "url": "en/guide/install/quick-start.html",
    "revision": "a3bc4838dbe799a9e334c52d72180a3c"
  },
  {
    "url": "en/guide/intro.html",
    "revision": "1221207ee198823bdf8323450411bf13"
  },
  {
    "url": "en/guide/usage/preference.html",
    "revision": "6a6dccb73ca7ab65e334566fb418406d"
  },
  {
    "url": "en/guide/usage/quick-delete.html",
    "revision": "f8871ac782ba02ed349933c03f56d53c"
  },
  {
    "url": "en/guide/usage/quick-diff.html",
    "revision": "888e97cd4d84b516320d9b0b35d43446"
  },
  {
    "url": "en/guide/usage/quick-edit.html",
    "revision": "65b1af2f793333f0ff47e1ec80a15c61"
  },
  {
    "url": "en/guide/usage/quick-redirect.html",
    "revision": "d7890beb6e322db1229b31e346b4de17"
  },
  {
    "url": "en/guide/usage/quick-rename.html",
    "revision": "32232f09e1e863e49feabb1f0332fcc2"
  },
  {
    "url": "en/guide/usage/toolbox.html",
    "revision": "6887c6cd30e8ad2e6d77a56e12a64014"
  },
  {
    "url": "en/index.html",
    "revision": "5c42448cea4af479c7a4c1e48a2d526a"
  },
  {
    "url": "en/update/14.0.0-insider.html",
    "revision": "399a3bbf3e7d512b8ae7de6fb76e48b3"
  },
  {
    "url": "en/update/index.html",
    "revision": "207b00f6898385a7728d6f7a5aa1f09a"
  },
  {
    "url": "guide/index.html",
    "revision": "b729b8028cb6559722583767c5a09ff7"
  },
  {
    "url": "guide/install/gadget.html",
    "revision": "4ffd27e99dec7ed00445c955f950f273"
  },
  {
    "url": "guide/install/quick-start.html",
    "revision": "cd15631c361e6fc8b19020d6a032e14b"
  },
  {
    "url": "guide/intro.html",
    "revision": "9fe99c8c0e8695070dc46ef6fc925afb"
  },
  {
    "url": "guide/usage/preference.html",
    "revision": "694edb696fd315b7314fa42a434e1874"
  },
  {
    "url": "guide/usage/quick-delete.html",
    "revision": "41484965bc0c43f8eeef6dc9de7053b5"
  },
  {
    "url": "guide/usage/quick-diff.html",
    "revision": "9e00bf407ca5b96e223bf9a4281bd190"
  },
  {
    "url": "guide/usage/quick-edit.html",
    "revision": "15a6a05098b375428a4f8fb92aa4c649"
  },
  {
    "url": "guide/usage/quick-preview.html",
    "revision": "76bdd516b8ebac0a388f9ee51b1b1f63"
  },
  {
    "url": "guide/usage/quick-redirect.html",
    "revision": "59b6b6edbbf982084c114fe65a74a644"
  },
  {
    "url": "guide/usage/quick-rename.html",
    "revision": "09151179b67d94f8eec6e2123b12d25f"
  },
  {
    "url": "guide/usage/toolbox.html",
    "revision": "72bb3a9ece8fe29d6e0dece44b553ea8"
  },
  {
    "url": "images/browser/compatible_chrome.png",
    "revision": "62865d1b320de643a107c7df7be889cb"
  },
  {
    "url": "images/browser/compatible_firefox.png",
    "revision": "5ac2fe75f6ea214a9e9071e293fcb30e"
  },
  {
    "url": "images/browser/compatible_ie.png",
    "revision": "02717a5efaf89b02c8f81df3bf6da579"
  },
  {
    "url": "images/browser/compatible_opera.png",
    "revision": "e8d7563914ad7b5fa2d4699e9117ab85"
  },
  {
    "url": "images/browser/compatible_safari.png",
    "revision": "95335d2b9cf3c2a4362730afff2843e6"
  },
  {
    "url": "images/browser/incompatible_chrome.png",
    "revision": "bbde0d28faf36472a1a9078b6857f0de"
  },
  {
    "url": "images/browser/incompatible_firefox.png",
    "revision": "85d5832343560153bb321b0d83252ce5"
  },
  {
    "url": "images/browser/incompatible_ie.png",
    "revision": "295715ae830913834289300244750926"
  },
  {
    "url": "images/browser/incompatible_opera.png",
    "revision": "9fcaf974145f458b77a595604a1b8722"
  },
  {
    "url": "images/browser/incompatible_safari.png",
    "revision": "08ed3f25472d0ad01601d6be9e5235c3"
  },
  {
    "url": "images/logo/InPageEdit-v2.png",
    "revision": "ed16a8de541d3431c45b427b76f07572"
  },
  {
    "url": "images/logo/InPageEdit.png",
    "revision": "7372a15201e94efe95f20e0ec65537fe"
  },
  {
    "url": "images/logo/IPE-v2.png",
    "revision": "56069053e1b1680c30b1ba43b7dc0a59"
  },
  {
    "url": "images/logo/IPE.png",
    "revision": "c63644d9bcb1825b70d31a8b0fcde338"
  },
  {
    "url": "images/logo/touch-icon.jpg",
    "revision": "0705823a38cc80e01bd058e7f9b7c892"
  },
  {
    "url": "images/webpack/webpack-icon.svg",
    "revision": "d19378a95ebe6b15d5ddea281138dcf4"
  },
  {
    "url": "images/webpack/webpack-logo.svg",
    "revision": "e0b5805d423a4ec9473ee315250968b2"
  },
  {
    "url": "index.html",
    "revision": "b6f6098e16ffbd0a94ad29111f7f3804"
  },
  {
    "url": "update/1.x.html",
    "revision": "89679c95555252a5fd9b6f3b081961a1"
  },
  {
    "url": "update/14.0.0.html",
    "revision": "cbf5d1e6437bd96e7edb5dc8bd044e5b"
  },
  {
    "url": "update/14.0.3.html",
    "revision": "9b27a9e3821b35194b9e74b46e11f981"
  },
  {
    "url": "update/14.1.0.html",
    "revision": "f542ce9f1ac4601bada1c686da4c4902"
  },
  {
    "url": "update/14.1.1.html",
    "revision": "e5c93e8342e2241e20410abe97ae50d6"
  },
  {
    "url": "update/14.1.2.html",
    "revision": "3613b1f2aa7c50dfc47a18ed23042083"
  },
  {
    "url": "update/14.1.3.html",
    "revision": "5fccb81236fc3acde78838b36fc41eb4"
  },
  {
    "url": "update/14.1.4.html",
    "revision": "2d4f50d337b9b6b7fe193811cf0d0fa6"
  },
  {
    "url": "update/14.1.5.html",
    "revision": "267d8699cd02058ce57a57a7bcfe0ba0"
  },
  {
    "url": "update/14.1.6.html",
    "revision": "0c695ca0630e458bc7cfaf748484317b"
  },
  {
    "url": "update/2.x.html",
    "revision": "9d9c05153126218274d0fffc0bc8191c"
  },
  {
    "url": "update/index.html",
    "revision": "259069d4ca97461dfea5acf435707248"
  },
  {
    "url": "update/next.html",
    "revision": "7fb1aeba46e263a6a7aba2e5184af8d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
