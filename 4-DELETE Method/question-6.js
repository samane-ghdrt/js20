//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


//*End of story :)

const formDelete = document.querySelector("#delete");

formDelete.addEventListener("submit", async (event) => {
  event.preventDefault();

  const APIPUT = `https://679285f2cf994cc6804a5088.mockapi.io/users/${event.target.id.value}`;

  fetch(APIPUT, {
    method: "DELETE",
  });
});