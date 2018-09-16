'use strict';

var fn = function fn() {
	// adding p tag for minus
	var minus = document.getElementsByClassName('minus');

	for (var i = 0; i < minus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '-';
		minus[i].appendChild(e);
	}

	//adding p tag for plus
	var plus = document.getElementsByClassName('plus');
	for (var i = 0; i < plus.length; i++) {
		var e = document.createElement('p');
		e.innerHTML = '+';
		plus[i].appendChild(e);
	}
};

document.addEventListener('DOMContentLoaded', fn, false);
'use strict';

var calendar = function calendar() {
    var lastDay = function lastDay(year, month) {
        return new Date(year, month, 0).getDate(); //month is 0 based, day is 1 based. 0 for day pulls last day of month 
    };
    var firstDay = function firstDay(year, month) {
        return new Date(year, month - 1, 1).getDay();
    };
    var daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var calendarHead = document.getElementById('calendar-head');

    var populateCalendarHead = function populateCalendarHead() {
        for (var i = 0; i < daysOfTheWeek.length; i++) {
            var day = document.createElement('p');
            day.innerHTML = daysOfTheWeek[i];
            calendarHead.appendChild(day);
        }
    };
    populateCalendarHead();

    var calendarBody = document.getElementById('calendar-body');
    var populateCalendarBody = function populateCalendarBody() {
        var daysInRow = 7;
        var totalRows = 6;
        // let totalDays = daysInRow * totalRows;
        var currentRows = 0;
        var currentDaysInMonth = lastDay(2018, 9);
        var firstDayOfMonth = firstDay(2018, 9);
        var currentDayOfMonthIndex = 1;
        var currentCalendarDayIndex = 0;

        while (currentRows < totalRows) {
            var calendarRow = document.createElement('div');
            for (var i = 0; i < daysInRow; i++) {
                console.log('within for loop');
                var day = document.createElement('p');
                if (currentCalendarDayIndex >= firstDayOfMonth && currentDayOfMonthIndex <= currentDaysInMonth) {
                    day.innerHTML = currentDayOfMonthIndex;
                    currentDayOfMonthIndex++;
                }
                currentCalendarDayIndex++;
                calendarRow.appendChild(day);
            }
            calendarBody.appendChild(calendarRow).className = "calendar-row";
            currentRows++;
        }
    };
    populateCalendarBody();
};

document.addEventListener('DOMContentLoaded', calendar, false);
'use strict';

var calendarHeader = function calendarHeader() {
    // Create Header Elements
    var titleCarousel = document.getElementById('title-carousel');
    var pLeftArrow = document.createElement('p');
    pLeftArrow.classList.add("arrow", "fas", "fa-chevron-left");
    pLeftArrow.id = "left-arrow";
    titleCarousel.appendChild(pLeftArrow);

    var pTitle = document.createElement('p');
    pTitle.id = "title";
    titleCarousel.appendChild(pTitle);

    var pRightArrow = document.createElement('p');
    pRightArrow.classList.add("arrow", "fas", "fa-chevron-right");
    pRightArrow.id = "right-arrow";
    titleCarousel.appendChild(pRightArrow);

    console.log(titleCarousel);
    // Set Title Month
    var title = document.getElementById('title');
    var titleSetter = function titleSetter(newMonth) {
        title.innerHTML = newMonth;
    };
    titleSetter("September");
    // Navigate through months with left/right arrows
    var titleArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var leftArrow = document.getElementById('left-arrow');
    var rightArrow = document.getElementById('right-arrow');
    var titleIndex = 8;
    leftArrow.addEventListener('click', function () {
        if (titleIndex > 0) {
            titleIndex--;
            titleSetter(titleArr[titleIndex]);
        }
    });
    rightArrow.addEventListener('click', function () {
        if (titleIndex < titleArr.length - 1) {
            titleIndex++;
            titleSetter(titleArr[titleIndex]);
        }
    });
};
document.addEventListener('DOMContentLoaded', calendarHeader, false);
'use strict';

var list = [];
var myFunkyFunk = function myFunkyFunk() {
  console.log('the funk');
};