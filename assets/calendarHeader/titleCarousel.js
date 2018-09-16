let calendarHeader = () => {
    // Create Header Elements
    let titleCarousel = document.getElementById('title-carousel');
    let pLeftArrow = document.createElement('p'); 
    pLeftArrow.classList.add("arrow", "fas", "fa-chevron-left");
    pLeftArrow.id = "left-arrow";
    titleCarousel.appendChild(pLeftArrow);

    let pTitle = document.createElement('p'); 
    pTitle.id = "title";
    titleCarousel.appendChild(pTitle);

    let pRightArrow = document.createElement('p'); 
    pRightArrow.classList.add("arrow", "fas", "fa-chevron-right");
    pRightArrow.id = "right-arrow";
    titleCarousel.appendChild(pRightArrow);

    console.log(titleCarousel); 
    // Set Title Month
    let title = document.getElementById('title');
    let titleSetter = (newMonth) => {
        title.innerHTML = newMonth;
    };
    titleSetter("September");
    // Navigate to previous and next month
    let titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let leftArrow = document.getElementById('left-arrow');
    let rightArrow = document.getElementById('right-arrow');
    let titleIndex = 8;
    leftArrow.addEventListener('click', () => {
        if (titleIndex > 0) {
            titleIndex--;
            titleSetter(titleArr[titleIndex]);
        }
    });
    rightArrow.addEventListener('click', () => {
        if (titleIndex < titleArr.length - 1) {
            titleIndex++;
            titleSetter(titleArr[titleIndex]);
        }
    });
};
document.addEventListener('DOMContentLoaded', calendarHeader, false);