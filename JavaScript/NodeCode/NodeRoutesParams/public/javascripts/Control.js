var Control = (function() {



	// Constructor
	function Control() {
        $("button").click(function(event) {
            var id = event.target.id;
            var route = '/routeParams/' + id
            $("#clientRoute").html('ClientRoute: ' + route);
            $.getJSON(route, function(response) {
                // $('#response').html(JSON.stringify(response));
                $('#route').html("ROUTE: " + response.route);
                $('#result').html("RESULT: " + response.result);
                $('#query').html("QUERY: " + JSON.stringify(response.query));
                $('#params').html("PARAMS: " + JSON.stringify(response.params));
                $('#id').html("ID: " + response.id);

                // elf.utilities.showMessage(choice, true);
            });
        });
	}

    function clear() {
        $('#response').html('');
        $('#route').html('');
        $('#result').html('');
        $('#request').html('');
        $('#params').html('');
    }

    function runPage() {
        page('/', function() {
            clear();
            $('#response').html("root");
        });

        page('/users/', function() {
            clear();
            $('#response').html('Simple user');
        });

        page('/users/:id', function(request) {
            clear();
            var id = request.params.id;
            var choice = ('Param: ' + id);
            $.getJSON('/users/' + id, function(response) {
                $('#response').html(JSON.stringify(response));
                $('#route').html(response.route);
                $('#result').html(response.result);
                $('#request').html(response.request);
                $('#params').html(response.params);
                elf.utilities.showMessage(choice, true);
            });
        });

        page();
    }

    /*
	function addNames(initFirstName, initLastName) {
		'use strict';

		var script = $("#nameItem").html(), template = Handlebars
				.compile(script);

		var result = template({
			firstName : initFirstName,
			lastName : initLastName
		});

		$("#nameDiv").append(result);
	}*/
	
	return Control;

}());

$(document).ready(function() {
	'use strict';
	var control = new Control();
});
