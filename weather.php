<?php

//UWE Proxy just incase
require ("commonlib.php");

//New York Client Raw
$newYorkClientRaw = file_get_contents("http://heightsweather.info/clientraw.txt");
$newYorkArray = explode(" ", $newYorkClientRaw);

//New York Client Raw Extra
$newYorkClientRawDaily = file_get_contents("http://heightsweather.info/clientrawdaily.txt");
$newYorkExtraArray = explode(" ", $newYorkClientRawDaily);

//London Client Raw
$londonClientRaw = file_get_contents("http://nw3weather.co.uk/clientraw.txt");
$londonArray = explode(" ", $londonClientRaw);

//London Client Raw Extra
$londonClientRawDaily = file_get_contents("http://nw3weather.co.uk/clientrawdaily.txt");
$londonExtraArray = explode(" ", $londonClientRawDaily);

//Get Date, Forcast Variables // This needs changing
$todayDateInfo = getdate();
$todayDate = $todayDateInfo["mday"];
$todayMonth = $todayDateInfo["mon"];
$todayWeekDay = $todayDateInfo["wday"];
$todayYear = $todayDateInfo["year"];


//New York Seperate Variables
//Wind Speed & Conversion
$newYorkSpeedMph = $newYorkArray[1]*1.150779;
$newYorkAvgSpeed = number_format($newYorkSpeedMph, 1, ".", "");

$newYorkWindDir = $newYorkArray[3];

$newYorkTemp = $newYorkArray[4];

$newYorkHum = $newYorkArray[5];

//London Seperate Variables
//Wind Speed & Conversion
$londonAvgSpeedMph = $londonArray[1]*1.150779;
$londonAvgSpeed = number_format($londonAvgSpeedMph, 1, ".", "");

$londonWindDir = $londonArray[3];

$londonTemp = $londonArray[4];

$londonHum = $londonArray[5];

//Five Day Forcast
//function fiveDayForcast(){
  switch($todayMonth){
    case 4:
    case 6:
    case 9:
    case 11:
      $maxDate = 30;
    break;

    case 2:
      if($todayYear % 4 == 0){
        $maxDate = 29;
      }else{
        $maxDate = 28;
      }
    break;

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      $maxDate = 31;
    break;
  }

  $dayCount = 0;

  // New York Five Day Forcast
  for($i=1; $i < 6; $i++){
    $forcast[$i] = $todayDate + $i;

    if($forcast[$i] > $maxDate){
      $dayCount++;
      $forcast[$i] = $dayCount;
    }
    $newYorkFiveDayHiArray[$i-1] = $newYorkExtraArray[$forcast[$i]];
    $newYorkFiveDayLoArray[$i-1] = $newYorkExtraArray[$forcast[$i]+$maxDate];
  }

  // London Five Day Forcast
  for($i=1; $i < 6; $i++){
    $forcast[$i] = $todayDate + $i;

    if($forcast[$i] > $maxDate){
      $dayCount++;
      $forcast[$i] = $dayCount;
    }
    $londonFiveDayHiArray[$i-1] = $londonExtraArray[$forcast[$i]];
    $londonFiveDayLoArray[$i-1] = $londonExtraArray[$forcast[$i]+$maxDate];
  }
  //}
?>
