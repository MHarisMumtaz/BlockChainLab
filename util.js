var userData = [
	{
		id : 1,
		name: "Sebastian",
		lastName: "Martinez",
		email : "smartinez@nisum.com",
		password: "1234"
	},
	{
		id : 2,
		name: "Jessica",
		lastName: "Lacovelli",
		email : "jiacovelli@nisum.com",
		password: "1234"
	},
	{
		id : 3,
		name: "Umair",
		lastName: "Khanzada",
		email : "ukhanzada@nisum.com",
		password: "1234"
	},
	{
		id : 4,
		name: "Haris",
		lastName: "Mumtaz",
		email : "hmumtaz@nisum.com",
		password: "1234"
	}
]

function doLogin(){
	var email = document.getElementById("email").value;
	var pwd   = document.getElementById("pwd").value;
	var isMatch = false;
	var user = null;
	for(var i = 0; i < userData.length; i++){
		if (userData[i].email.toLowerCase()==email.toLowerCase() && userData[i].password==pwd) {
			isMatch = true;
			user = userData[i];
			break;	
		}
	}
	if (isMatch) {
		sessionStorage.setItem("logedInUser",JSON.stringify(user));
		window.location.href = "index.html";
	}else{
		document.getElementById("error").className = "";
	}
	
}

function logout(){
	sessionStorage.clear();
	window.location.href = "login.html";
}

function loadIndex(){
	if (sessionStorage.getItem("logedInUser")) {
		var user = JSON.parse(sessionStorage.getItem("logedInUser"));
		document.getElementById("loginRow").className = "hide";
		document.getElementById("logedUser").innerHTML = 'Welcome! <i class="fas fa-user"></i> '+user.name+" "+user.lastName;
		document.getElementById("logout").classList.remove("hide");
	}else{
		logout();
	}
}

function onLoadLogin(){
	if (sessionStorage.getItem("logedInUser")) {
		window.location.href = "index.html";
	}
}