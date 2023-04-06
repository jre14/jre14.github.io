<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
    <style>
        .container{
            width: 300px;
        }
        body {
            background: #A181FF;
        }
    </style>
    <title>Inicio de Sesion</title>
</head>
<body>
    <div class="container border border-primary position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body-tertiary rounded">
        <h1 class="text-center"><i class="bi bi-building"></i></h1>
        <form class="text-center"action="includes/access.php?type=login" method="post">
            <div class="my-2 ">
                <h5>Usuario:</h5>
                <input class="form-control" type="text" placeholder="UserPrueba" name="user" required>
            </div>
            <div class="my-2">
                <h5>Contraseña:</h5>
                <input class="form-control" type="password" placeholder="PassPrueba" name="pass" required>
            </div>
            <button class="btn btn-primary m-auto"type="submit">Ingresar</button>
        </form>
    </div>
    <? if(isset($_GET['error']) == "notlogin"){?>
    <div class=" mx-auto my-auto p-2 bg-danger text-white text-center">
        <span>El usuario o contraseña no son correctos.</span></div>
    <?}?>

</body>
</html>