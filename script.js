setInterval(()=> {
  d = new Date();
  time.innerHTML = d;
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;          //converting minutes to degree
  sec_rotation = 6 * sec;          //converting seconds to degree

  hour.style.transform = `rotate(${hr_rotation}deg)`;     //rotate the hour div
  minute.style.transform = `rotate(${min_rotation}deg)`;  //rotate the minute div
  second.style.transform = `rotate(${sec_rotation}deg)`;  //rotate the second div
}, 1000);
