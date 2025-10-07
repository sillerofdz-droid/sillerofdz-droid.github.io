function turnOn () {

    document.getElementById('myImage').src='images/pic_bulbon.gif';
    document.getElementById('letrero').innerHTML="ITS TURNED ON! :D"
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function turnOff () {

    document.getElementById('myImage').src='images/pic_bulboff.gif';
    document.getElementById('letrero').innerHTML="ITS TURNED OF AGAIN :_(";
 
    document.body.style.backgroundColor = "black";
    document.body.style.color = "yellow";
}



