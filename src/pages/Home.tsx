import { Link } from 'react-router-dom';
import { Shield, Hammer, Compass, TreePine, Pickaxe, Home as HomeIcon, Sun, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '鐢熷瓨',
    description: '浠庣涓€澶滅敓瀛樺埌鎺㈢储涓嬬晫锛屾帉鎻＄敓瀛樻墍闇€鐨勪竴鍒囨妧鑳藉拰鐭ヨ瘑銆?,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Hammer,
    title: '寤洪€?,
    description: '浠庣畝鏄撳簢鎶ゆ墍鍒板畯浼熷煄鍫★紝瀛︿範寤虹瓚璁捐鍜岃楗扮殑杩涢樁鎶€宸с€?,
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Compass,
    title: '鎺㈢储',
    description: '鎺㈢储鍚勭鐢熺墿缇ょ郴銆佺粨鏋勫拰鎶€鏈紝鍙戠幇 Minecraft 鏃犻檺鍙兘銆?,
    color: 'bg-sky-50 text-sky-600',
  },
];

const quickSteps = [
  { icon: TreePine, title: '閲囬泦鏈ㄦ潗', desc: '鎾告爲鑾峰彇鍩虹璧勬簮' },
  { icon: Pickaxe, title: '鍒朵綔宸ュ叿', desc: '鍚堟垚宸ヤ綔鍙颁笌鐭抽晲' },
  { icon: HomeIcon, title: '鎼缓搴囨姢鎵€', desc: '寤洪€犲畨鍏ㄨ繃澶滅殑鎴垮眿' },
  { icon: Shield, title: '瑁呭闃插叿', desc: '鍒朵綔鐩旂敳鎻愬崌闃插尽' },
  { icon: Sun, title: '杩庢帴鏂颁竴澶?, desc: '澶槼鍗囪捣缁х画鎺㈢储' },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-emerald-50/30 dark:from-zinc-950 dark:via-black dark:to-emerald-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-900/20" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:border-emerald-800/50 dark:bg-emerald-950/40 dark:text-emerald-400">
            <Pickaxe className="h-4 w-4" />
            Minecraft 鏂版墜蹇呰
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-7xl">
            寮€鍚綘鐨?            <span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
              鏂瑰潡鍐掗櫓
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-xl">
            浠庣涓€澶滅殑绱у紶姹傜敓鍒板缓閫犲睘浜庤嚜宸辩殑涓栫晫锛岃繖閲屾湁浣犻渶瑕佺殑鎵€鏈夌煡璇嗐€備竴姝ユ鏉ワ紝浣犱篃鍙互鎴愪负 Minecraft 澶у笀銆?          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/tutorials"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:scale-105 hover:bg-zinc-800 hover:shadow-xl dark:bg-white dark:text-zinc-900 dark:shadow-black/40 dark:hover:bg-zinc-100 active:scale-95"
            >
              寮€濮嬪涔?              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/links"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-7 py-3 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:scale-105 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 active:scale-95"
            >
              鏇村璧勬簮
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              涓夊ぇ鏍稿績鏂瑰悜
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              鏃犺浣犳兂鎴愪负鍐掗櫓瀹躲€佸缓绛戝笀杩樻槸宸ョ▼甯堬紝杩欓噷閮芥湁浣犻渶瑕佺殑鎸囧紩
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group cursor-pointer rounded-2xl border border-zinc-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/30"
              >
                <div className={`mb-5 inline-flex rounded-xl p-3 ${f.color}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start - First Night */}
      <section className="bg-zinc-50 py-24 dark:bg-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              棣栧鐢熷瓨閫熻
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              璺熺潃杩?5 姝ワ紝瀹夌ǔ搴﹁繃浣犵殑绗竴涓鏅?            </p>
          </div>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {quickSteps.map((step, i) => (
              <div key={step.title} className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm transition-all hover:shadow-md dark:bg-zinc-900">
                    <step.icon className="h-7 w-7 text-emerald-500" />
                  </div>
                  <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{step.title}</span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">{step.desc}</span>
                </div>
                {i < quickSteps.length - 1 && (
                  <ArrowRight className="hidden h-5 w-5 text-zinc-300 dark:text-zinc-700 sm:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/tutorials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              鏌ョ湅瀹屾暣鏁欑▼
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Preview */}
      <section className="bg-white py-24 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              鎺㈢储鏇村
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400">
              Minecraft 鐨勪笘鐣岃繙姣斾綘鎯宠薄鐨勬洿澶?            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '瀹樻柟 Wiki',
                desc: '鏌ユ壘鎵€鏈夋柟鍧椼€佺墿鍝佸拰鏈哄埗鐨勮缁嗚鏄?,
                emoji: '馃摉',
                url: 'https://minecraft.wiki',
              },
              {
                title: '绀惧尯璁哄潧',
                desc: '鍜屽叾浠栫帺瀹朵氦娴佸績寰楋紝鍒嗕韩浣犵殑鍒涗綔',
                emoji: '馃挰',
                url: 'https://www.mcbbs.net',
              },
              {
                title: '鍦ㄧ嚎宸ュ叿',
                desc: '绉嶅瓙鍦板浘銆佸悎鎴愯〃鏌ヨ绛夊疄鐢ㄥ伐鍏?,
                emoji: '馃洜',
                url: 'https://www.chunkbase.com',
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-black/30"
              >
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <h3 className="mb-1 font-semibold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/links"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600"
            >
              鏌ョ湅鍏ㄩ儴璧勬簮
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-zinc-50 py-12 dark:border-zinc-800 dark:bg-black">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Pickaxe className="h-5 w-5 text-emerald-500" />
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">MC 鏂版墜鎸囧崡</span>
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            鏈珯涓虹矇涓濆埗浣滅殑鏂版墜鎸囧缃戠珯锛屼笌 Mojang Studios 鏃犲叧銆侻inecraft 鏄?Mojang Studios 鐨勫晢鏍囥€?          </p>
        </div>
      </footer>
    </div>
  );
}
