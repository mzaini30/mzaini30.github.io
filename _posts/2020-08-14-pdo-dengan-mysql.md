--- 
layout: post
title: CRUD dengan PDO MySQL
--- 

Buat dulu koneksinya:

```php
$db = new PDO("mysql:host=localhost;dbname=hello", "user", "pass");
```

## Create

```php
$db->prepare("insert into data (nama, email) values (:nama, :email)")->execute([
 ":nama" => "Zen",
 ":email" => "zen@gmail.com"
]);
```

## Read

```php
$data = $db->query("select * from data");
$hasil = [];
while($row = $data->fetch()){
 $hasil[] = [
  "nama" => $row["nama"],
  "email" => $row["email"]
 ];
}
```

## Update

```php
$db->prepare("update data set nama = 'Zen' where id = 2")->execute();
```

## Delete

```php
$db->prepare("delete from data where id = 3")->execute();
```