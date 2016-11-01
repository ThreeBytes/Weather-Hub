/**
 * Renders the weather status for a city.
 */
(function ($) {
    
    
  /**
   * Process the form on page load.
   */
   
   $APPID = 'db81558d451e7ba2470a98f0988da7fc';
  $(document).ready(function() {
		processForm();
		$("#btn").click(function(){
				processForm();
		});
  });
 
  /**
   * Callback to process the form.
   */
  function processForm() {
    // Fetch the data from the public API through JSONP.
    // See http://openweathermap.org/API#weather.
    $.ajax({
      url: 'https://api.openweathermap.org/data/2.5/weather',
      jsonp: 'callback',
      dataType: 'jsonp',
      cache: false,
      data: {
        q: $('#weather_city').val(),
        units: $('#weather_status_form input[name="units"]:checked').val(),
		appid: $APPID
	  },
      // work with the response
      success: function (response) {
        $('#weather_description').text(response.weather[0].description);
        $('#weather_temp').text(response.main.temp);
        $('#weather_wind').text(response.wind.speed);
		var cls = response.weather[0].main;
		var encodedclass = cls.replace(/\s+/g, '-').toLowerCase();
		$('body').removeClass();
		$('body').addClass(encodedclass);
      },
    });
  }
})(jQuery);
