var interval = 10;
var secondsInDay = (1000 / interval) * (60 * 60 * 24 * 365);

$(document).ready(function() {
  $('span.timer').each(function() {
    var timer = $(this);
    var salary = timer.data('salary');
    var increase = salary / secondsInDay;

    setInterval(function() {
      var value = parseFloat(timer.text());
      var newValue = (value + increase);
      var formattedValue = newValue.toFixed(7).slice(0, 8);
      timer.text(formattedValue);
    }, interval);
    });
});