class DateFormatter {
  constructor(date) {
    this.date = date;
  }

  getDay() {
    let day;
    switch (this.date.getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        day = "NaN";
    }
    return day;
  }

  getMonth() {
    let month;
    switch (this.date.getMonth()) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
      default:
        month = "NaN";
    }
    return month;
  }

  getHours() {
    return this.date.getHours() % 12 === 0 ? "12" : this.date.getHours() % 12;
  }
  getMinutes() {
    return this.date.getMinutes() === 0 ? "00" : this.date.getMinutes();
  }

  getAmpm() {
    return this.date.getHours() > 12 ? "PM" : "AM";
  }
  timeToString() {
    return `${this.getHours()}:${this.getMinutes()} ${this.getAmpm()}`;
  }

  dateToString() {
    return `${this.getDay()}, ${this.getMonth()} ${this.date.getDate()}, ${this.timeToString()}`;
  }
}

export default DateFormatter;
