/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

// const article = document.querySelector("article");

// ! Answer
async function cards() {
try {
    const data= await axios('https://jsonplaceholder.typicode.com/users');
    console.log(data.id);
    
      // for (const element of data.id) {
          
      // }
    const names= data.name;
    const companyName=data.username;  
} catch (error) {
    
}
}

cards();