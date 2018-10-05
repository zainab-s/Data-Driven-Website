// put your javascript code here
function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // sake a script DOM node
    script.src = "AnimalData.js"
        ;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

//alert(animals_data.category[0].name);
//alert(animals_data.category[0].animals[0].name);

var wrapper = document.getElementById("Zainab");

var myHTML = '';

for (let i = 0, l = animals_data.category.length; i < l; i++) {

// `i` will take on the values `0`, `1`, `2`,..., i.e. in each iteration
// we can access the next element in the array with `data.items[i]`, example:

// var obj = data.items[i];

var obj = animals_data.category[i];
// Since each element is an object (in our example),
// we can now access the objects properties with `obj.id` and `obj.name`. 
// We could also use `data.items[i].id`.

var name = obj.name;
myHTML += '<span class="test"><h2><b>'+ name + '</b></h2></span><br/><br/>';

for (let j = 0, l = obj.animals.length; j < l; j++) {
    var ani = obj.animals[j];
    var image1 = ani.image1;
    var image2 = ani.image2;
    var name = ani.name;
    var description = ani.description;

    myHTML +=' <table class="table" style="color:black;"><thead><tr>'+
        '<th>'+ani.name+'</th>'+
        '</tr></thead><tbody><tr>'+
        '<td>'+ani.description+'</td>'+       
        '<td><img src="'+ani.image1+'" alt="Image 1" width="200" height="100"></td>'+
        '<td><img src="'+ani.image2+'" alt="Image 1" width="200" height="100"></td>'+
'</tr></tbody></table>';

}

wrapper.innerHTML = myHTML;


}



