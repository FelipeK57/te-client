import { BookOpen, ChartColumn, Shield, Users } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToogleRole } from "../components/ToggleRole";
import { Button } from "../../ui/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

type Inputs = {
  email: string;
  password: string;
};

export const Login = () => {
  const [isProfessor, setIsProfessor] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const characteristics = [
    {
      icon: <Users size={24} className="text-blue-500" />,
      bg: "bg-blue-100",
      title: "Trabajo en equipo",
      description: "Evalúa el desempeño de tus compañeros",
    },
    {
      icon: <BookOpen size={24} className="text-green-500" />,
      bg: "bg-green-100",
      title: "Evaluación continua",
      description: "Recibe retroalimentación constante",
    },
    {
      icon: <ChartColumn size={24} className="text-purple-500" />,
      bg: "bg-purple-100",
      title: "Análisis detallado",
      description: "Reportes y visualizaciones completas",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log("Login data:", data);
      isProfessor
        ? navigate("/professor/dashboard")
        : navigate("/student/dashboard");
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:max-w-5xl mx-auto p-4 gap-4 min-h-svh">
      <div className="hidden lg:flex w-full max-w-sm m-auto items-center justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">TeamEval</h1>
          <p className="text-zinc-500">
            Evaluación entre pares para equipos académicos
          </p>
          {characteristics.map((char, index) => (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              transition={{ delay: index * 0.4 }}
              key={index}
              className="flex items-center gap-4"
            >
              <div className={`p-2 rounded ${char.bg}`}>{char.icon}</div>
              <div className="flex flex-col">
                <p className="font-semibold">{char.title}</p>
                <p className="text-sm text-zinc-500">{char.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="flex flex-1 flex-col gap-2 w-full max-w-sm m-auto justify-center items-center lg:border-1 border-zinc-200 rounded lg:shadow h-fit px-6 py-12">
        <h2 className="text-2xl font-semibold text-center">Iniciar sesión</h2>
        <p className="text-center text-zinc-500">
          Accede a tu cuenta de TeamEval
        </p>
        <ToogleRole value={isProfessor} setValue={setIsProfessor} />
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label
              className={`text-sm ${errors.email ? "text-rose-500" : ""}`}
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              className={`text-sm placeholder:text-sm py-2 px-4 border-1 rounded focus:outline-1 focus:outline-zinc-500 ${
                errors.email ? "border-rose-500 border" : "border-zinc-200"
              }`}
              type="email"
              {...register("email", { required: true })}
              placeholder="micorreo@gmail.com"
            />
            {errors.email && (
              <p className="text-rose-500 text-xs">Este campo es requerido</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label
              className={`text-sm ${errors.password ? "text-rose-500" : ""}`}
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              id="password"
              className={`text-sm placeholder:text-sm py-2 px-4 border-1 rounded focus:outline-1 focus:outline-zinc-500 ${
                errors.password ? "border-rose-500 border" : "border-zinc-200"
              }`}
              type="password"
              autoComplete="current-password"
              placeholder="********"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-rose-500 text-xs">Este campo es requerido</p>
            )}
          </div>
          <Button onClick={handleSubmit(onSubmit)} loading={isLoading}>
            {isProfessor ? <Shield size={18} /> : <Users size={18} />} Acceder
            como {isProfessor ? "profesor" : "estudiante"}
          </Button>
          <p className="text-xs text-zinc-500 text-center">
            Demo: Cualquier email y contraseña
          </p>
        </form>
      </section>
    </div>
  );
};
