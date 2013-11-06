//= require_tree .
//= require_tree ./vendors

window.onload = function(){
    oo.setAPIKey("1c8a535f118b26a6974462c7bd84e71e3c6cbbe4");

    var submit = document.getElementById('submit-poll');
    submit.onclick = function(e) {
      e.preventDefault();
      var form = document.getElementsByTagName('form')[0];
      var opt_value = '';
      for (var i = 0; i < form.elements.length; i++) {
        var element = form.elements[i];
        if ( element.checked ) {
          opt_value = element.value;
          opt_label = element.parentElement.textContent.trim();
        }
      };
      if (!!_gaq.push(['_trackEvent', form.id, 'vote', opt_label])) {
        console.error('Track event wasn\'t added');
      } else {
        console.log('Track event was added');
        drawChart(form.id);
      }

    };

    var drawChart = function(form) {

      oo.load(function(){
          var metric = new oo.Metric("78741731", "30d");
          metric.setMetric("ga:visits");
          metric.draw('visits');

          var bar = new oo.Bar("78741731", "30d");
          bar.query.setFilter('ga:eventCategory=='+form);

          bar.addMetric("ga:totalEvents", "Votes");

          bar.setDimension("ga:eventCategory");
          bar.setDimension("ga:eventAction");
          bar.setDimension("ga:eventLabel");

          bar.draw('chart-poll-results');

      });
    };
};
