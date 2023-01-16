import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home/Home';
import { theme } from './theme/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
