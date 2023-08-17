let postsContainer = document.querySelector(".posts-container");
let usersContainer = document.querySelector(".sidebar");

let myrequest = new XMLHttpRequest();
myrequest.onload = function() {
    if(this.readyState === 4 && this.status === 200) {
        let myData = JSON.parse(this.responseText);
        for(let i = 0; i < myData.length; i++) {
            let user = document.createElement("div");
            user.classList.add("user");
            let userName = document.createElement("h2");
            let userNameText = document.createTextNode(myData[i].name);
            userName.classList.add("user-name");
            userName.appendChild(userNameText);
            let userEmail = document.createElement("p");
            let userEmailText = document.createTextNode(myData[i].email);
            userEmail.appendChild(userEmailText);
            userEmail.classList.add("user-email");
            user.appendChild(userName);
            user.appendChild(userEmail);
            usersContainer.appendChild(user);
        }
    }else {
        console.log("Connection Faild")
    }
}
myrequest.open("GET", "https://jsonplaceholder.typicode.com/users");
myrequest.send();



const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((result) => result.json())
    .then((data) => data.slice(0, 10))
    .then((json) => json)
    .then((response) => {
        console.log(response);
        for(let i = 0; i < response.length; i++) {
            let post = document.createElement("div");
            post.classList.add("post");
            let postTitle = document.createElement("h3");
            let postTitleText = document.createTextNode(response[i].title);
            postTitle.appendChild(postTitleText);
            postTitle.classList.add("post-title")
            let postDescription = document.createElement("p");
            let postDescriptionText = document.createTextNode(response[i].body);
            postDescription.appendChild(postDescriptionText);
            postDescription.classList.add("post-description");
            post.appendChild(postTitle);
            post.appendChild(postDescription);
            postsContainer.appendChild(post);
        }
    })
    .catch((error) => console.log(error))
}
getPosts();
