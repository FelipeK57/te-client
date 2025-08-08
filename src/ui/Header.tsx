import { LogOut } from "lucide-react";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router";

interface HeaderProps {
  role: "student" | "teacher";
}

export const Header = ({ role }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="w-full bg-white border-zinc-200 border-b-1">
      <div className="flex w-full max-w-7xl justify-between p-4 mx-auto">
        <div className="flex gap-4 items-center">
          <p className="text-xl lg:text-2xl font-semibold">TeamEval</p>
          <p className="py-1 px-2 text-xs rounded-full bg-zinc-200">
            {role === "student" ? "Estudiante" : "Profesor"}
          </p>
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
    </div>
  );
};
