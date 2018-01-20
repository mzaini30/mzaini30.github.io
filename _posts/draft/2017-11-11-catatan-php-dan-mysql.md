---
layout: post
title: "Catatan PHP dan MySQL"
date: 2017-11-11 11:10:35
gambar: "http://lh3.googleusercontent.com/-T4gMjjGPXB8/WgZp43EjgyI/AAAAAAAACro/Ker3LeH2WjIox1Xf3Z1zFMl8Jx5NtnM1wCLcBGAs/h120/php-elephant-logo-bd4f9d83be8c8563248fe4793f90bae7.png"
categories: posts
tags: [skrip, php, mysql, pemrograman, sintaks]
---

# MySQL

Melacak lokasi MySQL

```bash
which mysql
```

Export database

```bash
mysqldump -u root -p psikoweb > psikoweb.sql
```

Masuk ke MySQL

```bash
mysql -u root -p
```

Menampilkan database

```sql
show databases;
```

Membuat database

```sql
create database psikoweb;
```

Memilih database

```sql
use psikoweb;
```

Membuat table

```sql
CREATE TABLE operator(
    id VARCHAR (20) NOT NULL,
    nama VARCHAR (50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE film (
    id VARCHAR (20) NOT NULL,
    judul VARCHAR (50) NOT NULL,
    deskripsi TEXT,
    rating VARCHAR (50) NOT NULL,
    produksi VARCHAR(100) NOT NULL,
    distributor VARCHAR(100) NOT NULL,
    durasi INT NOT NULL,
    country VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE teater (
    id VARCHAR (20) NOT NULL,
    nama VARCHAR (50) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);

-- foreign key: teater_id
CREATE TABLE kursi (
    id VARCHAR (20) NOT NULL,
    nama VARCHAR (50) NOT NULL,
    teater_id VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);

-- foreign key: film_id, teater_id
CREATE TABLE jadwal (
    id VARCHAR (20) NOT NULL,
    hari VARCHAR (50) NOT NULL,
    jam VARCHAR(20) NOT NULL,
    harga INT NOT NULL,
    film_id VARCHAR(20) NOT NULL,
    teater_id VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at TIMESTAMP,
    PRIMARY KEY (id)
);

-- foreign key: operator_id, jadwal_id, kursi_id, 
CREATE TABLE transaksi (
    id VARCHAR(20) NOT NULL,
    operator_id VARCHAR(20) NOT NULL,
    jadwal_id VARCHAR(20) NOT NULL,
    kursi_id VARCHAR(20) NOT NULL,
    jumlah_dibayar INT NOT NULL,
    kembalian INT NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);
```

Menampilkan table

```sql
show tables;
```

Menghapus table

```sql
DROP TABLE transaksi;
DROP TABLE jadwal;
DROP TABLE kursi;
DROP TABLE teater;
DROP TABLE film;
DROP TABLE operator;
```

Menghapus database

```sql
drop database bioskop;
```

Menampilkan form table

```sql
desc peserta;
```

Menambah Kolom Baru

```sql
ALTER TABLE nama_tabel ADD nama_kolom varchar (50) not null;
```

Insert data

```sql
INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')
```