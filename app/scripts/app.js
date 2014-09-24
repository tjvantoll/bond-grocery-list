(function() {
    var apiKey = "ZVJ8yTSrJPJmDYED"
    var el = new Everlive(apiKey);

    var groceryDataSource = new kendo.data.DataSource({
        type: "everlive",
        transport: {
            typeName: "Groceries"
        }
    });

    function initialize() {
        var app = new kendo.mobile.Application(document.body, {
            skin: "flat",
            transition: "slide"
        });
        $("#grocery-list").kendoMobileListView({
            dataSource: groceryDataSource,
            template: "#: Name #"
        });
    }

    window.addView = kendo.observable({
        add: function() {
            if (this.grocery.trim() === "") {
                navigator.notification.alert("Please provide a grocery.");
                return;
            }

            groceryDataSource.add({ Name: this.grocery });
            groceryDataSource.one("sync", this.close);
            groceryDataSource.sync();
        },
        close: function() {
            $("#add").data("kendoMobileModalView").close();
            this.grocery = "";
        }
    });

    document.addEventListener("deviceready", initialize);
}());