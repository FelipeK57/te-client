// Usuario de la plataforma (estudiante o profesor)
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: "student" | "teacher";
  isActive: boolean;
}

// Curso creado por un profesor con estudiantes y equipos
export interface Course {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  studentIds: string[];
  teamIds: string[];
}

// Equipo de estudiantes asignado a un curso
export interface Team {
  id: string;
  name: string;
  memberIds: string[];
  courseId: string;
}

// Proyecto dentro de un curso (todos los equipos trabajan en este proyecto)
export interface Project {
  id: string;
  name: string;
  courseId: string;
  deadline: string; // ISO string (YYYY-MM-DD)
  evaluationsCount: number;
  state: "active" | "completed" | "draft";
}

// Evaluación de un estudiante a otro en un proyecto
export interface Evaluation {
  id: string;
  evaluatorId: string;
  evaluateeId: string;
  projectId: string;
  rating: number; // Promedio o puntaje general
  comments: string; // Comentario general
  criterionRatings: CriterionRating[]; // Detalle por criterio
  submittedAt: string;
}

// Detalle de cada criterio evaluado (con puntaje)
export interface CriterionRating {
  criterionId: string;
  value: number; // 1–5, por ejemplo
}

// Criterio de evaluación configurado por el sistema o el docente
export interface Criterion {
  id: string;
  name: string; // Ej: "Colaboración", "Puntualidad"
}
