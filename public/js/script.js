// let attached = false;

// var ua = navigator.userAgent.toLowerCase(); 
// if (ua.indexOf('safari') != -1) { 
//   if (ua.indexOf('chrome') > -1) {
//     // chrome
//     function showImage() {
//       const image = document.querySelector('img');
//       if (image && !attached) {
//         attached = true;
//         image.style.display = 'block';
//         document.addEventListener('mousemove', function(event) {
//           image.style.left = event.pageX + 'px';
//           image.style.top = event.pageY + 'px';
//         });
//       }
//     // }
    
//     function hideImage() {
//       const image = document.querySelector('img');
//       if (image && attached) {
//         attached = false;
//         image.style.display = 'none';
//         document.removeEventListener('mousemove', function(event) {
//           image.style.left = event.pageX + 'px';
//           image.style.top = event.pageY + 'px';
//         });
//       }
//     }  } else {
//       // safari
//     function showImage() {
//       const image = document.querySelector('img');
//       if (image && !attached) {
//         attached = true;
//         image.style.display = 'block';
//         document.addEventListener('pointermove', function(event) {
//           image.style.left = event.x + 'px';
//           image.style.top = event.y + 'px';
//         });
//       }
//     }
    
//     function hideImage() {
//       const image = document.querySelector('img');
//       if (image && attached) {
//         attached = false;
//         image.style.display = 'none';
//         document.removeEventListener('pointermove', function(event) {
//           image.style.left = event.x + 'px';
//           image.style.top = event.y + 'px';
//         });
//       }
//     }  }
// }

let attached = false;

const getElmtImage = (elmt) => {
  return elmt.querySelector("img")
}

const followMouse = (elmt, event) => {
  elmt.style.left = event.x + "px";
  elmt.style.top = event.y + "px";
}

function showImage(elmt) {
  const image = getElmtImage(elmt)
  if (!attached) {
    attached = true;
    image.style.display = "block";
    document.addEventListener("pointermove", function(event) {
      followMouse(image, event)
    });
  }
}

function hideImage(elmt) {
  const image = getElmtImage(elmt)
  attached = false;
  image.style.display = "none";
  document.removeEventListener("pointermove", followMouse);
}