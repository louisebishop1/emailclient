<?php
$dbhost = 'localhost';
$dbuser = 'leb17';
$dbpass = 'leb17';
$dbname = 'leb17';
$dbtable = 'users';


$q=$_GET["userID"];
$p=$_GET["passWD"];

$con = mysql_connect($dbhost, $dbuser, $dbpass);
if (!$con)
 {
 	die('Could not connect: ' . mysql_error());
 }
$dbselect = mysql_select_db($dbname,$con);

$sql="SELECT * FROM $dbtable WHERE userID='$q'";

$result = mysql_query($sql);


if (mysql_num_rows($result)==0) { 
	echo "not registered";
} else {
	while($row = mysql_fetch_array($result))
 {

 if (($row['passWD'])==$p) {
   echo "Login Sucessful";
} else { echo "not registered";} 

}
} 
mysql_close($con);

?>
