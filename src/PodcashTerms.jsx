// src/PodcashTerms.jsx
import React from "react";

const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export default function PodcashTerms() {
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
          <h1 className="text-3xl font-bold sm:text-4xl">
            PodCash 使用條款與兌換說明
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            最後更新日期：2026 年 5 月 20 日
          </p>

          <div className="mt-10 space-y-8 leading-7 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                一、PodCash 是什麼
              </h2>
              <p className="mt-3">
                PodCash 是 ActPod 平台提供給創作者之收益紀錄單位，用於記錄創作者透過付費內容、聽眾支持、互動活動或其他平台功能所累積之可結算收益。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                二、PodCoin 與 PodCash 的關係
              </h2>
              <p className="mt-3">
                使用者可於 ActPod 平台購買 PodCoin，並使用 PodCoin 解鎖付費內容、支持創作者或參與特定互動功能。當創作者收到使用者支持或內容收益時，系統將依平台規則轉換並記錄為 PodCash。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                三、PodCash 使用方式
              </h2>
              <p className="mt-3">
                創作者可於 ActPod 後台或 App 內查看 PodCash 累積狀況。PodCash 可作為收益結算依據，實際提領、結算方式與可提領資格，依創作者當時所適用之會員方案、平台政策及相關法規辦理。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                四、提領與結算
              </h2>
              <p className="mt-3">
                創作者若符合平台規定之提領資格，可依 ActPod 公告或後台顯示之流程申請 PodCash 結算。平台可能依實際情況扣除必要之平台服務費、金流費、手續費、稅務成本或其他依法應扣除之費用。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                五、不可轉讓與限制
              </h2>
              <p className="mt-3">
                PodCash 僅限於 ActPod 平台內作為創作者收益紀錄與結算使用，不得私下買賣、轉讓、交換、借貸或作為其他非法用途。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                六、異常交易處理
              </h2>
              <p className="mt-3">
                若發現異常交易、退款、濫用、違反平台規範或其他有疑慮之情形，ActPod 得暫停相關 PodCash 結算、調整收益紀錄，或要求創作者提供必要說明。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                七、條款調整
              </h2>
              <p className="mt-3">
                ActPod 得依營運需求、法規變更、金流政策或平台服務調整，更新 PodCash 使用條款與兌換方式。更新後之內容將公告於平台或相關頁面。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                八、聯絡方式
              </h2>
              <p className="mt-3">
                如對 PodCash 使用方式、結算或條款內容有任何問題，請透過以下信箱聯繫我們：
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