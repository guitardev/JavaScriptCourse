(()=>{
// code 
    const SECOND = 1000;
    const MINUTES = SECOND * 60 ;
    const HOURS = MINUTES * 60 ;
    const DAY = HOURS * 24;
    function setElementInnerText(id,text){
        const element = document.getElementById(id);
        element.innerText = text;

    }
    function countDown(){
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2022 23:59:59').getTime();
        const unixTimeLeft = newYear - now;

        //console.log(unixTimeLeft);
        // const daysElem = document.getElementById('days');
        // daysElem.innerText = Math.floor(unixTimeLeft / DAY );
        // const hoursElem = document.getElementById('hours');
        // hoursElem.innerText = Math.floor(unixTimeLeft % DAY / HOURS );
        // const minutesElem = document.getElementById('minutes');
        // minutesElem.innerText = Math.floor(unixTimeLeft % DAY / MINUTES );
        setElementInnerText('days',Math.floor(unixTimeLeft /DAY));
        setElementInnerText('hours',Math.floor(unixTimeLeft % DAY / HOURS));
        setElementInnerText('minutes',Math.floor(unixTimeLeft % HOURS / MINUTES));
        setElementInnerText('seconds',Math.floor(unixTimeLeft % MINUTES / SECOND));

    }



    function run(){
        countDown();
        setInterval(countDown,SECOND)
    }
    run();

})();