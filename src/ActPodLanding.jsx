import React from "react";

const contactEmail = "contact.us@actpodapp.com";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const PrimaryButton = ({ children, href }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
  >
    {children}
  </a>
);

const SecondaryButton = ({ children, href }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center rounded-2xl border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-black/5"
  >
    {children}
  </a>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-800 shadow-sm ring-1 ring-black/5">
    {children}
  </span>
);

const SectionTitle = ({ eyebrow, title, desc }) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-sm font-semibold text-amber-600">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-normal text-gray-950 sm:text-4xl">
      {title}
    </h2>
    <p className="mt-4 text-base leading-7 text-gray-600">{desc}</p>
  </div>
);

const CheckItem = ({ children }) => (
  <li className="flex gap-3">
    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-amber-400 text-xs font-bold text-white">
      ✓
    </span>
    <span className="leading-7 text-gray-700">{children}</span>
  </li>
);

const Nav = () => (
  <header className="sticky top-0 z-40 border-b border-black/10 bg-white/85 backdrop-blur">
    <Container className="flex h-16 items-center justify-between">
      <a href="#" className="flex items-center gap-2" aria-label="ActPod 首頁">
        <img src="/assets/actpod-text.png" alt="ActPod" className="h-8 w-auto" />
      </a>
      <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
        <a href="#paid-podcast" className="hover:text-black">
          付費解鎖限定 Podcast
        </a>
        <a href="#podcoin" className="hover:text-black">
          PodCoin
        </a>
        <a href="#podcast-room" className="hover:text-black">
          Podcast 陪聽房
        </a>
        <a href="#partner" className="hover:text-black">
          上架合作
        </a>
      </nav>
      <div className="hidden md:block">
        <PrimaryButton href="#download">免費下載</PrimaryButton>
      </div>
    </Container>
  </header>
);

const ProductPill = ({ icon, title, desc }) => (
  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm">
    <div className="mb-3 text-2xl">{icon}</div>
    <h3 className="font-semibold text-gray-950">{title}</h3>
    <p className="mt-1 text-sm leading-6 text-gray-600">{desc}</p>
  </div>
);

const FeatureShowcase = () => (
  <div className="relative mt-6 min-h-[390px]">
    <div className="absolute left-1/2 top-2 z-0 w-48 -translate-x-1/2 rounded-[2rem] border border-black/10 bg-white p-3 shadow-2xl sm:w-56">
      <div className="mx-auto mb-3 h-5 w-20 rounded-full bg-black/10" />
      <div className="rounded-[1.5rem] bg-black p-4 text-white">
        <p className="text-xs text-white/55">限定 Podcast</p>
        <p className="mt-2 text-lg font-bold">內容解鎖</p>
        <div className="mt-5 h-2 rounded-full bg-white/15">
          <div className="h-2 w-3/4 rounded-full bg-amber-400" />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2">
          <span className="h-10 rounded-xl bg-white/10" />
          <span className="h-10 rounded-xl bg-amber-400/90" />
          <span className="h-10 rounded-xl bg-white/10" />
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-2xl bg-amber-50 p-3">
          <p className="text-[11px] font-semibold text-gray-500">貼圖</p>
          <img
            src="/assets/mascot-teary.png"
            alt=""
            className="mx-auto mt-1 h-12 w-12 object-contain"
          />
        </div>
        <div className="rounded-2xl bg-amber-50 p-3">
          <p className="text-[11px] font-semibold text-gray-500">門票</p>
          <div className="mx-auto mt-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
            <img src="/assets/podcoin.png" alt="" className="h-8 w-8" />
          </div>
        </div>
      </div>
    </div>

    <div className="absolute left-0 top-8 z-20 w-40 rounded-2xl border border-black/10 bg-white p-4 shadow-lg sm:w-44">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg">
        🎧
      </div>
      <p className="mt-3 text-sm font-bold text-gray-950">解鎖限定 Podcast</p>
      <p className="mt-1 text-xs leading-5 text-gray-600">
        購買解鎖後可在APP收聽限定內容
      </p>
    </div>

    <div className="absolute right-0 top-20 z-20 w-40 rounded-2xl border border-black/10 bg-white p-4 shadow-lg sm:w-44">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg">
        💬
      </div>
      <p className="mt-3 text-sm font-bold text-gray-950">傳送專屬貼圖</p>
      <p className="mt-1 text-xs leading-5 text-gray-600">
        用 PodCoin 傳送專屬貼圖
      </p>
    </div>

    <div className="absolute bottom-12 left-3 z-20 w-40 rounded-2xl border border-black/10 bg-white p-4 shadow-lg sm:w-44">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-lg">
        🎟
      </div>
      <p className="mt-3 text-sm font-bold text-gray-950">陪聽房門票</p>
      <p className="mt-1 text-xs leading-5 text-gray-600">
        進入即時互動房間
      </p>
    </div>

    <div className="absolute bottom-4 right-4 z-20 w-40 rounded-2xl border border-black/10 bg-black p-4 text-white shadow-lg sm:w-44">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
        🎙
      </div>
      <p className="mt-3 text-sm font-bold">陪聽房互動</p>
      <p className="mt-1 text-xs leading-5 text-white/65">
        與 Podcaster 一起聽 Podcast 同歡
      </p>
    </div>

    <div className="absolute left-1/2 top-1/10 z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-white px-3 py-2 text-xs font-bold text-gray-900 shadow-lg sm:flex">
      <img src="/assets/podcoin.png" alt="" className="h-5 w-5" />
      兌換與解鎖
    </div>

    <div className="absolute left-10 top-56 z-0 hidden h-16 w-16 rounded-full border border-amber-200 bg-white/60 shadow-sm sm:block" />
    <div className="absolute right-10 top-3 z-0 hidden h-14 w-14 rounded-full border border-amber-200 bg-white/60 shadow-sm sm:block" />
    <div className="absolute bottom-32 right-24 z-0 hidden h-14 w-14 rounded-full border border-amber-200 bg-white/60 shadow-sm sm:block" />
  </div>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-amber-100 via-white to-white py-16 sm:py-20">
    <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
      <div>
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <Badge>付費解鎖限定內容</Badge>
          <Badge>App 內互動功能解鎖</Badge>
          <Badge>陪聽房入場券</Badge>
        </div>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl">
          <span className="block">解鎖付費 Podcast，</span>
          <span className="block sm:inline">用 PodCoin</span>{" "}
          <span className="block sm:inline">開啟更多互動</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
          互動式 Podcast 社群平台。在 ActPod 可以購買解鎖限定 Podcast 內容，也可以使用
          PodCoin 傳送專屬貼圖與進入 Podcast 陪聽房和 Podcaster 互動同歡。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton href="#paid-podcast">了解購買方式</PrimaryButton>
          <SecondaryButton href="#podcoin">PodCoin 可以做什麼</SecondaryButton>
        </div>
        <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
          <ProductPill icon="🎧" title="限定 Podcast 內容" desc="購買後於 App 內收聽限定 Podcast內容。" />
          <ProductPill icon="💬" title="專屬貼圖" desc="使用 PodCoin 傳送專屬貼圖。" />
          <ProductPill icon="🎟" title="陪聽房門票" desc="兌換陪聽房門票與 Podcaster 一起同歡。" />
        </div>
      </div>

      <div className="relative min-h-[540px]">
        <div className="absolute inset-x-6 bottom-0 h-72 rounded-[2rem] bg-amber-200/50 blur-3xl" />
        <div className="relative mx-auto max-w-[560px] rounded-[2rem] border border-amber-200 bg-white p-4 shadow-2xl sm:p-5">
          <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-amber-50 via-white to-amber-100 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-amber-700">ActPod App</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-950">
                  一個 App，多種互動
                </h2>
              </div>
              <div className="flex flex-shrink-0 items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-gray-900 shadow-sm">
                <img src="/assets/podcoin.png" alt="" className="h-5 w-5" />
                PodCoin
              </div>
            </div>
            <FeatureShowcase />
          </div>
        </div>
        <img
          src="/assets/mascot-phone.png"
          alt=""
          className="pointer-events-none absolute -bottom-14 -right-12 z-0 w-36 max-w-[34vw] drop-shadow-xl sm:-bottom-16 sm:-right-14 sm:w-48 lg:-right-16"
        />
      </div>
    </Container>
  </section>
);

const PaidPodcast = () => (
  <section id="paid-podcast" className="bg-white py-16 sm:py-20">
    <Container>
      <SectionTitle
        eyebrow="付費解鎖限定 Podcast"
        title="輕鬆解鎖限定 Podcast"
        desc="在 APP 以及網頁輕鬆購買限定內容。購買完成後，即可在 ActPod App 內永久收聽完整限定 Podcast。"
      />
      <div className="mt-12 grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-100 bg-amber-50 p-6">
          {[
            "left-6 top-8 h-9 w-9 rotate-[-18deg] opacity-80",
            "right-8 top-14 h-12 w-12 rotate-[16deg] opacity-70",
            "left-10 bottom-20 h-11 w-11 rotate-[22deg] opacity-75",
            "right-10 bottom-10 h-8 w-8 rotate-[-10deg] opacity-80",
            "left-1/2 top-4 h-7 w-7 rotate-[8deg] opacity-60",
          ].map((className) => (
            <img
              key={className}
              src="/assets/podcoin.png"
              alt=""
              className={`pointer-events-none absolute z-0 ${className}`}
            />
          ))}
          <img
            src="/assets/limited-podcast-screen.jpg"
            alt="限定 Podcast 購買與收聽畫面"
            className="relative z-10 mx-auto max-h-[760px] w-full max-w-sm rounded-[2rem] object-contain shadow-2xl"
          />
        </div>
        <div className="grid gap-4">
          {[
            {
              title: "限定內容輕鬆解鎖收聽",
              desc: "限定 Podcast 內容可在 APP 內部以及網頁輕鬆購買解鎖。",
            },
            {
              title: "購買一次，永久收聽",
              desc: "購買後，可永久收聽，並且與所有收聽者留言互動，打造社群互動感。",
            },
            {
              title: "與官方聯絡，輕鬆上架付費 Podcast",
              desc: "快來聯絡 ActPod，上架您的優質 Podcast 內容",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-950">{item.title}</h3>
              <p className="mt-2 leading-7 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const PodCoin = () => (
    <section id="podcoin" className="overflow-hidden bg-amber-50 py-16 sm:py-20">
    <Container>
      <SectionTitle
        eyebrow="PodCoin"
        title="用 PodCoin 開啟更多互動功能"
        desc="PodCoin 可用來在 ActPod App 內傳送專屬貼圖，也可以用來進入 Podcast 陪聽房。"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm">
          <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-amber-100 px-3 py-2 text-sm font-bold text-amber-800">
            <img src="/assets/podcoin.png" alt="" className="h-5 w-5" />
            傳送專屬貼圖
          </div>
          <h3 className="max-w-sm text-2xl font-bold text-gray-950">用專屬貼圖傳送你的心情</h3>
          <p className="mt-3 max-w-md leading-7 text-gray-600">
            購買 PodCoin 後，可以在 App 內傳送專屬角色貼圖，聊天互動時直接使用。
          </p>
          <div className="mt-8 flex items-end justify-center gap-4">
            <img src="/assets/mascot-cry-laugh.png" alt="" className="h-44 w-44 object-contain sm:h-56 sm:w-56" />
            <img src="/assets/mascot-teary.png" alt="" className="h-28 w-28 object-contain sm:h-36 sm:w-36" />
            <img src="/assets/mascot-frustrated.png" alt="" className="hidden h-28 w-28 object-contain sm:block" />
          </div>
        </div>

        <div id="podcast-room" className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-black p-6 text-white shadow-sm">
          <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/10 px-3 py-2 text-sm font-bold text-amber-200">
            <img src="/assets/podcoin.png" alt="" className="h-5 w-5" />
            兌換入場券
          </div>
          <h3 className="max-w-sm text-2xl font-bold">Podcast 陪聽房入場券</h3>
          <p className="mt-3 max-w-md leading-7 text-white/75">
            使用 PodCoin 兌換陪聽房入場券，進入即時互動空間，和主持人與聽眾一起討論 Podcast。
          </p>
          <div className="mt-8 rounded-[1.5rem] bg-white/10 p-5">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4 text-gray-950">
              <div>
                <p className="text-xs font-semibold text-amber-600">Podcast 陪聽房入場券</p>
                <p className="mt-1 font-bold">Podcast 同歡入場券</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                <img src="/assets/podcoin.png" alt="" className="h-8 w-8" />
              </div>
            </div>
            <div className="mx-auto mt-5 max-w-sm overflow-hidden rounded-[1.75rem] border border-white/20 bg-white shadow-2xl">
              <img
                src="/assets/listening-room-screen.png"
                alt="Podcast 陪聽房畫面"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const Rules = () => (
  <section className="bg-white py-16 sm:py-20">
    <Container>
      <SectionTitle
        eyebrow="販售商品"
        title="商品與使用規則"
        desc="ActPod 的主要商品有“限定Podcast”及“PodCoin”。"
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-950">限定 Podcast</h3>
          <ul className="mt-5 space-y-3">
            <CheckItem>購買一次，永久收聽。</CheckItem>
            <CheckItem>可在 APP 使用 google/apple 購買，也可使用 Web 信用卡購買。</CheckItem>
            <CheckItem>購買後，可與所有收聽者和 Podcaster 進行留言互動。</CheckItem>
          </ul>
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-950">PodCoin</h3>
          <ul className="mt-5 space-y-3">
            <CheckItem>可在所有留言處及陪聽房中傳送專屬貼圖。</CheckItem>
            <CheckItem>可進入陪聽房中與 Podcaster 進行 Podcast 互動。</CheckItem>
            <CheckItem>可傳送語音留言和 Podcaster 共創新內容。</CheckItem>
          </ul>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-950">付款提醒</h3>
          <p className="mt-4 leading-7 text-gray-600">
            若發生重複付款、付款異常或未收到購買內容，請聯繫 ActPod，我們會協助確認交易狀況。
          </p>
          <img src="/assets/mascot-frustrated.png" alt="" className="mx-auto mt-4 h-36 w-36 object-contain" />
        </div>
      </div>
    </Container>
  </section>
);

const Partner = () => (
  <section id="partner" className="bg-gradient-to-b from-amber-50 to-white py-16 sm:py-20">
    <Container>
      <div className="grid items-center gap-10 rounded-[2rem] border border-amber-200 bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-72 overflow-hidden rounded-[1.5rem] bg-amber-100">
          <img src="/assets/mascot-phone.png" alt="" className="absolute bottom-0 left-1/2 w-80 -translate-x-1/2 object-contain" />
        </div>
        <div>
          <p className="text-sm font-semibold text-amber-600">For Podcasters</p>
          <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
            Podcast 上架與合作，請與 ActPod 聯絡
          </h2>
          <p className="mt-4 leading-7 text-gray-600">
            官網僅說明使用者可購買的數位內容與 App 內數位商品。Podcast 上架與合作條件，將由 ActPod
            與合作方另行約定。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrimaryButton href={`mailto:${contactEmail}`}>聯絡 ActPod</PrimaryButton>
            <SecondaryButton href="#download">下載 ActPod</SecondaryButton>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

const CTA = () => (
  <section id="download" className="relative overflow-hidden bg-black py-16 text-white sm:py-20">
    <Container>
      <div className="mx-auto max-w-3xl text-center">
        <img src="/assets/actpod-text.png" alt="ActPod" className="mx-auto h-12 w-auto" />
        <h2 className="mt-6 text-3xl font-bold sm:text-4xl">下載 ActPod，開始收聽與互動</h2>
        <p className="mt-4 text-white/70">
          購買完整 Podcast、兌換可愛貼圖、參加 Podcast 陪聽房。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="https://share.google/3BJxoVvFcIVNFKkV6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.sharevoice"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
          >
            Google Play
          </a>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center gap-3 text-center text-sm text-white/55">
        <span>© 2025 艾帕科技有限公司</span>
        <span>統一編號：60761942</span>
        <span>桃園市桃園區宏昌十二街532號2樓</span>
        <a href={`mailto:${contactEmail}`} className="hover:text-white">
          {contactEmail}
        </a>
        <a href="/refund-policy" className="hover:text-white">
          退費政策
        </a>
      </div>
    </Container>
  </section>
);

export default function ActPodLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Nav />
      <Hero />
      <PaidPodcast />
      <PodCoin />
      <Rules />
      <Partner />
      <CTA />
    </div>
  );
}
