//= require_tree .
//= require_tree ./vendors

window.onload = function(){
    oo.setAPIKey("1c8a535f118b26a6974462c7bd84e71e3c6cbbe4");

    oo.load(function(){
        //UA-45490920-1
        var metric = new oo.Metric("78741731", "30d");

        metric.setMetric("ga:visits");

        metric.draw('visits');


    });

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
      }
    };
};
