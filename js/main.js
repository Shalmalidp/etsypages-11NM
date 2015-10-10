
var tempString = $('#itemjstemplate').text();
var templateFunction = _.template(tempString);

_.each(etsy.results, function(item){

    console.log(item);
var itemHTML = templateFunction(item);
$('.details').append(itemHTML);
});





$('.wrap-element').on('mouseenter', function(event){
  var btn = $(this);
  btn.find('hamburger-heart').addClass('show');
});

// $('.details').on('mouseleave','.wrap-element' function(event){
//   var btn = $(this);
//   btn.find('hamburger-heart').toggleClass('show');
// });