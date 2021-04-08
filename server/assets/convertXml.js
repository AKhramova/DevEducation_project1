var XMLparser = require('fast-xml-parser');
var fs = require('fs')
var data = [
  {
    "id": 1617809895641,
    "text": "asdasda",
    "answer": "true",
    "theme": "HTML",
    "formats": [
      "JSON"
    ]
  },
  {
    "id": 1617809878594,
    "text": "asdasdasd",
    "answer": "true",
    "theme": "HTML",
    "formats": [
      "JSON"
    ]
  },
  {
    "id": 1617809682237,
    "text": "sadasd",
    "answer": "true",
    "theme": "HTML",
    "formats": [
      "JSON"
    ]
  }
]


function convertToXML(array) {
  var result = '<questions>'
  for (var i = 0; i < array.length; i++) {
    var wrapper = '<question>';
    for (var key in array[i]) {
      wrapper += `<${key}>${array[i][key]}</${key}>`
    }
    result += wrapper + '</question>';
  }
  result += '</questions>'

  fs.writeFileSync(__dirname + '/xml.xml', result)
}
// convertToXML(data)



var a = XMLparser(fs.readFileSync(__dirname + '/xml.xml', 'utf-8'))
console.log(a)