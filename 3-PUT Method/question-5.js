//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */



//*To be continue...
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
  const idElement = document.createElement("h3");
cardEl.append(idElement);
idElement.textContent=element.id;
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
  //  -----------------------------------------------
const formPut = document.querySelector("form");

formPut.addEventListener("submit", async (event) => {
  event.preventDefault();

  const APIPUT = `https://67936e815eae7e5c4d8e9f86.mockapi.io/users/${event.target.id.value}`;

  const data = {
    firstName: event.target.fName.value,
    lastName: event.target.lName.value,
  };
  fetch(APIPUT, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});