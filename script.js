
let main = document.querySelector('main');
let p = document.querySelector('.inputhide');
let savebutn = document.querySelector('.savebtn')
let inputhide = document.querySelector(".input");



function createlist(){
  let div = document.createElement("div");
  let box = document.createElement('div');
  let listinput = document.createElement('input');
  let savebt = document.createElement('button');
  let addlist = document.createElement('button');
  let p = document.createElement('p');
  savebt.innerHTML = "Add list";
  let x = document.createElement('button');
  x.innerHTML = "X";
  let delX = document.createElement('button');
  delX.innerHTML = "X";



  div.classList.add("container");
  box.classList.add("save-list-box");
  listinput.classList.add("input");
  savebt.classList.add("savebtn");
  x.classList.add("x");
  delX.classList.add("inputhide", "delX");
  p.classList.add("inputhide");
  console.log(div);

  div.setAttribute("style", "display: grid");
  div.appendChild(box);
  box.appendChild(p);
  box.appendChild(listinput);
  box.appendChild(savebt);
  box.appendChild(x);
  box.appendChild(delX);
  main.appendChild(div);



  //adda din eventlistener
  let addcart = document.createElement('button');
  addcart.classList.add("inputhide");
  addcart.classList.add("Cartcss")
  addcart.innerHTML = "ADDCART"
  box.appendChild(addcart);

    savebt.addEventListener("click", function (e) {
    console.log(p);
    p.classList.remove("inputhide");
    p.textContent = listinput.value;
    listinput.classList.add("inputhide");
    savebt.classList.add("inputhide");
    addcart.classList.remove("inputhide");
    delX.classList.remove('inputhide');
    x.classList.add("inputhide");
    console.log(listinput.value);
    console.log(p);
    console.log(e);
  });

  x.addEventListener("click", function (e){
    div.parentElement.removeChild(div);

  })

  delX.addEventListener("click", function (e){
    div.parentElement.removeChild(div);
  })

}


  let newlist = document.querySelector(".newlist");
  newlist.addEventListener('click', createlist);
