const posts = [
    {title: 'Post One' , body:'This is post one'},
    {title: 'Post Two' , body:'This is post two'}
];


function getPosts(){
    
    // setTimeout(()=>{
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    // }, 1000);

}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
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

// createPost({title:'Post Three', body:'This is post three'})
// .then(()=>{
//     getPosts();
//     deletePost().then(()=>{
//         getPosts();
//         deletePost().then(()=>{
//             getPosts();
//             deletePost().then(()=>{
//                 getPosts();
//                 createPost({title:'Post Four', body:'This is post four'}).then(()=>{
//                     getPosts();
//                     deletePost().then(getPosts).catch(err => console.log(err));
//                 }).catch(err => console.log(err));
//             }).catch(err => console.log(err));
//         }).catch(err => console.log(err));
//     }).catch(err => console.log(err));
// }).catch(err => console.log(err));
// deletePost().then(getPosts).catch(err => console.log(err));

//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'Goodbye');
});

Promise.all([promise1,promise2]).then((values)=>{
    console.log(values);
})
