import { ChartColumn, Eye, Plus } from "lucide-react";
import { Button } from "../../ui/Button";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Desarrollo de App Móvil",
      description: "Proyecto final de desarrollo móvil",
      students: 5,
      teams: 2,
      status: "active",
      evaluationsCompleted: 2,
      totalEvaluations: 3,
      deadline: "2024-02-15",
    },
    {
      id: 2,
      name: "Análisis de Datos",
      description: "Proyecto de ciencia de datos con Python",
      students: 5,
      teams: 1,
      status: "completed",
      evaluationsCompleted: 2,
      totalEvaluations: 2,
      deadline: "2024-01-30"
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Mis Proyectos</p>
        <Button color="primary" variant="solid">
          <Plus className="size-4" />Nuevo Proyecto
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 p-4 rounded-lg border-1 border-zinc-200 bg-white hover:shadow-lg transition-all"
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm text-zinc-600">{project.description}</p>
              </div>
              <div>
                <p
                  className={`px-2 py-1 text-xs rounded-full font-semibold ${project.status === "active"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
                    }`}
                >
                  {project.status === "active" ? "Activo" : "Completado"}
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full text-sm">
              <p className="text-zinc-600">Equipos:</p>
              <p className="font-medium">{project.teams}</p>
            </div>
            <div className="flex justify-between w-full text-sm">
              <p className="text-zinc-600">Estudiantes:</p>
              <p className="font-medium">{project.students}</p>
            </div>
            <div className="flex justify-between w-full text-sm">
              <p className="text-zinc-600">Evaluaciones:</p>
              <p className="font-medium">{project.evaluationsCompleted}</p>
            </div>
            <div className="flex justify-between w-full text-sm">
              <p className="text-zinc-600">Fecha límite:</p>
              <p className="font-medium">{project.deadline}</p>
            </div>
            <div className="w-full border-t-1 border-zinc-200" />
            <div className="flex gap-2 items-center">
              <Button classNames="w-full" color="secondary" variant="outline">
                <Eye className="size-4" /> Ver Detalles
              </Button>
              <Button classNames="w-full" variant="solid">
                <ChartColumn className="size-4" /> Reportes
              </Button>
            </div>
          </div>
        ))}
      </div >
    </>
  );
};
