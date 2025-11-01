
import { useState } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import routes from './router/config';
import LoadingScreen from './components/feature/LoadingScreen';

function AppRoutes() {
  return useRoutes(routes);
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
