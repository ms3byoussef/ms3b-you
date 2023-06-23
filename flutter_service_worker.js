'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8947ac7a308cbd25a10575bcbc73f78d",
".git/config": "ee256e39f6b700bcc8f9dfa652821cf4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "26457983c3e5bc37ac899237e8095227",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e6f9e84c985a5eb24d4057a8af11c655",
".git/logs/refs/heads/main": "e6f9e84c985a5eb24d4057a8af11c655",
".git/logs/refs/remotes/origin/main": "c7962fa6efefebc05c53db8f8fd9737f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/bdcb0bf8e72e91b491836a2164bf9698756926": "0980bd0461f45bcc2f9b9427785a1cba",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/8c290ea58d6403b97ff664d10436a63fa308dc": "f3df32cdc21d52878c4ea0463fa8086a",
".git/objects/11/cfc40b351e6ec37861ca84761180aec85cd554": "060afe46c6f2c03015051e53f6959b38",
".git/objects/18/e9450e01947806822b30e8ffbe6a8fe9b1a1cc": "2f8093ab3a448e481f5d0ad0870f3d4d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/0915f82b9a13094a83035d9acbab49c98af24d": "61c3b5f121bea5d021806504c318d049",
".git/objects/1f/203d35ed64ec34a37095dabe3a5dedea68b284": "e1dc9a860958004a2c1a4380daea177b",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/2b/86dcd6c76d676eb1e1e74a295c82838dcfbaa5": "37ce881280edd23a673d811c28f004bd",
".git/objects/2b/b32940209e2f70a9ee67e64656ecc1ae2909f9": "5ffc91dc62da7de65e8cd80e08f9bbe7",
".git/objects/2e/7e0c946d66deff2573da46562a801b26f3302c": "a13c90da7da809120d8f606fefd1d2db",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/49a2200163e132ebc046a0be46faf3b576a2b7": "1e915e32a440ffd79d65530c67fbfa26",
".git/objects/3c/400ee64d4f676c4c4a3ac746b1a5d7f0b51265": "4123deff6ec3533c22f1f0dbe98477f1",
".git/objects/3f/6b9af5044baf9f06f1c5d7888cbf037ff018bb": "6042c463cc9b25d03feed0633e35d909",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9b03dffc641d605b002fa2cdb453f611f6888e": "727651c6fa24937382eb3c2c6f0bd774",
".git/objects/48/9ec3fe212616a49419bc819f3ed4bc2fee4cc5": "6097ce30ddf2883929dfcdf7ef66eea4",
".git/objects/51/24c23c14a2c1ffe3a6d447bfbeaea184aac6bf": "283d8d3a9099a9cd2f0150c070f8eedc",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/e728dbdafc7abbf7226a10da70a4fe546e27b6": "345a47d25734e7e8c137a112d29cb091",
".git/objects/53/464d9ef8420e32cbac1d554fd987080ed3852b": "57ab27bfb485a7511923afe22c775b83",
".git/objects/59/358576e213791e99dbfe0fc7af4c423cee351a": "b883e225d5eaf280a36d999395c55733",
".git/objects/59/93080866913df83399374daf0fd6a7453aed78": "2dcb09e8c6b37d6052a23ca9add76441",
".git/objects/5c/a15bc2c0bc83ba6ffe7c1d93d4d4a0d4a27219": "48e850ef5953bb02d5878c31d27f1363",
".git/objects/5f/bbedd9eb8d2871bcd994b6dbe26cc77c5d50ff": "95024d1b229610f355e4e6de05b8be5e",
".git/objects/5f/e20abea1a361acfe0e5e3843ff68e51785bea6": "6b0c9d0cc776a94a51255134cf09d59f",
".git/objects/60/51cbab27847d5a6c1c51b772aa9d6fc3fb84dd": "676532dd3a1c7be21df7900d7f306ead",
".git/objects/61/1f8f84bb1d4138703a352bea055c6ecf040cfb": "8d56ba8f0c64e8b4d8e89f8f979acccc",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/f97b6ef419793271d07a949317adb44d30be13": "c0de2c4133cc551ee9098200f8c63970",
".git/objects/66/450af9a21d2142e8a0b6ee057fed8ff5627330": "b82ee1ebb4fa8509176f0e8555b1847b",
".git/objects/66/4c8a8d4d57b10392b5c652b47f2a5724f7ca5c": "f082f8e28c0aa49e330ba9665c47aa82",
".git/objects/68/61d6acd3cfc30210d6f50ac1811e09dcff9812": "231cd1c982467028b0769d4ea50623fe",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/d3ea3770b63240a79292c796e3f6cd165e4a43": "7ecb39f51e72120882a5d9d6ad7497ab",
".git/objects/71/6352426b8f31d65f2580719f74c077083c8623": "7aacef2ac61636e8d8c9aac48a68586c",
".git/objects/79/9a0753b7f5050126532477109181ff303d5b2e": "8d4895e29420021c244182e787e663ff",
".git/objects/79/abff38f49235152bf019767b43ad2fa301a1d3": "0cf51f14135b192097060d258c2ca939",
".git/objects/7d/7c4a44f0951ff5aaedc504a344ce43a00fe619": "a475f9716754353d220f828346cccffe",
".git/objects/7e/af2b8cb1739fe03919d9233a419f2d997b6b68": "01f9e08927183140547bac185e482334",
".git/objects/81/83b9d988cc2c33777c4efdeb8ca9325def5ae1": "eb5095645ec8e9ef5a687946b3934b0c",
".git/objects/83/9292e7cf4b9ab5107fda6d69a2f6e489509548": "df8abcc87c4910528d8c0fbc03f2ed82",
".git/objects/8c/d97b992767d3bc29c4f9ddc881023437db2abe": "bb5e98bdc8c6e5112bc1594d83ef9f98",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/92/3ba60d0a4343f58381203f6ddf0651e47b3942": "c53f385bb75bae097676a5aa625e1746",
".git/objects/9e/712c3c0d6e2606ddc583953c75bd3aeec38ecf": "e1c2496877e89c46cc4d0f6d63d50b79",
".git/objects/a1/77a90ee9532ecedf37146988c2635ef86bfe71": "d4cd24a6fe0686036844aceaae2f81b3",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/35577ee2a106ddfff8a88edefd0ca45d9a8593": "c8af21e4969f5f554e5baccdb8c21268",
".git/objects/b1/d572f2c755159df731bc838ec898d5640ca00e": "93cbe4e4d50e48167065c92e433626c6",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/176dc99c3d0f02cc0e038054f300eb3f638dbf": "7b43b15301595d68a67e239357523b9c",
".git/objects/b3/a82d13221b258f73cdd16f9bd9d96064ab99a8": "cd93ec0d8fe9e7f10e19474ea1e637af",
".git/objects/b5/38f270bd10a783e3e933ab1cd5011bee27728d": "3e22aac64de4e586f324a58df89dcdc2",
".git/objects/b6/906daf60ed3fe4a36ef403376e5935ca1eed56": "605ccc29f44dbc25b00a151635132985",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/a1d5412a4b2d53e54730de4af88e6bb6eab161": "78be08d27164681e5c0e2c021c130979",
".git/objects/be/251efaf7e92fc9ad32c357939177ebe4514589": "1e4432abee7928ed3fcbf3b51466b6e1",
".git/objects/c7/7840c884b844179b96edd0d9cfa12dffec3e3e": "85f14c9f668693ab75f390aa4f864e31",
".git/objects/cd/541926d5fe4318749c29fef4dac3176f9cc898": "3ed16560bde1aa26ba3d2aece3ef4759",
".git/objects/cd/939474915defa3a663635c67a69a3c05b2fe06": "61f231e39ae8765d2d2b0d155a3310b1",
".git/objects/cf/33b83ffa8f472ba7af0908246bc783a0d28751": "2f7f87386d998e52bd68881ee3c5fba5",
".git/objects/d1/4474be422c2fd22bb3495dd5e6f83f176ff73b": "9465599cae94de60d8e326540acde94f",
".git/objects/d1/a14509fa2a4c23dfa1e6191c16b0f2573f7994": "af38b1e8c89ea66ad8d87088c757ef6f",
".git/objects/d3/2f0846b0c96938f915f34c2d669733e34e5840": "7e5fc26e931639fd7e9b230fc5dc307d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/a121dd033b3634663cc4881e4863ff5ef8cdfd": "cef4c8f56778df7f64151bebf951779a",
".git/objects/e0/785f85d5423dbe5e2eb4294e3be4abbde083c1": "a14f2997e551ee64afb41f5ff135afef",
".git/objects/e3/c6c2c46bccbb6ad634260fd554db9b2052b22c": "0efda3d46a1eb6d21a0ca8d4f8048337",
".git/objects/e5/bb40235a6275d3af64fee8a294be40bc1bb5a2": "58189ab2597ae62bc4e53fd358049fb4",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/2903acdbcbb955e6416265b04e2b51ca3aa5bd": "58a2596fc9750447d181f2e01d474d36",
".git/objects/ea/42705763864fcd881dd7a545eaa522be67ac77": "7594bfa60ff2809c49e10e84d04fb755",
".git/objects/ec/ca30a4f63ecfc110867cfc4eacc5d2fddc1d1e": "520a89188b5bb65988ddc32587d639e2",
".git/objects/ed/ca8a186f356989b9ffcd905a9344c48523b8de": "93224082c0e1cfe3714cfa2defac9850",
".git/objects/ed/f1de899a0b1587f1e077233e92e2b082de55e6": "14ce5a47bdea29c3f9532f6512f63f73",
".git/objects/f2/c98c86d270c319d2d2f7a7329d56f5f36ea629": "e7d683db3a6a24f3a3ad52ed40fe5075",
".git/objects/f5/9cef2935c284f857cd399c726bc8f05a797b98": "74b36c4201b28491370addc2db88bc8e",
".git/objects/fd/ff89fe44be70292a19261a0a3403c80d29386b": "97b022fa252eb09514b47f2fe0c4086a",
".git/objects/ff/b1fe029df99808fcaddf654811c0151bd269b2": "8d0c45a8e87a45ecc23e60fd631a8e87",
".git/refs/heads/main": "89e4af096dfccf09fcca66223b160e10",
".git/refs/remotes/origin/main": "89e4af096dfccf09fcca66223b160e10",
"assets/AssetManifest.json": "8087d50a23465a8d03c45e6358ef9c55",
"assets/AssetManifest.smcbin": "a9341be28a23ba9a45409faedfcfc2a8",
"assets/assets/images/blog.png": "383501168390c3833d9c81843c33d566",
"assets/assets/images/connect/buy_me.svg": "87873ba2e2bbd305db569a3b04416535",
"assets/assets/images/connect/email-mails.svg": "9a86aafbdbac66ed40d1efaaaa508be8",
"assets/assets/images/connect/location.svg": "90d83c8f942c7b55a7d6e1ba86405234",
"assets/assets/images/connect/phone-call.svg": "a788fedce7b289ebadcca3c89ee94887",
"assets/assets/images/connect/whatsapp-black.svg": "b39ec5a5b563fd3b2a6e48baa6e065e1",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/develop.png": "723c47f15273f7013cacb03032b547c2",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/learn.png": "7827c9e2366da4aaeec20a4342b76953",
"assets/assets/images/projects/aby_seyara.png": "693bd4ac63bb1e849ace63eb557be6de",
"assets/assets/images/projects/attendance_app1.png": "2a0496a56cc9e129fa85c7788e48d4b9",
"assets/assets/images/projects/attendance_app2.png": "5ad8c1322e87d81ec278c8b5b5bbca72",
"assets/assets/images/projects/car-empire.png": "088e800d24c31c54d35581b03dbe5517",
"assets/assets/images/projects/cooperative.png": "7ed1bc392a044227c9a20ba9e4e6f946",
"assets/assets/images/projects/cylinder.png": "7545bbbc327fab860e391b96b73e9286",
"assets/assets/images/projects/nurseries.png": "cb8c8e52845679b1596cc042af71ed31",
"assets/assets/images/social/github.svg": "c3f1f5f1551becd97ed24b366405512a",
"assets/assets/images/social/gitlab.svg": "61ee419323c35fd391d483889f801cd7",
"assets/assets/images/social/gmail.svg": "e67c6af8237338b75bc64b81a1c7d096",
"assets/assets/images/social/linkedin.svg": "4f2bc978122ea69dc7033f2f60cb0fe5",
"assets/assets/images/social/medium.svg": "8e1f9bb03136e418eec157e1d4a65b0d",
"assets/assets/images/social/telegram.svg": "068d75c4f3f3bb8f5f39ba52e5136fd3",
"assets/assets/images/technology/c_plus.svg": "5be9bde46141498a7cfd4902b92133b1",
"assets/assets/images/technology/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/images/technology/express.svg": "c6bab64b183f96aa47077fd3db37afd0",
"assets/assets/images/technology/firebase.svg": "1a1dfb3fc45b0ecce09d117139133c02",
"assets/assets/images/technology/flutter-logo.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/images/technology/github.svg": "ce89173e3842fb91835a9cc8605a5ecc",
"assets/assets/images/technology/java.svg": "bcfad0f2c3e9c170d9e85e09a061d650",
"assets/assets/images/technology/logo-javascript.svg": "891a71b9a98f1d58491e1b06c4d356a2",
"assets/assets/images/technology/nodejs.svg": "9dfa0ae0af580979f374c33ad3c9d88c",
"assets/assets/images/technology/redux.svg": "aa0a337603611296524a666b62a9ff23",
"assets/assets/images/technology/swift.svg": "74ba2b9c367f7d68236f83aada87fb2e",
"assets/assets/images/ui_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/ui_icon.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/svg/mental_health.svg": "e53e080b4e995d86de82987bd359cf42",
"assets/assets/svg/mobile_ux.svg": "501942f7c90060a31e5758c3c0b53e84",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e4f2107fdc9d267678bef4a58e6ffb40",
"assets/NOTICES": "2eac8e7eda79c1e89dd77171d28843c5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "7c6183555860c3b2231ec357fc7ff484",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/55.png": "52f8c50993cd474f247815b5f790413f",
"icons/Icon-192.png": "cd649554337222c1868963cc22a5eb3b",
"icons/Icon-512.png": "62edd58b26e11dc6069d6c36f9f0e98b",
"icons/Icon-maskable-192.png": "130655f1a3ad9d4d5fc4955bfcadd3aa",
"icons/Icon-maskable-512.png": "7c6183555860c3b2231ec357fc7ff484",
"index.html": "814d35ceeeed8cf193d161b42b319c8b",
"/": "814d35ceeeed8cf193d161b42b319c8b",
"main.dart.js": "2eb2b3fa4b0c22bbc64e7048caf565a8",
"manifest.json": "4211e6b94cecb34317edf579f1a3d93a",
"version.json": "fffc5e60db8b1223fdc082afe7b217d6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
