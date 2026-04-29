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
            最後更新日期：2026 年 4 月 29 日
          </p>

          <div className="mt-10 space-y-8 leading-7 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">一、適用範圍</h2>
              <p className="mt-3">
                本退費政策適用於使用者於 ActPod 平台內購買之服務、會員方案、虛擬點數或其他數位內容。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">二、App Store 與 Google Play 付款</h2>
              <p className="mt-3">
                若使用者透過 Apple App Store 或 Google Play 完成付款，退費申請需依 Apple 或 Google
                之退款規則與流程辦理。ActPod 無法直接替使用者操作該平台之退款流程。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">三、已使用之數位內容或點數</h2>
              <p className="mt-3">
                若購買之虛擬點數、付費內容或服務已被使用、消耗、兌換或完成提供，原則上不提供退費。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">四、重複付款或異常交易</h2>
              <p className="mt-3">
                若使用者發現重複扣款、付款異常或未收到購買內容，請與我們聯繫，我們將協助確認交易狀況。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">五、聯絡方式</h2>
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