/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
 function result() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const old_day = new Date();
    old_day.setDate(old_day.getDate() - 4);
    return days[old_day.getDay()].toLowerCase();
}

console.log(result());