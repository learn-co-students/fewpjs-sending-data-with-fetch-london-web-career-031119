function appendToBody(obj){
  document.body.append(document.createElement("div").innerText = obj)
}

function submitData(nameStr, emailStr){
  return fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: nameStr,
      email: emailStr
    })
  })
    .then(resp => resp.json())
    .then(obj => appendToBody(obj["id"]))
    .catch(err => appendToBody(err.message))
  }
