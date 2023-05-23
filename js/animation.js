const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// get the element with id dummy


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});
const hiddenElements2 = document.querySelectorAll('.crypto-img');
hiddenElements2.forEach((el) => observer2.observe(el));


// for the text fade
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('fade-animation-show')
        } else {
            entry.target.classList.remove('fade-animation-show')
        }
    });
});
const hiddenElements3 = document.querySelectorAll('.fade-animation');
hiddenElements3.forEach((el) => observer3.observe(el));

// for the left
const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('left-show')
        } else {
            entry.target.classList.remove('left-show')
        }
    });
});
const hiddenElements4 = document.querySelectorAll('.left');
hiddenElements4.forEach((el) => observer4.observe(el));


// for the right
const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('right-show')
        } else {
            entry.target.classList.remove('right-show')
        }
    });
});
const hiddenElements5 = document.querySelectorAll('.right');
hiddenElements5.forEach((el) => observer5.observe(el));


const observer6 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('news-show')
        } else {
            entry.target.classList.remove('news-show')
        }
    });
});
const hiddenElements6 = document.querySelectorAll('.news-hide');
hiddenElements6.forEach((el) => observer6.observe(el));


// the animation for the hero text
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
document.querySelector('.hero-text-heading').onmouseover = event => {
    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {

            if(index < iterations){
                return event.target.dataset.value[index]
            }
            // make an exception for the space
            if(letter === " " ){
                return " ";
            }
        
            return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

        if(iterations >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iterations += 1/3;
    }, 30);
}



let interval2 = null;
document.querySelector('.hero-text-heading2').onmouseover = event => {
    let iterations = 0;

    const interval2 = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter,index) => {

            if(index < iterations){
                return event.target.dataset.value[index]
            }
            // make an exception for the space
            if(letter === " " ){
                return " ";
            }
        
            return letters[Math.floor(Math.random() * 26)]
    })
        .join("");

        if(iterations >= event.target.dataset.value.length){
            clearInterval(interval2);
        }

        iterations += 1/3;
    }, 30);
}

console.log('developed by Sarthak Sharma')
