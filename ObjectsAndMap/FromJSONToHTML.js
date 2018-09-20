function solve(input) {
let result='';
let arr=JSON.parse(input)
    result+='<table>\n  <tr>';
    for (let keys in arr[0]) {
        result+=`<th>${keys}</th>`
    }
result+='</tr>\n';
    for (let obj of arr) {
        result+=`  <tr>`
        for (let objKey in obj) {
            result+=`<td>${htmlEscape(obj[objKey]+'')}</td>`
        }
        result+='</tr>\n';
    }
    result+='</table>'


    console.log(result);

    function htmlEscape(input) {
        return input.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&quot;')
            .replace(/'/g,'&#39;')

    }
}
solve('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')