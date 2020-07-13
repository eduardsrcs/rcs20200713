
function getUsers() {
  getData('https://jsonplaceholder.typicode.com/users', function(data){
  renderUsers(data)
})
}

function getUser(id){
  getData(`https://jsonplaceholder.typicode.com/users/${id}`, function(data){renderUser(data)})
}

function getAllPosts(){
  getData(`https://jsonplaceholder.typicode.com/posts`, function(data){renderAllPosts(data)})
}

function renderUsers(data) {
  let out = '<h2>All Users</h2>'
  data.forEach(element => {
    out += `<div class="users" onclick="getUser(${element.id})">${element.name}<br>`
    out += `<span class="comName">${element.company.name}</span>`
    out += `</div>`
  });
  document.querySelector('#res').innerHTML = out
}

function renderUser(data) {
  let out = '<h2>User</h2>'
    out += `<div class="user mt-4">`
    out += `<h3 class="userName">${data.name}</h3>`
    out += `<h4 class="compName">${data.company.name}</h4>`
    out += `<p class="address">${data.address.city}, `
    out += `${data.address.street}, `
    out += `${data.address.suite}.`
    out += `</p><p class="text-right"><button class="btn btn-info" onclick="getUsers()">All users</button>`
    out += `&nbsp;<button class="btn btn-info" onclick="getAllPosts()">All posts</button>`
    out += `</p></div>`
  document.querySelector('#res').innerHTML = out
}

function renderAllPosts(data) {
  let out = '<h2>All Posts</h2>'
  data.forEach(element => {
    out += `<div class="posts"><h5>${element.title}</h5>`
    out += `<p class="postBody">${element.body}</p>`
    out += `<p class="postAuthor">Written by: `
    out+= `<span id="authname${element.id}" onclick="getUser(${element.userId})">`
    out += `</span></p></div>`
    getAuthor(element.userId, element.id)
  });
  document.querySelector('#res').innerHTML = out
}

async function getAuthor(id, pid){
  var name = ''
  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then( data => name = nameF(data.name, pid))
}

function nameF(name, id) {
  document.getElementById(`authname${id}`).innerHTML = name
}


getUsers()