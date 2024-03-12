type IProps = {
  children: string;
};

export function TextShine({ children }: IProps) {
  return (
    <h1 className="text-3xl font-bold inline-flex animate-shine bg-gradient-conic from-[#939393] via-primary to-[#3e96e9] bg-[length:200%_100%] text-transparent bg-clip-text">
      {children}
    </h1>
  );
}
