console.log("Person 1: shows tickets");
console.log("Person 2: shows tickets");

const preMovie = async () => {

    const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
      setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn =  new Promise((resolve, reject) => {
          setTimeout(() => resolve('popcorn'), 3000);
    });
    
    const addButter =  new Promise((resolve, reject) => {
          setTimeout(() => resolve('butter'), 3000);
    });
    
    const getColdDrinks = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('coldDrink'),1000);
    });
    let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [popcorn,butter,coldDrink] = await Promise.all([getPopcorn,addButter,getColdDrinks])
    console.log(`added ${popcorn} ${butter} ${coldDrink}`);
    
    return ticket;
    
  };
  
  preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log("Person 4: shows tickets");
console.log("Person 5: shows tickets");