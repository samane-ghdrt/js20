/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");
article.style.display = "flex";
article.style.justifyContent = "center";
article.style.gap = "30px";
article.style.flexWrap = "wrap";

// ! Answer

async function cards() {
try {
    const data= await axios('https://jsonplaceholder.typicode.com/users');
    const data1=await data.data;  
    data1.forEach(element => {
      makeUserData(element)
     });
     return data1;
} catch (error) {
   throw console.log(error);
    
}
}
console.log(cards());
function makeUserData (element){
const cardEl=document.createElement('div');
article.append(cardEl);
const nameEl=document.createElement("h3");
const companyNAmeEl=document.createElement("h3");
cardEl.append(nameEl);
cardEl.append(companyNAmeEl);
nameEl.textContent=element.name;
companyNAmeEl.textContent=element.company.name;
cardEl.style.display = "flex";
cardEl.style.justifyContent = "center";
cardEl.style.flexDirection = "column-reverse";
cardEl.style.alignItems = "center";

cardEl.style.border="1px solid black";
cardEl.style.borderRadius = "10px";
cardEl.style.padding = "10px";
cardEl.style.width = "180px";
}