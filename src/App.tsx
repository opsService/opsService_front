import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/HomePage';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import TaskPage from './pages/task/TaskPage';
import TaskDetailPage from './pages/task/TaskDetailPage';
import DatasetPage from './pages/dataset/DatatasetPage';
import ModelPage from './pages/model/ModelPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'task',
        children: [
          {
            index: true,
            element: <TaskPage />,
          },
          {
            path: ':id',
            element: <TaskDetailPage />,
          },
        ],
      },
      {
        path: 'dataset',
        children: [
          {
            index: true,
            element: <DatasetPage />,
          },
        ],
      },
      {
        path: 'model',
        children: [
          {
            index: true,
            element: <ModelPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
