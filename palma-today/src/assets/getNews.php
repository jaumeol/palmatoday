<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

    // OJO las comillas,3 horas xk puse 1o "[{"...}] y luego "[{'...}]
    $news = '[
            {"title": "1"},
            {"title": "2"},
            {"title": "3"}
        ]';
    echo $news;
    //header('Content-Type: application/json');
?>