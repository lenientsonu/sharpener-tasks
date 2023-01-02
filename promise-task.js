const posts = [
    {title: 'Post One' , body:'This is post one', createdAt:Date.now()},
    {title: 'Post Two' , body:'This is post two', createdAt:Date.now()}
];

const user = {
    username : 'sam',
    lastActivityTime : Date.now()
}


function getPosts(){
        setTimeout(()=>{
            let output = '';
            posts.forEach((post,index) => {
                output += `<li>${post.title} ${(Date.now()-post.createdAt)/1000} seconds ago</li>`
            });
            document.body.innerHTML = output;
        }, 1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post, createdAt:Date.now()})
            const err = false;
            if(!err){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        },1000);
    });    
};

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length){
                resolve(posts.pop());
            }
            else{
                reject('Array Is Empty Now');
            }
        },1000);
    });
    
};

function updateLastUserActivityTime(){
    return new Promise((resolve)=>{
        console.log(`Before User ${user.username}'s Last seen : ${user.lastActivityTime}`);
        user.lastActivityTime=Date.now();
        console.log(`Now User ${user.username}'s Last seen : ${user.lastActivityTime}`);
    });
};

function userUpdatesApost(){
    Promise.all([createPost,updateLastUserActivityTime]).then(()=>{
        console.log("Posts >>>>",posts)
        console.log(`User ${user.username}'s Last activity Time : ${user.lastActivityTime}`)
    }).catch(err => console.log(err));
};

createPost({title:'Post Three', body:'This is post three'})
.then(getPosts).catch(err => console.log(err));

createPost({title:'Post Four', body:'This is post four'})
.then(getPosts).catch(err => console.log(err));

updateLastUserActivityTime().then(()=>{
    userUpdatesApost()
}).catch(err => console.log(err));


deletePost().then(()=>{
    console.log("Posts after deleting >>> ",posts);
}).catch(err => console.log(err));
