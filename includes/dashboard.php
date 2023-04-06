<?php
session_start();
$loginName = $_SESSION["userLogin"];
//echo $menu;

if(!isset($loginName)){
  header("Location: /login.php");
  exit;
}

if(isset($_GET['menu'])){
  $menu = $_GET['menu'];
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/css/dashboard.css">
    <title>Dashboard</title>
</head>
<body>
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="bi bi-building"></i> <? echo $loginName;?></a>
    <button class="navbar-toggler border border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="dashboard.php"><i class="bi bi-house-door-fill"></i> Home</a>
        <a class="nav-link" href="addProducts.php"><i class="bi bi-plus-circle-fill"></i> Agregar</a>
        <a class="nav-link" href="access.php?type=logout"><i class="bi bi-box-arrow-in-right"></i> Cerrar Sesion</a>
      </div>
    </div>
  </div>
</nav>
    <div class="container col-12 mt-3">
        <h1>Hola, Bienvenido <?echo $loginName?></h1>
        <div class="container">
          <h3><i class="bi bi-box-seam"></i> Tus productos:</h3>
          <table class="table table-striped text-center">
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Stock</th>
              <th>Precio</th>
            </tr>
            <?php 
            $data = file_get_contents('data.json');
            $dataSession = json_decode($data, true);
            $dataCount = count($dataSession['products']);

            for($i=0; $i < $dataCount; $i++){?>
              <tr>
                <td><?echo $i+1; ?></td>
                <td><?echo $dataSession['products'][$i]['name'];?></td>
                <td><?echo $dataSession['products'][$i]['description'];?></td>
                <td><?echo $dataSession['products'][$i]['stock'];?></td>
                <td><?echo "$ ".$dataSession['products'][$i]['price'];?></td>
              </tr>
            <?}?>
          </table>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>