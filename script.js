let container = document.getElementsByClassName('.container');
let addlist = document.getElementById('add-a-list-btn');
let listbox = document.getElementById('save-listbox');
let i;



function createlist(){
  let div = document.createElement("div");
  let box = document.createElement('div');
  let listinput = document.createElement('input');
  let savebt = document.createElement('button');
  let addlist = document.createElement('button');
  savebt.innerHTML = "Save";


  div.classList.add("container");
  box.classList.add("save-list-box");
  listinput.classList.add("input");
  savebt.classList.add("savebtn");
  console.log(div);

  div.setAttribute("style", "display: grid");
  div.appendChild(box);
  box.appendChild(listinput);
  box.appendChild(savebt);
  document.body.appendChild(div);

}

function newlist (){
  let inputlist = document.createElement("input");
  let inputValue = document.getElementsByClassName('input');
  let x = document.createTextNode(inputValue);
  inputlist.appendChild(x);
  if(inputValue == ''){
    console.log(inputlist);
    alert("Must name list!")
  } else {
    document.getElementsByClassName("input").value = "";
  }
}
