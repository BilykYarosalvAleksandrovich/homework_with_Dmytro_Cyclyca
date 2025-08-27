const container = document.querySelector(".container");

[...container.children].map(box => {
  box.addEventListener("click", handlerClick);
})

function handlerClick(event){
  const color = event.target.dataset.color;
  console.log(color);
}