var selectedRow = null

function onEventSubmit() {
    if (validate()) {
        var eventData = readEventData();
        if (selectedRow == null)
            insertNewEvent(eventData);
        else
            updateEvent(eventData);
        resetEvent();
    }
}

function readEventData() {
    var eventData = {};
    eventData["title"] = document.getElementById("title").value;
    eventData["date"] = document.getElementById("date").value;
    eventData["event"] = document.getElementById("event").value;
    eventData['desc'] = document.getElementById("desc").value;
    eventData["photo"] = document.getElementById("photo").value;
    return eventData;
}

function insertNewEvent(data) {
    var table = document.getElementById("eventList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.event;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.desc;

    if(e.target.files.length > 0){
        var src = URL.createObjectURL(e.target.files[0]);
        var preview = document.getElementById("getPhoto");
        preview.src = src;

        cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<img src="${src}" id="getPhoto"  alt="image" />`;
    }
 

  

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)" target="_self">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetEvent() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("event").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("photo").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date").value = selectedRow.cells[1].innerHTML;
    document.getElementById("event").value = selectedRow.cells[2].innerHTML;
    document.getElementById("desc").value = selectedRow.cells[3].innerHTML;
    document.getElementById("photo").value = selectedRow.cells[4].innerHTML;
}
function updateEvent(eventData) {
    selectedRow.cells[0].innerHTML = eventData.title;
    selectedRow.cells[1].innerHTML = eventData.date;
    selectedRow.cells[2].innerHTML = eventData.event;
    selectedRow.cells[3].innerHTML = evetnData.desc;
    selectedRow.cells[4].innerHTML = eventData.photo;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("eventList").deleteRow(row.rowIndex);
        resetEvent();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("title").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}