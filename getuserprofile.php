<?php
    include 'cusconn.php';
    $postdata= file_get_contents("php://input");
    $request = json_decode($postdata);

    $userId = $_GET['userID'];
    
    $query = "SELECT CustID, Lastname, Firstname, Middlename, Email, Birthdate, Contact, Address, Credit, Password 
          FROM customer
          WHERE CustID = $userId";
			

    $result = $conn->query($query);
    $data = array();
 

    while($row = $result->fetch_object()){
        array_push($data, $row);
    }

    echo json_encode($data);
?>
