import ImageCard from "@/app/ImageCard";
import Modal from "./modal";

export default function PhotoModal({ params }: { params: { id: string } }) {
  console.log("RUN HERE");
  return (
    <Modal>
      <div className="p-10 bg-white rounded-sm">
        <ImageCard number={Number(params.id)} />
      </div>
    </Modal>
  );
}
