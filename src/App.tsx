import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';
import config from '../gitprofile.config';

function App() {
  return <GitProfile config={config} />;
}

