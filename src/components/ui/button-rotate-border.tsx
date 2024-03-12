type IProps = {
  children: string;
  oncClick?: () => void;
};

export function ButtonRotateBorder({ children, oncClick }: IProps) {
  return (
    <button
      onClick={oncClick}
      className="w-full relative inline-flex overflow-hidden rounded-xl p-px"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#174589_50%,#bebebe_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[11px] bg-slate-950 px-4 py-2 text-sm font-medium text-gray-50 backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
