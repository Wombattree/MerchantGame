async function NewGameHandler(event) {
  event.preventDefault();

  const newGameName = document.querySelector("#new-game").value.trim();

  if (newGameName) {
    const response = await fetch(`/api/saveFile`, {
      method: "POST",
      body: JSON.stringify({ newGameName }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) document.location.replace(`/worldMap`);
    else alert(response.statusText);
  }
}

async function DeleteGameHandler(event) {
  if (event.target.hasAttribute("data-id")) {
    const saveFileId = event.target.getAttribute("data-id");

    const response = await fetch(`/api/saveFile/${saveFileId}`, {
      method: "DELETE",
    });

    if (response.ok) document.location.replace(`/saveFile`);
    else alert(response.statusText);
  }
}

async function GoToExistingGameHandler(event) {
  if (event.target.hasAttribute("data-id")) {
    const saveFileId = event.target.getAttribute("data-id");

    const response = await fetch(`/api/saveFile/${saveFileId}`, {
      method: "GET",
    });

    if (response.ok) document.location.replace(`/worldMap`);
    else alert(response.statusText);
  }
}

document.querySelector(".new-game").addEventListener("submit", NewGameHandler);

document
  .querySelector(".delete-game")
  .addEventListener("click", DeleteGameHandler);

document
  .querySelector(".existing-game")
  .addEventListener("click", GoToExistingGameHandler);
