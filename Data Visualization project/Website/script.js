document.addEventListener("DOMContentLoaded", function() {
    Papa.parse('/data/hk_protests_ACLED.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            const tableBody = document.querySelector("#acled-table tbody");
            const maxRows = 10;
            data.slice(0, maxRows).forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.event_id_cnty}</td>
                    <td>${item.event_date}</td>
                    <td>${item.event_type}</td>
                    <td>${item.sub_event_type}</td>
                    <td>${item.location}</td>
                    <td>${item.latitude}</td>
                    <td>${item.longitude}</td>
                    <td>${item.related_ep}</td>
                `;
                tableBody.appendChild(row);
            });
            
            if (data.length > maxRows) {
                const ellipsisRow = document.createElement("tr");
                ellipsisRow.innerHTML = `
                    <td colspan="5" style="text-align: center;">...</td>
                `;
                tableBody.appendChild(ellipsisRow);
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    Papa.parse('/data/hk_protests_wiki.csv', {
        download: true,
        header: true,
        complete: function(results) {
            const data = results.data;
            const tableBody = document.querySelector("#wiki-table tbody");
            const maxRows = 10;
            data.slice(0, maxRows).forEach(item => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${item.event}</td>
                    <td>${item.eventLabel}</td>
                    <td>${item.date}</td>
                `;
                tableBody.appendChild(row);
            });
            
            if (data.length > maxRows) {
                const ellipsisRow = document.createElement("tr");
                ellipsisRow.innerHTML = `
                    <td colspan="5" style="text-align: center;">...</td>
                `;
                tableBody.appendChild(ellipsisRow);
            }
        },
        error: function(error) {
            console.error('Error fetching data:', error);
        }
    });
});

