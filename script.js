let users = ["Ardit", "Elira"];

const userInput = document.getElementById("userInput");
const addBtn = document.getElementById("addBtn");
const userList = document.getElementById("userList");

function renderUsers() {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.classList.add("user-card");

    li.innerHTML = `
            <span>${user}</span>
            <button onclick="deleteUser(${index})">Delete</button>
        `;

    userList.appendChild(li);
  });
}

function addUser() {
  const name = userInput.value.trim();

  if (name === "") {
    alert("Ju lutem shkruani një emër!");
    return;
  }

  users.push(name);
  userInput.value = "";
  renderUsers();
}

function deleteUser(index) {
  users.splice(index, 1);
  renderUsers();
}

addBtn.addEventListener("click", addUser);

renderUsers();
