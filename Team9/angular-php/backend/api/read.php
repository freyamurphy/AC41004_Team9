<?php

  require 'database.php';

  $data = [];
  $sql = "SELECT * FROM 2019indteam9db.provides";
  if($result = mysqli_query($con,$sql))
  {
    $i = 0;
    while($row = mysqli_fetch_assoc($result))
    {
      $data[$i]['City']    = $row['City'];
      $data[$i]['State']    = $row['State'];

      $i++;
    }

    echo json_encode($data);
  }
  else
  {
    http_response_code(404);
  }
  $con->close();
?>