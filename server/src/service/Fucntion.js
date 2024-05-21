const mongoose = require('mongoose');

// Khai báo các model
const configObjectDB = require('../config/configDB/ObjectDB');
const cobotFramwork = require('../controller/cobotFramwork');
const CreateObjectBABYLON = require('../public/js/Object');
// import { CreatObject } from '../public/js/Object';
// const { DataBuffer } = require('babylonjs/Buffers/dataBuffer');

// Khai báo các hàm
const Function = {
    SaveObjectIntoDB,
    DeleteObject,
    SelcetObject,
    CheckObjectInDB,
    SelectActions
};

// Hàm tạo một object mới
// function CreatObject() {

//     // Tạo một object ngẫu nhiên giữa Orange và Apple
//     var randomObject = Math.floor(Math.random() * 2);
//     var objName;
//     if (randomObject == 0) {
//         objName = "Apple";
//     }else {
//         objName = "Orange";
//     }
//     var objLocation = {
//         x: 0, 
//         y: Math.floor(Math.random() * 10),
//         z: 0
//     };

//     var objectTimeApear = new Date();
//     var objectSpeed = Math.floor(Math.random() * 3) + 1;
//     // var objectDeceivedTime = CaculateNewObjectLocation(objectSpeed, objectTimeApear);
    
//     // Tạo một object mới
//     configObjectDB.create({
//         timeApear: objectTimeApear,
//         properties: {
//             name: objName,
//             speed: objectSpeed,
//             currentLocation: objLocation,
//             // deceivedLocation: {
//             //     x: 10, 
//             //     y: objLocation.y,
//             //     z: 0
//             // }
//             // deceivedTime: objectDeceivedTime
//         }        
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//     console.log('Object: ', objName);
// }

// Hàm lưu object vào database
function SaveObjectIntoDB(object) {
    
    configObjectDB.create({
        timeApear: object.timeAppear,
        properties: {
            name: object.nameObject,
            speed: 15,
            currentLocation: {
                x: -140,
                y: 0,
                z: 0
            }
        }        
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

// Hàm xóa một object
function DeleteObject(timeApear) {
    configObjectDB.deleteOne({
        timeApear: timeApear
    })
    .then((data) => {
        console.log(
            'vat the', data.properties.name, 'xuat hien vao thoi diem',data.timeApear, 'da duoc xu ly !');
    })
    .catch((err) => {
        console.log(err);
    });
}

// Hàm kiểm tra object có trong database không
function CheckObjectInDB(object) {
    var existObject;
    if (object == 0) {
        configObjectDB.findOne({
            'properties.name': 'Apple'
        })
        .then((data) => {
            console.log(data);
            if (data == null) {
                console.log('Khong co object trong database');
                return existObject = 0;  
            }else{
                // SelcetObject(data.properties.name);
                return existObject = 1;
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
                return existObject = 0; 
            }else{
            //     SelcetObject(data.properties.name);
                return existObject = 1;
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

// Hàm chọn một object trong database
function SelcetObject(objectName, actionName) {
    // var allowAction = false;
    configObjectDB.findOne({
        'properties.name': objectName
    })
    .then((dataObject) => {
        console.log('Vat the ',dataObject.properties.name)
        console.log('xuat hien vao thoi diem: ',dataObject.timeApear);
        
        var objectDeceivedTime = CreateObjectBABYLON.CaculateDropTime(dataObject.timeApear);
        
        
        console.log('Thoi diem can gat: ', objectDeceivedTime);
        
        SelectActions(actionName, dataObject);
        // return allowAction = true;
        // // var selectAction = SelectActions('Deceive');
        // // Actions(data);
    })
    .catch((err) => {
        console.log(err);
    });
}

// Hàm lực chọn Action
function SelectActions(actionName, dataObject) {
    switch (actionName) {
        case 'Deceive':
            cobotFramwork.DeceiveObject(dataObject);
            break;
        case 'OtherActions':
            cobotFramwork.OtherAtion(dataObject);
            break;
        default:
                    console.log('Khong co hanh dong nao');
            break;
    }
}

//
// function Actions(selcetAtion, dataForFrameWork1) {

//     switch (selcetAtion) {
//         case 'Deceive':
//             cobotFramwork.DeceiveObject(dataForFrameWork1);
//             break;
//         case 'OtherActions':
//             // cobotFramwork.OtherAtion(params);
//             break;
//         default:
//             console.log('Khong co hanh dong nao');
//             break;
//     }
// }

module.exports = Function;