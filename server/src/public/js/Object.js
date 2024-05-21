// var GUI = BABYLON.GUI;
// // tạo một khung cho các phần tử UI
// var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
// var UiPanel = new BABYLON.GUI.StackPanel();
// UiPanel.width = "220px";
// UiPanel.fontSize = "14px";
// UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
// UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
// advancedTexture.addControl(UiPanel);

// var createButton = GUI.Button.CreateSimpleButton("createButton", "Creat Object");
// createButton.paddingTop = "10px";
// createButton.width = "150px";
// createButton.height = "40px";
// createButton.color = "white";
// createButton.background = "green";
// createButton.cornerRadius = 20;
// createButton.onPointerUpObservable.add(function () {
//     CreatObject();
// });
// UiPanel.addControl(createButton);

const CreateObjectBABYLON = {
    CreatObject,
    MovingObject,
    CaculateDropTime,
    MovingCobot
}

// Biến toàn cục để lưu ID của interval
var intervalObject;
var intervalCobot;

// Hàm di chuyển đối tựng 
function CreatObject(){
    var timeAppear = new Date();  // tốc độ di chuyển của quả táo là hằng số bằng 15
    var objectName;
    
    // Import file .stl sinh quả táo
    var random = Math.floor(Math.random() * 2);
    if (random == 0) {
        BABYLON.SceneLoader.ImportMesh("Apple", "../models/", "Apple.stl", scene, function(newMeshes) {
        var importedMesh = newMeshes[0];
        importedMesh.parent = Object;
        importedMesh.scaling = new BABYLON.Vector3(30, 30, 30);
        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
        importedMesh.position.x = -140;
        importedMesh.position.y = 130;
        importedMesh.position.z = 190;
        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
        importedMesh.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
        })
        objectName = "Apple";
    } else {
        BABYLON.SceneLoader.ImportMesh("Orange", "../models/", "Orange.stl", scene, function(newMeshes) {
        var importedMesh = newMeshes[0];
        importedMesh.parent = Object;
        importedMesh.scaling = new BABYLON.Vector3(30, 30, 30);
        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
        importedMesh.position.x = -140;
        importedMesh.position.y = 130;
        importedMesh.position.z = 190;
        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
        importedMesh.material.diffuseColor = new BABYLON.Color3(1, 0.5, 0);
        })
        objectName = "Orange";
    }
    // Import file .stl sinh quả táo
    
    var Object = BABYLON.MeshBuilder.CreateSphere("Object", { diameter: 1 }, scene);
    Object.position.x = -140;

    // Tính thời gian đến điển bị gạt của vật thể
    // var dropTime = CaculateDropTime(timeAppear);

    // Gọi hàm di chuyển vật thể mỗi 50ms
    intervalObject = setInterval(MovingObject(Object, timeAppear),50);
    // intervalObject = setInterval(MovingCobot(timeAppear),50);
    // if (Object.position.x >= 130) {
    //     console.log('ủa gạt chưa vậy');
    //     intervalCobot = setInterval(MovingCobot(timeAppear), 50);   
    // }
    return {objectName, Object, timeAppear};
}

// Hàm di chuyển đối tượng trên đường thẳng
function MovingObject(object, timeAppear) {
    return function() {
        const timeNow = new Date();
        
        var dentalTime = (timeNow.getTime() - timeAppear.getTime()) / 1000;

        object.position.x = -140 + dentalTime * 15;
        console.log('Tọa độ táo: ', object.position.x);

        if (object.position.x >= 130) {
            //while(Servo04.rotation.x <=0){
                intervalCobot = setInterval(MovingCobot(object,timeAppear), 50);
            
            
            console.log('Táo đã đến!!!');
            //object.position.z = dentalTime * 15;
            //clearInterval(intervalObject);
        }
    }
}

// Hàm tính thời gian tới biển bị gạt của vật thể
function CaculateDropTime(timeAppear){
    // console.log(new Date(timeAppear.getTime()/1000 + 280/15))
    // console.log(timeAppear.getTime()/1000 + 280/15)
    return (new Date(timeAppear.getTime() + 270*1000/15));
}

// Hàm di chuyển cánh tay
function MovingCobot(object, timeAppear){
        var dropTime = CaculateDropTime(timeAppear);
        const timeNow = new Date();

        var dentalTime = (timeNow.getTime() - dropTime.getTime()) / 1000;
        console.log('Thời gian: ', dentalTime);
        Servo04.rotation.x -= dentalTime * Math.PI/50;
        Hand.rotation.x -= dentalTime * Math.PI/50;
        object.position.z += dentalTime * 15;
        console.log('Góc quay Servo04: ', Servo04.rotation.x);
       if(Servo04.rotation.x <= -(Math.PI/4)){
        while (Servo04.rotation.x <=0) {
            Servo04.rotation.x += dentalTime * Math.PI/50;
            Hand.rotation.x += dentalTime * Math.PI/50;
            
            object.position.y -=  dentalTime * 15;
            console.log('Tọa độ táo: ', object.position.y);
            console.log('Góc quay Servo014: ', Servo04.rotation.x);
            if (Servo04.rotation.x >= 0) {
                clearInterval(intervalObject);
                console.log('Đã dừng!!!');
                
                return; // Dừng hàm nếu Servo04.rotation.x <= -0.5
            }
              
        }
    }
}


module.exports = CreateObjectBABYLON;
