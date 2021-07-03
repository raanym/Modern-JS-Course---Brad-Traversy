// document.querySelector('.clear-tasks').addEventListener('click', function (e) {
//   console.log('test');

//   // e.preventDefault();
// });


document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  //console.log('clicked');

  let val;
  val = e;

  // even target
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;
  // e.target.innerText = 'Hello';

  // even type
  val = e.type;

  // time stamp
  val = e.timeStamp;

  // coordinates
  val = e.clientY;
  val = e.clientX;

  // coordinates relative to the element itself
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}