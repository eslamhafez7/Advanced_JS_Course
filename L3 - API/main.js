let myRequest = new XMLHttpRequest;
myRequest.responseType = "json";
myRequest.open("GET", "https://jsonplaceholder.typicode.com/todos");
myRequest.send();

myRequest.onload = function() {
    console.log(typeof myRequest.response);
    let posts = myRequest.response;
    console.log(posts);

        for(let post of posts) {
            document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`
    }
}

function getData(apiLink) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            if(this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText))
            }else {
                reject(new Error("Connection Faild"))
            }
        }
        xhr.onerror = function () {
            reject (new Error("Request Error"))
        }
        xhr.open("GET", apiLink);
        xhr.send();
    });
};
getData("https://jsonplaceholder.typicode.com/posts").then(
    (resolveValue) => console.log(resolveValue)
).catch(
    (rejectValue) => console.log(rejectValue)
).finally (
    () => console.log("Operation Done")
)
async function fetchTodosAndPosts() {
    try {
      const [todos, posts] = await Promise.all([
        getData("https://jsonplaceholder.typicode.com/todos"),
        getData("https://jsonplaceholder.typicode.com/posts"),
      ]);
  
      console.log("Todos:", todos);
      console.log("Posts:", posts);
  
      for (let post of posts) {
        document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`;
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      console.log("Operation Done");
    }
  }
  
  // Call the function to fetch both data
  fetchTodosAndPosts();
  