if (window.location.toString().includes("localhost")) {
	document.getElementById('html').className = "dev-env";
} else if (window.location.toString().includes("works")) {
	document.getElementById('html').className = "acc-env";
} else {
	document.getElementById('html').className = "prod-env";
}