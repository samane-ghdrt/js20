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
const formPut = document.querySelector("#put");

formPut.addEventListener("submit", async (event) => {
  event.preventDefault();

  const APIPUT = `https://679285f2cf994cc6804a5088.mockapi.io/users/${event.target.id.value}`;

  const data = {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    avatar: event.target.avatar.value,
    city: event.target.city.value,
  };
  fetch(APIPUT, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});