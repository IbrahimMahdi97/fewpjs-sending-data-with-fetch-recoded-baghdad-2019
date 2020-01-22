// Add your code here
function submitData(name, email) {
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringfy({name: name, email: email})
  }
  return fetch (url, requestOptions)
}
submitData("John", "john@invisible.com")
.then(res => {
  return res.json
})
.then (json => {
  let elem = document.createElemnt("div")
  elem.innerHTML = json
  document.body.appendChile (elem)
  document.body.innerHTML = json_id_
}).catch(err => {
  document.body.innerHTML = err.message
})