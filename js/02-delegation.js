// const container = document.querySelector(".container");

// [...container.children].map(box => {
//   box.addEventListener("click", handlerClick);
// })

// function handlerClick(event){
//   const color = event.target.dataset.color;
//   console.log(color);
// }

// Делегування подій

// Отримай колір квадратика по якому було здійснено клік

// const container = document.querySelector(".container");

// container.addEventListener("click", handlerClick);

// function handlerClick(event) {
//   console.log(event.target);
// }

// const container = document.querySelector(".container");

// container.addEventListener("click", handlerClick);

// function handlerClick(event){
//   if(!event.target.classList.contains("box")){
//     return;
//   }
//   const color = event.target.dataset.color;
//   console.log(color);
}