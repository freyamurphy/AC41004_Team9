<?php

require 'database.php';

$data = [];
$sql = "SELECT first FROM 2019indteam9db.test";


if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$i]['first']    = $row['first'];
    //$data[$i]['last']    = $row['last'];

    $i++;
  }

  echo json_encode($data);
}
else
{
  http_response_code(404);
}

?>