<?php
require 'database.php';
$data = file_get_contents("php://input");
$priceSlider = $_POST["price"];
echo $priceSlider;
//$postData = json_decode($data);


// Create connection
$con = new mysqli(DB_HOST,DB_USER ,DB_PASS ,DB_NAME);
// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}

$sql = "INSERT INTO test (first, last)
VALUES ('Freya', 'Murphy')";

if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();
?>