function loadAdmissionList(csvUrl, tableId, sort) {
	Papa.parse(csvUrl, {
		download: true,
		header: true, 
		complete: function(results) {
			const table = document.getElementById(tableId);
			let data = results.data; 

			if(sort){
				data.sort((a, b) => {
					const schoolCompare = a["學校"].localeCompare(b["學校"], 'zh-Hant');

					if (schoolCompare !== 0) {
						return schoolCompare;
					}

					return a["年級"].localeCompare(b["年級"], 'zh-Hant');
				});
			}

			data.forEach(item => {
				if (item["姓名"] && item["學校"] && item["年級"]) {
					const row = document.createElement("tr");
					row.innerHTML = `
						<td>${item["姓名"]}</td>
						<td>${item["學校"]}</td>
						<td>${item["年級"]}</td>
					`;
					table.appendChild(row);
				}
			});
		}
	});
}

document.addEventListener("DOMContentLoaded", function() {
	loadAdmissionList("accepted.csv", "accepted-table", true);
	loadAdmissionList("waitlist.csv", "waitlist-table", false);
});
