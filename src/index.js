import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Root from './pages/Homepage';
import LessonPlans from './pages/Lesson-plans';
import HelpfulResources from './pages/Helpful-resources';
import StudentShowcases from './pages/Student-showcases';
import UpcomingWorkshops from './pages/Upcoming-workshops';

const router = createHashRouter([
  { path: "/", element: <Root />, children: []},
  { path: "Lesson-plans", element: <LessonPlans />, children: []},
  { path: "Helpful-resources", element: <HelpfulResources />, children: []},
  { path: "Student-showcases", element: <StudentShowcases />, children: []},
  { path: "Upcoming-workshops", element: <UpcomingWorkshops />, children: []},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);