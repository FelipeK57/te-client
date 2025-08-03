import { BookOpen, Clock, Users2, Star } from "lucide-react";

export const Analytics = () => {
  const analytics = [
    {
      title: "Proyectos",
      value: 2,
      icon: <BookOpen className="size-8 text-blue-600" />,
    },
    {
      title: "Evaluaciones pendientes",
      value: 1,
      icon: <Clock className="size-8 text-orange-600" />,
    },
    {
      title: "Compañeros ",
      value: 5,
      icon: <Users2 className="size-8 text-green-600" />,
    },
    {
      title: "Promedio de notas",
      value: 4.5,
      icon: <Star className="size-8 text-yellow-500" />,
    },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {analytics.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-6 rounded-lg border-1 border-zinc-200 bg-white"
        >
          <div>
            <p className="text-sm xl:text-base text-zinc-600">{item.title}</p>
            <p className="text-3xl font-bold">{item.value}</p>
          </div>
          {item.icon}
        </div>
      ))}
    </div>
  );
};
