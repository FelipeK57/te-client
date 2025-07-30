interface ButtonProps {
  children: any;
  onClick: () => void;
  loading?: boolean;
}

export const Button = ({ children, onClick, loading }: ButtonProps) => {
  return (
    <button
      disabled={loading}
      className="flex gap-2 bg-zinc-900 text-sky-50 rounded py-2 px-4 text-sm items-center justify-center hover:bg-zinc-950 active:scale-95 cursor-pointer transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
    >
      {loading ? <span className="flex gap-2 items-center"><Spinner /> Procesando</span> : children}
    </button>
  );
};

const Spinner = () => (
  <div className="animate-spin rounded-full h-6 w-6 border-zinc-500 border-2 border-t-zinc-100"></div>
);
