function jsonsTable (inputData) {
    let html = '<table>\n'
    for(let row of inputData){
        let parsed = JSON.parse(row)
        html += '  <tr>\n'
        html += '     <td>' + parsed.name + '</td>\n'
        html += '     <td>' + parsed.position + '</td>\n'
        html += '     <td>' + parsed.salary + '</td>\n'
        html += '  <tr>\n'
    }
    html += '</table>'
    return html
}
jsonsTable('[{"name":"Pesho","position":"Promenliva","salary":100000},{"name":"Teo","position":"Lecturer","salary":1000}]')