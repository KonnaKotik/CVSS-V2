document.addEventListener("DOMContentLoaded", function (ev) {
    var a = document.body.querySelectorAll("[data-contain-user-tags]");
    for (var i = 0; i < a.length; i++) {
        a[i].innerHTML = checkForLogin(a[i].innerHTML);
    }
});

function addTask(event) {
    var id = event.target.id;
    var card = document.getElementById("card" + id);
    var name = document.getElementById("input" + id);
    var date = document.getElementById("date" + id);
    var ul = document.getElementById("ul-id" + id);
    $.ajax({
        url: "/ajax/addTask",
        type: "post",
        data: {
            "id": id,
            "name": name.value,
            "date": date.value
        },
        success: function (task) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            var text = document.createElement("em");

            a.href = "/tasks/" + task.id;
            a.innerHTML = task.name + " ";

            li.appendChild(a);
            li.appendChild(text);
            ul.appendChild(li);

            name.value = "";
        }
    });
    var div = document.getElementById("addTaskTo" + id);
    hide(div);
}

function commentTask(event) {
    var taskId = event.target.id;
    var comment = document.getElementById("comment");
    var ul = document.getElementById("ul-id" + taskId);

    if (comment.value.length > 0) {
        $.ajax({
            url: "/ajax/addComment",
            type: "post",
            data: {
                "id": taskId,
                "comment": comment.value,
            },
            success: function (data) {
                var element = document.createElement("li");
                var a = document.createElement("a");
                var text = document.createElement("b");

                a.href = "/profile";
                a.innerHTML = data.author + ": ";

                var str = data.commentText;
                text.innerHTML = checkForLogin(str);

                element.appendChild(a);
                element.appendChild(text);
                ul.appendChild(element);

                comment.value = "";
            }
        })
    } else
        alert("Comment can't be empty! Write something in the form")
}

function returnTask(event) {
    var id = event.target.id;
    $.ajax({
        url: "/ajax/returnTask",
        type: "post",
        data: {
            "id": id
        },
        success: function (id) {
        }
    })
}

function checkForLogin(str) {
    var regexp = /@[A-Za-z-]+/g;
    var userCandidates = str.match(regexp);

    for (var i = 0; userCandidates != null && i < userCandidates.length; i++) {

        $.ajax({
            async: false,
            url: "/ajax/checkUser",
            method: "get",
            data: {
                "name": userCandidates[i].slice(1)
            },
            success: function (user) {
                str = str.replace("@" + user.login,
                    "<a href='/profile/" + user.id + "'>@" + user.login + "</a>");

            },
            error(msg) {
                alert(msg);
            }
        });
    }
    return str;
}

var hide = function (elem) {
    elem.style.display = 'none';
};