export interface LinkItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'official' | 'community' | 'tools' | 'media';
}

export const linkCategories = {
  official: { label: '瀹樻柟璧勬簮', description: '鏉ヨ嚜 Mojang 鍜?Minecraft 瀹樻柟鐨勬潈濞佽祫鏂? },
  community: { label: '绀惧尯璧勬簮', description: '娲昏穬鐨勪腑鏂?Minecraft 绀惧尯涓庤鍧? },
  tools: { label: '瀹炵敤宸ュ叿', description: '鎻愬崌娓告垙浣撻獙鐨勫疄鐢ㄥ伐鍏峰拰杈呭姪杞欢' },
  media: { label: '濯掍綋璧勮', description: '鑾峰彇 Minecraft 鏈€鏂拌祫璁拰鏀荤暐鐨勬笭閬? },
} as const;

export const links: LinkItem[] = [
  {
    id: 'minecraft-net',
    title: 'Minecraft 瀹樼綉',
    description: 'Minecraft 瀹樻柟缃戠珯锛岃幏鍙栨渶鏂扮増鏈俊鎭拰瀹樻柟鍏憡銆?,
    url: 'https://www.minecraft.net',
    category: 'official',
  },
  {
    id: 'minecraft-wiki',
    title: 'Minecraft Wiki',
    description: '鏈€鍏ㄩ潰鐨?Minecraft 鐧剧鍏ㄤ功锛屾兜鐩栨墍鏈夋柟鍧椼€佺墿鍝佸拰鏈哄埗璇﹁В銆?,
    url: 'https://minecraft.wiki',
    category: 'official',
  },
  {
    id: 'feedback',
    title: 'Minecraft 鍙嶉涓績',
    description: '鎻愪氦 Bug 鎶ュ憡鍜屽姛鑳藉缓璁紝鍙備笌 Minecraft 鐨勬敼杩涖€?,
    url: 'https://feedback.minecraft.net',
    category: 'official',
  },
  {
    id: 'mcbbs',
    title: 'MCBBS 鎴戠殑涓栫晫涓枃璁哄潧',
    description: '鏈€澶х殑涓枃 Minecraft 绀惧尯锛屽垎浜ā缁勩€佸湴鍥惧拰鏉愯川鍖呫€?,
    url: 'https://www.mcbbs.net',
    category: 'community',
  },
  {
    id: 'mcbedocn',
    title: '鎴戠殑涓栫晫涓枃绔?,
    description: '鎻愪緵 Minecraft 鏂伴椈銆佹暀绋嬪拰璧勬簮涓嬭浇鐨勭患鍚堟€т腑鏂囩ぞ鍖恒€?,
    url: 'https://www.mcbedocn.com',
    category: 'community',
  },
  {
    id: 'hypixel',
    title: 'Hypixel 鏈嶅姟鍣?,
    description: '鍏ㄧ悆鏈€澶х殑 Minecraft 灏忔父鎴忔湇鍔″櫒锛屾彁渚涘绉嶈叮鍛崇帺娉曘€?,
    url: 'https://hypixel.net',
    category: 'community',
  },
  {
    id: 'chunkbase',
    title: 'Chunkbase',
    description: '绉嶅瓙鍦板浘鏌ョ湅鍣紝杈撳叆绉嶅瓙鍗冲彲鏌ョ湅鍦板舰鍜岀粨鏋勫垎甯冦€?,
    url: 'https://www.chunkbase.com',
    category: 'tools',
  },
  {
    id: 'crafting-guide',
    title: '鍦ㄧ嚎鍚堟垚琛?,
    description: '鍙鍖栧悎鎴愰厤鏂规煡璇㈠伐鍏凤紝蹇€熸壘鍒颁换浣曠墿鍝佺殑鍚堟垚鏂规硶銆?,
    url: 'https://www.minecraftcrafting.info',
    category: 'tools',
  },
  {
    id: 'planetminecraft',
    title: 'Planet Minecraft',
    description: '鍒嗕韩鍜屼笅杞界毊鑲ゃ€佸湴鍥俱€佹潗璐ㄥ寘鍜屾ā缁勭殑鍒涙剰绀惧尯銆?,
    url: 'https://www.planetminecraft.com',
    category: 'tools',
  },
  {
    id: 'minecraft-youtube',
    title: 'Minecraft YouTube',
    description: 'Minecraft 瀹樻柟 YouTube 棰戦亾锛屽畼鏂归鍛婄墖鍜屾洿鏂板睍绀恒€?,
    url: 'https://www.youtube.com/minecraft',
    category: 'media',
  },
  {
    id: 'minecraft-reddit',
    title: 'r/Minecraft',
    description: 'Reddit 涓婄殑 Minecraft 绀惧尯锛屽垎浜綔鍝佸拰鍒涙剰寤虹瓚銆?,
    url: 'https://www.reddit.com/r/Minecraft',
    category: 'media',
  },
  {
    id: 'minecraft-twitter',
    title: 'Minecraft X',
    description: '鍏虫敞 Minecraft 瀹樻柟绀句氦璐﹀彿锛岃幏鍙栧疄鏃舵洿鏂板拰绀惧尯浜掑姩銆?,
    url: 'https://x.com/Minecraft',
    category: 'media',
  },
];
