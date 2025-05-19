import { cn } from "@/lib/utils";

const Width = ({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <section className={cn(className, "w-[1400px]")}>{children}</section>;
};

export default Width;
