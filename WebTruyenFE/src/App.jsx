import './index.css'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';

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
          <Route
            path="/login"
            element={<Auth />}
          />
          <Route
            path="/signUp"
            element={<Auth type='signUp' />}
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
