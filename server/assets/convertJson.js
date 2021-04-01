var fs = require('fs')

var message = {
  ok: 'ok',
  noArr: 'Неправильный формат. Отправьте массив объектов',
  noObj: 'Неправильный формат. Отправьте объект',
}

function read(res, file, headers) {
  fs.readFile(file,
    'utf-8',
    function (err, data) {
      if (err) throw err
      res.writeHead(200, headers)
      res.end(data)
    })
}

function writeQuestions(req, res, file, headers) {
  var data = JSON.parse(fs.readFileSync(file, 'utf-8'))
  data.unshift(req.body)

  fs.writeFile(file, JSON.stringify(data), () => {
    endResponse(res, headers, { message: message.ok })
  })
}

function deleteQuestion(req, res, file, headers) {
  var data = JSON.parse(fs.readFileSync(file, 'utf-8'))

  var afterDelete = data.filter(function (el) {
    return el.id !== req.body.id
  })

  fs.writeFile(file, JSON.stringify(afterDelete), () => {
    endResponse(res, headers, { message: message.ok })
  })
}

function writeUsers(req, res, file, headers) {
  if (!Array.isArray(req.body)) {
    return endResponse(res, headers, { message: message.noArr })
  }
  fs.writeFile(file, JSON.stringify(req.body), () => {
    endResponse(res, headers, { message: message.ok })
  })
}

function endResponse(res, headers, message) {
  res.writeHead(200, headers)
  res.end(JSON.stringify(message))
}

module.exports = {
  read, writeUsers, writeQuestions, deleteQuestion
}