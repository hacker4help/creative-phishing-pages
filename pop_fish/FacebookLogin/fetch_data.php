<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "pop_fish";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$query = "SELECT * FROM singin";
$result = mysqli_query($conn, $query);

$data = array();
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

mysqli_close($conn);

$output = '<tr>
                <th>Email</th>
                <th>Password</th>
                
            </tr>';

foreach ($data as $row) {
    $output .= '<tr>
                    <td>' . $row["email"] . '</td>
                    <td>' . $row["password"] . '</td>
                    
                </tr>';
}

echo $output;
?>