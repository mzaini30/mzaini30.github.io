const teks = `Buka aja Muse Indonesia di YouTube.

![Ini adalah gambar kucing (mantap)](https://i.postimg.cc/nrQ1B77y/Screenshot-2021-01-02-16-29-01-34-7a4090f09f6554852d748ee9fd6f40d3.png)

![](https://i.postimg.cc/RZmjCVxS/Screenshot-2021-01-02-16-28-48-34-7a4090f09f6554852d748ee9fd6f40d3.png)

![](https://i.postimg.cc/cLcPvydQ/Screenshot-2021-01-02-16-28-55-17-7a4090f09f6554852d748ee9fd6f40d3.png)

Oh iya, karena pihak Muse Indonesia menyewa anime secara legal kepada studio anime, jadi kalau waktu sewanya udah habis, nanti animenya dihapus dari channel-nya. Jadi, kalau nonton di situ, nggak usah nanggung ya. Satu session sampai tamat gitu. Siapa tau besoknya dihapus. Gitu.`
const hasilnya = teks.match(/(?<=\!\[.*\]\()(.*)(?=\))/)
if (hasilnya) {
	console.log(hasilnya[0])
} else {
	console.log('Nggak ketemu')
}