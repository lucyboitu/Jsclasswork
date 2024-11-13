//write a function that displays "Thanks for signing up" after 5 seconds and
//"Please login in" after every 2 seconds

function displayMessages() {
  setTimeout(() => {
    console.log("Thanks for signing up");
  }, 5000);

  setInterval(() => {
    console.log("Please login");
  }, 2000);
}
displayMessages();

//Write a function that displays "Processing your request...
//" immediately, and then after 3 seconds, displays "Request processed successfully!".

function displayMessages2() {
  console.log("Processing request....");

  setTimeout(() => {
    console.log("Request processed successfully!");
  }, 3000);
}
displayMessages2();

//Create a function that fetches data from an API (e.g., https://jsonplaceholder.typicode.com/users)

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => "Error, error");

  console.log(data);
}

//Create a User class with an async method fetchUserData(), which fetches user data from an API and prints the user’s name.

class User {
  constructor(userId) {
    this.userId = userId;
  }

  async fetchUserData() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${this.userId}`
      );

      if (!response.ok) {
        throw new Error(` Error fetching user data`);
      }

      const data = await response.json();
      console.log(`User's name: ${data.name}`);
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
}

//FETCH DATA FROM 2 APIS

async function fetchDataFromApis() {
  try {
    const postsApi = "https://jsonplaceholder.typicode.com/posts";
    const usersApi = "https://jsonplaceholder.typicode.com/users";

    const [postsResponse, usersResponse] = await Promise.all([
      fetch(postsApi),
      fetch(usersApi),
    ]);

    if (!postsResponse.ok || !usersResponse.ok) {
      throw new Error(`Failed to fetch data:`);
    }

    const postsData = await postsResponse.json();
    const usersData = await usersResponse.json();

    console.log("Posts Data:", postsData);
    console.log("Users Data:", usersData);

    return { postsData, usersData };
  } catch (error) {
    console.error("Error fetching data from APIs:", error);
  }
}

fetchDataFromApis();
