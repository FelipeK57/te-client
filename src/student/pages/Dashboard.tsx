import { BookOpen, Clock, SquarePen, Star, Users2 } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../../ui/Button";

export const Dashboard = () => {
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

  const projects = [
    {
      id: 1,
      name: "Desarrollo de App Móvil",
      description: "Proyecto final de desarrollo móvil",
      team: "Equipo Alpha",
      teammates: ["Carlos Mendez", "Sofia López", "Diego Ruiz", "Sofia López", "Sofia López",],
      status: "active",
      evaluationsCompleted: 2,
      totalEvaluations: 3,
      deadline: "2024-02-15",
      myRating: 4.2,
    },
    {
      id: 2,
      name: "Análisis de Datos",
      description: "Proyecto de ciencia de datos con Python",
      team: "Equipo Beta",
      teammates: ["María García", "Juan Pérez"],
      status: "completed",
      evaluationsCompleted: 2,
      totalEvaluations: 2,
      deadline: "2024-01-30",
      myRating: 4.8,
    },
  ];

  return (
    <main className="flex flex-col w-full h-svh overflow-hidden">
      <Header />
      <section className="w-full max-w-7xl mx-auto overflow-y-auto">
        <div className="flex flex-1 flex-col gap-4 p-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {analytics.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 rounded-lg border-1 border-zinc-200 bg-white"
              >
                <div>
                  <p className="text-sm xl:text-base text-zinc-600">
                    {item.title}
                  </p>
                  <p className="text-3xl font-bold">{item.value}</p>
                </div>
                {item.icon}
              </div>
            ))}
          </div>
          <p className="text-xl font-semibold">Mis Proyectos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col gap-4 p-4 rounded-lg border-1 border-zinc-200 bg-white hover:shadow-lg transition-all"
              >
                <div className="flex justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{project.name}</h3>
                    <p className="text-sm text-zinc-600">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <p
                      className={`px-2 py-1 text-xs rounded-full font-semibold ${
                        project.status === "active"
                          ? "bg-green-100 text-green-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {project.status === "active" ? "Activo" : "Completado"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between w-full text-sm">
                  <p className="text-zinc-600">Equipo:</p>
                  <p className="font-medium">{project.team}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-zinc-600">Compañeros de equipo:</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 text-xs">
                    {project.teammates.map((teammate, index) => (
                      <p
                        className="flex items-center font-medium justify-center py-1 px-2 text-xs rounded-full border-1 border-zinc-200"
                        key={index}
                      >
                        {teammate}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between gap-2 text-sm">
                    <p className="text-zinc-600">Progreso de evaluaciones:</p>
                    <p className="font-medium">
                      {project.evaluationsCompleted}/{project.totalEvaluations}
                    </p>
                  </div>
                  <div>
                    <div className="w-full bg-zinc-200 rounded-full h-2.5">
                      <div
                        className="bg-zinc-900 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (project.evaluationsCompleted /
                              project.totalEvaluations) *
                            100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-zinc-600">Mi calificación:</p>
                  <p className="flex items-center gap-1">
                    <Star className="size-4 fill-yellow-500 stroke-0" />{" "}
                    {project.myRating}
                  </p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-zinc-600">Fecha límite:</p>
                  <p className="font-medium">{project.deadline}</p>
                </div>
                <div className="w-full border-t-1 border-zinc-200" />
                <Button
                  color={project.status === "active" ? "primary" : "secondary"}
                  variant={project.status === "active" ? "solid" : "outline"}
                >
                  {project.status === "active" ? (
                    <div className="flex gap-2 items-center">
                      <SquarePen className="size-4" /> Evaluar compañeros
                    </div>
                  ) : (
                    <div className="flex gap-2 items-center">
                      <Star className="size-4" /> Ver Resultados
                    </div>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
