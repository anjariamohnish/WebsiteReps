alert("hello");
$(document).ready(function () {
    alert("hello");
    GetFileContent("data.txt", "productmanagementprototyping");
    function GetFileContent(filename, id) {
        $.get(filename, function (data) {
            $('#' + id).html(data);

        });
    }
});