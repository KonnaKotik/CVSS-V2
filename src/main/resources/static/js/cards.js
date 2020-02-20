function changeType(event) {
    var cardId = event.target.id;
    var cardName = document.getElementById("name" + cardId);
    var childBefore = document.getElementById("menu" + cardId);
    var div = document.getElementById("card" + cardId);

    cardName.remove();

    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.id = "edit" + cardId;

    var btnEdit = document.createElement("button");
    btnEdit.id = cardId;
    btnEdit.className = 'button-add';
    btnEdit.innerHTML = "Edit";
    div.insertBefore(editInput, childBefore);
    div.insertBefore(btnEdit, childBefore);

    var br = document.createElement("br");
    div.appendChild(br);

    btnEdit.onclick = function editCardName(){
        $.ajax({
            url: "/ajax/editCard",
            type: "post",
            data: {
                "id": cardId,
                "name": editInput.value
            },
            success: function (card) {
                editInput.remove();
                btnEdit.remove();
                var cardName = document.createElement("span");
                cardName.id = "name" + cardId;
                cardName.className = 'card-name';
                cardName.innerHTML = card.name + " ";
                div.insertBefore(cardName,childBefore);
            }
        });

    };
}

function changeState(dragObject, dropElem) {
    var taskName = dragObject.elem.innerText;
    console.log(taskName);
    var cardName = dropElem.dataset.id;
    $.ajax({
        url: "/ajax/editTaskState",
        type: "post",
        data: {
            "name": taskName,
            "cardName": cardName
        },
        success: function (task) {
            console.log(task.state);
        }
    })
}