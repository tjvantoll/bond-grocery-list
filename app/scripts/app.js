(function() {
	var el = new Everlive("ZVJ8yTSrJPJmDYED");

	var groceryDataSource = new kendo.data.DataSource({
		type: "everlive",
		transport: {
			typeName: "Groceries"
		}
	});

	function closeDialog() {
		$("#add").data("kendoMobileModalView").close();
		$("#grocery").val("");
	}

	function initialize() {
		var app = new kendo.mobile.Application(document.body, { skin: "flat" });
		$("#grocery-list").kendoMobileListView({
			dataSource: groceryDataSource,
			template: "#: Name #"
		});
	}

	window.addView = kendo.observable({
		add: function() {
			var grocery = $("#grocery").val();
			if (grocery.trim() === "") {
				navigator.notification.alert("Please provide a grocery.");
				return;
			}

			groceryDataSource.add({ Name: grocery });
			groceryDataSource.one("sync", closeDialog);
			groceryDataSource.sync();
		},
		close: closeDialog
	});

	document.addEventListener("deviceready", initialize);
}());