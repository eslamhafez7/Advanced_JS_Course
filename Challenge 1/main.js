const usersContainer = document.querySelector(".users-container");
const postsContainer = document.querySelector(".posts-container");

function getUsers() {
    const usersAPI = "https://jsonplaceholder.typicode.com/users";
    fetch(usersAPI)
    .then((response) => response.json())
    .then((result) => {
        for(let i = 0; i < result.length; i++) {
            let request = new XMLHttpRequest();
            request.onload = function () {
                if(this.readyState === 4 && this.status === 200) {
                    let users = this.response;
                    usersContainer.innerHTML = "";
                    for(let user of users) {
                        let content = `
                        <div class="user-container" id="${user.id}" onclick="Clicked(${user.id}, this)">
                            <h3 class="username">${user.name}</h3>
                            <h4 class="user-email">${user.email}</h4>
                        </div>
                        `
                        if(usersContainer.children.length > 0) {
                            usersContainer.children[0].classList.add("active")
                        }
                        usersContainer.innerHTML += content;
                    }
                }else {
                    console.log(Error("Connection faild"))
                }
            }
            request.open("GET",usersAPI);
            request.send();
            request.responseType = "json";
        }
    });
};
getUsers()

function Clicked(id, el) {
    getPosts(id)
    let activeElements = document.getElementsByClassName("active");
    for(element of activeElements) {
        element.classList.remove("active")
    }
    el.classList.add("active")
}

function getPosts(userId) {
    const postAPI = "https://jsonplaceholder.typicode.com/posts?userId="+userId;
    let request = new XMLHttpRequest();
    request.onload = function () {
        if(this.readyState === 4 && this.status === 200) {
            let posts = this.response;
            postsContainer.innerHTML = "";
            for(let post of posts) {
                let content = `
                <div id="post">
                    <h3 class="post-title">${post.title}</h3>
                    <h4 class="post-body">${post.body}</h4>
                </div>
                `
                postsContainer.innerHTML += content;
            }
        }else {
            console.log(Error("Connection faild"))
        }
    }
    request.open("GET",postAPI);
    request.send();
    request.responseType = "json";
};
getPosts(3);
