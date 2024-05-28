// Khai báo các model
const configObjectDB = require('../config/configDB/ObjectDB');
const configProcessedObjectDB = require('../config/configDB/processedObjectDB');
const cobotFramwork = require('./cobotFramwork');

// const CreateObjectBABYLON = require('../public/js/Object');
// import { CreatObject } from '../public/js/Object';
// const { DataBuffer } = require('babylonjs/Buffers/dataBuffer');

// Khai báo các hàm
const Function = {
    CreatObject,
    DeleteObject,
    SelectObject,
    AddObject,
    CheckObjectInDB,
    SelectActions
};

// Hàm tạo một object mới
function CreatObject() {

    var objectTimeApear = new Date();

    // Tạo một object ngẫu nhiên giữa Orange và Apple
    var randomObject = Math.floor(Math.random() * 2);
    var objName;
    if (randomObject == 0) {
        objName = "Apple";
    }else {
        objName = "Orange";
    }

    // Tạo một object mới
    configObjectDB.create({
        timeApear: objectTimeApear,
        properties: {
            name: objName,
            speed: 15,
            currentLocation: {
                x: -140,
                y: 130,
                z: 190
            },
            // deceivedTime: processedObjectTime
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

// Hàm xóa một object
function DeleteObject(object) {
    configObjectDB.deleteOne({
        'properties.name': object
    })
    .then((data) => {
        console.log(
            'vat the', data.properties.name, 'xuat hien vao thoi diem',data.timeApear, 'da duoc xu ly !');
    })
    .catch((err) => {
        console.log(err);
    });
}

// Hàm thêm một object 
function AddObject(object) {
    configProcessedObjectDB.create({
        timeApear: object.timeApear,
        properties: {
            name: object.properties.name,
            speed: object.properties.speed,
            currentLocation: {
                x: object.properties.currentLocation.x,
                y: object.properties.currentLocation.y,
                z: object.properties.currentLocation.z
            },
            processedLocation: {
                x: object.properties.currentLocation.x,
                y: object.properties.currentLocation.y,
                z: object.properties.currentLocation.z
            },
            processedTime: object.properties.timeApear
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    }
)}

// Hàm kiểm tra object có trong database không
function CheckObjectInDB(object) {
    
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
function SelectObject(objectName, actionName) {
    // var allowAction = false;
    configObjectDB.findOne({
        'properties.name': objectName
    })
    .then((dataObject) => {
        console.log('Vat the ',dataObject.properties.name)
        console.log('xuat hien vao thoi diem: ',dataObject.timeApear);
        
        var processedObjectTime = cobotFramwork.CaculateDropTime(dataObject.timeApear);
        
        console.log('Thời điểm cần xử lý: ', processedObjectTime);
        
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