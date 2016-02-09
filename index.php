<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Observer Prototype</title>
    <script src="/untracked/observer/lib/require.js"></script>
    <script>
        requirejs(['/untracked/observer/config.js'],function () {
            requirejs(['app.js']);
        });
    </script>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <h2>Form Subject and Subscriber <small>Look in the console</small></h2>
</div>
</body>
</html>