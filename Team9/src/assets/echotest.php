<?php



/*
SELECT * FROM pricing
join providers on pricing.providers_ID = providers.ID
join conditions on pricing.condition_Code = conditions.conditionsCode
where pricing.condition_Code=039 and providers.state = "NY";
*/
$con=mysqli_connect("silva.computing.dundee.ac.uk","2019indteam9","0908.ind9.8090","2019indteam9db");

if (mysqli_connect_errno())
 {
 echo "Failed to connect to MySQL: " . mysqli_connect_error();
 }




//$sqlstatement = "SELECT * FROM pricing join providers on pricing.providers_ID = providers.ID join conditions on pricing.condition_Code = ".$_GET["condition_Code"]." and providers.state = \"".$_GET["state"]."\";";



$sqlstatement ="SELECT * FROM pricing join providers on pricing.providers_ID = providers.ID join conditions on conditions.conditionsCode =  pricing.condition_Code where pricing.condition_Code=039 and providers.State=\"NY\";";


$data = [];
$sql = "select * from test;";

if($result = mysqli_query($con,$sqlstatement))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$cr]['pricingID']    = $row['pricingID'];
   $data[$cr]['totalDischarges'] = $row['totalDischarges'];
    $data[$cr]['averageCoveredCharges']    = $row['averageCoveredCharges'];
    $data[$cr]['averageTotalPayments'] = $row['averageTotalPayments'];
    $data[$cr]['averageMedicarePayments']    = $row['averageMedicarePayments'];
    $data[$cr]['pricingYEAR'] = $row['pricingYEAR'];
    $data[$cr]['condition_Code']    = $row['condition_Code'];
    $data[$cr]['providers_ID'] = $row['providers_ID'];
    $data[$cr]['providerName'] = $row['providerName'];
    $data[$cr]['City']    = $row['City'];
    $data[$cr]['StreetAddress'] = $row['StreetAddress'];
    $data[$cr]['State']    = $row['State'];
    $data[$cr]['ZipCode'] = $row['ZipCode'];
    $data[$cr]['lat']    = $row['lat'];
    $data[$cr]['lng'] = $row['lng'];
    $data[$cr]['Description'] = $row['Description'];


    $cr++;
  }


}
else
{
  http_response_code(404);
}




        echo json_encode(['data'=>$data]);







/*


  $con=mysqli_connect("localhost","test_user_name","rX4360qCgB0rqK3B","test");

  if (mysqli_connect_errno())
   {
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
   }


$data = [];
$sql = "select * from test;";

if($result = mysqli_query($con,$sql))
{
  $cr = 0;
  while($row = mysqli_fetch_assoc($result))
  {

  }

  //echo json_encode(['data'=>$data]);
}
else
{
  http_response_code(404);
}*/
?>
