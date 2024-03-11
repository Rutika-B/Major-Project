const DdtoDate=(inputDate)=> {
    const parts = inputDate.split('-');
    const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayOfWeek = daysOfWeek[formattedDate.getDay()];
    const month = monthsOfYear[formattedDate.getMonth()];
    const dayOfMonth = formattedDate.getDate();
    const year = formattedDate.getFullYear();
    
    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
};
export default DdtoDate;