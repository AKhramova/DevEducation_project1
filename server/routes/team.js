var { writeUsers, read } = require('../assets/convertJson')

function team({ req, res, headers, dir }) {
  if (req.url === '/team') {
    if (req.method === "GET") read(res, dir + '/data/team.json', headers)
    if (req.method === 'POST') {
      writeUsers(req, res, dir + '/data/team.json', headers)
    }
  }
}
module.exports = { team }