setInterval(() => {
    let dt =new Date();
    htime = dt.getHours();
    mtime = dt.getMinutes();
    stime = dt.getSeconds();

    hr = 30*htime + mtime/2;
    mr = 6*mtime;
    sr = 6*stime;
     hour_hand.style.transform = `rotate(${hr}deg)`;
     minute_hand.style.transform = `rotate(${mr}deg)`;
     second_hand.style.transform = `rotate(${sr}deg)`;




}, 1000);