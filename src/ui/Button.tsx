interface ButtonProps {
  children: any;
  onClick: () => void;
  loading?: boolean;
  color?: "primary" | "secondary" | "danger";
  variant?: "solid" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = ({ children, onClick, loading, color, variant, size }: ButtonProps) => {
  const types = [
    {
      key: "primary",
      solid: "bg-zinc-900 text-zinc-50 hover:bg-zinc-950",
      outline: "border-1 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-50",
    },
    {
      key: "secondary",
      solid: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
      outline: "border-1 border-zinc-200 text-zinc-900 hover:bg-zinc-200",
    },
    {
      key: "danger",
      solid: "bg-rose-500 text-white hover:bg-rose-600",
      outline: "border-1 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
    },
  ];
  
  return (
    <button
      disabled={loading}
      className={`flex gap-2 rounded py-2 px-4 ${size === "sm" ? "text-xs" : size === "lg" ? "text-lg" : "text-sm"} items-center justify-center active:scale-95 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
        types.find((t => t.key === color))?.[variant || "solid"] || "bg-zinc-900 text-zinc-50 hover:bg-zinc-950"
      }`}
      onClick={onClick}
    >
      {loading ? (
        <span className="flex gap-2 items-center">
          <Spinner /> Procesando
        </span>
      ) : (
        children
      )}
    </button>
  );
};

const Spinner = () => (
  <div className="animate-spin rounded-full h-6 w-6 border-zinc-500 border-2 border-t-zinc-100"></div>
);
