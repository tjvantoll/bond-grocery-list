(function() {
	var el = new Everlive("YOUR API KEY");

	var groceryDataSource = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Groceries"
		}
	});

	function initialize() {
		var app = new kendo.mobile.Application(document.body, { skin: "flat" });
	}

	document.addEventListener("deviceready", initialize);
}());