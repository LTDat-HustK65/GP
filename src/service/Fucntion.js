const configObjectDB = require('../config/configDB/ObjectDB');

const Function = {
    CreatObject,
    CaculateNewObjectLocation
};

// Hàm tạo một object mới
function CreatObject() {

    // Tạo một object ngẫu nhiên giữa Orange và Apple
    var i = Math.floor(Math.random() * 2);
    var objName;
    if (i == 0) {
        objName = "Apple";
    }else {
        objName = "Orange";
    }
    var objLocation = {
        x: 0, 
        y: Math.floor(Math.random() * 10),
        z: 0
    };

    var objectTimeApear = new Date();
    var objectSpeed = Math.floor(Math.random() * 3) + 1
    var objectDeceivedTime = CaculateNewObjectLocation(objectSpeed, objectTimeApear);

    // Tạo một object mới
    configObjectDB.create({
        timeApear: objectTimeApear,
        properties: {
            name: objName,
            speed: objectSpeed,
            currentLocation: objLocation,
            deceivedLocation: {
                x: 10, 
                y: objLocation.y,
                z: 0
            },
            deceivedTime: objectDeceivedTime
        }        
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

// Hàm tính thời gian mà object có thể di chuyển trong phạm vi nhận diện của robot
function CaculateNewObjectLocation(speed, timeApear) {
    var timeMoveOfObject = 10 / speed * 1000;// 10 là độ dài quãng đường mà object có thể di chuyển trong phạm vi nhận diện của robot tính bằng miliseconds
    
    var deceivedTime = new Date( timeApear.getTime() + timeMoveOfObject);
    return deceivedTime;
}


module.exports = Function;