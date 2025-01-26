//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


//*End of story :)
const article = document.querySelector("article");
article.style.display = "flex";
article.style.justifyContent = "center";
article.style.gap = "30px";
article.style.flexWrap = "wrap";
const url="https://67936e815eae7e5c4d8e9f86.mockapi.io/users";
async function cards() {
    try {
        const data= await axios(url);
        const data1=await data.data;  
        data1.forEach(element => {
          makeUserData(element)
         });
         return data1;
    } catch (error) {
       throw console.log(error);
        
    }
    }
    cards();
    function makeUserData (element){
    const cardEl=document.createElement('div');
    article.append(cardEl);
    const nameEl=document.createElement("h3");
    const lastNameEl=document.createElement("h3");
    // const phoneEl=document.createElement("h3");
    cardEl.append(nameEl);
    cardEl.append(lastNameEl);
    // cardEl.append(phoneEl);
    nameEl.textContent=element.firstname;
    lastNameEl.textContent=element.lastname;
    // phoneEl.textContent=element.phone;
    cardEl.style.display = "flex";
    cardEl.style.justifyContent = "center";
    cardEl.style.flexDirection = "column-reverse";
    cardEl.style.alignItems = "center";
    
    cardEl.style.border="1px solid black";
    cardEl.style.borderRadius = "10px";
    cardEl.style.padding = "10px";
    cardEl.style.width = "180px";
    }
    // ---------------------------------------delete

const formDelete = document.querySelector("#delete");

formDelete.addEventListener("submit", async (event) => {
  event.preventDefault();

  const APIPUT = `https://679285f2cf994cc6804a5088.mockapi.io/users/${event.target.id.value}`;

  fetch(APIPUT, {
    method: "DELETE",
  });
});