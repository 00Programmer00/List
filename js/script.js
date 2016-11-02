
    var btn1 = document.getElementById("edit");
    var btn2 = document.getElementById("Add");
    var list = document.getElementById("List");
    var item = document.getElementById("input");
    var listItem = document.getElementsByClassName("item");
    var editBox = document.getElementById("editBox");
    var cross = document.getElementsByClassName("image");

    btn2.onclick = function (event) {
        var inp = item.value;
        var newCheck = document.createElement("input");
        newCheck.setAttribute("class","checkbox");
        newCheck.setAttribute("type","checkbox");
        list.appendChild(newCheck);
        var newItem = document.createElement("li");
        newItem.innerHTML = inp;
        newItem.setAttribute("class","item");
        list.appendChild(newItem);
        var createX = document.createElement("img");
        createX.setAttribute("src","images/2.png");
        createX.setAttribute("class","image");
        newItem.appendChild(createX);
    }

    function deleteItem(el) {
        el.parentNode.removeChild(el);
    }

    btn1.onclick = function (event) {
        var button =  document.createElement("button");
        button.innerHTML="Change color";
        button.setAttribute("class","editButton");
        var button1 =  document.createElement("button");
        button1.innerHTML="Set font size";
        button1.setAttribute("class","editButton");
        var button2 =  document.createElement("button");
        button2.innerHTML="Change list text";
        button2.setAttribute("class","editButton");
        editBox.appendChild(button);
        editBox.appendChild(button1);
        editBox.appendChild(button2);

        button.onclick = function (event) {
            for (var i = 0; i < listItem.length; i++) {
                listItem[i].style.color = getRandomColor();
            }
        }

        button1.onclick = function (event) {
            var question = prompt("Set font-size");
            for (var i = 0; i < listItem.length; i++) {
                listItem[i].style.fontSize = question + "px";

            }

        }

        button2.onclick = function (event) {
            var question = prompt("Choose number of item which you want to change(first item equal 0)");
            var selectedItem = listItem[+question];
            selectedItem.innerHTML = "";
            var secondQuestion = prompt("Write new text");
            selectedItem.innerHTML = secondQuestion;
            selectedItem.setAttribute("class","item");
            }
        }


    function getRandomColor() {
        return "#" + ((1 << 24) * Math.random() | 0).toString(16);
    }






