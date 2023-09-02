import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { RootLayout } from './Layouts';
import { CreateTask, EditTask, Home, TaskDetails } from './Pages';
import { createAction} from './Components';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route
          index
          element={<Home />}
        />

        <Route
          path='create'
          element={<CreateTask />}
          action={createAction}
        />

        <Route path='details'>
          <Route
            path=':pos'
            element={<TaskDetails />}
          />

          <Route
            path=':pos/edit'
            element={<EditTask />}
          />
        </Route>
      </Route>
    )
  )

  return(
    <RouterProvider router={router}/>
  )
}
export default App;
