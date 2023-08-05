function newList() {
    var node_list = document.createElement("div");
    var inputValue = document.getElementById("Task").value;
    var text = document.createTextNode(inputValue);
    node_list.className = 'card'
    node_list.id = "card_id"
    node_list.appendChild(text);
    if (inputValue === '') {
        alert("Write something on the input Task ");
    } else {
        document.getElementById("main_div").appendChild(node_list);
    }
    document.getElementById("Task").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    node_list.appendChild(span);
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    var msg = document.getElementById('msg');
    var list_em = document.getElementById("card_id");
    var main = document.getElementById("main_div")

    if (main.contains(list_em)) {
        msg.style.display = 'none';

    }

}


