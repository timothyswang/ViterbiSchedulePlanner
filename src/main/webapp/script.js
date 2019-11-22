
/* Custom Dragula JS */
dragula([
  document.getElementById("trash"),
  document.getElementById("sem1"),
  document.getElementById("sem2"),
  document.getElementById("sem3"),
  document.getElementById("sem4"),
  document.getElementById("sem5"),
  document.getElementById("sem6"),
  document.getElementById("sem7"),
  document.getElementById("sem8"),
  document.getElementById("premajor-reqs"),
  document.getElementById("major-reqs"),
  document.getElementById("general-education")
]);
removeOnSpill: false
  .on("drag", function(el) {
    el.className.replace("ex-moved", "");
  })
  .on("drop", function(el, container) {
    el.className += "ex-moved";
    if(container.className == "trash"){
      trash.innerHTML == "";
    }
  })
  .on("over", function(el, container) {
    container.className += "ex-over";
  })
  .on("out", function(el, container) {
    container.className.replace("ex-over", "");
  });


function loadSaved(DATA) {
  for(i in DATA.schedule ){
    var section = document.getElementById( DATA.schedule[i].section );
    for(j in DATA.schedule[i].classes){
      var course = DATA.schedule[i].classes[j];
      if(section != null) { 
        section.innerHTML += '<li class="class ' + course.deptcode + '-class">' +
              '<p>' + course.deptcode + " " + course.coursecode + '</p></li>'
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
  document.getElementById("sem4").innerHTML = "";
}

