const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');



const getTime   = () => {
    const date = new Date();
            
    return {
        hour : date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),


}

}

setInterval(()  => {
    const { second, minute, hour } = getTime();

    
    secondHand.style.transform =`translate(0, -50%) rotate(${second * 6}deg` ;
    minuteHand.style.transform =`translate(0, -50%) rotate(${minute * 6}deg)`;
    hourHand.style.transform =`translate(0, -50%) rotate(${hour * 30}deg)`;




}, 1000);

