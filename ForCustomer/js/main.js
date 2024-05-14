$(document).ready(function() {
    $('#editBtn').click(async function() {
        $('.windowEdit').css("display", "flex");


        $('.Xbutton').click(function() {
            $('.windowEdit').css("display", "none");
        });

        $('#editBtn1').click(function() {
            // console.log('Ok đấy chứ')
            const data = {
                objectName:"Apple",
                actionName:"Deceive"
            };

            fetch('http://192.168.1.136:3000/api/action', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                return response.json().then(data => {
                    if (!response.ok) {
                       showNotification(data.message);
                       throw new Error('Network response was not ok');
                    } 
                    return data;
                })
            })
            .then(data => {console.log(data)})
            .catch(error => {
                console.error('Error:', error)
            });

            // viet fetch
        });
    })
}); 