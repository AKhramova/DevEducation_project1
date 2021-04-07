var XMLparser = require('fast-xml-parser');

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
  return result;
}


var a = XMLparser(fs.readFileSync('questions/questions.xml', 'utf-8'))