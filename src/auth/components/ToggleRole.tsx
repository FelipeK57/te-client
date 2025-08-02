import { motion } from "framer-motion";

interface ToogleRoleProps {
  value: boolean;
  setValue: (value: boolean) => void;
}

export const ToogleRole = ({ value, setValue }: ToogleRoleProps) => {
  return (
    <div className="relative flex w-full p-1 bg-zinc-100 rounded-lg">
      <p
        onClick={() => setValue(true)}
        className={`text-sm w-full p-1 text-center z-10 cursor-pointer transition-colors ${
          value ? "" : "text-zinc-500 hover:text-zinc-700"
        }`}
      >
        Profesor
      </p>
      <p
        onClick={() => setValue(false)}
        className={`text-sm w-full p-1 text-center z-10 cursor-pointer transition-colors ${
          !value ? "" : "text-zinc-500 hover:text-zinc-700"
        }`}
      >
        Estudiante
      </p>
      <motion.div
        animate={{ x: value ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] bg-white rounded-lg"
      ></motion.div>
    </div>
  );
};