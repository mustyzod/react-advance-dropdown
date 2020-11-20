import DefaultTheme from './themes/default';
import { BrowserRouter as Router } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <DefaultTheme>
        <div style={{
          height: "100vh",
          background: "#fff",
          padding: "10px 17px",
          borderRadius: "8px",
          border: "1px solid #E6E9ED",
          opacity: "1",
          transition: "all .2s ease"
        }}>
          awe
        </div>
      </DefaultTheme>
    </Router>
  );
}
export default App