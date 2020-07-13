<?php

require_once $_SERVER['DOCUMENT_ROOT'] . '/rcs/funcs.php';

// echo PDO::FETCH_NUM;
// echo '<br>';
// echo PDO::FETCH_ASSOC;

$dbconn = [
  'dbhost'   => 'mysql:host=localhost;dbname=',
  'dbname' => 'rcs',
  'dbuser'   => 'rcsuser',
  'dbpass'   => 'userRcs01'
];

try{
  $db = new PDO($dbconn['dbhost'] . $dbconn['dbname'], $dbconn['dbuser'], $dbconn['dbpass']);
}
catch(PDOException $e){
  echo $e->getMessage();
}

$name = 'Marija';
$res = [];

$stmt = $db->prepare("SELECT * FROM users WHERE name = ?");

if ($stmt->execute([$name])) {
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $res[] = $row;
  }
}

ddv($res, 0, 1);