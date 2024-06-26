
//    // thiết lập ban đầu
//    var canvas = document.getElementById("renderCanvas");
//    var engine = new BABYLON.Engine(canvas, true);
//    var scene = new BABYLON.Scene(engine);
//    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, new BABYLON.Vector3(5, 3, 0),
//                scene
//            );
//        camera.setPosition (new BABYLON.Vector3(-500, 500, 500))
//    camera.attachControl(canvas, true);
//    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
//    new BABYLON.AxesViewer(scene, 100)// x: red, y: green, z: blue
       
//    // Import file .stl
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Base.STL", scene, function (newMeshes, particleSystems, skeletons) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Base;
//        importedMesh.position.x = -60; 
//        importedMesh.position.y = 0; 
//        importedMesh.position.z = 60; 
//        importedMesh.rotation.x = -1.5707963267948966;
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 0;
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0, 0, 0); 
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "BaseUpper.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = BaseUpper;
//        importedMesh.position.x = -48; // vị trí ban đầu trên trục x
//        importedMesh.position.y = 56; // vị trí ban đầu trên trục y
//        importedMesh.position.z = 48; // vị trí ban đầu trên trục z 
//        importedMesh.rotation.x = -1.5707963267948966; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 0; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); 
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Biceps.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Biceps;
//        importedMesh.position.x = 7; 
//        importedMesh.position.y = -26; 
//        importedMesh.position.z = -29; 
//        importedMesh.rotation.x = -1.5707963267948966; // góc xoay ban đầu trên trục x (rad)
//        importedMesh.rotation.y = 0; // góc xoay ban đầu trên trục y (rad)
//        importedMesh.rotation.z = -1.5707963267948966; // góc xoay ban đầu trên trục z (rad)
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0, 0, 0);
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Arm.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Arm;
//        importedMesh.position.x = 12; 
//        importedMesh.position.y = -20; 
//        importedMesh.position.z = -24; 
//        importedMesh.rotation.x = 0;
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 1.5707963267948966;
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); 
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Wrist.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Wrist;
//        importedMesh.position.x = 12; 
//        importedMesh.position.y = -20; 
//        importedMesh.position.z = 6; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 1.5707963267948966; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5); 
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Hand.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 26; 
//        importedMesh.position.y = 9; 
//        importedMesh.position.z = -15; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 3.141592653589793; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0, 0, 0); // Color rojo
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Gear.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 5; 
//        importedMesh.position.y = -57; 
//        importedMesh.position.z = 14; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 0; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color verde
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Gear.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 10; 
//        importedMesh.position.y = -54; 
//        importedMesh.position.z = 18; 
//        importedMesh.rotation.x = 3.141592653589793; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 2.85; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color azul
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Thews.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 50; 
//        importedMesh.position.y = -60; 
//        importedMesh.position.z = 15; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 3.141592653589793; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color verde
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Thews.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 7; 
//        importedMesh.position.y = -60; 
//        importedMesh.position.z = 15; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 3.28; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color azul
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Thews.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 50; 
//        importedMesh.position.y = -60; 
//        importedMesh.position.z = 0; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 3.141592653589793; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color verde
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Thews.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = Hand;
//        importedMesh.position.x = 7; 
//        importedMesh.position.y = -60; 
//        importedMesh.position.z = 0; 
//        importedMesh.rotation.x = 0; 
//        importedMesh.rotation.y = 0; 
//        importedMesh.rotation.z = 3.28; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color azul
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Claws.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = GearLeft;
//        importedMesh.position.x = 29; 
//        importedMesh.position.y = -99; 
//        importedMesh.position.z = -50; 
//        importedMesh.rotation.x = 2.85; 
//        importedMesh.rotation.y = - Math.PI / 2; 
//        importedMesh.rotation.z = Math.PI; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color verde
//    });
//    BABYLON.SceneLoader.ImportMesh("", "../models/", "Claws.STL", scene, function (newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.parent = GearRight;
//        importedMesh.position.x = -2; 
//        importedMesh.position.y = -99; 
//        importedMesh.position.z = -58; 
//        importedMesh.rotation.x = 0.60; 
//        importedMesh.rotation.y = (- Math.PI / 2); 
//        importedMesh.rotation.z = 0; 
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(0.8, 0.3, 0); // Color azul
//    });
   
   
   
//    // resize window 
//    window.addEventListener("resize", function () {
//        engine.resize();
//    });
   
//            // Tạo các phần tử của cánh tay robot
//        var Base = BABYLON.MeshBuilder.CreateCylinder("Base", { height: 0.2, diameter: 4 }, scene);
//        Base.position.y = 0.1;
   
//        var BaseUpper = BABYLON.MeshBuilder.CreateBox("BaseUpper", { width: 2, height: 0.2, depth: 1 }, scene);
//        BaseUpper.position.y = 0.1;
//        BaseUpper.parent = Base;
   
//        var Servo01 = BABYLON.MeshBuilder.CreateDisc("Servo01", { radius: 0.5, tessellation: 50 }, scene);
//        Servo01.position.y = 95;
//        Servo01.position.x = -10;
//        Servo01.position.z = 14;
//        Servo01.parent = BaseUpper;
   
//        var Biceps = BABYLON.MeshBuilder.CreateBox("Biceps", { width: 1, height: 3, depth: 1 }, scene);
//        Biceps.position.y = 1.5;
//        Biceps.parent = Servo01;
   
//        var Servo02 = BABYLON.MeshBuilder.CreateDisc("Servo02", { radius: 0.3, tessellation: 50 }, scene);
//        Servo02.position.y = 120;
//        Servo02.parent = Biceps;
   
//        var Arm = BABYLON.MeshBuilder.CreateBox("Arm", { width: 1, height: 3, depth: 1 }, scene);
//        Arm.position.y = 1.5;
//        Arm.parent = Servo02;
   
//        var Servo03 = BABYLON.MeshBuilder.CreateDisc("Servo03", { radius: 0.3, tessellation: 50 }, scene);
//        Servo03.position.z = 85;
//        Servo03.parent = Arm;
   
//        var Wrist = BABYLON.MeshBuilder.CreateBox("Wrist", { width: 1, height: 1, depth: 1 }, scene);
//        Wrist.position.y = 0;
//        Wrist.parent = Servo03;
   
//        var Servo04 = BABYLON.MeshBuilder.CreateDisc("Servo04", { radius: 0.3, tessellation: 50 }, scene);
//        Servo04.position.z = 33;
//        Servo04.parent = Hand;
   
//        var Hand = BABYLON.MeshBuilder.CreateBox("Hand", { width: 1, height: 1, depth: 1 }, scene);
//        Hand.position.z = 33;
//        Hand.parent = Wrist;
   
//        var ClawsBase = BABYLON.MeshBuilder.CreateBox("ClawsBase", { width: 1, height: 1, depth: 1}, scene);
//        ClawsBase.position.z = 33;
//        ClawsBase.parent = Hand;
   
//        var GearLeft = BABYLON.MeshBuilder.CreateBox("gearLeft", { width: 1, height: 1, depth: 1 }, scene);
//        GearLeft.position.z = 33;
//        // GearLeft.rotation.z = 1.5707963267948966;
//        GearLeft.parent = ClawsBase;
   
//        var GearRight = BABYLON.MeshBuilder.CreateBox("gearRight", { width: 1, height: 1, depth: 1 }, scene);
//        GearRight.position.z = 33;
//        GearRight.parent = ClawsBase;
   
//        var Servo05 = BABYLON.MeshBuilder.CreateDisc("Servo05", { radius: 0.3, tessellation: 50 }, scene);
//        Servo05.position.z = 83;
//        Servo05.parent = ClawsBase;
   
//        var Claws = BABYLON.MeshBuilder.CreateBox("Claws", { width: 1, height: 1, depth: 1 }, scene);
//        Claws.position.z = 33;
//        Claws.parent = GearLeft;
   
       
   
   
//            // Gán material cho các phần tử
//            Base.material = new BABYLON.StandardMaterial("baseMat", scene);
//            Base.material.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2);
   
//            BaseUpper.material = new BABYLON.StandardMaterial("BaseUpperMat", scene);
//            BaseUpper.material.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
   
//            Servo01.material = new BABYLON.StandardMaterial("Servo01Mat", scene);
//            Servo01.material.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
   
//            Biceps.material = new BABYLON.StandardMaterial("BicepsMat", scene);
//            Biceps.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
   
//            Servo02.material = new BABYLON.StandardMaterial("Servo02Mat", scene);
//            Servo02.material.diffuseColor = new BABYLON.Color3(1, 1, 1);
   
//            Arm.material = new BABYLON.StandardMaterial("ArmMat", scene);
//            Arm.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
   
//            Servo03.material = new BABYLON.StandardMaterial("Servo03Mat", scene);
//            Servo03.material.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
   
//            Wrist.material = new BABYLON.StandardMaterial("WristMat", scene);
//            Wrist.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.8);
   
//            Servo04.material = new BABYLON.StandardMaterial("Servo04Mat", scene);
//            Servo04.material.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
   
//            Hand.material = new BABYLON.StandardMaterial("HandMat", scene);
//            Hand.material.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
   
//            GearLeft.material = new BABYLON.StandardMaterial("GearLeftMat", scene);
//            GearLeft.material.diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
   
//            GearRight.material = new BABYLON.StandardMaterial("GearRightMat", scene);
//            GearRight.material.diffuseColor = new BABYLON.Color3(0.9, 0.9, 0.9);
       
//            Claws.material = new BABYLON.StandardMaterial("ClawsMat", scene);
//            Claws.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
   
//            ClawsBase.material = new BABYLON.StandardMaterial("ClawsBaseMat", scene);
//            ClawsBase.material.diffuseColor = new BABYLON.Color3(0.5, 0.5, 0.5);
   
//            // bắt đầu render
//            engine.runRenderLoop(function () {
//                scene.render();
//            });
   
//            // Điều khiển cánh tay bằng bàn phím
//            var rotationSpeed = 0.16;
//            var cobotState = {
//                BaseUpperState: Number,
//                Servo01State: Number,
//                Servo02State: Number,
//                Servo03State: Number,
//                Servo04State: Number,
//                Servo05State: Number
//            };
//            window.addEventListener("keydown", function (event) {
//                switch (event.key) {
//                    case "a":
//                        cobotState.BaseUpperState = BaseUpper.rotation.y -= rotationSpeed;
//                        console.log(cobotState) 
//                        break;
//                    case "s":
//                        cobotState.BaseUpperState = BaseUpper.rotation.y += rotationSpeed;
//                        console.log(cobotState) 
//                        break;
//                    case "e":
//                        cobotState.Servo01State = Servo01.rotation.x -= rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "r":
//                        cobotState.Servo01State = Servo01.rotation.x += rotationSpeed;
//                        console.log(cobotState)                   
//                        break;   
//                    case "z":
//                        cobotState.Servo02State = Servo02.rotation.x -= rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "x":
//                        cobotState.Servo02State = Servo02.rotation.x += rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "f":
//                        cobotState.Servo03State = Servo03.rotation.z -= rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "g":
//                        cobotState.Servo03State = Servo03.rotation.z += rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "c":
//                        cobotState.Servo04State = Servo04.rotation.x -= rotationSpeed;
//                        Hand.rotation.x -= rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "v":
//                        cobotState.Servo04State = Servo04.rotation.x += rotationSpeed;
//                        Hand.rotation.x += rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "q":
//                        cobotState.Servo05State = Servo05.rotation.z -= rotationSpeed;
//                        GearLeft.rotation.z -= rotationSpeed;
//                        GearRight.rotation.z += rotationSpeed;
//                        console.log(cobotState)
   
//                        break;
//                    case "w":
//                        cobotState.Servo05State = Servo05.rotation.z += rotationSpeed;
//                        GearRight.rotation.z -= rotationSpeed;
//                        GearLeft.rotation.z += rotationSpeed;
//                        console.log(cobotState)
//                        break;
//                    case "7":
//                        Apple.position.z = Apple.position.z += 10;
//                        console.log('toa do tao: ', Apple.position.z)
//                        break;     
//                    case "9":
//                        Apple.position.z = Apple.position.z -= 10;
//                        console.log('toa do tao: ', Apple.position.z)
//                        break; 
//                        // táo đến x=90 thi cho tay gạt tới 
//                }
   
//            });
   
//     var GUI = BABYLON.GUI;
   
//    // tạo một khung cho các phần tử UI
//    var advancedTexture = GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
//    var UiPanel = new BABYLON.GUI.StackPanel();
//    UiPanel.width = "220px";
//    UiPanel.fontSize = "14px";
//    UiPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
//    UiPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_CENTER;
//    advancedTexture.addControl(UiPanel);
   
//    var createButton = GUI.Button.CreateSimpleButton("createButton", "Creat Object");
//    createButton.paddingTop = "10px";
//    createButton.width = "150px";
//    createButton.height = "40px";
//    createButton.color = "white";
//    createButton.background = "green";
//    createButton.cornerRadius = 20;
//    createButton.onPointerUpObservable.add(function () {
//        Apple.position.x = MovingObject();
//    });
//    UiPanel.addControl(C);
   
//    // Hàm di chuyển đối tựng 
//    function SinhQuaTao(){
//        BABYLON.SceneLoader.ImportMesh("Apple", "../models/", "Apple.stl", scene, function(newMeshes) {
//        var importedMesh = newMeshes[0];
//        importedMesh.parent = Apple;
//        importedMesh.scaling = new BABYLON.Vector3(30, 30, 30);
//        importedMesh.setPivotPoint(new BABYLON.Vector3(0, 0, 0));
//        importedMesh.position.x = -140;
//        importedMesh.position.y = 130;
//        importedMesh.position.z = 190;
//        importedMesh.material = new BABYLON.StandardMaterial("importedMeshMaterial", scene);
//        importedMesh.material.diffuseColor = new BABYLON.Color3(1, 0, 0);
//    })
//        var Apple = BABYLON.MeshBuilder.CreateSphere("Apple", { diameter: 1 }, scene);
//        Apple.position.x = -140;
//    }
// window.addEventListener("resize", function () {
//     engine.resize();
// });