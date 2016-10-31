
    var btn1 = document.getElementById("Edit");
    var btn2 = document.getElementById("Remove");
    var btn3 = document.getElementById("Add");
    var list = document.getElementById("List");
    var item = document.getElementById("input");
    var listItem = document.getElementsByClassName("item");
    console.log(listItem[3]);

    btn3.onclick = function (event) {
        var inp = item.value;
        var newCheck = document.createElement("input");
        newCheck.setAttribute("class","checkbox");
        newCheck.setAttribute("type","checkbox");
        list.appendChild(newCheck);
        var newItem = document.createElement("li");
        newItem.innerHTML = inp;
        newItem.setAttribute("class","item");
        list.appendChild(newItem);
    }
    btn2.onclick = function (event) {
        var inp = item.value;
        for(var i = 0;i<listItem.length;i++) {
            if (inp === listItem[i]) {
                list.removeChild(inp);
            }
        }
    }

    listItem.onmouseover = function (event) {
        listItem[1].style.left = 50 + "px";
    }






    /*function addEl() {
        var newItem = document.createElement("li");
        newItem.innerHTML = inp;
        list.appendChild(newItem);
        newItem.setAttribute("class",item);
    }*/


    /*function chPos() {
        item.style.left = "300px";
    }
    btn1.onclick = function(event){
        setPosition(item,30,0);
    }
    function setPosition(element, x, y) {
        element.style.left = x + "px";
        element.style.top = y + "px";
    }*/