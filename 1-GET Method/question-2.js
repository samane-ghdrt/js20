/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer

  
  async function get() {
    try {
      const url=await fetch("https://jsonplaceholder.typicode.com/users")
      if (url.status===404) {
        throw "user not found";
        
      } 
      data= await url.json()
      console.log(data);
      
    } catch (error) {
      console.error(error);
      
    }
  }

  get()