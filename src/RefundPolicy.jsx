// src/RefundPolicy.jsx
import React from "react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-black/10 bg-white">
        <Container className="flex h-16 items-center justify-between">
          <a href="/" className="text-lg font-bold text-amber-400">
            ActPod
          </a>

          <a href="/" className="text-sm text-gray-600 hover:text-black">
            回首頁
          </a>
        </Container>
      </header>

      <main className="py-16">
        <Container>
          <h1 className="text-3xl font-bold sm:text-4xl">退費政策</h1>

          <p className="mt-4 text-sm text-gray-500">
            最後更新日期：2026 年 6 月 3 日
          </p>

          <div className="mt-10 space-y-8 leading-7 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">一、適用範圍</h2>
              <p className="mt-3">
                本退費政策適用於使用者於 ActPod 平台購買之限定 Podcast、PodCoin、App
                內專屬貼圖、Podcast 陪聽房入場券及其他數位內容或數位服務。
                使用者完成購買前，應確認商品內容、價格、付款方式及本退費政策。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">二、付款平台與退費窗口</h2>
              <p className="mt-3">
                若使用者透過 Apple App Store 或 Google Play 完成付款，退費申請需依 Apple 或 Google
                所訂之退款規則與流程辦理。ActPod 無法直接替使用者操作該等平台之退款核准或撥款流程。
                若使用者透過 ActPod 官網信用卡付款，可依本政策向 ActPod 提出退費申請。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">三、限定 Podcast 退費規則</h2>
              <p className="mt-3">
                限定 Podcast 採完整內容買斷制。購買完成後，使用者可於 ActPod App
                內收聽已購買之完整限定內容。若使用者尚未開始收聽，且自購買完成日起算未超過七日，可向 ActPod
                提出退費申請。
              </p>
              <p className="mt-3">
                若限定 Podcast 已開始提供收聽、已有任何收聽紀錄，或自購買完成日起算已超過七日，因該數位內容已提供或可持續使用，原則上不接受退費。
                購買前請先確認節目名稱、內容說明、價格及欲購買項目。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">四、PodCoin 與 App 內數位商品退費規則</h2>
              <p className="mt-3">
                PodCoin 可用於兌換或使用 ActPod App 內專屬貼圖、Podcast 陪聽房入場券及其他 App
                內互動功能。若 PodCoin 尚未使用，且自購買完成日起算未超過七日，可向 ActPod
                提出退費申請。
              </p>
              <p className="mt-3">
                PodCoin 一經使用、消耗、兌換專屬貼圖、兌換 Podcast 陪聽房入場券，或相關數位內容、數位服務已完成提供者，原則上不接受退費。
                已部分使用之 PodCoin 購買項目，僅未使用部分是否得退費，將由 ActPod 依交易紀錄及實際提供情形審核。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">五、不予退費之情形</h2>
              <p className="mt-3">
                下列情形原則上不接受退費：已開始收聽或已有收聽紀錄之限定 Podcast、已逾七日之購買項目、已使用或已兌換之 PodCoin、
                已提供之專屬貼圖、已兌換或已入場之 Podcast 陪聽房入場券、因使用者帳號保管不當所產生之購買或使用紀錄，以及非可歸責於 ActPod
                之個人喜好、誤購後已使用、裝置或網路環境問題。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">六、重複付款、異常交易或未收到內容</h2>
              <p className="mt-3">
                若使用者發現重複扣款、付款異常、付款成功但未收到購買內容，或系統顯示之購買紀錄與實際付款不一致，請盡速與 ActPod
                聯繫。我們將依付款紀錄、帳號紀錄及系統紀錄協助確認；若確認屬重複扣款、系統錯誤或未完成商品提供，ActPod
                將協助補發內容或辦理必要之退費。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">七、退費申請方式與審核</h2>
              <p className="mt-3">
                申請退費時，請提供購買帳號、訂單編號或付款證明、購買日期、購買項目、申請原因及可聯繫之電子信箱。
                ActPod 收到完整資料後，將依交易紀錄、使用紀錄及本政策進行審核。退費核准後，款項將依原付款方式或付款平台可支援之方式退回；
                實際入帳時間依發卡銀行、付款平台或金流服務作業時間而定。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">八、聯絡方式</h2>
              <p className="mt-3">
                如對退費政策有任何問題，請透過以下信箱聯繫我們：
              </p>
              <p className="mt-2">
                <a
                  href="mailto:contact.us@actpodapp.com"
                  className="text-amber-600 underline underline-offset-4"
                >
                  contact.us@actpodapp.com
                </a>
              </p>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
