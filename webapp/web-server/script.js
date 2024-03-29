$(document).ready(function() {
    $('#additionForm').submit(function(event) {
        event.preventDefault();

        const num1 = $('#num1').val();
        const num2 = $('#num2').val();

        $.ajax({
            type: 'POST',
            url: 'http://localhost:5001/add',
            contentType: 'application/json',
            data: JSON.stringify({ num1: num1, num2: num2 }),
            success: function(response) {
                $('#resultContainer').text(`Result: ${response.result}`);
            },
            error: function(error) {
                console.error('Error:', error);
                $('#resultContainer').text('Error occurred. Please try again.');
            }
        });
    });
});
