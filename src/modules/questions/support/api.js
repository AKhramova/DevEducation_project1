var api = {
  url: "http://localhost:3000",

  getRequest(route) {
    document.body.classList.remove('loaded__hiding');
    return new Promise(function (response, reject) {
      var request = new XMLHttpRequest()
      request.open('GET', this.url + route, true)
      request.addEventListener("load", function () {
        if (request.status < 300) {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded__hiding');
          response(request.response)
        } else reject(new Error("Request failed: " + request.statusText))
      })

      request.addEventListener("error", function () {
        reject(new Error("err"))
      })

      request.send()
    }.bind(this)).then(function (res) { return JSON.parse(res) })
  },

  postAndDeleteRequest(route, requestBody, method = 'POST') {
    document.body.classList.remove('loaded__hiding');
    return new Promise(function (response, reject) {
      var request = new XMLHttpRequest();
      request.open(method, this.url + route, true)
      request.setRequestHeader("Content-Type", "application/json")
      request.addEventListener("load", function () {
        if (request.status < 300) {
          document.body.classList.add('loaded');
          document.body.classList.remove('loaded__hiding');
          response(request.responseText)
        }

        else
          reject(new Error("Request failed: " + request.statusText))
      })

      request.addEventListener("error", function () {
        reject(new Error("err"))
      })

      request.send(JSON.stringify(requestBody))
    }.bind(this)).then(function (res) { return JSON.parse(res) })
  }
}
export default api
