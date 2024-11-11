// let isDrawing = false;
// let count = 0;
// let lastX = 0, lastY = 0;

// // Function to create a dot at a specific position
// function drawDot(x, y) {
//     count++;
//     const dot = document.createElement('div');
//     dot.id = `${count}d`;
//     dot.style.position = 'absolute';
//     dot.style.width = '5px';
//     dot.style.height = '5px';
//     dot.style.backgroundColor = 'red';
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x}px`;
//     dot.style.top = `${y}px`;
//     dot.style.pointerEvents = 'none';  // No interference with page elements
//     document.body.appendChild(dot);
// }

// // Function to interpolate between two points and draw continuous dots
// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1); // Calculate the distance
//     const step = 2; // Step size for interpolation
//     const steps = distance / step;

//     for (let i = 0; i <= steps; i++) {
//         const x = x1 + (x2 - x1) * (i / steps);
//         const y = y1 + (y2 - y1) * (i / steps);
//         drawDot(x, y);
//     }
// }

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//     isDrawing = true;
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
// });

// // Draw as the mouse moves
// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;

//     drawLine(lastX, lastY, e.pageX, e.pageY); // Interpolate between last and current position
//     lastX = e.pageX;
//     lastY = e.pageY;
// });


// let elements;
// let dr = false
// let eSize=0;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red'; // Default color
// let dotSize = 5;      // Default size
// let count = 0;

// // Create a floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;

//     // Color picker
//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000'; // Default red
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//         customCursor.style.backgroundColor=e.target.value;
//     });
//     palette.appendChild(colorInput);

//     // Size slider
//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         eSize=e.target.value
//         customCursor.style.width = parseInt(e.target.value, 10)+"px";
//         customCursor.style.height = parseInt(e.target.value, 10)+"px";
//     });
//     palette.appendChild(sizeInput);

//     // Eraser button
//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     let b=true;
//     function rem(event){
//         // console.log("uuuu")
//         // const element = document.elementFromPoint(event.clientX, event.clientY);
//         console.log(event.clientX, event.clientY)
//         const radius = eSize; // Set the detection radius

//         elements.forEach((el) => {
            
//         // // console.log(`Hovered element ID: ${element.className}`);
//         // if (element && element.className=='drawing-dot') {
//         // //   console.log(`Hovered element ID: ${element.className}`);
//         //   element.remove()
//         // }

//         const rect = el.getBoundingClientRect(); // Get element's position
//         const elementCenterX = rect.left + rect.width / 2;
//         const elementCenterY = rect.top + rect.height / 2;
    
//         const distance = getDistance(event.clientX, event.clientY, elementCenterX, elementCenterY);
    
//         if (distance < radius) {
//           console.log('Element within circular area:', el);
//           el.remove(); // Remove the element if it's inside the circle
//         }
//     })
//     }
//     function rem1(){
//         document.body.addEventListener('mouseover', rem);
//     }
//     function getDistance(x1, y1, x2, y2) {
//         return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
//       }
//     eraserButton.addEventListener('click', (event) => {
//         // dotColor = 'white'; // Use white color to "erase"
//         // const elementId = event.target.id; // Get the id of the hovered element
//         // console.log('Element ID:', elementId);
//         b=!b;
//         console.log(b);
//         if(b){ 
//             dr = false;
//             document.body.removeEventListener('mousedown', rem1);           
//              document.body.removeEventListener('mouseover', rem);

//             return;}
//            elements = document.querySelectorAll('.drawing-dot');

//             dr=true;
//         console.log("uuuu890")
//         // document.body.addEventListener('mouseover', rem);
//         document.body.addEventListener('mousedown', rem1);
        
        
//     });

//     palette.appendChild(eraserButton);

//     // Clear button
//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Function to create a dot at a specific position
// function drawDot(x, y) {
//     count++;
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.id=count;
//     dot.style.position = 'absolute';
//     dot.style.width = `${dotSize}px`;
//     dot.style.height = `${dotSize}px`;
//     dot.style.backgroundColor = dotColor;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - dotSize / 2}px`;
//     dot.style.top = `${y - dotSize / 2}px`;
//     // dot.style.pointerEvents = 'none';  // Avoid interference with page elements
//     document.body.appendChild(dot);
// }

// // Function to draw a smooth line between two points
// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2; // Step size for smoother lines
//     const steps = distance / step;

//     for (let i = 0; i <= steps; i++) {
//         const x = x1 + (x2 - x1) * (i / steps);
//         const y = y1 + (y2 - y1) * (i / steps);
//         drawDot(x, y);
//     }
// }

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//     if(dr) return;
//     isDrawing = true;
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
// });

// // Draw as the mouse moves
// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });





// // Initialize the palette UI on page load
// createPalette();




// const style = document.createElement('style');
// style.textContent = `
//   .drawing-dot {
//       transition: background-color 0.2s, width 0.2s, height 0.2s;
//   }
//   button {
//       margin-left: 5px;
//       padding: 5px 10px;
//       cursor: pointer;
//   }
//   input[type="color"], input[type="range"] {
//       margin-left: 5px;
//       margin-right: 5px;
//   }
// `;
// document.head.appendChild(style);
// // Create the custom cursor element
// const customCursor = document.createElement('div');
// customCursor.classList.add('custom-cursor');

// customCursor.style.backgroundColor="red"
// customCursor.style.position="absolute"
// customCursor.style.borderRadius="50px"
// document.body.appendChild(customCursor); // Add it to the body

// // Track mouse movements to position the custom cursor
// document.addEventListener('mousemove', (event) => {
//     customCursor.style.left = `${event.clientX}px`;
//     customCursor.style.top = `${event.clientY}px`;
// });



// let elements;
// let dr = false;
// let eSize = 0;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let count = 0;

// // Load existing dots from localStorage when the page loads
// function restoreDots() {
//   const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//   savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
// }

// // Save the current dots to localStorage
// function saveDots() {
//   const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//     const rect = dot.getBoundingClientRect();
//     return {
//       x: rect.left + rect.width / 2,
//       y: rect.top + rect.height / 2,
//       size: parseInt(dot.style.width),
//       color: dot.style.backgroundColor
//     };
//   });
//   localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Create a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//   const dot = document.createElement('div');
//   dot.className = 'drawing-dot';
//   dot.style.position = 'absolute';
//   dot.style.width = `${size}px`;
//   dot.style.height = `${size}px`;
//   dot.style.backgroundColor = color;
//   dot.style.borderRadius = '50%';
//   dot.style.left = `${x - size / 2}px`;
//   dot.style.top = `${y - size / 2}px`;
//   document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//   const palette = document.createElement('div');
//   palette.style.position = 'fixed';
//   palette.style.top = '10px';
//   palette.style.left = '10px';
//   palette.style.padding = '10px';
//   palette.style.backgroundColor = 'white';
//   palette.style.border = '1px solid black';
//   palette.style.zIndex = 9999;

//   const colorInput = document.createElement('input');
//   colorInput.type = 'color';
//   colorInput.value = '#ff0000';
//   colorInput.addEventListener('input', (e) => {
//     dotColor = e.target.value;
//     customCursor.style.backgroundColor = e.target.value;
//   });
//   palette.appendChild(colorInput);

//   const sizeInput = document.createElement('input');
//   sizeInput.type = 'range';
//   sizeInput.min = 2;
//   sizeInput.max = 20;
//   sizeInput.value = dotSize;
//   sizeInput.addEventListener('input', (e) => {
//     dotSize = parseInt(e.target.value, 10);
//     eSize = dotSize;
//     customCursor.style.width = `${dotSize}px`;
//     customCursor.style.height = `${dotSize}px`;
//   });
//   palette.appendChild(sizeInput);

//   const eraserButton = document.createElement('button');
//   eraserButton.textContent = 'Eraser';
//   let eraserActive = false;

//   eraserButton.addEventListener('click', () => {
//     eraserActive = !eraserActive;
//     if (eraserActive) {
//       elements = document.querySelectorAll('.drawing-dot');
//       document.body.addEventListener('mousemove', eraseDot);
//     } else {
//       document.body.removeEventListener('mousemove', eraseDot);
//     }
//   });
//   palette.appendChild(eraserButton);

//   const clearButton = document.createElement('button');
//   clearButton.textContent = 'Clear';
//   clearButton.addEventListener('click', () => {
//     document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//     localStorage.removeItem('drawingDots');
//   });
//   palette.appendChild(clearButton);

//   document.body.appendChild(palette);
// }

// // Erase dots within a certain radius
// function eraseDot(event) {
//   elements.forEach(dot => {
//     const rect = dot.getBoundingClientRect();
//     const dotCenterX = rect.left + rect.width / 2;
//     const dotCenterY = rect.top + rect.height / 2;
//     const distance = getDistance(event.clientX, event.clientY, dotCenterX, dotCenterY);

//     if (distance < eSize) {
//       dot.remove();
//       saveDots(); // Save state after removing a dot
//     }
//   });
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Track mouse movements to position the custom cursor
// document.addEventListener('mousemove', (event) => {
//   customCursor.style.left = `${event.clientX}px`;
//   customCursor.style.top = `${event.clientY}px`;
// });

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//   if (dr) return;
//   isDrawing = true;
//   lastX = e.pageX;
//   lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//   isDrawing = false;
//   saveDots(); // Save state after drawing
// });

// // Draw a smooth line between two points
// document.body.addEventListener('mousemove', (e) => {
//   if (!isDrawing) return;
//   drawLine(lastX, lastY, e.pageX, e.pageY);
//   lastX = e.pageX;
//   lastY = e.pageY;
// });

// // Draw a smooth line between two points
// function drawLine(x1, y1, x2, y2) {
//   const distance = Math.hypot(x2 - x1, y2 - y1);
//   const step = dotSize / 2;
//   const steps = distance / step;

//   for (let i = 0; i <= steps; i++) {
//     const x = x1 + (x2 - x1) * (i / steps);
//     const y = y1 + (y2 - y1) * (i / steps);
//     drawDot(x, y);
//   }
// }

// // Create and style the custom cursor
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// document.body.appendChild(customCursor);

// // Add custom styles
// const style = document.createElement('style');
// style.textContent = `
//   .drawing-dot {
//     transition: background-color 0.2s, width 0.2s, height 0.2s;
//   }
//   .custom-cursor {
//     pointer-events: none;
//   }
// `;
// document.head.appendChild(style);

// // Initialize the palette and restore dots on page load
// createPalette();
// restoreDots();




// let elements;
// let dr = false;
// let eSize = 0;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let count = 0;

// // Load existing dots from localStorage when the page loads
// function restoreDots() {
//   const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//   savedDots.forEach(dot => {
//     drawDot(dot.x, dot.y, dot.size, dot.color);
//   });
// }

// // Save the current dots to localStorage
// function saveDots() {
//   const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//     const rect = dot.getBoundingClientRect();
//     const pageX = window.scrollX + rect.left + rect.width / 2;
//     const pageY = window.scrollY + rect.top + rect.height / 2;
//     return {
//       x: pageX,
//       y: pageY,
//       size: parseInt(dot.style.width),
//       color: dot.style.backgroundColor
//     };
//   });
//   localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Create a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//   const dot = document.createElement('div');
//   dot.className = 'drawing-dot';
//   dot.style.position = 'absolute';
//   dot.style.width = `${size}px`;
//   dot.style.height = `${size}px`;
//   dot.style.backgroundColor = color;
//   dot.style.borderRadius = '50%';
//   dot.style.left = `${x - size / 2}px`;
//   dot.style.top = `${y - size / 2}px`;
//   document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//   const palette = document.createElement('div');
//   palette.style.position = 'fixed';
//   palette.style.top = '10px';
//   palette.style.left = '10px';
//   palette.style.padding = '10px';
//   palette.style.backgroundColor = 'white';
//   palette.style.border = '1px solid black';
//   palette.style.zIndex = 9999;

//   const colorInput = document.createElement('input');
//   colorInput.type = 'color';
//   colorInput.value = '#ff0000';
//   colorInput.addEventListener('input', (e) => {
//     dotColor = e.target.value;
//     customCursor.style.backgroundColor = e.target.value;
//   });
//   palette.appendChild(colorInput);

//   const sizeInput = document.createElement('input');
//   sizeInput.type = 'range';
//   sizeInput.min = 2;
//   sizeInput.max = 20;
//   sizeInput.value = dotSize;
//   sizeInput.addEventListener('input', (e) => {
//     dotSize = parseInt(e.target.value, 10);
//     eSize = dotSize;
//     customCursor.style.width = `${dotSize}px`;
//     customCursor.style.height = `${dotSize}px`;
//   });
//   palette.appendChild(sizeInput);

//   const eraserButton = document.createElement('button');
//   eraserButton.textContent = 'Eraser';
//   let eraserActive = false;

//   eraserButton.addEventListener('click', () => {
//     eraserActive = !eraserActive;
//     if (eraserActive) {
//       elements = document.querySelectorAll('.drawing-dot');
//       document.body.addEventListener('mousemove', eraseDot);
//     } else {
//       document.body.removeEventListener('mousemove', eraseDot);
//     }
//   });
//   palette.appendChild(eraserButton);

//   const clearButton = document.createElement('button');
//   clearButton.textContent = 'Clear';
//   clearButton.addEventListener('click', () => {
//     document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//     localStorage.removeItem('drawingDots');
//   });
//   palette.appendChild(clearButton);

//   document.body.appendChild(palette);
// }

// // Erase dots within a certain radius
// function eraseDot(event) {
//   elements.forEach(dot => {
//     const rect = dot.getBoundingClientRect();
//     const dotCenterX = rect.left + rect.width / 2;
//     const dotCenterY = rect.top + rect.height / 2;
//     const distance = getDistance(event.pageX, event.pageY, dotCenterX, dotCenterY);

//     if (distance < eSize) {
//       dot.remove();
//       saveDots(); // Save state after removing a dot
//     }
//   });
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Track mouse movements to position the custom cursor
// document.addEventListener('mousemove', (event) => {
//   customCursor.style.left = `${event.clientX}px`;
//   customCursor.style.top = `${event.clientY}px`;
// });

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//   if (dr) return;
//   isDrawing = true;
//   lastX = e.pageX;
//   lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//   isDrawing = false;
//   saveDots(); // Save state after drawing
// });

// // Draw a smooth line between two points
// document.body.addEventListener('mousemove', (e) => {
//   if (!isDrawing) return;
//   drawLine(lastX, lastY, e.pageX, e.pageY);
//   lastX = e.pageX;
//   lastY = e.pageY;
// });

// // Draw a smooth line between two points
// function drawLine(x1, y1, x2, y2) {
//   const distance = Math.hypot(x2 - x1, y2 - y1);
//   const step = dotSize / 2;
//   const steps = distance / step;

//   for (let i = 0; i <= steps; i++) {
//     const x = x1 + (x2 - x1) * (i / steps);
//     const y = y1 + (y2 - y1) * (i / steps);
//     drawDot(x, y);
//   }
// }

// // Create and style the custom cursor
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// document.body.appendChild(customCursor);

// // Add custom styles
// const style = document.createElement('style');
// style.textContent = `
//   .drawing-dot {
//     transition: background-color 0.2s, width 0.2s, height 0.2s;
//   }
//   .custom-cursor {
//     pointer-events: none;
//   }
// `;
// document.head.appendChild(style);

// // Initialize the palette and restore dots on page load
// createPalette();
// restoreDots();


// let elements;
// let dr = false;
// let eSize = 0;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let count = 0;

// // Load existing dots from localStorage when the page loads
// function restoreDots() {
//   const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//   savedDots.forEach(dot => {
//     drawDot(dot.x, dot.y, dot.size, dot.color);
//   });
// }

// // Save the current dots to localStorage
// function saveDots() {
//   const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//     const rect = dot.getBoundingClientRect();
//     const pageX = window.scrollX + rect.left + rect.width / 2;
//     const pageY = window.scrollY + rect.top + rect.height / 2;
//     return {
//       x: pageX,
//       y: pageY,
//       size: parseInt(dot.style.width),
//       color: dot.style.backgroundColor
//     };
//   });
//   localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Create a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//   const dot = document.createElement('div');
//   dot.className = 'drawing-dot';
//   dot.style.position = 'absolute';
//   dot.style.width = `${size}px`;
//   dot.style.height = `${size}px`;
//   dot.style.backgroundColor = color;
//   dot.style.borderRadius = '50%';
//   dot.style.left = `${x - size / 2}px`;
//   dot.style.top = `${y - size / 2}px`;
//   document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//   const palette = document.createElement('div');
//   palette.style.position = 'fixed';
//   palette.style.top = '10px';
//   palette.style.left = '10px';
//   palette.style.padding = '10px';
//   palette.style.backgroundColor = 'white';
//   palette.style.border = '1px solid black';
//   palette.style.zIndex = 9999;
//   palette.style.cursor = 'move'; // Change cursor to move for dragging

//   // Make the palette draggable
//   let offsetX = 0, offsetY = 0;
//   palette.addEventListener('mousedown', (e) => {
//     offsetX = e.clientX - palette.getBoundingClientRect().left;
//     offsetY = e.clientY - palette.getBoundingClientRect().top;

//     function onMouseMove(e) {
//       palette.style.left = `${e.clientX - offsetX}px`;
//       palette.style.top = `${e.clientY - offsetY}px`;
//     }

//     document.addEventListener('mousemove', onMouseMove);

//     document.addEventListener('mouseup', () => {
//       document.removeEventListener('mousemove', onMouseMove);
//     }, { once: true });
//   });

//   // Color picker
//   const colorInput = document.createElement('input');
//   colorInput.type = 'color';
//   colorInput.value = '#ff0000';
//   colorInput.addEventListener('input', (e) => {
//     dotColor = e.target.value;
//     customCursor.style.backgroundColor = e.target.value;
//   });
//   palette.appendChild(colorInput);

//   // Size slider
//   const sizeInput = document.createElement('input');
//   sizeInput.type = 'range';
//   sizeInput.min = 2;
//   sizeInput.max = 20;
//   sizeInput.value = dotSize;
//   sizeInput.addEventListener('input', (e) => {
//     dotSize = parseInt(e.target.value, 10);
//     eSize = dotSize;
//     customCursor.style.width = `${dotSize}px`;
//     customCursor.style.height = `${dotSize}px`;
//   });
//   palette.appendChild(sizeInput);

//   // Eraser button
//   const eraserButton = document.createElement('button');
//   eraserButton.textContent = 'Eraser';
//   let eraserActive = false;

//   eraserButton.addEventListener('click', () => {
//     eraserActive = !eraserActive;
//     if (eraserActive) {
//       elements = document.querySelectorAll('.drawing-dot');
//       document.body.addEventListener('mousemove', eraseDot);
//     } else {
//       document.body.removeEventListener('mousemove', eraseDot);
//     }
//   });
//   palette.appendChild(eraserButton);

//   // Clear button
//   const clearButton = document.createElement('button');
//   clearButton.textContent = 'Clear';
//   clearButton.addEventListener('click', () => {
//     document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//     localStorage.removeItem('drawingDots');
//   });
//   palette.appendChild(clearButton);

//   document.body.appendChild(palette);
// }

// // Erase dots within a certain radius
// function eraseDot(event) {
//   elements.forEach(dot => {
//     const rect = dot.getBoundingClientRect();
//     const dotCenterX = rect.left + rect.width / 2;
//     const dotCenterY = rect.top + rect.height / 2;
//     const distance = getDistance(event.pageX, event.pageY, dotCenterX, dotCenterY);

//     if (distance < eSize) {
//       dot.remove();
//       saveDots();
//     }
//   });
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//   return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Track mouse movements to position the custom cursor
// document.addEventListener('mousemove', (event) => {
//   customCursor.style.left = `${event.clientX}px`;
//   customCursor.style.top = `${event.clientY}px`;
// });

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//   if (dr) return;
//   isDrawing = true;
//   lastX = e.pageX;
//   lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//   isDrawing = false;
//   saveDots();
// });

// // Draw a smooth line between two points
// document.body.addEventListener('mousemove', (e) => {
//   if (!isDrawing) return;
//   drawLine(lastX, lastY, e.pageX, e.pageY);
//   lastX = e.pageX;
//   lastY = e.pageY;
// });

// // Draw a smooth line between two points
// function drawLine(x1, y1, x2, y2) {
//   const distance = Math.hypot(x2 - x1, y2 - y1);
//   const step = dotSize / 2;
//   const steps = distance / step;

//   for (let i = 0; i <= steps; i++) {
//     const x = x1 + (x2 - x1) * (i / steps);
//     const y = y1 + (y2 - y1) * (i / steps);
//     drawDot(x, y);
//   }
// }

// // Create and style the custom cursor
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// document.body.appendChild(customCursor);

// // Add custom styles
// const style = document.createElement('style');
// style.textContent = `
//   .drawing-dot {
//     transition: background-color 0.2s, width 0.2s, height 0.2s;
//   }
//   .custom-cursor {
//     pointer-events: none;
//   }
// `;
// document.head.appendChild(style);

// // Initialize the palette and restore dots on page load
// createPalette();
// restoreDots();







// let elements;
// let dr = false;
// let eSize = 0;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let count = 0;
// let isDraggingPalette = false; // Track if palette is being dragged
// let eraserActive = false; // Track if the eraser is active

// // Load existing dots from localStorage when the page loads
// function restoreDots() {
//     const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//     savedDots.forEach(dot => {
//         drawDot(dot.x, dot.y, dot.size, dot.color);
//     });
// }

// // Save the current dots to localStorage
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         const pageX = window.scrollX + rect.left + rect.width / 2;
//         const pageY = window.scrollY + rect.top + rect.height / 2;
//         return {
//             x: pageX,
//             y: pageY,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Create a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;
//     palette.style.cursor = 'move'; // Change cursor to move for dragging

//     // Make the palette draggable
//     let offsetX = 0, offsetY = 0;

//     palette.addEventListener('mousedown', (e) => {
//         isDraggingPalette = true;
//         offsetX = e.clientX - palette.getBoundingClientRect().left;
//         offsetY = e.clientY - palette.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             palette.style.left = `${e.clientX - offsetX}px`;
//             palette.style.top = `${e.clientY - offsetY}px`;
//         }

//         document.addEventListener('mousemove', onMouseMove);

//         document.addEventListener('mouseup', () => {
//             isDraggingPalette = false;
//             document.removeEventListener('mousemove', onMouseMove);
//         }, { once: true });

//         e.stopPropagation(); // Prevent drawing/erasing while dragging
//     });

//     // Prevent drawing/erasing while interacting with the palette
//     palette.addEventListener('mousedown', (e) => e.stopPropagation());

//     // Color picker
//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000';
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//     });
//     palette.appendChild(colorInput);

//     // Size slider
//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         eSize = dotSize;
//     });
//     palette.appendChild(sizeInput);

//     // Eraser button
//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     eraserButton.addEventListener('click', () => {
//         eraserActive = !eraserActive; // Toggle eraser mode
//         if (eraserActive) {
//             eraserButton.style.backgroundColor = 'lightgrey'; // Indicate active state
//         } else {
//             eraserButton.style.backgroundColor = ''; // Reset style
//         }
//     });
//     palette.appendChild(eraserButton);

//     // Clear button
//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//         localStorage.removeItem('drawingDots');
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Erase dots within a certain radius
// function eraseDot(event) {
//     if (!eraserActive) return; // Only erase if eraser is active
//     elements = document.querySelectorAll('.drawing-dot');
//     elements.forEach(dot => {
//         const rect = dot.getBoundingClientRect();
//         const dotCenterX = rect.left + rect.width / 2;
//         const dotCenterY = rect.top + rect.height / 2;
//         const distance = getDistance(event.pageX, event.pageY, dotCenterX, dotCenterY);

//         if (distance < dotSize) { // Check distance against dotSize
//             dot.remove();
//             saveDots();
//         }
//     });
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Track mouse movements to position the custom cursor
// document.addEventListener('mousemove', (event) => {
//     if (eraserActive) {
//         eraseDot(event); // Erase dots while moving if eraser is active
//     }
// });

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//     if (isDraggingPalette) return;
//     isDrawing = true;
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
//     saveDots(); // Save dots after drawing
// });

// // Draw a smooth line between two points
// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     const steps = distance / step;

//     for (let i = 0; i <= steps; i++) {
//         const x = x1 + (x2 - x1) * (i / steps);
//         const y = y1 + (y2 - y1) * (i / steps);
//         drawDot(x, y);
//     }
// }

// // Create and style the custom cursor
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// document.body.appendChild(customCursor);

// // Add custom styles
// const style = document.createElement('style');
// style.textContent = `
//   .drawing-dot {
//     transition: background-color 0.2s, width 0.2s, height 0.2s;
//   }
// `;
// document.head.appendChild(style);

// // Initialize the palette and restore dots on page load
// createPalette();
// restoreDots();





// let elements;
// let dr = false;
// let eSize = 0;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let count = 0;
// let isDraggingPalette = false; // Track if palette is being dragged
// let eraserActive = false; // Track if the eraser is active

// // Load existing dots from localStorage when the page loads
// function restoreDots() {
//     const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//     savedDots.forEach(dot => {
//         drawDot(dot.x, dot.y, dot.size, dot.color);
//     });
// }

// // Save the current dots to localStorage
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         const pageX = window.scrollX + rect.left + rect.width / 2;
//         const pageY = window.scrollY + rect.top + rect.height / 2;
//         return {
//             x: pageX,
//             y: pageY,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Create a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;
//     palette.style.cursor = 'move'; // Change cursor to move for dragging

//     // Make the palette draggable
//     let offsetX = 0, offsetY = 0;

//     palette.addEventListener('mousedown', (e) => {
//         isDraggingPalette = true;
//         offsetX = e.clientX - palette.getBoundingClientRect().left;
//         offsetY = e.clientY - palette.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             palette.style.left = `${e.clientX - offsetX}px`;
//             palette.style.top = `${e.clientY - offsetY}px`;
//         }

//         document.addEventListener('mousemove', onMouseMove);

//         document.addEventListener('mouseup', () => {
//             isDraggingPalette = false;
//             document.removeEventListener('mousemove', onMouseMove);
//         }, { once: true });

//         e.stopPropagation(); // Prevent drawing/erasing while dragging
//     });

//     // Prevent drawing/erasing while interacting with the palette
//     palette.addEventListener('mousedown', (e) => e.stopPropagation());

//     // Color picker
//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000';
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//         customCursor.style.backgroundColor = dotColor; // Update cursor color
//     });
//     palette.appendChild(colorInput);

//     // Size slider
//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         eSize = dotSize;
//         customCursor.style.width = `${dotSize}px`; // Update cursor size
//         customCursor.style.height = `${dotSize}px`; // Update cursor size
//     });
//     palette.appendChild(sizeInput);

//     // Eraser button
//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     eraserButton.addEventListener('click', () => {
//         eraserActive = !eraserActive; // Toggle eraser mode
//         if (eraserActive) {
//             eraserButton.style.backgroundColor = 'lightgrey'; // Indicate active state
//         } else {
//             eraserButton.style.backgroundColor = ''; // Reset style
//         }
//     });
//     palette.appendChild(eraserButton);

//     // Clear button
//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//         localStorage.removeItem('drawingDots');
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Erase dots within a certain radius
// function eraseDot(event) {
//     if (!eraserActive) return; // Only erase if eraser is active
//     elements = document.querySelectorAll('.drawing-dot');
//     elements.forEach(dot => {
//         const rect = dot.getBoundingClientRect();
//         const dotCenterX = rect.left + rect.width / 2;
//         const dotCenterY = rect.top + rect.height / 2;
//         const distance = getDistance(event.pageX, event.pageY, dotCenterX, dotCenterY);

//         if (distance < dotSize) { // Check distance against dotSize
//             dot.remove();
//             saveDots();
//         }
//     });
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Track mouse movements to position the custom cursor
// document.addEventListener('mousemove', (event) => {
//     customCursor.style.left = `${event.clientX - dotSize / 2}px`; // Center cursor
//     customCursor.style.top = `${event.clientY - dotSize / 2}px`; // Center cursor
//     if (eraserActive) {
//         eraseDot(event); // Erase dots while moving if eraser is active
//     }
// });

// // Start drawing on mouse down
// document.body.addEventListener('mousedown', (e) => {
//     if (isDraggingPalette) return;
//     isDrawing = true;
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// // Stop drawing on mouse up
// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
//     saveDots(); // Save dots after drawing
// });

// // Draw a smooth line between two points
// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     const steps = distance / step;

//     for (let i = 0; i <= steps; i++) {
//         const x = x1 + (x2 - x1) * (i / steps);
//         const y = y1 + (y2 - y1) * (i / steps);
//         drawDot(x, y);
//     }
// }

// // Create and style the custom cursor
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = `${dotSize}px`; // Initialize cursor size
// customCursor.style.height = `${dotSize}px`; // Initialize cursor size
// document.body.appendChild(customCursor);

// // Add custom styles
// const style = document.createElement('style');
// style.textContent = `
//   .drawing-dot {
//     transition: background-color 0.2s, width 0.2s, height 0.2s;
//   }
// `;
// document.head.appendChild(style);

// // Initialize the palette and restore dots on page load
// createPalette();
// restoreDots();



// let elements;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let isDraggingPalette = false;
// let eraserActive = false;
// let isErasing = false; // Track if erasing mode is active

// // Load existing dots from localStorage
// function restoreDots() {
//     const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//     savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
// }

// // Save current dots to localStorage
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         return {
//             x: window.scrollX + rect.left + rect.width / 2,
//             y: window.scrollY + rect.top + rect.height / 2,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Create a dot at given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;
//     palette.style.cursor = 'move';

//     // Make the palette draggable
//     let offsetX = 0, offsetY = 0;
//     palette.addEventListener('mousedown', (e) => {
//         isDraggingPalette = true;
//         offsetX = e.clientX - palette.getBoundingClientRect().left;
//         offsetY = e.clientY - palette.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             e.preventDefault();
//             palette.style.left = `${e.clientX - offsetX}px`;
//             palette.style.top = `${e.clientY - offsetY}px`;
//         }

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', () => {
//             isDraggingPalette = false;
//             document.removeEventListener('mousemove', onMouseMove);
//         }, { once: true });

//         e.stopPropagation(); // Prevent interaction with palette from starting drawing/erasing
//     });

//     // Color picker
//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000';
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//         customCursor.style.backgroundColor = dotColor;
//     });
//     palette.appendChild(colorInput);

//     // Size slider
//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         customCursor.style.width = `${dotSize}px`;
//         customCursor.style.height = `${dotSize}px`;
//     });
//     palette.appendChild(sizeInput);

//     // Eraser button
//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     eraserButton.addEventListener('click', () => {
//         eraserActive = !eraserActive;
//         eraserButton.style.backgroundColor = eraserActive ? 'lightgrey' : '';
//         customCursor.style.backgroundColor = eraserActive ? 'black' : dotColor;
//     });
//     palette.appendChild(eraserButton);

//     // Clear button
//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//         localStorage.removeItem('drawingDots');
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Erase dots during mouse movements
// function eraseDot(event) {
//     if (!eraserActive || !isErasing) return;
//     elements = document.querySelectorAll('.drawing-dot');
//     elements.forEach(dot => {
//         const rect = dot.getBoundingClientRect();
//         const distance = getDistance(event.pageX, event.pageY, rect.left + rect.width / 2, rect.top + rect.height / 2);

//         if (distance < dotSize) {
//             dot.remove();
//             saveDots();
//         }
//     });
// }

// // Calculate distance between two points
// function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Custom cursor for drawing/erasing
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = `${dotSize}px`;
// customCursor.style.height = `${dotSize}px`;
// document.body.appendChild(customCursor);

// // Mouse event listeners
// document.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     customCursor.style.left = `${e.clientX - dotSize / 2}px`;
//     customCursor.style.top = `${e.clientY - dotSize / 2}px`;

//     if (isErasing) eraseDot(e); // Continuously erase dots if erasing mode is active
// });

// document.body.addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     if (isDraggingPalette) return;

//     if (eraserActive) {
//         isErasing = true;
//         eraseDot(e); // Erase immediately on mousedown
//     } else {
//         isDrawing = true;
//         lastX = e.pageX;
//         lastY = e.pageY;
//     }
// });

// document.body.addEventListener('mouseup', (e) => {
//     e.preventDefault();
//     isDrawing = false;
//     isErasing = false;
//     saveDots(); // Save the state after drawing or erasing
// });

// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     for (let i = 0; i <= distance / step; i++) {
//         const x = x1 + (x2 - x1) * (i / (distance / step));
//         const y = y1 + (y2 - y1) * (i / (distance / step));
//         drawDot(x, y);
//     }
// }

// // Initialize palette and restore saved dots
// createPalette();
// restoreDots();







// let elements;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let isDraggingPalette = false;
// let eraserActive = false;
// let isErasing = false; // Track if erasing mode is active

// // Load dots from localStorage
// function restoreDots() {
//     const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//     savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
// }

// // Save dots to localStorage
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         return {
//             x: window.scrollX + rect.left + rect.width / 2,
//             y: window.scrollY + rect.top + rect.height / 2,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Draw a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;
//     palette.style.cursor = 'move';

//     let offsetX = 0, offsetY = 0;
//     palette.addEventListener('mousedown', (e) => {
//         isDraggingPalette = true;
//         offsetX = e.clientX - palette.getBoundingClientRect().left;
//         offsetY = e.clientY - palette.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             e.preventDefault();
//             palette.style.left = `${e.clientX - offsetX}px`;
//             palette.style.top = `${e.clientY - offsetY}px`;
//         }

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', () => {
//             isDraggingPalette = false;
//             document.removeEventListener('mousemove', onMouseMove);
//         }, { once: true });

//         e.stopPropagation();
//     });

//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000';
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//         customCursor.style.backgroundColor = dotColor;
//     });
//     palette.appendChild(colorInput);

//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         customCursor.style.width = `${dotSize}px`;
//         customCursor.style.height = `${dotSize}px`;
//     });
//     palette.appendChild(sizeInput);

//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     eraserButton.addEventListener('click', () => {
//         eraserActive = !eraserActive;
//         eraserButton.style.backgroundColor = eraserActive ? 'lightgrey' : '';
//         customCursor.style.backgroundColor = eraserActive ? 'black' : dotColor;
//     });
//     palette.appendChild(eraserButton);

//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//         localStorage.removeItem('drawingDots');
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Optimized erase function using hit detection
// function eraseDot(event) {
//     if (!eraserActive || !isErasing) return;

//     const dot = document.elementFromPoint(event.clientX, event.clientY);
//     if (dot && dot.classList.contains('drawing-dot')) {
//         dot.remove();
//         saveDots();
//     }
// }

// // Custom cursor
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = `${dotSize}px`;
// customCursor.style.height = `${dotSize}px`;
// document.body.appendChild(customCursor);

// // Mouse event listeners
// document.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     customCursor.style.left = `${e.clientX - dotSize / 2}px`;
//     customCursor.style.top = `${e.clientY - dotSize / 2}px`;

//     if (isErasing) eraseDot(e);
// });

// document.body.addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     if (isDraggingPalette) return;

//     if (eraserActive) {
//         isErasing = true;
//         eraseDot(e); // Erase on mousedown
//     } else {
//         isDrawing = true;
//         lastX = e.pageX;
//         lastY = e.pageY;
//     }
// });

// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
//     isErasing = false;
//     saveDots();
// });

// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     for (let i = 0; i <= distance / step; i++) {
//         const x = x1 + (x2 - x1) * (i / (distance / step));
//         const y = y1 + (y2 - y1) * (i / (distance / step));
//         drawDot(x, y);
//     }
// }

// // Initialize palette and restore saved dots
// createPalette();
// restoreDots();




// let elements;
// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let isDraggingPalette = false;
// let eraserActive = false;
// let isErasing = false; // Track if erasing mode is active
// const eraserSize = 20; // Radius of the eraser

// // Load dots from localStorage
// function restoreDots() {
//     const savedDots = JSON.parse(localStorage.getItem('drawingDots')) || [];
//     savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
// }

// // Save dots to localStorage
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         return {
//             x: window.scrollX + rect.left + rect.width / 2,
//             y: window.scrollY + rect.top + rect.height / 2,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem('drawingDots', JSON.stringify(dots));
// }

// // Draw a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;
//     palette.style.cursor = 'move';

//     let offsetX = 0, offsetY = 0;
//     palette.addEventListener('mousedown', (e) => {
//         isDraggingPalette = true;
//         offsetX = e.clientX - palette.getBoundingClientRect().left;
//         offsetY = e.clientY - palette.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             e.preventDefault();
//             palette.style.left = `${e.clientX - offsetX}px`;
//             palette.style.top = `${e.clientY - offsetY}px`;
//         }

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', () => {
//             isDraggingPalette = false;
//             document.removeEventListener('mousemove', onMouseMove);
//         }, { once: true });

//         e.stopPropagation();
//     });

//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000';
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//         customCursor.style.backgroundColor = dotColor;
//     });
//     palette.appendChild(colorInput);

//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         customCursor.style.width = `${dotSize}px`;
//         customCursor.style.height = `${dotSize}px`;
//     });
//     palette.appendChild(sizeInput);

//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     eraserButton.addEventListener('click', () => {
//         eraserActive = !eraserActive;
//         eraserButton.style.backgroundColor = eraserActive ? 'lightgrey' : '';
//         customCursor.style.backgroundColor = eraserActive ? 'black' : dotColor;
//     });
//     palette.appendChild(eraserButton);

//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//         localStorage.removeItem('drawingDots');
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Erase all dots under the eraser area
// function eraseDots(event) {
//     if (!eraserActive || !isErasing) return;

//     const elements = document.querySelectorAll('.drawing-dot');
//     elements.forEach(dot => {
//         const rect = dot.getBoundingClientRect();
//         const dotCenterX = rect.left + rect.width / 2;
//         const dotCenterY = rect.top + rect.height / 2;
//         const distance = getDistance(event.clientX, event.clientY, dotCenterX, dotCenterY);

//         if (distance < eraserSize) {
//             dot.remove(); // Remove dots within eraser radius
//         }
//     });

//     saveDots();
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Custom cursor to indicate the eraser size
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = `${dotSize}px`;
// customCursor.style.height = `${dotSize}px`;
// document.body.appendChild(customCursor);

// // Mouse events
// document.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     customCursor.style.left = `${e.clientX - eraserSize / 2}px`;
//     customCursor.style.top = `${e.clientY - eraserSize / 2}px`;

//     if (isErasing) eraseDots(e);
// });

// document.body.addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     if (isDraggingPalette) return;

//     if (eraserActive) {
//         isErasing = true;
//         eraseDots(e); // Start erasing on mousedown
//     } else {
//         isDrawing = true;
//         lastX = e.pageX;
//         lastY = e.pageY;
//     }
// });

// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
//     isErasing = false;
//     saveDots();
// });

// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     for (let i = 0; i <= distance / step; i++) {
//         const x = x1 + (x2 - x1) * (i / (distance / step));
//         const y = y1 + (y2 - y1) * (i / (distance / step));
//         drawDot(x, y);
//     }
// }

// // Initialize palette and restore dots on page load
// createPalette();
// restoreDots();







// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let isDraggingPalette = false;
// let eraserActive = false;
// let isErasing = false;
// const eraserSize = 20;

// // Use the full URL as the key for localStorage
// const getStorageKey = () => `drawingDots_${window.location.href}`;


// // Load dots from localStorage for the specific page
// function restoreDots() {
//     console.log(getStorageKey(),"kkkkkkkkkkkkkkk");
//     const savedDots = JSON.parse(localStorage.getItem(getStorageKey())) || [];
//     savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
// }

// // Save dots to localStorage for the specific page
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         return {
//             x: window.scrollX + rect.left + rect.width / 2,
//             y: window.scrollY + rect.top + rect.height / 2,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem(getStorageKey(), JSON.stringify(dots));
// }

// // Draw a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Create a floating palette UI
// function createPalette() {
//     const palette = document.createElement('div');
//     palette.style.position = 'fixed';
//     palette.style.top = '10px';
//     palette.style.left = '10px';
//     palette.style.padding = '10px';
//     palette.style.backgroundColor = 'white';
//     palette.style.border = '1px solid black';
//     palette.style.zIndex = 9999;
//     palette.style.cursor = 'move';

//     let offsetX = 0, offsetY = 0;
//     palette.addEventListener('mousedown', (e) => {
//         isDraggingPalette = true;
//         offsetX = e.clientX - palette.getBoundingClientRect().left;
//         offsetY = e.clientY - palette.getBoundingClientRect().top;

//         function onMouseMove(e) {
//             e.preventDefault();
//             palette.style.left = `${e.clientX - offsetX}px`;
//             palette.style.top = `${e.clientY - offsetY}px`;
//         }

//         document.addEventListener('mousemove', onMouseMove);
//         document.addEventListener('mouseup', () => {
//             isDraggingPalette = false;
//             document.removeEventListener('mousemove', onMouseMove);
//         }, { once: true });

//         e.stopPropagation();
//     });

//     const colorInput = document.createElement('input');
//     colorInput.type = 'color';
//     colorInput.value = '#ff0000';
//     colorInput.addEventListener('input', (e) => {
//         dotColor = e.target.value;
//         customCursor.style.backgroundColor = dotColor;
//     });
//     palette.appendChild(colorInput);

//     const sizeInput = document.createElement('input');
//     sizeInput.type = 'range';
//     sizeInput.min = 2;
//     sizeInput.max = 20;
//     sizeInput.value = dotSize;
//     sizeInput.addEventListener('input', (e) => {
//         dotSize = parseInt(e.target.value, 10);
//         customCursor.style.width = `${dotSize}px`;
//         customCursor.style.height = `${dotSize}px`;
//     });
//     palette.appendChild(sizeInput);

//     const eraserButton = document.createElement('button');
//     eraserButton.textContent = 'Eraser';
//     eraserButton.addEventListener('click', () => {
//         eraserActive = !eraserActive;
//         eraserButton.style.backgroundColor = eraserActive ? 'lightgrey' : '';
//         customCursor.style.backgroundColor = eraserActive ? 'black' : dotColor;
//     });
//     palette.appendChild(eraserButton);

//     const clearButton = document.createElement('button');
//     clearButton.textContent = 'Clear';
//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
//         localStorage.removeItem(getStorageKey());
//     });
//     palette.appendChild(clearButton);

//     document.body.appendChild(palette);
// }

// // Erase all dots under the eraser area
// function eraseDots(event) {
//     if (!eraserActive || !isErasing) return;

//     const elements = document.querySelectorAll('.drawing-dot');
//     elements.forEach(dot => {
//         const rect = dot.getBoundingClientRect();
//         const dotCenterX = rect.left + rect.width / 2;
//         const dotCenterY = rect.top + rect.height / 2;
//         const distance = getDistance(event.clientX, event.clientY, dotCenterX, dotCenterY);

//         if (distance < eraserSize) {
//             dot.remove();
//         }
//     });

//     saveDots();
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Custom cursor to indicate the eraser size
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = `${dotSize}px`;
// customCursor.style.height = `${dotSize}px`;
// document.body.appendChild(customCursor);

// // Mouse events
// document.addEventListener('mousemove', (e) => {
//     e.preventDefault();
//     customCursor.style.left = `${e.clientX - eraserSize / 2}px`;
//     customCursor.style.top = `${e.clientY - eraserSize / 2}px`;

//     if (isErasing) eraseDots(e);
// });

// document.body.addEventListener('mousedown', (e) => {
//     e.preventDefault();
//     if (isDraggingPalette) return;

//     if (eraserActive) {
//         isErasing = true;
//         eraseDots(e);
//     } else {
//         isDrawing = true;
//         lastX = e.pageX;
//         lastY = e.pageY;
//     }
// });

// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
//     isErasing = false;
//     saveDots();
// });

// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     for (let i = 0; i <= distance / step; i++) {
//         const x = x1 + (x2 - x1) * (i / (distance / step));
//         const y = y1 + (y2 - y1) * (i / (distance / step));
//         drawDot(x, y);
//     }
// }

// // Initialize palette and restore dots on page load
// createPalette();
// restoreDots();






// let isDrawing = false;
// let lastX = 0, lastY = 0;
// let dotColor = 'red';
// let dotSize = 5;
// let isDraggingPalette = false;
// let eraserActive = false;
// let isErasing = false;
// const eraserSize = 20;

// const getStorageKey = () => `drawingDots_${window.location.href}`;

// // Load dots from localStorage for the specific page
// function restoreDots() {
//     document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove()); // Clear current dots
//     const savedDots = JSON.parse(localStorage.getItem(getStorageKey())) || [];
//     savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
// }

// // Save dots to localStorage for the specific page
// function saveDots() {
//     const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
//         const rect = dot.getBoundingClientRect();
//         return {
//             x: window.scrollX + rect.left + rect.width / 2,
//             y: window.scrollY + rect.top + rect.height / 2,
//             size: parseInt(dot.style.width),
//             color: dot.style.backgroundColor
//         };
//     });
//     localStorage.setItem(getStorageKey(), JSON.stringify(dots));
// }

// // Draw a dot at the given position
// function drawDot(x, y, size = dotSize, color = dotColor) {
//     const dot = document.createElement('div');
//     dot.className = 'drawing-dot';
//     dot.style.position = 'absolute';
//     dot.style.width = `${size}px`;
//     dot.style.height = `${size}px`;
//     dot.style.backgroundColor = color;
//     dot.style.borderRadius = '50%';
//     dot.style.left = `${x - size / 2}px`;
//     dot.style.top = `${y - size / 2}px`;
//     document.body.appendChild(dot);
// }

// // Erase all dots under the eraser area
// function eraseDots(event) {
//     if (!eraserActive || !isErasing) return;

//     const elements = document.querySelectorAll('.drawing-dot');
//     elements.forEach(dot => {
//         const rect = dot.getBoundingClientRect();
//         const dotCenterX = rect.left + rect.width / 2;
//         const dotCenterY = rect.top + rect.height / 2;
//         const distance = getDistance(event.clientX, event.clientY, dotCenterX, dotCenterY);

//         if (distance < eraserSize) {
//             dot.remove();
//         }
//     });

//     saveDots();
// }

// // Calculate the distance between two points
// function getDistance(x1, y1, x2, y2) {
//     return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
// }

// // Custom cursor to indicate the eraser size
// const customCursor = document.createElement('div');
// customCursor.className = 'custom-cursor';
// customCursor.style.position = 'absolute';
// customCursor.style.borderRadius = '50%';
// customCursor.style.backgroundColor = dotColor;
// customCursor.style.pointerEvents = 'none';
// customCursor.style.width = `${dotSize}px`;
// customCursor.style.height = `${dotSize}px`;
// document.body.appendChild(customCursor);

// // Monitor URL changes
// let currentUrl = window.location.href;

// function checkUrlChange() {
//     if (currentUrl !== window.location.href) {
//         currentUrl = window.location.href;
//         restoreDots(); // Load new page's drawing data
//     }
// }

// // Event listeners for mouse actions
// document.addEventListener('mousemove', (e) => {
//     customCursor.style.left = `${e.clientX - eraserSize / 2}px`;
//     customCursor.style.top = `${e.clientY - eraserSize / 2}px`;

//     if (isErasing) eraseDots(e);
// });

// document.body.addEventListener('mousedown', (e) => {
//     if (eraserActive) {
//         isErasing = true;
//         eraseDots(e);
//     } else {
//         isDrawing = true;
//         lastX = e.pageX;
//         lastY = e.pageY;
//     }
// });

// document.body.addEventListener('mouseup', () => {
//     isDrawing = false;
//     isErasing = false;
//     saveDots();
// });

// document.body.addEventListener('mousemove', (e) => {
//     if (!isDrawing) return;
//     drawLine(lastX, lastY, e.pageX, e.pageY);
//     lastX = e.pageX;
//     lastY = e.pageY;
// });

// function drawLine(x1, y1, x2, y2) {
//     const distance = Math.hypot(x2 - x1, y2 - y1);
//     const step = dotSize / 2;
//     for (let i = 0; i <= distance / step; i++) {
//         const x = x1 + (x2 - x1) * (i / (distance / step));
//         const y = y1 + (y2 - y1) * (i / (distance / step));
//         drawDot(x, y);
//     }
// }

// // Periodically check for URL changes
// setInterval(checkUrlChange, 1000); // Check URL change every second

// // Initialize palette and restore dots on page load
// restoreDots();




let isDrawing = false;
let lastX = 0, lastY = 0;
let dotColor = 'red';
let dotSize = 5;
let isDraggingPalette = false;
let eraserActive = false;
let isErasing = false;
const eraserSize = 20;

const getStorageKey = () => `drawingDots_${window.location.href}`;

// Load dots from localStorage for the specific page
function restoreDots() {
    document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove()); // Clear current dots
    const savedDots = JSON.parse(localStorage.getItem(getStorageKey())) || [];
    savedDots.forEach(dot => drawDot(dot.x, dot.y, dot.size, dot.color));
}

// Save dots to localStorage for the specific page
function saveDots() {
    const dots = Array.from(document.querySelectorAll('.drawing-dot')).map(dot => {
        const rect = dot.getBoundingClientRect();
        return {
            x: window.scrollX + rect.left + rect.width / 2,
            y: window.scrollY + rect.top + rect.height / 2,
            size: parseInt(dot.style.width),
            color: dot.style.backgroundColor
        };
    });
    localStorage.setItem(getStorageKey(), JSON.stringify(dots));
}

// Draw a dot at the given position
function drawDot(x, y, size = dotSize, color = dotColor) {
    const dot = document.createElement('div');
    dot.className = 'drawing-dot';
    dot.style.position = 'absolute';
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.backgroundColor = color;
    dot.style.borderRadius = '50%';
    dot.style.left = `${x - size / 2}px`;
    dot.style.top = `${y - size / 2}px`;
    document.body.appendChild(dot);
}

// Create a floating palette UI
function createPalette() {
    const palette = document.createElement('div');
    palette.style.position = 'fixed';
    palette.style.top = '10px';
    palette.style.left = '10px';
    palette.style.padding = '10px';
    palette.style.backgroundColor = 'white';
    palette.style.border = '1px solid black';
    palette.style.zIndex = 9999;
    palette.style.cursor = 'move';

    let offsetX = 0, offsetY = 0;
    palette.addEventListener('mousedown', (e) => {
        isDraggingPalette = true;
        offsetX = e.clientX - palette.getBoundingClientRect().left;
        offsetY = e.clientY - palette.getBoundingClientRect().top;

        function onMouseMove(e) {
            e.preventDefault();
            palette.style.left = `${e.clientX - offsetX}px`;
            palette.style.top = `${e.clientY - offsetY}px`;
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', () => {
            isDraggingPalette = false;
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });

        e.stopPropagation();
    });

    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    colorInput.value = '#ff0000';
    colorInput.addEventListener('input', (e) => {
        dotColor = e.target.value;
        customCursor.style.backgroundColor = dotColor;
    });
    palette.appendChild(colorInput);

    const sizeInput = document.createElement('input');
    sizeInput.type = 'range';
    sizeInput.min = 2;
    sizeInput.max = 20;
    sizeInput.value = dotSize;
    sizeInput.addEventListener('input', (e) => {
        dotSize = parseInt(e.target.value, 10);
        customCursor.style.width = `${dotSize}px`;
        customCursor.style.height = `${dotSize}px`;
    });
    palette.appendChild(sizeInput);

    const eraserButton = document.createElement('button');
    eraserButton.textContent = 'Eraser';
    eraserButton.addEventListener('click', () => {
        eraserActive = !eraserActive;
        eraserButton.style.backgroundColor = eraserActive ? 'lightgrey' : '';
        customCursor.style.backgroundColor = eraserActive ? 'black' : dotColor;
    });
    palette.appendChild(eraserButton);

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', () => {
        document.querySelectorAll('.drawing-dot').forEach(dot => dot.remove());
        localStorage.removeItem(getStorageKey());
    });
    palette.appendChild(clearButton);

    document.body.appendChild(palette);
}

// Erase all dots under the eraser area
function eraseDots(event) {
    if (!eraserActive || !isErasing) return;

    const elements = document.querySelectorAll('.drawing-dot');
    elements.forEach(dot => {
        const rect = dot.getBoundingClientRect();
        const dotCenterX = rect.left + rect.width / 2;
        const dotCenterY = rect.top + rect.height / 2;
        const distance = getDistance(event.clientX, event.clientY, dotCenterX, dotCenterY);

        if (distance < eraserSize) {
            dot.remove(); // Remove dots within eraser radius
        }
    });

    saveDots();
}

// Calculate the distance between two points
function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}

// Custom cursor to indicate the eraser size
const customCursor = document.createElement('div');
customCursor.className = 'custom-cursor';
customCursor.style.position = 'absolute';
customCursor.style.borderRadius = '50%';
customCursor.style.backgroundColor = dotColor;
customCursor.style.pointerEvents = 'none';
customCursor.style.width = `${dotSize}px`;
customCursor.style.height = `${dotSize}px`;
document.body.appendChild(customCursor);

// Monitor URL changes
let currentUrl = window.location.href;

function checkUrlChange() {
    if (currentUrl !== window.location.href) {
        currentUrl = window.location.href;
        restoreDots(); // Load new page's drawing data
    }
}

// Event listeners for mouse actions
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX - eraserSize / 2}px`;
    customCursor.style.top = `${e.clientY - eraserSize / 2}px`;

    if (isErasing) eraseDots(e);
});

document.body.addEventListener('mousedown', (e) => {
    if (eraserActive) {
        isErasing = true;
        eraseDots(e);
    } else {
        isDrawing = true;
        lastX = e.pageX;
        lastY = e.pageY;
    }
});

document.body.addEventListener('mouseup', () => {
    isDrawing = false;
    isErasing = false;
    saveDots();
});

document.body.addEventListener('mousemove', (e) => {
    if (!isDrawing) return;
    drawLine(lastX, lastY, e.pageX, e.pageY);
    lastX = e.pageX;
    lastY = e.pageY;
});

function drawLine(x1, y1, x2, y2) {
    const distance = Math.hypot(x2 - x1, y2 - y1);
    const step = dotSize / 2;
    for (let i = 0; i <= distance / step; i++) {
        const x = x1 + (x2 - x1) * (i / (distance / step));
        const y = y1 + (y2 - y1) * (i / (distance / step));
        drawDot(x, y);
    }
}

// Periodically check for URL changes
setInterval(checkUrlChange, 1000); // Check URL change every second

// Initialize palette and restore dots on page load
createPalette();
restoreDots();
