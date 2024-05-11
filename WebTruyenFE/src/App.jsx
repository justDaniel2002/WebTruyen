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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import { RecoilRoot } from "recoil";
import { Detail } from "./pages/Detail";

function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/signUp" element={<Auth type="signUp" />} />
          <Route path="/noveldetail/:id" element={<Detail />} />

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
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <RecoilRoot>
          <RouterProvider router={router} />
          <ToastContainer position="top-right" />
        </RecoilRoot>
      </CookiesProvider>
    </>
  );
}

export default App;
