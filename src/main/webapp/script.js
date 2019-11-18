var jsondata = '{ "username": "username", "items": [ { "section": "sem1", "classes": [ { "name": "CSCI 103", "deptcode": "CSCI", "units": "4", "description": "Introduction to Programming" }, { "name": "CSCI 109", "deptcode": "CSCI", "units": "2", "description": "Introduction to Computer Science" } ] }, { "section": "sem2", "classes": [] }, { "section": "sem3", "classes": [] }, { "section": "sem4", "classes": [] }, { "section": "sem5", "classes": [] }, { "section": "sem6", "classes": [] }, { "section": "sem7", "classes": [] }, { "section": "sem8", "classes": [] }, { "section": "mreqs", "classes": [] }, { "section": "ge", "classes": [] } ]}';
var DATA = JSON.parse(jsondata);


/* Custom Dragula JS */
dragula([
  document.getElementById("sem1"),
  document.getElementById("sem2"),
  document.getElementById("sem3"),
  document.getElementById("sem4"),
  document.getElementById("sem5"),
  document.getElementById("sem6"),
  document.getElementById("sem7"),
  document.getElementById("sem8"),
  document.getElementById("major"),
  document.getElementById("ges")  
]);
removeOnSpill: false
  .on("drag", function(el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function(el) {
    el.className += "ex-moved";
  })
  .on("over", function(el, container) {
    container.className += "ex-over";
  })
  .on("out", function(el, container) {
    container.className.replace("ex-over", "");
  });


function loadSaved(){
  for(i in DATA.items){
    var section = document.getElementById(DATA.items[i].section);
    for(j in DATA.items[i].classes){
      var course = DATA.items[i].classes[j];
      if(section != null) { 
        section.innerHTML += '<li class="class ' + course.deptcode + '-class">' +
              '<p>' + course.name + '</p></li>'
      }
      else{
        document.getElementById("sem1").innerHTML += 'null';
      }
    }
  }
}





/* Vanilla JS to add a new class */
function addclass() {
  /* Get class text from input */
  var inputclass = document.getElementById("classText").value;
  /* Add class to the 'To Do' column */
  document.getElementById("to-do").innerHTML +=
    "<li class='class'><p>" + inputclass + "</p></li>";
  /* Clear class text from input after adding class */
  document.getElementById("classText").value = "";
}

/* Vanilla JS to delete classs in 'Trash' column */
function emptyTrash() {
  /* Clear classs from 'Trash' column */
  document.getElementById("trash").innerHTML = "";
}

