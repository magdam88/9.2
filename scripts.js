$(document).ready(function() {
  $('span').each(function(index, element) {
    if(index % 2 == 0) {
      $(element).css('color', 'red');
    };
  });
  $('p').each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
    $(element).append(button)
  });
  $("button").click(function() {
    alert($(this).attr("data-tmp"));
  });
});