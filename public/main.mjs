

import Joke from "joke.mjs"

const joke = new Joke(/*Joke list as array or \n seperated list*/);
console.log(`The joke teller knows ${joke.numberOfJokes}`)
console.log(joke.tellAJoke());

function searchBooks() {
    const input = document.getElementById("searchBar");
    const filter = input.value.toUpperCase();
    const bookList = document.getElementById("bookList");
    const books = bookList.getElementsByTagName("li");
    for (let i = 0; i < books.length; i++) {
      const title = books[i].textContent || books[i].innerText;
      if (title.toUpperCase().indexOf(filter) > -1) {
        books[i].style.display = "";
      } else {
        books[i].style.display = "none";
      }
    }
  }


                  // You can use JavaScript to dynamically add reviews to the HTML
const reviewsContainer = document.querySelector('.reviews');

const newReview = `
  <div class="review">
    <div class="reviewer">
      <img src="profile-pic-4.jpg" alt="Profile Picture">
      <h3>Samantha Lee</h3>
    </div>
    <p>Phasellus quis eros mauris. In hac habitasse platea dictumst. Integer finibus pharetra ex non maximus. Nam non velit vel enim mollis sodales ac quis dolor.</p>
  </div>
`;

reviewsContainer.insertAdjacentHTML('beforeend', newReview);


  

              