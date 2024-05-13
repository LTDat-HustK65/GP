$(document).ready(function() {
    $('#editBtn').click(async function() {
        $('.windowEdit').css("display", "flex");


        $('.Xbutton').click(function() {
            $('.windowEdit').css("display", "none");
        });

        $('#editBtn1').click(function() {
            alert('Gửi fetch cho hàm btn 1')
            // viet fetch
        });
    })
}); 