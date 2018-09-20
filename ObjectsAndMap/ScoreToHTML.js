function solve(input) {
    function htmlEscape(input) {
       return input.replace(/&/g,'&amp;')
           .replace(/</g,'&lt;')
           .replace(/>/g,'&gt;')
           .replace(/"/g,'&quot;')
           .replace(/'/g,'&#39;')

    }
let arr=JSON.parse(input);
let result='';
result+='<table>\n';
result+='  <tr><th>Name</th><th>Price</th></tr>\n'
    for (let obj of arr) {
        result+=`  <tr><td>${htmlEscape(obj['name'])}</td><td>${htmlEscape(obj['score']+'')}</td></tr>\n`

    }
     console.log(result +'</table>');
}
solve('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');