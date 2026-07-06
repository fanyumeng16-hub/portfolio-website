import Image from "next/image";

export type TracklyBoardSlide = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
};

type Props = {
  board: TracklyBoardSlide;
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
