const user_to_update = JSON.parse(localStorage.getItem("user"));

const renderForm = () => {
  const outlet = document.querySelector(".form");
  outlet.innerHTML += `
    <form action="" name="user-form">
        <input type="text" name="name" placeholder="${user_to_update.name}" value="">
        <input type="text" name="id" placeholder="${user_to_update.id}" value="">
        <select name="country" placeholder="${user_to_update.country}">
            <option value="${user_to_update.country}"></option>
            <option value="Kenya">Kenya</option>
            <option value="Angola">Angola</option>
            <option value="Benin">Benin</option>
            <option value="Botswana">Botswana</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Burundi">Burundi</option>
            <option value="Cabo Verde">Cabo Verde</option>
            <option value="Cameroon">Cameroon</option>
        </select>
        <button class="btn" type="submit">Update User</button>
    </form>
    `;
};

const updateUser = ()=>{

}
renderForm()
