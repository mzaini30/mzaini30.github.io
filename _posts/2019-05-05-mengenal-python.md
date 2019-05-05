---
layout: post
title: Mengenal Python
---

# Sintaks

Yang kugunakan di sini untuk Python versi 3 ya. Ada sedikit perbedaan dengan Python versi 2 yang sudah deprecated. Tapi memang direkomendasikan menggunakan yang versi terbaru.

## Deklarasi Variabel

### String

```python
nama = 'Zen'
```

### Angka

```python
umur = 24
```

### Boolean

```python
menikah = False
```

## If

```python
if usia >= 40:
	print('Anaknya berapa?')
elif usia >= 20:
	print('Sudah lulus kuliah?')
else:
	print('Cepat besar ya...')
```

## While

```python
while True:
	print('Cetak terus tanpa ada akhirnya')
```

# Contoh Aplikasi Menggunakan Python

## Scrape Youtube

```python
from bs4 import BeautifulSoup as bs
import requests
from pytube import YouTube

base = "https://www.youtube.com/results?search_query="
qstring = "boddingtons+advert"
r = requests.get(base+qstring)

page = r.text
soup = bs(page,'html.parser')

vids = soup.findAll('a',attrs={'class':'yt-uix-tile-link'})

videolist=[]
for v in vids:
    tmp = 'https://www.youtube.com' + v['href']
    videolist.append(tmp)

count=0
for item in videolist:
 
    # increment counter:
    count+=1
 
    # initiate the class:
    yt = YouTube(item)
 
    # have a look at the different formats available:
    #formats = yt.get_videos()
 
    # grab the video:
    video = yt.get('mp4', '360p')
 
    # set the output file name:
    yt.set_filename('Video_'+str(count))
 
    # download the video:
    video.download('./')
```

## Mencari Usia

```python
def tahun(x):
	print (2018 - x)
```

## Tes Selenium

```python
from selenium import webdriver
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")
driver = webdriver.Firefox(firefox_options=options, executable_path="C:\\Utility\\BrowserDrivers\\geckodriver.exe")
print("Firefox Headless Browser Invoked")
driver.get('http://google.com/')
driver.quit()
```

## Youtube Download Link

```python
import re
import urllib
 
#https://www.youtube.com/user/<channel_name>/videos
#Here the channel name is schooloflifechannel
 
site = "https://www.youtube.com/channel/UCkCa2NoZlJlfJlMKgZhtKOQ/videos"
# site = "https://www.youtube.com/user/schooloflifechannel/videos"
 
#There are two ways you can open the channel homepage. Above is one way, the other might look this
#https://www.youtube.com/channel/<random text>
#Change the value of site variable according to the channel link you have.
 
#re_filter defines a filter to find all the anchor tags using regular expressions
re_filter = r'<a.*?/a>'
read_url = urllib.urlopen(site)
all_links_temp = re.findall(re_filter,read_url.read(),re.MULTILINE)
 
#This varialbe denotes class of each video link of the channel
video_link_class = 'class="yt-uix-sessionlink yt-uix-tile-link'
video_titles = []
video_links = []
 
#This loop finds all the titles and links for videos and stores them in two seperate lists. 
#You could also use a dictionary here which might make things easier for parsing further
for temp in all_links_temp:
	if video_link_class in temp:
		title_filter = r'title=".*?"'
		video_title_temp = re.findall(title_filter,temp,re.MULTILINE)
		video_titles.append(video_title_temp)
 		url_filter = r'href=".*?"'
 		video_link_temp = re.findall(url_filter,temp,re.MULTILINE)
		video_links.append(video_link_temp)
 
#This simple prints the Title followed by the link of each video in the lists
j = 0		
for i in video_titles:
	temp_title = str(i)
	temp_title = temp_title[9:-3]
	print "Title: "+temp_title
	temp_link = str(video_links[j])
	temp_link = "https://www.youtube.com"+temp_link[8:-3]
	print temp_link
	j = j + 1
```

## Youtube Playlist

```python
from bs4 import BeautifulSoup as bs
import requests

r = requests.get('https://www.youtube.com/watch?v=fVEbzgfKg-U&list=UUkCa2NoZlJlfJlMKgZhtKOQ')
# r = requests.get('https://www.youtube.com/playlist?list=PL3D7BFF1DDBDAAFE5')
page = r.text
soup=bs(page,'html.parser')
res=soup.find_all('a',{'class':'ytd-playlist-panel-video-renderer'})
# res=soup.find_all('a',{'class':'pl-video-title-link'})
for l in res:
    print 'https://www.youtube.com' + l.get("href")
```

## Rentang

```python
import os

angka_terendah = int(raw_input('Berapa angka terendah? (Contoh: 0): '))
angka_tertinggi = int(raw_input('Berapa angka tertinggi? (Contoh: 100): '))
dibagi = int(raw_input('Mau dibagi jadi berapa banyak? (Contoh: 10): ')) - 1

selisih = angka_tertinggi - angka_terendah
hasil_dibagi = selisih / (dibagi) # * 1.0

list_angka = []

angka_terakhir = angka_terendah
list_angka.append(angka_terakhir)

for x in range(dibagi):
	angka_terakhir += hasil_dibagi
	list_angka.append(angka_terakhir)

list_angka = list_angka[::-1]

baca_file = open('hasil/python-rentang.txt', 'w')
for x in list_angka:
	baca_file.write(str(x))
	baca_file.write('\n')

os.system('subl hasil/python-rentang.txt')
```

# Cara Menjalankan

## Untuk Python versi 2

```bash
python skrip.py
```

## Untuk Python versi 3

```bash
python3 skrip.py
```