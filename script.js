//your JS code here. If required.
const timeElement = document.getElementById("timer");

function updateTime() {
    const now = new Date();
	const date= now.getDate();
const month=now.getMonth()+1;
const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let day="";
	if(hours>=12){
		day="PM"
	}else{
		day="AM"
	}
    // Format the string with leading zeroes
    const clockStr = `${date}/${month}/${year},${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${day}`;

    timeElement.innerText = clockStr;
}

updateTime();
setInterval(updateTime, 1000);