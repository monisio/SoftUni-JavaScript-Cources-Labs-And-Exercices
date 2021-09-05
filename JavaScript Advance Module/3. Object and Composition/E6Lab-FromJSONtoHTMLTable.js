function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let keyValues = Object.keys(arr[0]);
        let resultHtml = "";
        resultHtml+= "<tr>";
        for (let i = 0; i < keyValues.length; i++) {
            resultHtml+=`<th>${keyValues[i]}</th>`;
        }
        resultHtml+= "</tr>";
        return resultHtml;
    }

    function makeValueRow(obj) {
        let keyValues = Object.values(obj);
        let resultHtml = "";
        resultHtml+= "<tr>";
        for (let i = 0; i < keyValues.length; i++) {
            resultHtml+=`<td>${escapeHtml(keyValues[i].toString())}</td>`;
        }
        resultHtml+= "</tr>";
        return resultHtml;
    }


    function escapeHtml(value) {
        return  value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    console.log(outputArr.join('\n'));
}

JsonToHtmlTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]');


//<table>
// <tr><th>Name</th><th>Score</th></tr>
// <tr><td>Stamat</td><td>5.5</td></tr>
// <tr><td>Rumen</td><td>6</td></tr>
// </table>