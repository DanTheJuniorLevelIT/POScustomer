<?php
    include 'cusconn.php';
    $custID = $_GET['cid'];
    $postdata= file_get_contents("php://input");
    $request = json_decode($postdata);
    
    $query = "SELECT 
                t.transactionID,
                t.CustID,
                t.Date,
                td.TransacDetID,
                td.Barcode,
                td.Price AS UnitPrice,
                td.quantity,
                td.Price * td.quantity AS Total,
                p.Prod_name,
                p.Brand,
                p.Size,
                p.Description,
                p.imgFile,
                c.Lastname,
                c.Firstname,
                c.Middlename,
                c.email,
                c.Birthdate,
                c.Contact,
                c.Address,
				(c.Credit - c.Charges) AS Balance
            FROM 
                transaction AS t
            JOIN 
                transactiondetails AS td ON t.transactionID = td.transactionID
            JOIN 
                product AS p ON td.Barcode = p.Barcode
            JOIN 
                customer AS c ON t.CustID = c.CustID
			WHERE 
                c.CustID = $custID;
            ";

    $result = $conn->query($query);
    $data = array();
    $TotalSum = 0;
	$TotalBalance = 0;

    while($row = $result->fetch_object()){
        $rowTotal = $row->Total; // Use the Total column from the query
        $TotalSum += $rowTotal; 
		
		$TotalBalance = $row->Balance;
		
		//$bal = $TotalBalance;

        // Add Total to the row object
        $row->Total = $rowTotal;    

        $row->imgFile="http://localhost/customer/image/".$row->imgFile;

        array_push($data, $row);
    }

    $response = array(
        'SumPrice' => $TotalSum,
		'Balances' => $TotalBalance,
        'data' => $data  // Include the data array if needed
    );
    
    echo json_encode($response);
?>
