const posts = [
    {title: 'Post One' , body:'This is post one', createdAt:Date.now()},
    {title: 'Post Two' , body:'This is post two', createdAt:Date.now()}
];

let intervalId = 0;
function getPosts(){
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
        setTimeout(()=>{
            let output = '';
            posts.forEach((post,index) => {
                output += `<li>${post.title} ${(Date.now()-post.createdAt)/1000} seconds ago</li>`
            });
            document.body.innerHTML = output;
        }, 1000);
    },1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:Date.now()});
        callback();
    },2000);
}

function create4thPost(post, callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:Date.now()});
        callback();
    },5000);
}

createPost({title:'Post Three', body:'This is post three'}, getPosts);
create4thPost({title:'Post Four', body:'This is post four'}, getPosts);


