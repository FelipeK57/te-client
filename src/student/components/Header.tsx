import { LogOut } from "lucide-react";
import { Button } from "../../ui/Button";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex w-full justify-between border-b-1 p-4 border-zinc-200">
      <div className="flex gap-4 items-center">
        <p className="text-xl lg:text-2xl font-semibold">TeamEval</p>
        <p className="py-1 px-2 text-xs rounded-full bg-zinc-200">Estudiante</p>
      </div>
      <div className="flex items-center">
        <Button
          color="secondary"
          variant="outline"
          size="sm"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};
