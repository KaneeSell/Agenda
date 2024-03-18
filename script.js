function addEvent() {
    var eventInput = document.getElementById("eventInput");
    var eventText = eventInput.value;
    if (eventText.trim() !== "") {
        var eventList = document.getElementById("eventList");
        var li = document.createElement("li");
        li.textContent = eventText;
        eventList.appendChild(li);
        eventInput.value = "";
    } else {
        alert("Por favor, insira um evento válido!");
    }
}
