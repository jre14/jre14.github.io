<?
session_start();
$loginName = $_SESSION["userLogin"];
if(isset($_GET['menu'])){
    $menu = $_GET['menu'];
}
//echo $menu;

if(!isset($loginName)){
    header("Location: /login.php");
    exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/css/dashboard.css">
    <title>Add Product</title>
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
    <div class="container col-11 row m-auto mt-3">
    <h1><i class="bi bi-plus-circle-fill"></i> Agregar Producto</h1>
        <div class="col-6 mt-3">
            <label for="nameProduct" class="form-label my-2">Nombre del producto:</label>
            <input class="form-control" id="nameProduct" type="text">
            <label for="descriptionTextarea" class="form-label my-2">Description:</label>
            <textarea class="form-control" id="descriptionTextarea" rows="3"></textarea>
        </div>
        <div class="col-6 mt-3">
            <label for="addStock" class="form-label my-2">Agregar a Stock:</label>
            <input class="form-control" id="addStock" type="text">
            <label for="priceProduct" class="form-label my-2">Precio :</label>
            <div class="input-group mb-3">
                
                <span class="input-group-text" id="basic-addon1">$</span>
                <input type="text" class="form-control"id="priceProduct" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <button class="btn btn-primary mt-2 mr-0">Agregar Producto</button>
        </div>

    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</body>
</html>