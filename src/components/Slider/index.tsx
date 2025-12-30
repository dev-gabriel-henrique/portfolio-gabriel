export interface ISliderItem {
  id: number;
  name: string;
}

export interface ISliderProps {
  items: ISliderItem[];
  speed?: number;
}

export const Slider: React.FC<ISliderProps> = ({ items, speed = 20 }) => {
  return (
    <div className="relative w-full overflow-hidden bg-[var(--bg-primary)]">
      <div
        className="flex w-max animate-scroll gap-8  hover:[animation-play-state:paused]"
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[var(--text-primary)]"
          >
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
