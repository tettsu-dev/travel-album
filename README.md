# アルバム
# フォルダ構成
```
project-root/
│
├── src/
│   ├── app/
│   │   ├── page.tsx           ← 日本地図表示（トップページ）
│   │   ├── prefecture/
│   │   │   └── [code]/page.tsx   ← 都道府県別の日付一覧
│   │   ├── album/
│   │   │   └── [date]/page.tsx   ← アルバム表示
│   │   └── layout.tsx
│   │
│   ├── components/
│   │   ├── JapanMap.tsx           ← map.svg を読み込んで描画
│   │   ├── PrefectureDateList.tsx ← 都道府県ごとの旅行日一覧
│   │   └── AlbumView.tsx          ← アルバムページ
│   │
│   ├── assets/
│   │   └── map.tsx          ← 日本地図のSVGファイル
│   │
│   ├── data/
│   │   └── trips.json             ← 訪問データ（都道府県コード → 日付一覧）
│   │
│   └── lib/
│       └── prefectures.ts         ← 都道府県コード・名前などの定義
│
├── tailwind.config.js
├── package.json
└── tsconfig.json
```