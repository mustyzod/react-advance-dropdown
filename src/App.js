import DefaultTheme from './themes/default';
import { BrowserRouter as Router } from 'react-router-dom';
import * as RS from './themes/default/reusables';

const App = () => {
  return (
    <Router>
      <DefaultTheme>
        <RS.Card>
          <RS.CardTitle>
            Title
          </RS.CardTitle>
          <RS.CardBody>
            HEY
          </RS.CardBody>
          <RS.CardFooter>
            Footer
          </RS.CardFooter>
        </RS.Card>
      </DefaultTheme>
    </Router>
  );
}
export default App