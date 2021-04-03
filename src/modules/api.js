var api = {
  url: "http://localhost:3000",

  getRequest(route) {
    return new Promise(function (responce, reject) {
      var request = new XMLHttpRequest()
      request.open('GET', this.url + route, true)
      request.addEventListener("load", function () {
        if (request.status < 300) {
          responce(request.response)
        } else reject(new Error("Request failed: " + request.statusText))
      })

      request.addEventListener("error", function () {
        reject(new Error("Network error"))
      })

      request.send()
    }.bind(this)).then(function (res) { return JSON.parse(res) })
  },

  postAndDeleteRequest(route, requestBody, method = 'POST') {
    return new Promise(function (responce, reject) {
      var request = new XMLHttpRequest();
      request.open(method, this.url + route, true)
      request.setRequestHeader("Content-Type", "application/json")
      request.addEventListener("load", function () {
        if (request.status < 300) responce(request.responseText)
        else fail(new Error("Request failed: " + request.statusText))
      })

      request.addEventListener("error", function () {
        reject(new Error("Network error"))
      })

      request.send(JSON.stringify(requestBody))
    }.bind(this)).then(function (res) { return JSON.parse(res) })
  }
}
export default api
