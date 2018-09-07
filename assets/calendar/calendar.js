let calendar = () => {
    let lastDay = (year, month) => {
        return new Date(year, month, 0).getDate(); //month is 0 based, day is 1 based. 0 for day pulls last day of month 
    }
    let firstDay = (year,month) => {
        return new Date(year, month -1, 1).getDay();
    }

    let daysOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    var calendarHead = document.getElementById('calendar-head');

    let populateCalendarHead = () => {
        for(let i =0; i < daysOfTheWeek.length; i++) {
            let day = document.createElement('p');
            day.innerHTML = daysOfTheWeek[i];
            calendarHead.appendChild(day);
        }
    }
    populateCalendarHead();
    
    let calendarBody = document.getElementById('calendar-body');
    let populateCalendarBody = () => {
        let daysInRow = 7;
        let totalRows = 5;
        let totalDays = daysInRow * totalRows;
        let currentRows = 0;

        while (currentRows < totalRows) {
            let calendarRow = document.createElement('div');
            for (let i = 0; i < daysOfTheWeek.length; i++) {
                let day = document.createElement('p');
                day.innerHTML = i;
                calendarRow.appendChild(day);
            }
            calendarBody
            .appendChild(calendarRow)
            .className = "calendar-row";
            currentRows++;
        }
    }
    populateCalendarBody();
};
  
  document.addEventListener('DOMContentLoaded', calendar, false);