if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>a(e,r),d={module:{uri:r},exports:n,require:o};s[r]=Promise.all(i.map((e=>d[e]||o(e)))).then((e=>(c(...e),n)))}}define(["./workbox-cc56af0c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"639d2000c1ece92eaec8.woff2",revision:null},{url:"66104b766c3d0462b3c5.woff2",revision:null},{url:"745989aab0d69cab7e70.woff2",revision:null},{url:"TEAM.json",revision:"751cc6d32914d0bd302cbdd13cc73e9e"},{url:"abf801b7acb6705a15ad.ttf",revision:null},{url:"app.bundle.js",revision:"b5f1284e15fb7e10f9a2aa69c3883667"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"6960e1ee08489827bd91012ccfd88fb9"},{url:"assets/android-chrome-144x144.png",revision:"ee5a1ffb8f6956f216ad4ebc02b1ded9"},{url:"assets/android-chrome-192x192.png",revision:"0205b6d0f021ea3ca453b02414f7b7d8"},{url:"assets/android-chrome-256x256.png",revision:"5897484b6dc86c768f87bdd513592de4"},{url:"assets/android-chrome-36x36.png",revision:"3d8260c8de647f1e69549614b2dd3c82"},{url:"assets/android-chrome-384x384.png",revision:"1b5c3ac6a9001f36f5220ad1e383d7cb"},{url:"assets/android-chrome-48x48.png",revision:"e506b81b50487e87e751af86bb74aafb"},{url:"assets/android-chrome-512x512.png",revision:"2f394f58600a1d287e2ba21ed374aa5a"},{url:"assets/android-chrome-72x72.png",revision:"12135504d9282ae201ae4dd2880ce56c"},{url:"assets/android-chrome-96x96.png",revision:"1b79c6adc25bbc663d3aa1227bab0219"},{url:"assets/apple-touch-icon-1024x1024.png",revision:"294895f428fa0be39f85ec548787e086"},{url:"assets/apple-touch-icon-114x114.png",revision:"95ead42610f896cf0064cdce55922343"},{url:"assets/apple-touch-icon-120x120.png",revision:"818bbb3569ecc2e1d25f0c370de52105"},{url:"assets/apple-touch-icon-144x144.png",revision:"604e36adf6d0c8169d7c5a2defe63694"},{url:"assets/apple-touch-icon-152x152.png",revision:"283e4cc79178df94431987b3b47d9797"},{url:"assets/apple-touch-icon-167x167.png",revision:"b9d843a68ee286c509c727fdb7836b98"},{url:"assets/apple-touch-icon-180x180.png",revision:"15756f9b11e124b203c3cc3be058c903"},{url:"assets/apple-touch-icon-57x57.png",revision:"ec78b9db763baf54c2b6a18710da511c"},{url:"assets/apple-touch-icon-60x60.png",revision:"d2c85a44e4df3a6d96ed14705682daa3"},{url:"assets/apple-touch-icon-72x72.png",revision:"200b2bd0253ed25cae0218a3909b8793"},{url:"assets/apple-touch-icon-76x76.png",revision:"49be6624f506108e7f27f6d5621c70a8"},{url:"assets/apple-touch-icon-precomposed.png",revision:"15756f9b11e124b203c3cc3be058c903"},{url:"assets/apple-touch-icon.png",revision:"15756f9b11e124b203c3cc3be058c903"},{url:"assets/apple-touch-startup-image-1125x2436.png",revision:"4da19200e712a00d37350f53a8f44222"},{url:"assets/apple-touch-startup-image-1136x640.png",revision:"5b051ad1c6ca17b9e031acb4ec303a7b"},{url:"assets/apple-touch-startup-image-1170x2532.png",revision:"40ad9886fcf5bde834fc05e2b6309fd8"},{url:"assets/apple-touch-startup-image-1242x2208.png",revision:"603d6b03bac1635e7b23c7b77409fc79"},{url:"assets/apple-touch-startup-image-1242x2688.png",revision:"c5a0e6e0410cd3502b2c8e2e20223045"},{url:"assets/apple-touch-startup-image-1284x2778.png",revision:"3ba44855eef323447aedaf50912a0de2"},{url:"assets/apple-touch-startup-image-1334x750.png",revision:"fadfbb1ae5d1c1b03ef1f98a1ec6e8fc"},{url:"assets/apple-touch-startup-image-1536x2048.png",revision:"9e4ff0527e00253c2f55763a89db5746"},{url:"assets/apple-touch-startup-image-1620x2160.png",revision:"002db55384affbb383916e134dddc773"},{url:"assets/apple-touch-startup-image-1668x2224.png",revision:"22bc3f0628a7e43fe01f35acb19b9cae"},{url:"assets/apple-touch-startup-image-1668x2388.png",revision:"65212dbae48c7cbb5d43ddd01bdf8a6a"},{url:"assets/apple-touch-startup-image-1792x828.png",revision:"9d2c1ef47de270ce0a85360d36e9e389"},{url:"assets/apple-touch-startup-image-2048x1536.png",revision:"be9bfbec79b79f7ff910b59bd89283bb"},{url:"assets/apple-touch-startup-image-2048x2732.png",revision:"525c88fece7335e13759814ffd46f491"},{url:"assets/apple-touch-startup-image-2160x1620.png",revision:"949a68ce6f91c7834ceeaef6a12b8e67"},{url:"assets/apple-touch-startup-image-2208x1242.png",revision:"767893448996af4ead45871c8b6309a4"},{url:"assets/apple-touch-startup-image-2224x1668.png",revision:"2c9f6baf46adf8b2727c7affb5f7c148"},{url:"assets/apple-touch-startup-image-2388x1668.png",revision:"87d09126fa35c82a7bdd6f3d9e485178"},{url:"assets/apple-touch-startup-image-2436x1125.png",revision:"bf2a4ed331eac8e3e47bb52bc5b6666c"},{url:"assets/apple-touch-startup-image-2532x1170.png",revision:"7fb5d633353e67a7717bbb03ca6aca72"},{url:"assets/apple-touch-startup-image-2688x1242.png",revision:"832d12953f9b8be8d830eb431a718067"},{url:"assets/apple-touch-startup-image-2732x2048.png",revision:"7bf866dc891357dc20fbf4e78e6581aa"},{url:"assets/apple-touch-startup-image-2778x1284.png",revision:"9f59954ff7d07e89ec8201ce63656901"},{url:"assets/apple-touch-startup-image-640x1136.png",revision:"7a6d2edff7383b89e8353de681f90da3"},{url:"assets/apple-touch-startup-image-750x1334.png",revision:"d6dbaa5acc9582730e6b02bc63dc6981"},{url:"assets/apple-touch-startup-image-828x1792.png",revision:"2b94ed2c817cc4c5ff4d4cb295024bee"},{url:"assets/browserconfig.xml",revision:"b2c5abf2b91648116fdf6e412f6d2677"},{url:"assets/favicon-16x16.png",revision:"dc0650353b4650ba77331116fccf2fc0"},{url:"assets/favicon-32x32.png",revision:"7d158394b2acc113f726a8d294eea5ae"},{url:"assets/favicon-48x48.png",revision:"e506b81b50487e87e751af86bb74aafb"},{url:"assets/favicon.ico",revision:"4d5ac864468ae71f43b8022d301322f3"},{url:"assets/manifest.webmanifest",revision:"58d99e7ee0c2b12b8231cbbf3dcceb20"},{url:"assets/mstile-144x144.png",revision:"ee5a1ffb8f6956f216ad4ebc02b1ded9"},{url:"assets/mstile-150x150.png",revision:"3031ea4f133881ea06b862c42a57f54a"},{url:"assets/mstile-310x150.png",revision:"6aa90eff28ca7fa98b9f9b5ae82953e6"},{url:"assets/mstile-310x310.png",revision:"0cc3c181ddac97fe44cb6cecf8e8d601"},{url:"assets/mstile-70x70.png",revision:"fcee8e4da9318c31fedbb3a982613dce"},{url:"assets/yandex-browser-50x50.png",revision:"936406ba5475d1076852dec01b38a82d"},{url:"assets/yandex-browser-manifest.json",revision:"1fa786b96e710d40404b454e3f54141c"},{url:"b48ad290d0335879a92b.ttf",revision:null},{url:"e1a247a5ef41e1975742.woff2",revision:null},{url:"f601162ae669f88823a3.ttf",revision:null},{url:"f9ee61fab3c11e2f3ed3.ttf",revision:null},{url:"icons/UMKM-Merdeka.png",revision:"e2fe924017e58fa90b89b589ddc840f4"},{url:"icons/icon-128x128.png",revision:"7031a72f0de0b15c04c47d59d561eb5a"},{url:"icons/icon-192x192.png",revision:"1edf9cea20cb30895f5b35d20a50dfbd"},{url:"icons/icon-384x384.png",revision:"5741e795fc2cd1b2044507a54f5cab53"},{url:"icons/icon-48x48.png",revision:"dded1d268e6536a22777ea4e168edfdb"},{url:"icons/icon-512x512.png",revision:"bf89f3a190c29c09e070c228947ea40f"},{url:"icons/icon-72x72.png",revision:"2e3f87d336b0f602901eced5ebb6cd7f"},{url:"icons/icon-96x96.png",revision:"d0b8cde30258e18c33c062c553516a51"},{url:"images/logo/Logo-main.jpg",revision:"dbee3932541f09b4d36137390add78c4"},{url:"images/logo/UMKM-Merdeka-Brands.png",revision:"6cfb169ddf6084d97202048cf34d59d0"},{url:"images/logo/UMKM-Merdeka-second.png",revision:"1cd365b1eed97e1a18581e34c13b9d98"},{url:"images/logo/UMKM-Merdeka.png",revision:"e2fe924017e58fa90b89b589ddc840f4"},{url:"images/profile/aqsha.jpeg",revision:"cc5729bd36224def02fbfcf864f60c76"},{url:"images/profile/aqsha.png",revision:"199af7b410fc7e4af7cccd7a18a78fb8"},{url:"images/profile/ikhsan.jpg",revision:"01fd2c435b5a4a34e271c9dde2692fdb"},{url:"images/profile/nafasya.png",revision:"e1009d6eb3648b231ff359bf121b22d2"},{url:"images/svg/product-photography.svg",revision:"b9589ffc5f2947ffac4d2f3334b0b8c8"},{url:"index.html",revision:"bc830cd86fd8e0f8d84e84e967007724"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
