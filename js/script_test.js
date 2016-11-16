"use strict";

function List() {
    var that = this;

    this.element = document.createElement("ul");               // create unordered list
    this.element.className = "mainList";

    this.input = document.createElement("input");             // Add input field
    this.element.appendChild(this.input);
    this.input.className = "input";

    this.input.onkeydown = function(keyPress){                 //Enter press = add item
        if(that.input.value !== "") {
            if (keyPress.keyCode == 13) {
                var itm = new Item(that.input.value);
                that.element.appendChild(itm.item);
                that.input.value = "";
            }
        }
    }
}



function Item(text) {
    var item = this;

    this.item = document.createElement("li");                   //Create item

    this.box = document.createElement("input");                 //Create Checkbox
    this.box.type = "checkbox";
    this.box.className = "checkBox";
    this.item.appendChild(this.box);

    this.box.onclick = function () {                            //Checkbox check
        if(item.box.checked){
            item.item.style.textDecoration = "line-through";
        }else{
            item.item.style.textDecoration = "";
        }
    }

    this.paragraph = document.createElement("p");               //Create paragraph
    this.paragraph.innerText = text;
    this.item.appendChild(this.paragraph);

    this.removeButton = document.createElement("img");          //create Remove button(Cross)
    this.removeButton.setAttribute("src","images/cross.png");
    this.removeButton.className = "cross";

    this.item.appendChild(this.removeButton);

    this.removeButton.onclick = function(){
        item.item.remove();
    }

    this.innerList = document.createElement("img");             //create Inner List(Plus)
    this.innerList.setAttribute("src","images/3.png");
    this.innerList.className = "plus";
    this.item.appendChild(this.innerList);

    this.innerList.onclick = function(){                        //Plus onclick
            var innerList = new List();
            item.item.appendChild(innerList.element);
            // innerList.input.remove();
    }


    this.paragraph.ondblclick = function () {              //double click
        item.paragraph.innerText = "";
        var edit = new Edit();
    }

    this.item.className = "item";                                  //Give className of element item

    function Edit() {                                              //Create construction of edit text
        var edit = this;

        this.input = document.createElement("input");
        this.input.className = "liInput";
        item.paragraph.appendChild(this.input);

        this.input.onkeydown = function(keyPress){                 //Enter press = edit text
            if(edit.input.value !== "") {
                if (keyPress.keyCode == 13) {
                    item.paragraph.innerText = edit.input.value;
                }
            }
        }
    }
}


var list = new List();
document.body.appendChild(list.element);
