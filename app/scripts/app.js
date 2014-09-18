(function() {
    var apiKey = "nMfdN0aMrPrHIqgv"
    var el = new Everlive(apiKey);

    var groceryDataSource = new kendo.data.DataSource({
        transport: {
            read: {
                url: "http://api.everlive.com/v1/" + apiKey + "/Groceries",
                dataType: "jsonp"
            }
        },
        schema: {
            data: function(response) {
                return response.Result;
            }
        }
    });

    function initialize() {
        var app = new kendo.mobile.Application(document.body, { skin: "flat" });
        $("#grocery-list").kendoMobileListView({
            dataSource: groceryDataSource,
            template: "#: Name #"
        });
    }

    document.addEventListener("deviceready", initialize);
}());