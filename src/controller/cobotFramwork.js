const configObjectDB = require('../config/configDB/ObjectDB');

const cobotFramwork = {
    DeceiveObject,
    CaculateNewObjectLocation
};

// Hàm tính thời gian mà object có thể di chuyển trong phạm vi nhận diện của robot
function CaculateNewObjectLocation(speed, timeApear) {
    var timeMoveOfObject = 10 / speed * 1000;// 10 là độ dài quãng đường mà object có thể di chuyển trong phạm vi nhận diện của robot tính bằng miliseconds
    
    var deceivedTime = new Date( timeApear.getTime() + timeMoveOfObject);
    return deceivedTime;
}

function DeceiveObject(params) {
    console.log('ĐANG GẠT VẬT THỂ ĐÂY, NẶNG QUÁ !!!!!!!!');
}

module.exports = cobotFramwork;