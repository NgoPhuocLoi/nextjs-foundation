import ImageCard from "@/app/ImageCard";

export default function Page({ params }: { params: { id: string } }) {
  return <ImageCard number={Number(params.id)} />;
}
