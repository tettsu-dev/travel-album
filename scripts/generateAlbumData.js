import fs from 'fs';
import path from 'path';

// albumsへの絶対パスと出力先のパスを定義
const albumsRoot = path.join(process.cwd(), 'public/albums');
const outputPath = path.join(process.cwd(), 'src/album-data.json');

// メイン処理を記述
function generateAlbumData() {
  console.log('album-data.json generate start!');
  // albumsのディレクトリ一覧（一階層目の都道府県部分）を取得
  const prefectures = fs.readdirSync(albumsRoot);

  // 日付ごとの画像データを格納するオブジェクトを定義
  const data = {};

  // 取得した都道府県ぶんループ
  prefectures.forEach(pref => {
    // 取得した都道府県の絶対パスを作成
    const prefPath = path.join(albumsRoot, pref);
    // prefPath以下の日付ディレクトリ一覧を取得
    const dates = fs.readdirSync(prefPath);

    // データオブジェクトに都道府県キーを追加
    data[pref] = {};

    // 取得した日付ぶんループ
    dates.forEach(date => {
      // 日付までの絶対パスを作成
      const datePath = path.join(prefPath, date);
      // datePath以下のファイル一覧を取得
      const files = fs.readdirSync(datePath);

      // 画像ファイルと動画ファイルのみフィルタリング
      const imagesAndVideos = files.filter(f => /\.(jpg|png|jpeg|gif|webp|mp4|mov|avi|mkv)$/i.test(f));
      // データオブジェクトに画像パスを追加
      data[pref][date] = imagesAndVideos.map(img => `/albums/${pref}/${date}/${img}`);
    });
  });

  // JSONファイルとして出力
  fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('album-data.json generated end!');
}

generateAlbumData();
