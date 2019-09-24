
<?php
    //link database
    $mysqli = new mysqli("silva.computing.dundee.ac.uk", "2019indteam9", "0908.ind9.8090", "2019indteam9db");
    if($mysqli->connect_error) {
        exit('Could not connect');
    }

    $servername='silva.computing.dundee.ac.uk';
    $username ='2019indteam9';
    $password='0908.ind9.8090';
    $db='2019indteam9db';

    $conn=mysqli_connect($servername,$username,$password,$db);


    $search = $_GET['search'];
    $state=$_GET['state'];


    if($search!=''&&$state=='') {
    #Get the product table from the database
        $sql = "SELECT * FROM provides WHERE City LIKE '%$search%'  OR ID LIKE '%$search%' OR Name LIKE '%$search%' OR StreetAddress LIKE '%$search%'  OR ZipCode LIKE '%$search%' LIMIT 10";
    }

    if($search!=''&&$state!=''){  $sql = "SELECT * FROM provides WHERE State='$state' AND ( City LIKE '%$search%' OR ID LIKE '%$search%' OR Name LIKE '%$search%' OR StreetAddress LIKE '%$search%'  OR ZipCode LIKE '%$search%') LIMIT 10";
    }

        $result = mysqli_query($conn, $sql);



    if (mysqli_fetch_array($result)) {
        echo "<center><div class='container'><div class='table1' style ='text-align:center'>
                            <table border='2' id='myTable'>
                            <h4 style='float:left;color:black'>Providers table</h4>
                            <br>
                            <br>
                                <tr>
                                <th width='5%' >ID</th>
                                <th width='10%'>Name</th>
                                <th width='10%' >City</th>
                                <th width='20%' >StreetAddress</th>
                                <th width='10%' >State</th>
                                <th width='10%' >ZipCode</th>
                                <th width='10%' >Rating</th>
                                <th width='5%' '>Price</th>
                                </tr>";

        while ($row = mysqli_fetch_array($result)) {
            echo "<tr>";
            echo "<td>" . $row['ID'] . "</td>";
            echo "<td>" . $row['Name'] . "</td>";
            echo "<td>" . $row['City'] . "</td>";
            echo "<td>" . $row['StreetAddress'] . "</td>";
            echo "<td>" . $row['State'] . "</td>";
            echo "<td>" . $row['ZipCode'] . "</td>";
            echo "<td>" . $row['Rating'] . "</td>";
            echo "<td> TBC </td>";;

            echo "</tr>";
        }
        echo "</table></center>";
    }
    else{
        echo("NO RESULT FOUND!");
    }


?>
