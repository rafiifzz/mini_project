$(document).ready(function(){
    // Mengambil data dari file JSON menggunakan AJAX
    $.ajax({
        url: 'data.json.txt', // Ubah sesuai dengan nama file JSON yang Anda miliki
        type: 'GET',
        dataType: 'json',
        success: function(data){
            // Menampilkan informasi toko buku dalam div biasa
            $('#tokoInfo').html(
                '<div>To: ' + data.to + '</div>' +
                '<div>From: ' + data.from + '</div>' +
                '<div>Heading: ' + data.heading + '</div>' +
                '<div>Body: ' + data.body + '</div>'
            );
        },
        error: function(){
            // Menampilkan pesan kesalahan jika terjadi masalah dalam mengambil data
            alert('Failed to fetch data.');
        }
    });
});
