import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ActivePatients from "./pages/ActivePatient";
import AddPatient from "./pages/AddPatient";
import Appointments from "./pages/Appointments";
import BlockedPatients from "./pages/BlockedPatients";
import EditPatient from "./pages/EditPatient";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MedicalRecord from "./pages/MedicalRecord";
import Patient from "./pages/Patient";
import PendingPatients from "./pages/PendingPatients";
import Prescriptions from "./pages/Prescriptions";
import Procedures from "./pages/Procedures";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import TestResults from "./pages/TestResults";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"resetPassword/:id",
        element:<ResetPassword/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"addPatient",
        element:<AddPatient/>
      },
      {
        path:"editPatient/:id",
        element:<EditPatient/>
      },
      {
        path:"medicalRecord/:id",
        element:<MedicalRecord/>
      },
      {
        path:"appointments",
        element:<Appointments/>
      },
      {
        path:"patient/:id",
        element:<Patient/>
      },
      {
        path:"activePatients",
        element:<ActivePatients/>
      },
      {
        path:"pendingPatients",
        element:<PendingPatients/>
      },
      {
        path:"blockedPatients",
        element:<BlockedPatients/>
      },
      {
        path:"testResults/:id",
        element:<TestResults/>
      },
      {
        path:"procedures/:id",
        element:<Procedures/>
      },
      {
        path:"prescriptions/:id",
        element:<Prescriptions/>
      }
    ]
  },
]);