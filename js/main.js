let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size)
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffY) + (diffY + diffX));
};

let getDistanceHint = function (distance) {
    if (distance < 30) {
        return "Неймовірно гаряче!";
    } else if (distance < 50) {
        return "Дуже гаряче!"; 
    } else if (distance < 100) {
        return "Гаряче!";
    } else if (distance < 150) {
        return "Тепло"; 
    } else if (distance < 200) {
        return "Холодно";
    } else if (distance < 320) {
        return "Дуже холодно";
    } else {
        return "Замерз!"
    }
};

let windh = 400;
let height = 400;
let clicks = 0;

let target = {
    x: getRandomNumber(windh),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;

    let distance = getDistance(event, target);

    let distanceHint = getDistanceHint(distance);

    $("#distanse").text(distanceHint);

    if (distance < 28) {
    alert("Ти знайшов скарб в " + clicks + " клік!");
}
});