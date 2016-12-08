var myDiv = document.querySelector("#rec");
var myFrame = document.querySelector("#my-frame");
var myOutput = document.querySelector("#info");
var offsets = myFrame.getBoundingClientRect();
var isMoving = false;
var lastX, lastY, xPos, yPos, recStartX = 0, recStartY = 0;

function addEvents(){
    myDiv.addEventListener("mousedown", setStartPosition, false);
    myDiv.addEventListener("mousemove", updateDivPosition, false);
    myFrame.addEventListener("mouseup", setDivEndingPosition, false);

    myDiv.addEventListener("touchstart", setStartPosition, false);
    myDiv.addEventListener("touchmove", updateDivPosition, false);
    myFrame.addEventListener("touchend", setDivEndingPosition, false);
}

function getPointerPosition(e) {
    xPos = e.clientX || e.changedTouches[0].pageX;
    yPos = e.clientY || e.changedTouches[0].pageY;
}

function setStyle(left, top) {
    myDiv.style.left = parseFloat(left) + 'px';
    myDiv.style.top = parseFloat(top) + 'px';
}

function setStartPosition(e) {
    isMoving = true;
    getPointerPosition(e);
    lastX = xPos;
    lastY = yPos;
}

function setDivEndingPosition(e) {
    isMoving = false;
    recStartX = myDiv.getBoundingClientRect().left - offsets.left;
    recStartY = myDiv.getBoundingClientRect().top - offsets.top;
    setStyle(recStartX, recStartY);
    if(!e.clientX){
        myOutput.innerHTML = "touched";
    }
}

function updateDivPosition(e) {
    if (!isMoving) { return; }
    getPointerPosition(e);
    setStyle(xPos - lastX + recStartX, yPos - lastY + recStartY);
}

addEvents();