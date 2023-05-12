// Data displayed  when we launch the page
const json_data = localStorage.getItem("users");
const data = JSON.parse(json_data);

// Create, read, update, delete methods to manipulate the data

const displayUsers = () => {
  const outlet = document.querySelector(".outlet");
  data.forEach((user) => {
    outlet.innerHTML += `
            <tr>
            <td>${user.name}</td>
            <td>${user.country}</td>
            <td>
            <button class="update">Update</button>
            </td>
            <td>
            <button onclick="deleteUser('${user.id}')" class="delete">Delete</button>
            </td>
            </tr>
    `;
  });
};

const updateUser = (id) => {};

const deleteUser = (id) => {
  const data_after_deleted = data.filter((user) => {
    return user.id != id;
  });
  console.log(data_after_deleted);
  localStorage.setItem("users", JSON.stringify(data_after_deleted));
  location.reload();
};

displayUsers();
