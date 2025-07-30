import { motion } from "framer-motion";
import { useBearStore } from "./store/useStore";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Plus } from "lucide-react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export const App = () => {
  const bears = useBearStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 10 }}
        className="text-4xl font-bold"
      >
        Welcome to My App
      </motion.h1>
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -10 }}
        className="text-lg"
      >
        This is a simple React application.
      </motion.p>
      <p>Current bear count: {bears.bears}</p>
      <button
        className="flex gap-1 bg-sky-500 text-sky-50 font-semibold rounded-lg py-2 px-4 hover:bg-sky-700 active:scale-95 transition-all"
        onClick={() => bears.increase(1)}
      >
        <Plus /> Add Bear
      </button>
      <form
        className="flex flex-col gap-4 max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="font-semibold text-lg">Form</p>
        <input
          className="p-2 bg-slate-200 rounded-lg"
          {...register("example", { required: true })}
          placeholder="Type something..."
        />
        {errors.example && (
          <span className="text-rose-500">Este campo es obligatorio</span>
        )}
        <input
          className="p-2 bg-slate-200 rounded-lg"
          {...register("exampleRequired", { required: true })}
          placeholder="Type something required..."
        />
        {errors.exampleRequired && (
          <span className="text-rose-500">Este campo es obligatorio</span>
        )}
        <button
          className="bg-sky-500 text-sky-50 font-semibold rounded-lg py-2 px-4 hover:bg-sky-700 active:scale-95 transition-all"
          type="submit"
        >
          Submit
        </button>

        {watch("example") && (
          <p className="text-sm text-gray-500">
            You entered: {watch("example")} {watch("exampleRequired")}
          </p>
        )}
      </form>
    </div>
  );
};
