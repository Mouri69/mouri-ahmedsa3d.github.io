const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
// 

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show2');
        } 
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el) => observer2.observe(el));

// 

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showservice1');
        } 
    });
});

const hiddenElements3 = document.querySelectorAll('.hiddenservice1');
hiddenElements3.forEach((el) => observer3.observe(el));

// 

// 

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showservice2');
        } 
    });
});

const hiddenElements4 = document.querySelectorAll('.hiddenservice2');
hiddenElements4.forEach((el) => observer4.observe(el));

// 

// 

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showservice3');
        } 
    });
});

const hiddenElements5 = document.querySelectorAll('.hiddenservice3');
hiddenElements5.forEach((el) => observer5.observe(el));

// 

// 

const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('showservice4');
        } 
    });
});

const hiddenElements6 = document.querySelectorAll('.hiddenservice4');
hiddenElements6.forEach((el) => observer6.observe(el));

// 

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false;



window.onscroll=function () {
    if(window.scrollY >= section.offsetTop) {
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
}

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal)
        {
            clearInterval(count);
        }
    }, 2000/goal);
}
//

//Change title
let titleInterval; // Variable to store the interval ID
let isTitleLoopEnabled = false; // Flag to control the title loop

function changeTitle() {
  document.title = 'My Portfolio';
}

function revertTitle() {
  document.title = '💖 Come back bitch';
}

// Function to toggle between changing and reverting the title
function toggleTitle() {
  if (document.title === 'My Portfolio') {
    revertTitle();
  } else {
    changeTitle();
  }
}

// Attach event listener for the onblur event
window.addEventListener('blur', () => {
  // Start the title loop when the window loses focus (user leaves the website)
  if (!isTitleLoopEnabled) {
    titleInterval = setInterval(toggleTitle, 2000);
    isTitleLoopEnabled = true;
  }
});

// Attach event listener for the onfocus event
window.addEventListener('focus', () => {
  // Clear the interval when the window gains focus (user returns to the website)
  if (isTitleLoopEnabled) {
    clearInterval(titleInterval);
    isTitleLoopEnabled = false;
    // Reset the title to the original name when the user returns to the website
    changeTitle();
  }
});

// Call toggleTitle immediately to set the initial title when the user is on the website
changeTitle();

//Hello Hack Effect

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    document.addEventListener("DOMContentLoaded", () => {
      const h1Element = document.querySelector("h1");
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        h1Element.innerText = h1Element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return h1Element.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= h1Element.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 50);
    });


  
  