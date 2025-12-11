import albumDataJson from "@/album-data.json";
import Link from "next/link";

interface PrefecturePageProps {
  params: Promise<{
    prefecture: string;
  }>;
}
interface AlbumData {
  [prefecture: string]: {
    [date: string]: string[];
  };
}

export function generateStaticParams() {
  return Object.keys(albumDataJson).map((prefecture: string) => ({
    prefecture,
  }));
}

export default async function PrefecturePage({ params }: PrefecturePageProps) {
  const { prefecture } = await params;
  // album-data.jsonから対象の都道府県の日付データを取得し、昇順でソート
  const albumData = albumDataJson as AlbumData;
  const dates = Object.keys(albumData[prefecture] || {}).sort();

  return (
    <div>
      <h1>{prefecture}</h1>
      <div>
        {dates.map((date) => (
          <div key={date}>
            <Link href={`/prefectures/${prefecture}/${date}`}>
              <button>{date}</button>
            </Link>
          </div>
        ))}
        <Link href="/">
          <p>都道府県選択に戻る</p>
        </Link>
      </div>
    </div>
  );
}