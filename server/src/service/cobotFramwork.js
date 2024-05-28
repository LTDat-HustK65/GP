
const cobotFramwork = {
    CaculateDropTime,
    DeceiveObject
};

// Hàm tính thời gian mà object có thể di chuyển trong phạm vi nhận diện của robot
// function CaculateNewObjectLocation(speed, timeApear) {
//     var timeMoveOfObject = 10 / speed * 1000;// 10 là độ dài quãng đường mà object có thể di chuyển trong phạm vi nhận diện của robot tính bằng miliseconds
    
//     var deceivedTime = new Date( timeApear.getTime() + timeMoveOfObject);
//     return deceivedTime;
// }

function CaculateDropTime(timeAppear){
    // console.log(new Date(timeAppear.getTime()/1000 + 280/15))
    // console.log(timeAppear.getTime()/1000 + 280/15)
    console.log('Thời gian gạt: ', new Date(timeAppear.getTime() + 270*1000/15));
    return (new Date(timeAppear.getTime() + 270*1000/15));// 270 là khoảng cách từ điểm xuất hiện đến điểm bị gạt
}

function DeceiveObject(params) {
    console.log('ĐANG GẠT VẬT THỂ ĐÂY, NẶNG QUÁ !!!!!!!!');
}

module.exports = cobotFramwork;