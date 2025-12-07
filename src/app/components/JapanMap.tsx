'use client';

import { useRouter } from "next/navigation";
import JapanMapSvg from "@/assets/map";

export default function JapanMap(){
  const router = useRouter();

  const handleClick = (prefectureCode: string) => {
    router.push(`/prefectures/${prefectureCode}`);
  };

  return (
    <div style={{ width: '800px' }}>
      <JapanMapSvg onPrefectureClick={handleClick}/>
    </div>
  );
};