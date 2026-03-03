import GitProfile from '@arifszn/gitprofile';
import '@arifszn/gitprofile/dist/style.css';
import CONFIG from '../gitprofile.config';

function App() {
  return <GitProfile config={CONFIG} />;
}

export default App;

