const search = document.querySelector('.searchTerm');
const users = document.querySelector('.users');

console.log (users)
const createUser = (data) => {
const user = document.createElement('div');
let acc = '';
acc = `
<div class = 'user'>
<div class="usdata">
     <img src="./Images/AccountIcon.png" alt="User" width="100" height="100" >
     <p class="name">${data.name}</p>
     <p class="email">${data.email}</p>
     <p class="phone">${data.phone}</p>
</div>
</div>
    `;
user.insertAdjacentHTML('afterbegin', acc);
return user;
}

 // BackEnd Data here

let data = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
console.log(json);
let name = json.forEach((item) =>{
    const us = createUser(item);
    users.append(us);
});

search.addEventListener("input",() => {
  users.innerHTML = '';
  const us = json.filter((item) => {
   const name = item.name.toLocaleLowerCase();
    return name.startsWith(search.value.toLocaleLowerCase());
  }); 

  us.forEach((item) =>{
    const user = createUser(item);
    users.append(user);
});
}); 

})