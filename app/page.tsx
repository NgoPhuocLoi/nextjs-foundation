import Link from "next/link";
import ImageCard from "./ImageCard";

export default function Home() {
  return (
    <main className="flex justify-center mt-8">
      <div className="grid grid-cols-4 gap-4 w-fit">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Link href={`/photos/${number}`} key={number}>
            <ImageCard number={number} />
          </Link>
        ))}
      </div>
    </main>
  );
}
