// Given submitted user input, return 
// the corresponding stock data
$(document).ready(function(){
    $("form").submit(function(){
        $("#symbol").val("IBM");
    });
});

// Parse json file data into table rows
