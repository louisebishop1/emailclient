<?php

$dbhost = 'localhost';
$dbuser = 'leb17';
$dbpass = 'leb17';
$dbname = 'leb17_bw';
$dbtable = 'book1';

// connect to the database
$db = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql database '. mysql_error());
 
 $id=$_GET["userID"];
 $review=$_GET["Review"];


if (!$db) {
    die('Not connected : ' . mysql_error());
} else {
 
}
 
// select the table
$dbselect = mysql_select_db($dbname);
 

if (!$dbselect) {
    die ('Can\'t use $dbname : ' . mysql_error());
} else {
}

if ($id=='') {
 $id="empty";
}

if ($review=='') {
 $surname="empty";
}


$sql1="SELECT * FROM $dbtable WHERE userID='$id'";

$result1 = mysql_query($sql1,$db);




if (mysql_num_rows($result1)==0) { 


$result=mysql_query("INSERT INTO  $dbtable values ('$id','$review')",$db); 


if ($result) {
     	echo "Review Accepted"; 
    $data = '';
 
 
    
} else {  
    echo 'Error: Could not get any data.\n';  
} 
 
echo $data; 

} else {
echo "Review already posted."; 
} 

mysql_close($db);


?>