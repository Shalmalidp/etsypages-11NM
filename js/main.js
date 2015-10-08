
var tempString = $('#itemjstemplate').text();
var templateFunction = _.template(tempString);

_.each(etsy.results, function(item){

    console.log(item);
var itemHTML = templateFunction(item);
$('.details').append(itemHTML);
});