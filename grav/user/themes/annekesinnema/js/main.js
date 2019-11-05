if (window.location.toString().includes("localhost")) {
	document.getElementById('html').className = "dev-env";
} else {
	document.getElementById('html').className = "prod-env";
}