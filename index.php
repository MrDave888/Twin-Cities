<!DOCTYPE html>
<html>
  <head>
    <title>Twin City</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- PHP Link -->
    <?php
    require ("weather.php");
    ?>
    <!-- CSS Links -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons-wind.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.9/css/weather-icons.min.css">
    <link rel="stylesheet" href="main.css">
    <!-- Javascript Links -->
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
  </head>
  <body>
	<div class="modal hide">
		<p> London Eye </p>
	</div>
    <!-- Overall Container -->
    <div class="container-fluid">

      <!-- Row spanning both headers -->
      <div class="row header">
        <!-- Header for 1st City -->
        <div class="col-md-6">
          <h1> New York </h1>
        </div>
        <!-- Header for 2nd City -->
        <div class="col-md-6">
          <h1> London </h1>
        </div>
      </div>

      <!-- Row spanning both weather sections -->
      <div class="row weather">
        <!-- First city weather info -->
        <div class="col-md-6">
          <!-- First city weather header -->
          <div class="row">
            <div class="col-md-3">
              <p> Current Weather </p>
            </div>
            <div class="col-md-9">
              <p> Forecast </p>
            </div>
          </div>
          <!-- First city weather forcast -->
          <div class="row">
            <div class="col-md-3 newYorkCurrent">

            </div>
            <div class="col-md-9 newYorkForecast">

            </div>
          </div>
        </div>
        <!-- Second city weather info -->
        <div class="col-md-6">
          <!-- Second city weather header -->
          <div class="row">
            <div class="col-md-3">
              <p> Current Weather </p>
            </div>
            <div class="col-md-9">
              <p> Forecast </p>
            </div>
          </div>
          <!-- Second city weather forcast -->
          <div class="row">
            <div class="col-md-3 londonCurrent">

            </div>
            <div class="col-md-9 londonForecast">

            </div>
          </div>
        </div>
      </div>

      <!-- Row spanning both map sections -->
      <div class="row map">
        <!-- First map section -->
        <div class="col-md-6" id="newYork">
        </div>
        <!-- Second map section -->
        <div class="col-md-6" id="london">
        </div>
      </div>

      <!-- Row spanning both additional information sections -->
      <div class="row addInfo">
        <!-- First additional info section -->
        <div class="col-md-6">
        </div>
        <!-- Second additional info section -->
        <div class="col-md-6">
        </div>
      </div>

    </div>

  <!-- End of body JS -->
  <script src="main.js"></script>
  </body>
</html>
