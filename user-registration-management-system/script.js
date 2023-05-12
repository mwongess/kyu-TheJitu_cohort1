const createUserBtn = document.querySelector(".btn");
// Select elements from the dom
const form = document.forms["user-form"];

// Dummy data displayed when the page launches
const users = [
  { name: "John Doe", id: "1r12", country: "United States" },
  { name: "Jane Smith", id: "2", country: "Canada" },
  { name: "Bob Johnson", id: "3", country: "United Kingdom" },
  { name: "Sarah Lee", id: "4", country: "Australia" },
  { name: "Mohammed Ali", id: "5", country: "United Arab Emirates" },
  { name: "Mohammed Ali", id: "5", country: "United Arab Emirates" },
];
localStorage.setItem("users", JSON.stringify(users));

// Clears form after successful submission and redirects user to the users page
const clearForm = () => {
  form.elements.name.value = "";
  form.elements.country.value = "";
  form.elements.id.value = "";
  // Redirect
  setTimeout(() => {
    location.href = "./users/index.html";
  }, 1000);
};

// Handles click event on the add user button
createUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !form.elements.name.value ||
    !form.elements.country.value ||
    !form.elements.id.value
  ) {
    alert("All fields are required");
  } else {
    const name = form.elements.name.value;
    const id = form.elements.id.value;
    const country = form.elements.country.value;

    const user = {
      name: name,
      id: id,
      country: country,
    };
    users.push(user);
    const json_data = JSON.stringify(users);
    localStorage.setItem("users", json_data);

    clearForm(); //Clear form
  }
});
