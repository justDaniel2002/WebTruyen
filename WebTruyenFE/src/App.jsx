import './index.css'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { Home } from './pages/Home';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route>
          <Route index element={<Home />} />
          <Route
            path="/home"
            element={<Home />}
          />
        </Route>
      </Route>
    )
  );

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
