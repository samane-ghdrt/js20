// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...
// get----------------------------------------------------
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
    // --------------------------------------------------------------

const formEl=document.querySelector('form');

formEl.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const data={
    firstName:e.target.fName.value,
    lastName:e.target.lName.value,

    }
    axios(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body:data,
    });
})