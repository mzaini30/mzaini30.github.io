# Cara Ringkas Commit Git

Untuk commit Git, perintahnya adalah:

```bash
git add .
git commit -m "Pesannya"
```

Atau, bisa juga dibuat inline menjadi:

```bash
git add . && git commit -m "Pesannya"
```

Cuma ya kadang malas ngetik sambil mikirin pesan commitnya apa. Akhirnya, aku pun membuat script supaya lebih ringkas.

Jadi, aku membuat sebuah file di path dengan nama file `g`. Di dalamnya berisi:

```bash
echo Sebutkan pesan commitnya:
read commit
git add .
git commit -m "$commit"
```

Kasih full permission dulu dengan:

```bash
sudo chmod +x g
```

Nah sekarang kalau mau commit, tinggal ketik `g`.