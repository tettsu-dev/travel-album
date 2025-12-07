'use client';

import { useRouter } from "next/navigation";

export default function OkinawaPage() {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/`);
  };

  return (
    <div>
      <h1>Okinawa Prefecture</h1>
      <p>Welcome to the Okinawa prefecture page!</p>
      <p onClick={handleClick}>都道府県選択に戻る</p>
    </div>
  );
}