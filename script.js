document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    fetch("https://testapi.io/api/SimonasV/resource/UsersList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("response").innerText =
          "User added: " + JSON.stringify(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
