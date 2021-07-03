const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLICK
// clearBtn.addEventListener('click', runEvent);
// DOUBLE CLICK
//clearBtn.addEventListener('dblclick', runEvent);
// MOUSE DOWN
//clearBtn.addEventListener('mousedown', runEvent);
// MOUSE UP
//clearBtn.addEventListener('mouseup', runEvent);
// MOUSE ENTER
//clearBtn.addEventListener('mouseenter', runEvent);
// MOUSE LEAVE
// clearBtn.addEventListener('mouseleave', runEvent);
// MOUSE OVER fire off to an element inside the element
// clearBtn.addEventListener('mouseover', runEvent);
// MOUSE OUT fire off to an element inside the element
// clearBtn.addEventListener('mouseout', runEvent);
// mouse move (any move)
card.addEventListener('mousemove', runEvent);



// Event Handler
function runEvent(e) {
  console.log(`Event Type: ${e.type} ${e.offsetY}`);

  heading.textContent = `mouse X: ${e.offsetX} | mouse Y: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40 )`;
}