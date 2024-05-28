function getLocalStorage () {
  const auth = localStorage.getItem("authenticated");
  if (auth && auth == "true") {
    return true;
  }
  return false;
}

function setLocalStorage () {
  const res = getLocalStorage();
  if (res) {
    return;
  }
  localStorage.setItem("authenticated", "true");
}

function removeFromLocalST () {
  if (getLocalStorage()) {
    localStorage.removeItem("authenticated");
  }
}


export { getLocalStorage, setLocalStorage, removeFromLocalST }