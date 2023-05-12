// Data displayed  when we launch the page


// Create, read, update, delete methods to manipulate the data

const displayUsers = () => {
  const outlet = document.querySelector(".outlet");

  const json_data = localStorage.getItem('users')
  
  const data = JSON.parse(json_data)

  data.forEach((user) => {
    outlet.innerHTML += `
            <tr>
            <td>${user.name}</td>
            <td>${user.country}</td>
            <td>
            <button class="update">Update</button>
            <button class="delete">Delete</button>
            </td>
            </tr>
    `;
  });
};

const updateUser = (id) => {};
const deleteUser = (id) => {};

displayUsers();
