console.log("hello");

fetch('https://reqres.in/api/users?page=2').then(response => response.json()).then(responseJSON => createUsersList(responseJSON.data)).catch(err=> console.log(err));

function createUsersList(users){
    console.log(users);
    const curr_main = document.querySelector("main");
    for(let user of users)
    {
        console.log("1");
        const section = document.createElement("section");
        section.innerHTML = `
        <center><img src= "${user.avatar}"></img></center>;
        <center><div>${user.first_name +" "+ user.last_name}</div></center>`;
        curr_main.appendChild(section);
    }
}