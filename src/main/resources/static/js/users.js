function addUsersToTask() {
    var search = document.getElementById("search");
    var result = document.getElementById("user-candidates");
    var task = document.getElementById("task-id");
    var members = document.getElementById("member");
    var taskId = task.dataset.id;
    if (search.value.length > 0) {
        $.ajax({
            url: "/ajax/inviteUsersToTask",
            type: "post",
            data: {
                "search": search.value
            },
            success: function (userCandidates) {
                result.innerText = "";
                for (var user in userCandidates) {
                    var textNode = document.createElement("p");

                    var buttonAdd = document.createElement("button");
                    buttonAdd.innerText = "Add";
                    buttonAdd.className = 'button-add';
                    buttonAdd.onclick = function add() {
                        buttonAdd.innerHTML = "Added";
                        var userName = userCandidates[user].name;
                        $.ajax({
                                url: "/ajax/addUserToTask",
                                type: "post",
                                data: {
                                    "userName": userName,
                                    "taskId": taskId
                                },
                                success: function (user) {

                                    console.log(members);
                                    var buttonDelete = document.createElement("button");
                                    var a = document.createElement("a");

                                    a.href = "../profile/" + user.id;
                                    a.innerHTML = user.name + " ";

                                    buttonDelete.innerText = "Delete";
                                    buttonDelete.className = 'button-add';
                                    buttonDelete.onclick = function deleteUser() {
                                        var id = user.id;
                                        var task = document.getElementById("task-id");
                                        var taskId = task.dataset.id;
                                        $.ajax({
                                            url: "/ajax/deleteUserFromTask",
                                            type: "post",
                                            method: "post",
                                            data: {
                                                "id": id,
                                                "task-id": taskId
                                            },
                                            success: function () {
                                                members.remove();
                                            }
                                        });
                                    };
                                    var br = document.createElement("br");

                                    members.appendChild(a);
                                    members.insertBefore(br, a);
                                    members.appendChild(buttonDelete);
                                }
                            }
                        )
                    };

                    var a = document.createElement("a");
                    a.href = "../profile/" + userCandidates[user].id;
                    a.innerHTML = userCandidates[user].name;

                    textNode.appendChild(buttonAdd);
                    textNode.appendChild(a);
                    result.appendChild(textNode);
                }
            },
            error: function (msg) {
                alert(msg);
            }
        })
    } else {
        result.innerHTML = "";
    }
}

function addUsersToDesk() {
    var search = document.getElementById("input");
    var result = document.getElementById("result");
    var desk = document.getElementById("desk-id");
    if (search.value.length > 0) {
        $.ajax({
            url: "/ajax/inviteUsersToDesk",
            type: "post",
            data: {
                "search": search.value
            },
            success: function (userCandidates) {
                result.innerText = "";
                for (var user in userCandidates) {
                    var textNode = document.createElement("p");

                    var buttonAdd = document.createElement("button");
                    buttonAdd.className = 'button-add';
                    buttonAdd.innerText = "Add";
                    buttonAdd.onclick = function add() {
                        search.innerText = "";
                        buttonAdd.remove();
                        textNode.remove();
                        var userName = userCandidates[user].name;
                        var deskId = desk.dataset.id;
                        $.ajax({
                                url: "/ajax/addUserToDesk",
                                type: "post",
                                data: {
                                    "userName": userName,
                                    "deskId": deskId
                                },
                                success: function (user) {
                                    var members = document.getElementById("member");

                                    var a = document.createElement("a");
                                    var buttonDelete = document.createElement("button");

                                    a.href = "../profile/" + user.id;
                                    a.innerHTML = user.name + " ";

                                    buttonDelete.innerText = "Delete";
                                    buttonDelete.className = 'button-add';
                                    buttonDelete.onclick = function deleteUser() {
                                        var id = user.id;
                                        console.log(id);
                                        var desk = document.getElementById("desk-id");
                                        var deskId = desk.dataset.id;
                                        console.log(deskId);
                                        $.ajax({
                                            url: "/ajax/deleteUserFromDesk",
                                            type: "post",
                                            method: "post",
                                            data: {
                                                "id": id,
                                                "desk-id": deskId
                                            },
                                            success: function () {
                                                members.remove();
                                            }
                                        });
                                    };
                                    var br = document.createElement("br");

                                    members.appendChild(a);
                                    members.insertBefore(br, a);
                                    members.appendChild(buttonDelete);
                                }
                            }
                        )
                    };

                    var a = document.createElement("a");
                    a.href = "../profile/" + userCandidates[user].id;
                    a.innerHTML = userCandidates[user].name;

                    textNode.appendChild(buttonAdd);
                    textNode.appendChild(a);
                    result.appendChild(textNode);
                }
            }

        })
    } else {
        result.innerHTML = "";
    }
}

function deleteUserFromDesk(event) {
    var id = event.target.id;
    var desk = document.getElementById("desk-id");
    var deskId = desk.dataset.id;
    console.log(deskId);
    $.ajax({
        url: "/ajax/deleteUserFromDesk",
        type: "post",
        method: "post",
        data: {
            "id": id,
            "desk-id": deskId
        },
        success: function () {
            var divUser = document.getElementById(id);
            divUser.remove();
        }
    });
}

function deleteUserFromTask(event) {
    var id = event.target.id;
    var task = document.getElementById("task-id");
    var taskId = task.dataset.id;
    $.ajax({
        url: "/ajax/deleteUserFromTask",
        type: "post",
        method: "post",
        data: {
            "id": id,
            "task-id": taskId
        },
        success: function () {
            var divUser = document.getElementById(id);
            divUser.remove();

        }
    });
}


