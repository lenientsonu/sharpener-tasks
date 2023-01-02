const posts = [
    {title: 'Post One' , body:'This is post one'},
    {title: 'Post Two' , body:'This is post two'}
];


function getPosts(){
    
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);

}

async function createPost(post){
    return await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // posts.push(post);
            const err = false;
            if(!err){
                resolve(posts.push(post));
            }
            else{
                reject('Error: Something went wrong');
            }
        },1000);
    });    
};

async function deletePost(){
    return await new Promise((resolve,reject)=>{
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

createPost({title:'Post Three', body:'This is post three'});
createPost({title:'Post Four', body:'This is post four'});

getPosts();
deletePost();
getPosts()

