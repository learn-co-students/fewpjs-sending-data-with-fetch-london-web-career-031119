// Add your code here
const USERS = 'http://localhost:3000/users'
const submitData = (name, email) => {
   const data = {
      name,
      email
   }
   fetch(USERS,{
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'Accept': 'application/json' },
      body: JSON.stringify(data)
   }).then( r => r.json()).then( (obj) =>  document.body.innerHTML = obj[ "id" ]).catch( (error) => document.body.innerHTML = error.message)

}
const showUser = (user) => {
   const li = document.createElement('li')
   li.textContent = `${user.id}: ${user.name}, ${user.email}`
   div = document.querySelector('div#users')
   div.append(li)

}
const showUsers = () => {
   fetch(USERS).then(r => r.json()).then((users) => users.forEach(showUser))
}