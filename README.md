# Görev Listesi (React + Vite)

Web Geliştirme – JavaScript proje ödevi için hazırlanmış TODO uygulaması.

**Canlı demo:** <https://silver-toffee-4f0f57.netlify.app>

## Özellikler

- Görev **ekleme**, **listeleme**, **güncelleme** (metin düzenleme ve tamamlandı işareti), **silme**
- Duruma göre filtreleme (Tümü / Yapılacak / Tamamlanan)
- Veriler tarayıcıda **LocalStorage**'da saklanır, sayfa yenilenince kaybolmaz

## Teknolojiler

React 18, Vite, saf CSS, LocalStorage

## Klasör Yapısı

```
src/
├── components/   # TodoForm, TodoList, TodoItem
├── pages/        # Home (durum yönetimi ve sayfa düzeni)
├── interfaces/   # Todo tipi ve filtre tanımları
├── App.jsx
├── main.jsx
└── index.css
```

## Kurulum

```bash
npm install
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # üretim derlemesi (dist/)
```

## Yayına Alma (Netlify)

Repo Netlify'a bağlandığında `netlify.toml` sayesinde derleme ayarları otomatik gelir (build: `npm run build`, publish: `dist`).
