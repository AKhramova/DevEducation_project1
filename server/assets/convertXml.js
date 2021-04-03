var xml2js = require('xml2js'),
  fs = require('fs')


function writeXml() {
  var obj = [{ name: "Super", surname: "Man", age: 23 }, { name: "Super", surname: "Man", age: 23 }];

  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);

  fs.writeFileSync('./xml.xml', xml)
}

// writeXml()


function readXml() {
  var parser = new xml2js.Parser()
  fs.readFile(__dirname + '/xml.xml', (err, data) => {
    parser.parseString(data, (err, result) => {
      console.log(result)
    })
  })
}

readXml()