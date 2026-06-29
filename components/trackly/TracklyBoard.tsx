import Image from "next/image";
import type { TracklyBoard as TracklyBoardType } from "@/data/trackly-content";

type Props = {
  board: TracklyBoardType;
  className?: string;
  embedded?: boolean;
};

export default function TracklyBoard({
  board,
  className,
  embedded = false,
}: Props) {
  const Tag = embedded ? "div" : "section";

  return (
    <Tag className={className} id={board.id}>
      <Image
        src={board.src}
        alt={board.alt}
        width={board.width}
        height={board.height}
        priority={board.priority}
        sizes="(min-width: 901px) 1500px, calc(100vw - 116px)"
        className="trackly-board-image"
      />
    </Tag>
  );
}
