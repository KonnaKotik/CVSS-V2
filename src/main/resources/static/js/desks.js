function deleteDesk(event) {
    var deskId = event.target.id;
    $.ajax({
        url: "/ajax/deleteDesk",
        type: "post",
        data: {
            "id": deskId
        },
        success: function () {
            var deskLi = document.getElementById(deskId);
            deskLi.remove();
        }
    });
}

