function team({ req, res, headers, dir, ToJSON }) {
  if (req.url === '/team') {
    if (req.method === "GET") {
      ToJSON.read(res, dir + '/data/developers.json', headers)
    }
    if (req.method === 'POST') {
      ToJSON.writeUsers(req, res, dir + '/data/developers.json', headers)
    }
  }
}
module.exports = { team }