var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  myNodelist[i].appendChild(span);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newvalue() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputvalue").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("mylitaglist").appendChild(li);
  }
  document.getElementById("inputvalue").value = "";

  var span = document.createElement("SPAN");
  li.appendChild(span);
}