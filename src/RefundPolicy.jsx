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
            最後更新日期：2026 年 6 月 7 日
          </p>

          <div className="mt-10 space-y-8 leading-7 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">一、適用範圍</h2>

              <p className="mt-3">
                本退費政策適用於使用者於 ActPod 平台購買之限定 Podcast、Podcast 套裝、PodCoin、App
                內專屬貼圖、Podcast 陪聽房入場券及其他數位內容或數位服務。
                使用者完成購買前，應確認商品內容、價格、付款方式、使用限制及本退費政策。
              </p>

              <p className="mt-3">
                使用者於 ActPod 平台完成購買、兌換、開始收聽、開始使用、入場或使用相關數位內容、數位服務者，
                即表示已理解並同意本退費政策之適用。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">二、付款平台與退費窗口</h2>

              <p className="mt-3">
                若使用者透過 Apple App Store 或 Google Play 完成付款，退費申請需依 Apple 或 Google
                所訂之退款規則與流程辦理。ActPod 無法直接替使用者操作該等平台之退款核准、撥款或付款取消流程，
                亦無法保證 Apple 或 Google 會核准退款。
              </p>

              <p className="mt-3">
                若使用者透過 ActPod 官網信用卡、第三方金流或其他 ActPod 指定付款方式完成付款，
                可依本政策向 ActPod 提出退費申請。ActPod 將依交易紀錄、使用紀錄、付款狀態及本政策進行審核。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                三、限定 Podcast 與 Podcast 套裝退費規則
              </h2>

              <p className="mt-3">
                限定 Podcast 及 Podcast 套裝屬數位內容，採單集、套裝或其他 ActPod 指定方式提供。
                購買完成後，使用者可於 ActPod App 或 ActPod 指定之方式收聽已購買之內容。
              </p>

              <p className="mt-3">
                若使用者尚未開始收聽，且自購買完成日起算未超過七日，可向 ActPod 提出退費申請。
                ActPod 將依付款紀錄、收聽紀錄、內容提供狀態、購買項目及本政策進行審核；
                是否核准退費，仍以 ActPod 審核結果為準。
              </p>

              <p className="mt-3">
                若限定 Podcast 或 Podcast 套裝已開始提供收聽、已有任何收聽紀錄、已解鎖完整內容、
                已提供主要內容，或自購買完成日起算已超過七日，因該數位內容已提供或可持續使用，
                原則上不接受退費。購買前請先確認節目名稱、內容說明、價格、集數、可收聽範圍及欲購買項目。
              </p>

              <p className="mt-3">
                若 Podcast 套裝中之部分內容已開始收聽、已解鎖或已提供，ActPod 得依實際使用情形、
                已提供內容比例及交易紀錄，判斷是否提供部分退費、PodCoin 補償、替代內容或不予退費。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                四、PodCoin 與 App 內數位商品退費規則
              </h2>

              <p className="mt-3">
                PodCoin 可用於兌換或使用 ActPod App 內專屬貼圖、Podcast 陪聽房入場券、限定 Podcast、
                Podcast 套裝及其他 App 內互動功能或數位內容。PodCoin 本身並非現金、存款、電子支付帳戶餘額或有價證券，
                不得轉讓、不得兌換現金，亦不得要求以非 ActPod 指定方式返還。
              </p>

              <p className="mt-3">
                若 PodCoin 尚未使用，且自購買完成日起算未超過七日，可向 ActPod 提出退費申請。
                ActPod 將依付款紀錄、PodCoin 使用紀錄、兌換紀錄、購買平台規則及本政策進行審核；
                是否核准退費，仍以 ActPod 審核結果為準。
              </p>

              <p className="mt-3">
                PodCoin 一經使用、消耗、兌換專屬貼圖、兌換 Podcast 陪聽房入場券、解鎖限定 Podcast、
                解鎖 Podcast 套裝，或相關數位內容、數位服務已完成提供者，原則上不接受退費。
                已部分使用之 PodCoin 購買項目，僅未使用部分是否得退費，將由 ActPod 依交易紀錄及實際提供情形審核。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">
                五、Podcast 陪聽房入場券與活動型服務退費規則
              </h2>

              <p className="mt-3">
                Podcast 陪聽房入場券、互動活動、直播互動、限時活動或其他活動型數位服務，
                可能受活動時間、名額、主持人安排、系統支援及合作方條件限制。
              </p>

              <p className="mt-3">
                若使用者已兌換入場券、已取得入場資格、已入場、活動已開始、活動已結束，或使用者因個人因素未參與活動，
                原則上不接受退費。若因 ActPod 可歸責之系統錯誤導致使用者無法正常參與已購買或已兌換之活動，
                使用者可向 ActPod 提出申請，ActPod 將依實際情形審核是否補發入場資格、提供替代場次、PodCoin 補償或辦理退費。
              </p>

              <p className="mt-3">
                若活動因 Podcaster、主持人、合作方或不可抗力因素延期、取消或調整，ActPod 得依實際情形，
                選擇提供替代場次、延長使用期間、提供替代內容、退還未使用之 PodCoin、提供平台補償或其他合理處理方式。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">六、不予退費之情形</h2>

              <p className="mt-3">下列情形原則上不接受退費：</p>

              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>已開始收聽、已有收聽紀錄或已解鎖完整內容之限定 Podcast 或 Podcast 套裝。</li>
                <li>已逾購買完成日起算七日之購買項目。</li>
                <li>已使用、已消耗或已兌換之 PodCoin。</li>
                <li>已提供、已下載、已解鎖或已使用之 App 內專屬貼圖或其他數位商品。</li>
                <li>已兌換、已取得入場資格、已入場或活動已開始之 Podcast 陪聽房入場券。</li>
                <li>因使用者帳號、密碼、裝置或付款工具保管不當所產生之購買或使用紀錄。</li>
                <li>因使用者個人喜好、期待落差、誤購後已使用、未確認商品內容、裝置或網路環境問題所提出之退費申請。</li>
                <li>非可歸責於 ActPod 之第三方平台、付款平台、裝置、作業系統、網路服務或其他外部因素所造成之使用限制。</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">七、重複付款、異常交易或未收到內容</h2>

              <p className="mt-3">
                若使用者發現重複扣款、付款異常、付款成功但未收到購買內容，或系統顯示之購買紀錄與實際付款不一致，
                請盡速與 ActPod 聯繫。我們將依付款紀錄、帳號紀錄及系統紀錄協助確認。
              </p>

              <p className="mt-3">
                若確認屬重複扣款、系統錯誤、付款異常或未完成商品提供，ActPod 將依實際情形協助補發內容、
                恢復使用權限、提供替代方案、退還未使用之 PodCoin，或辦理必要之退費。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">八、商品下架、服務終止或內容異動</h2>

              <p className="mt-3">
                ActPod 平台上之限定 Podcast、Podcast 套裝、App 內數位商品、Podcast 陪聽房入場券或其他數位內容、
                數位服務，可能因創作者或 Podcaster 自行下架、授權期間屆滿、合作終止、內容更新、平台營運調整、
                法令要求、第三方權利主張、違反平台規範、系統維護或其他必要事由，而停止販售、暫停提供、移除或調整內容。
              </p>

              <p className="mt-3">
                若商品僅停止對新使用者販售，已完成購買之使用者原則上仍可於 ActPod App 或 ActPod 指定之方式，
                於平台合理支援期間內繼續使用或收聽已購買之內容。但 ActPod 不保證任何數位內容、數位服務或互動功能
                將永久保存、永久上架或永久以相同形式提供。
              </p>

              <p className="mt-3">
                若因 Podcaster 自行下架、撤回授權、合作終止、授權瑕疵、內容權利爭議、違反平台規範或其他不可歸責於 ActPod
                之原因，致已購買內容無法繼續提供，ActPod 得依實際情形協助使用者聯繫 Podcaster，並得選擇以恢復提供、
                提供替代內容、退還未使用部分之 PodCoin、提供平台點數補償、部分退費或其他 ActPod 認為合理之方式處理。
              </p>

              <p className="mt-3">
                前項補償或退費之範圍，將依使用者之購買時間、使用紀錄、收聽紀錄、內容提供比例、PodCoin 使用情形、
                付款平台規則及實際交易紀錄綜合判斷。已完成收聽、已開始使用、已入場、已兌換或已實際提供之數位內容或數位服務，
                原則上不因商品後續下架、停止販售或內容異動而當然產生全額退費請求權。
              </p>

              <p className="mt-3">
                若相關下架、停止提供、授權終止或內容異動係可歸責於 Podcaster 或內容提供者，ActPod 得依與該 Podcaster
                或內容提供者間之約定，向其請求賠償、追償或扣抵相關款項；惟使用者之退費或補償申請，仍應依本政策及實際交易、
                使用情形由 ActPod 進行審核。
              </p>

              <p className="mt-3">
                若使用者購買之內容於購買後尚未開始使用，且因 ActPod 可歸責之系統錯誤或平台原因導致無法提供主要內容，
                使用者可依本政策向 ActPod 提出申請，ActPod 將依交易紀錄與實際提供情形審核是否補發內容、提供替代方案、
                PodCoin 補償或辦理退費。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">九、退費申請方式與審核</h2>

              <p className="mt-3">
                申請退費時，請提供購買帳號、訂單編號或付款證明、購買日期、購買項目、申請原因及可聯繫之電子信箱。
                若資料不完整，ActPod 可能無法受理或可能需要使用者補充相關資料。
              </p>

              <p className="mt-3">
                ActPod 收到完整資料後，將依交易紀錄、使用紀錄、收聽紀錄、PodCoin 使用紀錄、內容提供狀態、
                付款平台規則及本政策進行審核。退費申請不代表必然核准，是否退費及退費範圍，仍以 ActPod 審核結果為準。
              </p>

              <p className="mt-3">
                退費核准後，款項將依原付款方式、原付款平台或 ActPod 指定且付款平台可支援之方式退回；
                實際入帳時間依發卡銀行、付款平台、第三方金流服務或其他付款服務提供者之作業時間而定。
              </p>

              <p className="mt-3">
                若原付款平台、發卡銀行或第三方金流服務已收取之手續費、匯差、跨境交易費或其他費用無法退還，
                該等費用是否退還將依各付款平台、銀行或金流服務商之規定辦理。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">十、政策修改</h2>

              <p className="mt-3">
                ActPod 保留隨時修訂本退費政策之權利。修訂後之政策將公布於 ActPod 官網或 App 內相關頁面，
                並自公布日起或公告指定日起生效。使用者於政策更新後繼續使用 ActPod 服務或完成購買者，
                視為已閱讀、理解並同意更新後之退費政策。
              </p>

              <p className="mt-3">
                惟政策修訂前已完成之交易，原則上仍依交易當時之政策、付款平台規則及相關法令處理；
                若更新後之政策對使用者較有利，ActPod 得依個案情形決定是否適用更新後之政策。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900">十一、聯絡方式</h2>

              <p className="mt-3">
                如對退費政策、購買紀錄、PodCoin 使用紀錄或退費申請有任何問題，請透過以下信箱聯繫我們：
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