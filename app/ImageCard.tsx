import Image from "next/image";

export default function ImageCard({ number }: { number: number }) {
  return (
    <Image
      width={200}
      height={300}
      src={`https://picsum.photos/200/300?random=${number}`}
      alt="random"
    />
  );
}
