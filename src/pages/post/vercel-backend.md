# Menjadikan Vercel sebagai Backend JavaScript

Masukkan ini di `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "./index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

Lalu, kita buat program backendnya di `index.js`.