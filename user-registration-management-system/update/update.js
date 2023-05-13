const user_to_update = JSON.parse(localStorage.getItem("user"));

const renderForm = () => {
  const outlet = document.querySelector(".form");
  outlet.innerHTML += `
    <form action="" name="user-form">
        <input type="text" name="name" placeholder="${user_to_update.name}" value="">
        <input type="text" name="id" placeholder="${user_to_update.id}" value="">
        <select name="country">
            <option value="Angola">Angola</option>
            <option value="Benin">Benin</option>
            <option value="Botswana">Botswana</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cameroon">Cameroon</option>
        </select>
        <button class="btn" type="submit">Update ${user_to_update.name}</button>
    </form>
    `;
};
renderForm();

const form = document.forms["user-form"];
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = form.elements.name.value;
  const id = form.elements.id.value;
  const country = form.elements.country.value;

  if (!name || !id || !country) {
    alert("Nothing changed!");
  } else {
    const initial_data = JSON.parse(localStorage.getItem("users"));
    const data_without_user_to_update = initial_data.filter((user) => {
      return user.id != user_to_update.id;
    });

    const updatedUser = {
      name,
      id,
      country,
    };
    const updatedUsers = [...data_without_user_to_update, updatedUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setTimeout(() => {
      location.href = "../users/index.html";
    }, 1500);
  }
});
