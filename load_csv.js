function loadAdmissionList(csvUrl, tableId, sort) {
    // 加上時間戳記打破 Chrome 快取
    const cacheBuster = new Date().getTime();
    const finalUrl = csvUrl.includes('?') ? csvUrl : `${csvUrl}?v=${cacheBuster}`;

    Papa.parse(finalUrl, {
        download: true,
        header: true, 
        skipEmptyLines: 'greedy', // 1. 自動濾掉檔尾空白行
        complete: function(results) {
            const table = document.getElementById(tableId);
            let rawData = results.data; 

            // 2. 【關鍵防禦】先過濾掉欄位不齊全的髒資料，再處理後續
            // 這樣可以確保進到 sort 的每一筆資料都絕對有「學校」和「年級」
            let data = rawData.filter(item => item["姓名"] && item["學校"] && item["年級"]);

            if (sort) {
                data.sort((a, b) => {
                    // 3. 【雙重防呆】萬一有隱形字元，確保轉成字串，不讓 Chrome 噴 TypeError
                    const schoolA = String(a["學校"] || "");
                    const schoolB = String(b["學校"] || "");
                    const gradeA = String(a["年級"] || "");
                    const gradeB = String(b["年級"] || "");

                    try {
                        const schoolCompare = schoolA.localeCompare(schoolB, 'zh-Hant');
                        if (schoolCompare !== 0) {
                            return schoolCompare;
                        }
                        return gradeA.localeCompare(gradeB, 'zh-Hant');
                    } catch (e) {
                        // 4. 極端降級方案：萬一瀏覽器不支援 'zh-Hant' 參數，改用傳統比對，絕不卡死
                        if (schoolA !== schoolB) return schoolA > schoolB ? 1 : -1;
                        return gradeA > gradeB ? 1 : -1;
                    }
                });
            }

            // 5. 渲染到畫面上
            data.forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item["姓名"]}</td>
                    <td>${item["學校"]}</td>
                    <td>${item["年級"]}</td>
                `;
                table.appendChild(row);
            });
        },
        error: function(err) {
            console.error(`Papa.parse 讀取失敗 (${tableId}):`, err);
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
	loadAdmissionList("accepted.csv", "accepted-table", true);
	loadAdmissionList("waitlist.csv", "waitlist-table", false);
});
