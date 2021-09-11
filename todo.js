window.onload = function () {
  const form1 = document.getElementById("addForm");
  let tasks = document.getElementById("tasks");
  form1.addEventListener("submit", addItem);
  tasks.addEventListener("click", removeItem);
  tasks.addEventListener("click", strike);
}

function addItem(n) {
  n.preventDefault();

  let newItem = document.getElementById("todo").value;
  if (newItem == ""){
    alert("Please Create Some Task");
    return false;
  }
  else document.getElementById("todo").value = "";

  let li = document.createElement("li");
  li.className = "li";

  let deleteButton = document.createElement("button");
  deleteButton.className = "btn btn-danger btn-sm float-right mr-2 delete";
  deleteButton.appendChild(document.createTextNode("Delete"));
  
  let markDone = document.createElement("button");
  markDone.className = "btn btn-success btn-sm float-right mr-2 done";
  markDone.appendChild(document.createTextNode("Done"));

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(markDone);
  li.appendChild(deleteButton);
  tasks.appendChild(li);
}

function removeItem(n) {
  n.preventDefault();
  if (n.target.classList.contains("delete")) {
    let li = n.target.parentNode;
    tasks.removeChild(li);
  }
}

function strike(n){
  n.preventDefault();
  if(n.target.classList.contains("done")){
    let li = n.target.parentNode;
    li.className = "li strike";
  }
}

function submitBtn(btnID) {
  document.getElementById(btnID).disabled = false;
}
