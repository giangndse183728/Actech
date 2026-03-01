type ProjectCaptionProps = {
  type: string;
  title: string;
  dateCompleted: string;
  className?: string;
};

export default function ProjectCaption({
  type,
  title,
  dateCompleted,
  className = "",
}: ProjectCaptionProps) {
  return (
    <div className={className}>
      <p className="tomorrow-font mt-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
        {type}
      </p>
      <h3 className="tomorrow-font mt-2 text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
        {title}
      </h3>
      <p className="inter-font mt-1 text-right text-sm text-neutral-500">
        {dateCompleted}
      </p>
    </div>
  );
}
