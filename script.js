var categories;
var categoriesArray = new Array;
var num = 0;
function addElement () { 
    //creating node
    num = num+1;
    var category = document.createElement("div");
    //adding classes
    category.setAttribute("id","item"+num);
    category.classList.add("item");
    //adding function 
    category.addEventListener("click", function () {
        removeElement(this.id);
    })
    //getting container and appending 
    var container = document.getElementById("container");
    container.appendChild(category);
    //getting all the nodes in container and converting to array
    categories = document.querySelectorAll(".item");
    categoriesArray = Array.from(categories);
    console.log(categoriesArray);
}

function removeElement(identity) {
    var myobj = document.getElementById(identity);
    myobj.remove();
    categoriesArray.splice(num-1,1);
    console.log(categoriesArray);
}