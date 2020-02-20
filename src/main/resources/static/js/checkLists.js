// function addCheckList(event) {
//     var taskId = event.target.id;
//     var checkList = document.getElementById("checklist");
//     $.ajax({
//         url: "/ajax/addCheckList",
//         type: "post",
//         data: {
//             "taskId": taskId,
//             "check-list": checkList.value
//         },
//
//         success: function (list) {
//             var ul = document.getElementById("ul");
//             var li = document.createElement("li");
//             li.id = "li" + list.id;
//
//             var item = document.createElement("div");
//             item.innerHTML = list.name;
//
//             var btnAddElem = document.createElement("button");
//             btnAddElem.className = "button-add";
//             btnAddElem.innerHTML = "Add element";
//             btnAddElem.onclick = function addElem() {
//                 var elemName = document.getElementById("elem-name");
//                 var ulElems = document.getElementById("ul-id" + list.id);
//                 $.ajax({
//                     url: "/ajax/addElem",
//                     type: "post",
//                     data: {
//                         "list-id": list.id,
//                         "elem-name": elemName.value
//                     },
//                     success: function (elem) {
//                         var li = document.createElement("li");
//                         li.innerHTML = elem.content;
//
//                         var elemState = document.createElement("input");
//                         elemState.className = "checkbox";
//                         elemState.id = elem.id;
//                         elemState.type = "checkbox";
//
//                         var br = document.createElement("br");
//
//                         li.appendChild(elemState);
//                         li.appendChild(br);
//                         console.log(li + 2 + ulElems);
//                         ulElems.appendChild(li);
//                         elemName.value = "";
//                     }
//                 });
//             };
//
//             var btnDelete = document.createElement("button");
//             btnDelete.id = list.id;
//             btnDelete.className = "button-add";
//             btnDelete.innerHTML = "✘";
//             btnDelete.onclick = function deleteCheckList() {
//                 var id = list.id;
//                 $.ajax({
//                     url: "/ajax/deleteCheckList",
//                     type: "post",
//                     data: {
//                         "id": id,
//                     },
//                     success: function () {
//                         var listLi = document.getElementById("li" + id);
//                         listLi.remove();
//                     }
//                 });
//             };
//
//             var inputElem = document.createElement("input");
//             var br = document.createElement("br");
//
//             item.appendChild(inputElem);
//             item.appendChild(btnAddElem);
//             item.appendChild(btnDelete);
//
//             li.appendChild(item);
//             ul.appendChild(li);
//             ul.appendChild(br);
//         }
//     })
// }

function addElem(event) {
    var checkList = event.target.id;
    var elemName = document.getElementById("elem-name");
    console.log(elemName.value);
    $.ajax({
        url: "/ajax/addElem",
        type: "post",
        data: {
            "list-id": checkList,
            "elem-name": elemName.value
        },
        success: function (elem) {
            var ul = document.getElementById("ul-id" + checkList);
            var li = document.createElement("li");
            li.innerHTML = elem.content;
            console.log(elem.content);

            // var div = document.createElement("div");
            // div.className = "form-check";
            var elemState = document.createElement("input");
            elemState.className = "form-check-input";
            elemState.id = elem.id;
            elemState.type = "checkbox";
            // div.appendChild(elemState);

            li.appendChild(elemState);
            ul.appendChild(li);
        }
    });
    elemName.value = "";
}

function deleteCheckList(event) {
    var id = event.target.id;
    $.ajax({
        url: "/ajax/deleteCheckList",
        type: "post",
        data: {
            "id": id,
        },
        success: function () {
            var listLi = document.getElementById("li" + id);
            listLi.remove();
        }
    });
}