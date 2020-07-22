--- 
layout: post
title: Cara menghemat penggunaan hosting PHP
tag: script
gambar: https://image.freepik.com/free-photo/confident-smiling-young-businesswoman-looking-digital-tablet-office_23-2147943715.jpg
--- 

Cara untuk menghemat penggunaan hosting PHP adalah dengan pemisahan frontend dan backend. Frontend ini tampilan di user sedangkan backend adalah logika aplikasi. Penghubung di antara keduanya adalah dengan API berbentuk JSON.

Untuk frontend, aku biasa pakai Github Pages. Sedangkan, backendnya adalah di hosting PHP. Contoh dari frontend adalah <https://mzaini30.js.org/tes-api/> (Source code: <https://github.com/mzaini30/tes-api>).

Lalu, untuk backendnya:

```php 
<?php 
$db = new PDO('mysql:host=localhost;dbname=admin', 'admin', 'rahasia');
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
$routes = explode('/', $_SERVER['PATH_INFO']);
if ($routes[1] == 'tampil'){
    // tampil
    $data = $db->query('select nama from tes order by nama');
    $hasil = [];
    while ($row = $data->fetch()){
        $hasil[] = $row['nama'];
    }
    echo json_encode($hasil);
}
if ($routes[1] == 'tambah'){
    // tambah
    $db->prepare('insert into tes (nama) values (:nama)')->execute([
        ':nama' => $_POST['nama']
    ]);
}
```
