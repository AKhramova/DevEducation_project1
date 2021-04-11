var fs = require('fs')

var message = {
  ok: 'ok',
  noArr: 'Неправильный формат. Отправьте массив объектов',
  noObj: 'Неправильный формат. Отправьте объект',
}


var ToJSON = {
  read(res, file, headers, query) {
    fs.readFile(file,
      'utf-8',
      function (err, data) {
        if (err) throw err
        if (query) {
          if (query.get('theme') === 'all') {
            res.writeHead(200, headers)
            return res.end(data)
          } else if (query.get('theme')) {
            var filterData = JSON.parse(data).filter(function (el) {
              return el.theme.toLowerCase() === query.get('theme')
            })
          }
          res.writeHead(200, headers)
          return res.end(JSON.stringify(filterData))
        }
        res.writeHead(200, headers)
        res.end(data)
      })
  },

  writeQuestions(req, file) {
    var data = JSON.parse(fs.readFileSync(file, 'utf-8'))
    data.unshift(req.body)

    fs.writeFileSync(file, JSON.stringify(data), 'utf-8')
  },

  deleteQuestion(req, res, file, headers) {
    if (typeof req.body !== 'object' || Array.isArray(req.body)) {
      return this.endResponse(res, headers, { message: message.noObj })
    }
    var data = JSON.parse(fs.readFileSync(file, 'utf-8'))
    var afterDelete = data.filter(function (el) {
      return el.id.toString() !== req.body.id
    })

    fs.writeFile(file, JSON.stringify(afterDelete), () => {
      this.endResponse(res, headers, { message: message.ok })
    })
  },

  writeUsers(req, res, file, headers) {
    if (!Array.isArray(req.body)) {
      return this.endResponse(res, headers, { message: message.noArr })
    }
    fs.writeFile(file, JSON.stringify(req.body), () => {
      this.endResponse(res, headers, { message: message.ok })
    })
  },

  endResponse(res, headers, message) {
    res.writeHead(200, headers)
    res.end(JSON.stringify(message))
  }
}

module.exports = ToJSON