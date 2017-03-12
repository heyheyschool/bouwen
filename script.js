/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
 
function hi() {
	//var code = "<i class="material-icons">check_box</i>";
	//document.getElementById("material-icons").innerHTML = "check_box";
	console.log("hi");
}

function checkList() {
	console.log(this)
   	 //document.getElementById("material-icons").innerHTML = "check_box";
   	 var x = document.getElementsByClassName("material-icons");
     x[2].innerHTML = "check_box";
     console.log(document.getElementsByClassName("material-icons"));
}
