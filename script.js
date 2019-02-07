let container = document.getElementsByClassName('.container');
let addlist = document.getElementById('add-a-list-btn');
let listbox = document.getElementById('save-listbox')
let input = document.getElementsByClassName('list-input-box');
let savebtn = document.getElementsByClassName('save-btn');


function createlist(){
  let div = document.createElement("div");
  let box = document.createElement('div');
  let listinput = document.createElement('input');
  let listbtn = document.createElement('button');
  listbtn.innerHTML = "Save";

  div.classList.add("container");
  box.classList.add("save-list-box");
  listinput.classList.add("input");
  listbtn.classList.add("savebtn");
  console.log(div);


  div.appendChild(box);
  div.appendChild(listinput);
  div.appendChild(listbtn);
  document.body.appendChild(div);

}




/*

for (var value = 0; value < value.length; value+= 1) {
  div.setAttribute("class", "container");
}



  console.log(createlist);
}


*/
