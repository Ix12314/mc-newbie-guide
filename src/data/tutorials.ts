export interface TutorialStep {
  title: string;
  content: string;
  tip?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  category: 'survival' | 'crafting' | 'combat' | 'building' | 'redstone' | 'farming';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  description: string;
  image: string;
  steps: TutorialStep[];
}

export const tutorials: Tutorial[] = [
  {
    id: 'first-night',
    title: '绗竴澶滅敓瀛樻寚鍗?,
    category: 'survival',
    difficulty: 'beginner',
    duration: '15 鍒嗛挓',
    description: '瀛︿細鍦?Minecraft 鐨勭涓€涓鏅氬瓨娲讳笅鏉ワ紝浠庨噰闆嗘湪鏉愬埌寤洪€犲簢鎶ゆ墍鐨勫畬鏁存祦绋嬨€?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20first%20night%20survival%20shelter%20with%20torch%20and%20crafting%20table%20at%20sunset%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '閲囬泦鏈ㄦ潗', content: '鍑虹敓鍚庣珛鍗冲鎵炬爲鏈紝鐢ㄦ嫵澶达紙宸﹂敭锛夊嚮鎵撴爲骞茶幏鍙栨湪澶淬€傝嚦灏戦噰闆?4-5 涓師鏈紝杩欐槸浣犵敓瀛樼殑鍩虹煶銆?, tip: '鎸変綇宸﹂敭鍙互鎸佺画鎸栨帢锛屼笉闇€瑕佸弽澶嶇偣鍑汇€? },
      { title: '鍒朵綔宸ヤ綔鍙?, content: '鎵撳紑鐗╁搧鏍忥紙E閿級锛屽皢鍘熸湪鏀惧叆鍚堟垚鏍艰幏寰楁湪鏉裤€?涓湪鏉垮～婊″悎鎴愭牸鍗冲彲鍒朵綔宸ヤ綔鍙帮紝鏀剧疆鍒板湴涓婂彸閿墦寮€銆? },
      { title: '鍒朵綔宸ュ叿', content: '鐢ㄥ伐浣滃彴鍒朵綔鏈ㄦ锛?涓湪鏉跨珫鎺掞級锛岀劧鍚庡埗浣滄湪闀愩€傜敤鏈ㄩ晲鎸栨帢鐭冲ご鑾峰緱鍦嗙煶锛屽崌绾т负鐭冲埗宸ュ叿銆? },
      { title: '寤洪€犲簢鎶ゆ墍', content: '鐢ㄥ渾鐭虫垨鏈ㄦ澘鎼缓涓€涓?5脳5脳3 鐨勭畝鏄撴埧灞嬶紝纭繚瀹屽叏灏侀棴鍙暀涓€涓棬銆傚湪澧欎笂鏀剧疆鐏妸闃叉鎬墿鍒锋柊銆?, tip: '涓嶈蹇樹簡鍋氶棬锛佸惁鍒欐€墿浼氱洿鎺ヨ蛋杩涙潵銆? },
      { title: '鐔繃澶滄櫄', content: '澶滃箷闄嶄复鏃跺緟鍦ㄥ眿鍐咃紝鍙互鍦ㄥ伐浣滃彴鏃佸埗浣滄洿澶氬伐鍏峰拰鐗╁搧銆傜瓑寰呭お闃冲崌璧峰悗鍐嶅鍑烘帰绱€? },
    ],
  },
  {
    id: 'mining-basics',
    title: '鎸栫熆鍏ラ棬',
    category: 'survival',
    difficulty: 'beginner',
    duration: '20 鍒嗛挓',
    description: '瀛︿範楂樻晥鎸栫熆鐨勬妧宸э紝浠庡鎵剧熆娲炲埌鑾峰彇鍚勭鐭跨煶璧勬簮鐨勫畬鏁存寚鍗椼€?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20mining%20tunnel%20with%20diamond%20ore%20and%20torches%20underground%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '鍑嗗瑁呭', content: '鍒朵綔閾侀晲銆侀搧鍓戝拰瓒冲鐨勭伀鎶娿€傛惡甯﹂鐗╁拰涓€鎶婂鐢ㄩ晲瀛愶紝绌夸笂閾佺敳鏇村畨鍏ㄣ€? },
      { title: '閫夋嫨娣卞害', content: '鎸?F3 鏌ョ湅鍧愭爣锛孻=-59 闄勮繎閽荤煶鏈€澶氾紝Y=11 閫傚悎瀵绘壘鍚勭鐭跨煶銆傞伩寮€ Y=-60 浠ヤ笅鐨勫熀宀╁眰銆? },
      { title: '楸奸鎸栫熆娉?, content: '鍦ㄧ洰鏍囨繁搴︽寲涓€鏉′富閫氶亾锛屾瘡闅?鏍煎悜涓や晶鎸栨帢鍒嗘敮閫氶亾锛岃繖鏍峰彲浠ユ渶澶у寲鎺㈢储闈㈢Н锛屼笉閬楁紡鐭跨煶銆?, tip: '楸奸鎸栫熆鏄渶鏈夋晥鐨勬壘鐭挎柟寮忥紝铏界劧鏃犺亰浣嗘晥鐜囨渶楂樸€? },
      { title: '璇嗗埆鐭跨煶', content: '鐓ょ熆鐭筹紙榛戠偣锛夈€侀搧鐭匡紙绫宠壊鏂戠偣锛夈€侀噾鐭匡紙閲戣壊鏂戠偣锛夈€佺孩鐭筹紙绾㈣壊鏂戠偣锛夈€侀捇鐭筹紙闈掕壊鏂戠偣锛夈€佺豢瀹濈煶锛堢豢鑹叉枒鐐癸紝浠呭湪灞卞湴鐢熺墿缇ょ郴锛夈€? },
      { title: '瀹夊叏杩斿洖', content: '鑳屽寘蹇弧鏃惰繑鍥炲湴闈€傞亣鍒板博娴嗘椂灏忓績鎸栨帢锛屾案杩滀笉瑕佹寲鑴氫笅鐨勬柟鍧椼€?, tip: '鍦ㄥ博娴嗘梺鍊掓按鍙互灏嗗博娴嗗彉涓洪粦鏇滅煶锛屾棦瀹夊叏鍙堣兘鑾峰緱鏉愭枡銆? },
    ],
  },
  {
    id: 'crafting-guide',
    title: '鍚堟垚绯荤粺璇﹁В',
    category: 'crafting',
    difficulty: 'beginner',
    duration: '15 鍒嗛挓',
    description: '浜嗚В Minecraft 鍚堟垚绯荤粺鐨勫伐浣滃師鐞嗭紝鎺屾彙浠庡熀纭€宸ュ叿鍒板鏉傛満姊扮殑鍚堟垚鏂规硶銆?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20crafting%20table%20with%20tools%20and%20items%20being%20crafted%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '鐞嗚В鍚堟垚鏍?, content: '鐗╁搧鏍忔湁 2脳2 鍚堟垚鏍硷紝宸ヤ綔鍙版彁渚?3脳3 鍚堟垚鏍笺€傚ぇ閮ㄥ垎鐗╁搧闇€瑕佸伐浣滃彴鍒朵綔銆傛潗鏂欐憜鏀句綅缃喅瀹氫簡鍚堟垚缁撴灉銆? },
      { title: '鍩虹宸ュ叿鍚堟垚', content: '3涓潗鏂?2鏈ㄦ鍙互鍚堟垚宸ュ叿銆傞《閮ㄦ斁鏉愭枡锛屼腑闂村拰搴曢儴鏀炬湪妫嶃€傚墤鍒欐槸2鏉愭枡+1鏈ㄦ绔栨帓銆? },
      { title: '鐩旂敳鍚堟垚', content: '澶寸洈鐢?鏉愭枡U褰㈡帓鍒楋紝鑳哥敳鐢?鏉愭枡鍥翠竴鍦堬紝鎶よ吙鐢?鏉愭枡U褰?搴曢儴濉弧锛岄澊瀛愮敤4鏉愭枡鍒嗕袱缁勭珫鎺掋€? },
      { title: '閰嶆柟涔?, content: '鐐瑰嚮宸ヤ綔鍙扮晫闈㈢殑缁胯壊涔︽湰鍥炬爣鎵撳紑閰嶆柟涔︼紝鍙互鐪嬪埌鎵€鏈夊凡瑙ｉ攣鐨勫悎鎴愰厤鏂癸紝鐐瑰嚮鍗冲彲鑷姩鎽嗘斁鏉愭枡銆?, tip: '閰嶆柟涔︽槸浣犳渶濂界殑鏈嬪弸锛岄亣鍒颁笉浼氬悎鎴愮殑涓滆タ鍏堟煡閰嶆柟涔︼紒' },
    ],
  },
  {
    id: 'combat-basics',
    title: '鎴樻枟鍩虹',
    category: 'combat',
    difficulty: 'beginner',
    duration: '10 鍒嗛挓',
    description: '瀛︿範 Minecraft 涓殑鎴樻枟鏈哄埗锛屽寘鎷敾鍑汇€侀槻寰″拰闈㈠鍚勭鏁屽鐢熺墿鐨勭瓥鐣ャ€?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20player%20fighting%20zombie%20with%20sword%20and%20shield%20at%20night%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '鏀诲嚮鏈哄埗', content: '宸﹂敭鏀诲嚮锛屼笉鍚屾鍣ㄤ激瀹充笉鍚屻€傛敾鍑绘湁鍐峰嵈鏃堕棿锛岀瓑鍑嗘槦涓嬬殑鏀诲嚮鎸囩ず鍣ㄦ弧鍚庡啀鏀诲嚮浼ゅ鏈€楂樸€? },
      { title: '鐩剧墝闃插尽', content: '鍙抽敭涓剧浘鍙互鏍兼尅澶ч儴鍒嗘敾鍑伙紝鍖呮嫭鑻﹀姏鎬曠殑鐖嗙偢銆傚湪鍓墜瑁呭鐩剧墝鍙互鍚屾椂浣跨敤涓绘墜姝﹀櫒銆?, tip: '鍚埌鑻﹀姏鎬曞樁鍢跺０绔嬪埢涓剧浘锛? },
      { title: '璁よ瘑鏁屼汉', content: '鍍靛案锛堣繎鎴橈級銆侀楂咃紙杩滅▼锛夈€佽嫤鍔涙€曪紙鐖嗙偢锛夈€佽湗铔涳紙鏀€鐖級銆佹湯褰变汉锛堣娉ㄨ鍚庢敾鍑伙級銆傛瘡绉嶆€墿鏈変笉鍚岀殑搴斿绛栫暐銆? },
      { title: '鎴樻枟鎶€宸?, content: '淇濇寔绉诲姩锛屽埄鐢ㄥ湴褰紭鍔裤€傚湪姘撮潰涓婃敾鍑讳細鍑忛€燂紝楂樺鎵撲綆澶勬湁浼樺娍銆傛敾鍑诲悗蹇€熷悗鎾ゅ彲浠ラ伩鍏嶅弽鍑汇€? },
    ],
  },
  {
    id: 'building-tips',
    title: '寤虹瓚鍏ラ棬鎶€宸?,
    category: 'building',
    difficulty: 'beginner',
    duration: '20 鍒嗛挓',
    description: '浠庣畝鏄撳皬灞嬪埌缇庤寤虹瓚鐨勮繘闃朵箣璺紝瀛︿範閰嶈壊銆佺粨鏋勫拰缁嗚妭瑁呴グ鐨勬牳蹇冩妧宸с€?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20beautiful%20medieval%20house%20with%20garden%20and%20flowers%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '閫夋嫨鏉愭枡', content: '涓嶈鍙敤涓€绉嶆柟鍧椼€傛贩鍚堜娇鐢ㄧ煶澶淬€佹湪鏉裤€佸渾鐭崇瓑2-3绉嶄富鏉愭枡锛屾惌閰嶆ゼ姊€佸崐鐮栧鍔犲眰娆℃劅銆? },
      { title: '灞嬮《璁捐', content: '鐢ㄦゼ姊柟鍧楀仛鏂滃眿椤舵瘮骞虫澘灞嬮《缇庤寰楀銆傚眿妾愪几鍑?-2鏍煎彲浠ュ鍔犵珛浣撴劅锛屽姞鍏ヤ笉鍚岄鑹茬殑灞嬮《灞傛鏇翠赴瀵屻€? },
      { title: '绐楁埛涓庨棬', content: '鐢ㄧ幓鐠冩澘浠ｆ浛鐜荤拑鍧楁洿绮捐嚧銆傜獥妗嗙敤妤兼鎴栧鏂瑰潡瑁呴グ锛岄棬涓や晶鍔犳煴瀛愭垨娲绘澘闂ㄥ仛瑁呴グ銆?, tip: '鍦ㄧ獥鎴蜂笂鏂规斁缃ゼ姊彲浠ュ仛鍑虹獥妾愭晥鏋溿€? },
      { title: '鏅缁垮寲', content: '鎴垮墠绉嶈姳绉嶆爲锛屽皬璺敤鑽夊緞鎴栫矖娉ュ緞锛屽洿鏍忓垝鍒嗗尯鍩熴€傚姞鍏ユ睜濉樸€佺伅鍏夌瓑缁嗚妭璁╁缓绛戞洿鏈夌敓娲绘皵鎭€? },
    ],
  },
  {
    id: 'redstone-intro',
    title: '绾㈢煶鐢佃矾鍏ラ棬',
    category: 'redstone',
    difficulty: 'intermediate',
    duration: '30 鍒嗛挓',
    description: '浜嗚В绾㈢煶绯荤粺鐨勫熀鏈師鐞嗭紝瀛︿細鍒朵綔绠€鍗曠殑鑷姩闂ㄣ€侀櫡闃卞拰鍐滃満瑁呯疆銆?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20redstone%20circuit%20with%20pistons%20and%20repeaters%20glowing%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '绾㈢煶绮変笌淇″彿', content: '绾㈢煶绮夊彲浠ヤ紶杈撲俊鍙凤紝鏈€杩?5鏍笺€備俊鍙蜂粠鐢垫簮锛堟寜閽€佹媺鏉嗐€佸帇鍔涙澘锛夊嚭鍙戯紝娌跨孩鐭崇矇浼犳挱鍒扮敤鐢靛櫒锛堟椿濉炪€侀棬銆佺孩鐭崇伅绛夛級銆? },
      { title: '绾㈢煶鐏妸', content: '绾㈢煶鐏妸鏄寔缁數婧愶紝涔熷彲浠ュ仛闈為棬锛堜俊鍙峰弽杞級銆傝创鍦ㄦ柟鍧椾晶闈㈠彲浠ヤ负璇ユ柟鍧楀厖鑳姐€? },
      { title: '涓户鍣?, content: '涓户鍣ㄥ彲浠ュ欢闀夸俊鍙蜂紶杈撹窛绂伙紙姣?鏍兼斁涓€涓級锛屼篃鍙互澧炲姞1-4鍒诲欢杩熴€傚彸閿皟鑺傚欢杩熴€?, tip: '涓户鍣ㄥ彧鑳藉崟鍚戜紶杈擄紝鏀剧疆鏃舵敞鎰忔柟鍚戯紒' },
      { title: '鍒朵綔鑷姩闂?, content: '鍦ㄩ棬涓や晶鍚勬斁涓€涓矘鎬ф椿濉烇紝闂ㄥ墠鏀惧帇鍔涙澘杩炴帴绾㈢煶銆傝俯涓婂帇鍔涙澘鏃舵椿濉炴敹鍥炴墦寮€閫氶亾锛岀寮€鏃惰嚜鍔ㄥ叧闂€? },
      { title: '娲诲涓庣矘鎬ф椿濉?, content: '鏅€氭椿濉炴帹鍑哄悗涓嶆敹鍥炴柟鍧楋紝绮樻€ф椿濉炲彲浠ユ媺鍥炴柟鍧椼€傞厤鍚堢孩鐭虫椂搴忓彲浠ュ仛寰堝鏈夎叮鐨勬満姊般€? },
    ],
  },
  {
    id: 'farming-guide',
    title: '鍐滀笟绉嶆鎸囧崡',
    category: 'farming',
    difficulty: 'beginner',
    duration: '15 鍒嗛挓',
    description: '瀛︿範绉嶆灏忛害銆佽儭钀濆崪銆佸湡璞嗙瓑浣滅墿锛屽缓绔嬬ǔ瀹氱殑椋熺墿鏉ユ簮銆?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20wheat%20farm%20with%20water%20canal%20and%20fences%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '鍑嗗閿勫ご', content: '鍒朵綔鐭抽攧鎴栭搧閿勶紝瀵硅崏鍦版垨娉ュ湡鍙抽敭鍙互缈昏€曚负鍐滅敯銆傞攧澶翠笉闇€瑕佷竴鐩存寔鏈夛紝缈昏€曞悗鍙互鍒囨崲鍏朵粬宸ュ叿銆? },
      { title: '姘存簮瑙勫垝', content: '姘村彲浠ョ亴婧?鏍煎唴鐨勫啘鐢般€傚湪 9脳9 鐨勫啘鐢颁腑蹇冩斁涓€鏍兼按锛屽彲浠ョ亴婧夋墍鏈夎€曞湴銆?, tip: '姘存簮涓婃柟鏀惧崐鐮栧彲浠ラ槻姝㈡按琚剰澶栫牬鍧忋€? },
      { title: '绉嶆浣滅墿', content: '鎵嬫寔绉嶅瓙鍙抽敭鐐瑰嚮鑰曞湴绉嶆銆傚皬楹︾瀛愭潵鑷墦鑽夛紝鑳¤悵鍗滃拰鍦熻眴鏉ヨ嚜鏉戝簞鎴栧兊灏告帀钀姐€傞绮夊彲浠ュ偓鐔熶綔鐗┿€? },
      { title: '鏀惰幏涓庡啀绉?, content: '浣滅墿瀹屽叏闀垮ぇ鍚庡乏閿敹鍓诧紝浼氭帀钀戒綔鐗╁拰绉嶅瓙銆傜暀涓€浜涚瀛愮户缁妞嶏紝褰㈡垚寰幆銆傝嚜鍔ㄥ寲鍐滃満鍙互鐢ㄦ紡鏂楁敹闆嗐€? },
    ],
  },
  {
    id: 'nether-guide',
    title: '涓嬬晫鎺㈢储鎸囧崡',
    category: 'survival',
    difficulty: 'intermediate',
    duration: '25 鍒嗛挓',
    description: '韪忓叆涓嬬晫缁村害鐨勫畬鏁存寚鍗楋紝浠庡缓閫犱紶閫侀棬鍒板畨鍏ㄦ帰绱㈠湴鐙辫埇鐨勪笅鐣屼笘鐣屻€?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20nether%20portal%20with%20purple%20glow%20in%20overworld%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '寤洪€犱紶閫侀棬', content: '鐢?10-14 涓粦鏇滅煶鎼缓 4脳5 鐨勯棬妗嗭紙鍥涜鍙渷鐣ワ級锛岀敤鎵撶伀鐭崇偣鐕冮棬妗嗗唴閮ㄥ嵆鍙縺娲讳笅鐣屼紶閫侀棬銆?, tip: '涓嬬晫鍧愭爣涓庝富涓栫晫鏄?1:8 鐨勬瘮渚嬶紝鍦ㄤ笅鐣岃蛋1鏍肩瓑浜庝富涓栫晫8鏍笺€? },
      { title: '蹇呭瑁呭', content: '閾佺敳鎴栭捇鐭崇敳銆侀搧鍓戙€佸紦鍜岀銆侀噾闈达紙闃叉鐚伒鏀诲嚮锛夈€侀鐗┿€佸缓绛戞柟鍧椼€佹墦鐏煶锛堥噸鏂扮偣鐕冧紶閫侀棬锛夈€? },
      { title: '涓嬬晫鐢熺墿', content: '鐚伒锛堢┛閲戣涓珛锛夈€佸兊灏哥尓鐏碉紙涓嶄富鍔ㄦ敾鍑伙級銆佹伓榄傦紙鍙戝皠鐏悆锛夈€佺儓鐒颁汉锛堣繙绋嬬伀鐞冿級銆佹湯褰变汉銆備繚鎸佸喎闈欙紝閬垮厤鍚屾椂鎯规€掑涓晫浜恒€? },
      { title: '瀵绘壘鍫″瀿', content: '涓嬬晫瑕佸鍖呭惈鐑堢劙浜哄拰鍑嬬伒楠烽珔锛屾槸鑾峰彇鐑堢劙妫掑拰鍑嬬伒楠烽珔澶寸殑鏉ユ簮銆傚牎鍨掗仐杩规湁鐚伒鍜屾洿濂界殑鎴樺埄鍝併€? },
      { title: '瀹夊叏杩斿洖', content: '濮嬬粓璁颁綇浼犻€侀棬浣嶇疆锛屽湪浼犻€侀棬鏃佸缓绔嬪畨鍏ㄥ尯銆傚甫濂芥墦鐏煶浠ラ槻浼犻€侀棬琚伓榄傜伀鐞冪唲鐏€? },
    ],
  },
  {
    id: 'enchanting',
    title: '闄勯瓟绯荤粺鍏ラ棬',
    category: 'crafting',
    difficulty: 'intermediate',
    duration: '20 鍒嗛挓',
    description: '瀛︿範浣跨敤闄勯瓟鍙颁负瑁呭娣诲姞榄旀硶鏁堟灉锛屽ぇ骞呮彁鍗囨垬鏂楀拰閲囬泦鏁堢巼銆?,
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minecraft%20enchanting%20table%20with%20bookshelves%20and%20glowing%20runes%20pixel%20art%20style&image_size=landscape_16_9',
    steps: [
      { title: '鍒朵綔闄勯瓟鍙?, content: '4涓粦鏇滅煶+2涓捇鐭?1鏈功鍚堟垚闄勯瓟鍙般€傛斁缃悗闇€瑕佸懆鍥?5涓功鏋讹紙5脳5涓┖3脳3锛夋墠鑳借揪鍒版渶楂?0绾ч檮榄斻€? },
      { title: '鑾峰彇缁忛獙', content: '鍑绘潃鎬墿銆佹寲鐭裤€佸喍鐐笺€佷氦鏄撻兘鑳借幏寰楃粡楠屻€傞檮榄旀秷鑰楃粡楠岀瓑绾э紝浣嗕笉浼氭秷鑰楁墍鏈夌粡楠岀偣銆? },
      { title: '閫夋嫨闄勯瓟', content: '鏀惧叆瑁呭鍚庢樉绀?涓€夐」锛屾瘡涓渶瑕佷笉鍚岀瓑绾с€傞珮绾ч檮榄旈渶瑕佹洿澶氫功鏋跺拰鏇撮珮绛夌骇銆傜敤闈掗噾鐭冲彲浠ラ檷浣庣粡楠屾秷鑰椼€? },
      { title: '甯哥敤闄勯瓟', content: '鏁堢巼锛堝姞蹇寲鎺橈級銆佽€愪箙锛堝欢闀垮鍛斤級銆佷繚鎶わ紙鍑忓皯浼ゅ锛夈€侀攱鍒╋紙澧炲姞鏀诲嚮锛夈€備紭鍏堢粰闀愬瓙闄勬晥鐜囷紝鐩旂敳闄勪繚鎶ゃ€?, tip: '闄勯瓟鏄殢鏈虹殑锛屼笉婊℃剰鍙互鐢ㄧ爞杞Щ闄ら檮榄旈噸鏂伴檮銆? },
    ],
  },
];

export const categoryLabels: Record<Tutorial['category'], string> = {
  survival: '鐢熷瓨',
  crafting: '鍚堟垚',
  combat: '鎴樻枟',
  building: '寤虹瓚',
  redstone: '绾㈢煶',
  farming: '鍐滀笟',
};

export const difficultyLabels: Record<Tutorial['difficulty'], string> = {
  beginner: '鍏ラ棬',
  intermediate: '杩涢樁',
  advanced: '楂樼骇',
};

export const difficultyColors: Record<Tutorial['difficulty'], string> = {
  beginner: 'bg-green-100 text-green-700',
  intermediate: 'bg-amber-100 text-amber-700',
  advanced: 'bg-red-100 text-red-700',
};
