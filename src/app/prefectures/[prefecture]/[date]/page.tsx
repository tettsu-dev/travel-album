import albumDataJson from "@/album-data.json";
import Link from "next/link";

interface DatePageProps {
  params: Promise<{
    prefecture: string;
    date: string;
  }>;
}
interface AlbumData {
  [prefecture: string]: {
    [date: string]: string[];
  };
}

export function generateStaticParams() {
  const params = [];
  const albumData = albumDataJson as AlbumData;
  // albumDataJsonのキー（都道府県）ぶんループ
  for (const prefecture of Object.keys(albumData)) {
    // 各都道府県の日付データぶんループ
    for (const date of Object.keys(albumData[prefecture])) {
      // {prefecture: 都道府県, date: 日付}の形式で配列に追加
      params.push({ prefecture, date });
    }
  }
  return params;
}

export default async function DatePage({ params }: DatePageProps) {
  const { prefecture, date } = await params;
  const albumData = albumDataJson as AlbumData;
  const photos = albumData[prefecture]?.[date] || [];
  const folderPath = process.env.NODE_ENV === 'production' ? '' : '/travel-album';

  return (
    <div>
      <h1>{ date }の旅行アルバム</h1>
      <div>
        <Link href={`/prefectures/${prefecture}`}>
          <p>日付選択に戻る</p>
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <img key={index} src={`${folderPath}${photo}`} alt={photo} />
          ))}
        </div>
      </div>
    </div>
  );
}