const mongoose = require('mongoose');

const configObjectDB = require('../config/configDB/ObjectDB');
const cobotFramwork = require('../controller/cobotFramwork');

// Khai báo các hàm
const Function = {
    CreatObject,
    CaculateNewObjectLocation,
    SelcetObject,
    CheckObjectInDB
};

// Hàm tạo một object mới
function CreatObject() {

    // Tạo một object ngẫu nhiên giữa Orange và Apple
    var randomObject = Math.floor(Math.random() * 2);
    var objName;
    if (randomObject == 0) {
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
    var objectSpeed = Math.floor(Math.random() * 3) + 1;
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

    console.log('Object: ', objName);
}

// Hàm tính thời gian mà object có thể di chuyển trong phạm vi nhận diện của robot
function CaculateNewObjectLocation(speed, timeApear) {
    var timeMoveOfObject = 10 / speed * 1000;// 10 là độ dài quãng đường mà object có thể di chuyển trong phạm vi nhận diện của robot tính bằng miliseconds
    
    var deceivedTime = new Date( timeApear.getTime() + timeMoveOfObject);
    return deceivedTime;
}

//
function CheckObjectInDB(object) {
    if (object == 0) {
        configObjectDB.findOne({
            'properties.name': 'Apple'
        })
        .then((data) => {
            console.log(data);
            if (data == null) {
                console.log('Khong co object trong database');  
            }else{
                SelcetObject(data.properties.name);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }else{
        configObjectDB.findOne({
            'properties.name': 'Orange'
        })
        .then((data) => {
            console.log(data);
            if (data == null) {
                console.log('Khong co object trong database');  
            }else{
                SelcetObject(data.properties.name);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

// Hàm chọn một object trong database
function SelcetObject(object) {
    configObjectDB.findOne({
        'properties.name': object
    })
    .then((data) => {
        console.log('Thoi diem can gat: ',data.properties.deceivedTime);
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = Function;