# 我的餐廳清單

使用Node.js 和 express 做出的餐廳清單網頁

## 介紹

紀錄屬於自己的餐廳清單，可以瀏覽餐廳、查看詳細資訊

### 功能

- 查看所有餐廳
- 瀏覽餐廳的詳細資訊
- 可收尋地圖位置
- 搜尋特定餐廳
- 建造餐廳
- 修改餐廳重要資訊
- 刪除自己不愛的餐廳

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start  / npm run dev
   ```

5. 安裝完畢後，如要載入種子資料：

   ```bash
   npm run seed
   ```

6. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

7. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 使用版本
* Node.js - v16.15.1
* express - v 4.16.4
* express-handlebars - v 3.0.0
* nodemon - v 2.0.19
* method-override - V 3.0.0