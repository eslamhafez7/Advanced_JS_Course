/*
    [GET - POST - PATCH | PUT - DELETE] L9
*/

// GET
function getPosts() {
let myRequest = new XMLHttpRequest;
myRequest.responseType = "json";
myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");

myRequest.send();

myRequest.onload = function() {
    if(myRequest.readyState === 4 && myRequest.status === 200) {
        let posts = myRequest.response;
        for(let post of posts) {
            document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`
        }
    }
    console.log(myRequest.response[0]);
}
}


// POST
function createPost() {
    let myRequest = new XMLHttpRequest();
    myRequest.open("POST", "https://jsonplaceholder.typicode.com/posts");
    myRequest.responseType = "json";
    myRequest.setRequestHeader("Accept", "application/json");
    myRequest.setRequestHeader("Content-type", "application/json");
    let bodyParams = `
    {
        "name": "Eslam",
        "title": "Developer",
        "country": " Egypt",
        "id": 201,
        "user_id": 1
    }`
    myRequest.send(bodyParams);
    myRequest.onload = function() {
        if(myRequest.readyState === 4 && myRequest.status === 200) {
            let response = myRequest.response;
            console.log(response); 
        }
        console.log("The readystate code is " + myRequest.readyState);
        console.log("The status code is " + myRequest.status);
        console.log(JSON.stringify(bodyParams));
        console.log(typeof bodyParams);
        console.log(JSON.parse(bodyParams));
    }
}


// PUT
function updatePosts () {
    let myRequest = new XMLHttpRequest();
    myRequest.open("PUT", "https://jsonplaceholder.typicode.com/posts/1");
    myRequest.responseType = "json";
    myRequest.setRequestHeader("Accept", "application/json")
    myRequest.setRequestHeader("Content-type", "application/json")
    let bodyParams = `{
        "body": "Hello My name is Eslam Hafez",
        "title": "Developer",
        "id": 7,
        "userId": 10
    }`
    myRequest.send(bodyParams);
    myRequest.onload = function() {
        if(myRequest.status >= 200 && myRequest.status < 300) {
            let response = myRequest.response;
            console.log(response);
            console.log(myRequest.status);
            console.log("The post has been crated successfully")
        }else {
            console.log(Error("failed"))
        }
    }
}
// DELETE

function deletePost() {
    let myRequest = new XMLHttpRequest();
    myRequest.open("DELETE" ,"https://jsonplaceholder.typicode.com/posts/1");
    myRequest.responseType = "json";
    myRequest.send();


    myRequest.onload = function() {
        if(this.status >= 200 && this.status < 300) {
            console.log(this.response);
            console.log("The status code is " + this.status);
            console.log("The post deleted successfully")
        }else {
            console.log("Failed to delete post")
        }
    }
}

// Filter
/*
    We use query params to filter api resources [?key=value]
*/

function filterPosts() {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts?userId=1");
    myRequest.responseType = "json";
    myRequest.send();

    myRequest.onload = function() {
        if(myRequest.status >= 200 && myRequest.status < 300) {
            let posts = myRequest.response;
            for(let i = 0; i < posts.length; i++) {
                document.querySelector("#content").innerHTML += `<h1>${posts[i].title}</h1>`;
            }
            console.log("Filtring finished successfully");
        }else {
            console.log("Filter faild")
        }
    }
}
// filterPosts();
// updatePosts();
// getPosts();
// createPost();
// deletePost();
