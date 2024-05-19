$(document).ready(function() {
    $('#orangeBtn').click(async function() {
        $('.windowAction').css("display", "flex");

        $('.Xbutton').click(function() {
            $('.windowAction').css("display", "none");
        });

        $('#actionBtn1').click(function() {
            // console.log('Ok đấy chứ')
            const data = {
                objectName:"Orange",
                actionName:"Deceive"
            };
            window.open('http://localhost:3000/src/public/robot-gui/index.html', '_blank');

            fetch('http://localhost:3000/api/action', {
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

    $('#appleBtn').click(async function() {
        $('.windowAction').css("display", "flex");

        $('.Xbutton').click(function() {
            $('.windowAction').css("display", "none");
        });

        $('#actionBtn1').click(function() {
            // console.log('Ok đấy chứ')
            const data = {
                objectName:"Apple",
                actionName:"Deceive"
            };
            window.open('http://localhost:3000/src/public/robot-gui/index.html', '_blank');

            fetch('http://localhost:3000/api/action', {
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