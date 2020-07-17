--- 
title: CRUD SQLite dengan PHP
layout: post
tag: script
gambar: https://image.freepik.com/free-photo/close-up-business-team-using-digital-tablet-with-financial-d_1232-2080.jpg
--- 

**Koneksi ke database**

```php 
$db = new PDO("sqlite:database.db");
```

**Create**

```php 
$db->prepare("insert into biodata (nama, alamat) values (:nama, :alamat)")->execute([
 ":nama" => "Zen",
 ":alamat" => "Samarinda"
]);
``` 

**Read**

```php 
$data = $db->query("select nama from biodata");
$hasil = [];
while ($row = $data->fetch()){
 $hasil[] = [
  "nama" => $row["nama"]
 ];
}
echo(json_encode($hasil));
```

**Update**

```php 
$db->prepare("update biodata set nama = :nama where id = :id")->execute([
 ":nama" => "Zen",
 ":id" => 3
]);
```

**Delete**

```php 
$db->prepare("delete from biodata where id = :id")->execute([
 ":id" => 2
]);
```
