import "./index.css";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { AdminPage } from "./pages/Admin/AdminPage";
import { CreateEditNovel } from "./pages/Admin/CreateEditNovel";
import { AdminLayout } from "./layouts/adminLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signUp" element={<Auth type="signUp" />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
            <Route path="addNovel" element={<CreateEditNovel />} />
            <Route path="editNovel" element={<CreateEditNovel />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
