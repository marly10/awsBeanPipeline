<?php 

echo "Hello people!";

echo "<br>"."hi trici33a";

echo "<br>"."Adding a new line here";


echo "<br>"."Adding new data Does the pipelione auto work?";

?>

<form action="index.php" method="GET">
     Num1: <input type="number" name="num1">
     Num2: <input type="number" name="num2">
     <input type="submit">
</form>

<?php
     $num1 = $_GET["num1"];
     $num2 = $_GET["num2"];
     echo $num1 + $num2;
?>

<form action="index.php" method="GET">
     <br>
     Num1: <input type="number" name="num1">
     <br>
     Num2: <input type="number" name="num2">
     <input type="submit">
</form>

<?php
     $num1 = $_GET["num1"];
     $num2 = $_GET["num2"];
echo "<br>";
     echo $num1 + $num2;
?>
















