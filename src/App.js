import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Importar componentes
import Navbar from './components/shared/Navbar';
import CartasPorRealizar from './pages/CartasPorRealizar';
import CartasRealizadas from './pages/CartasRealizadas';
import ImportarCartas from './pages/ImportarCartas';
import CartasRevision from './pages/CartasRevision';
import SVC1S113 from './pages/SV-C-1S11-3';
import SVC1S114 from './pages/SV-C-1S11-4';
import MissingTemplate from './pages/MissingTemplate';
import SVD1S1116 from './pages/SV-D-1S11-16';
import SVE4S01 from './pages/SV-E-4S01-1';

// Importar Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={CartasPorRealizar} />
        <Route exact path="/realizadas" component={CartasRealizadas} />
        <Route exact path="/importar" component={ImportarCartas} />
        <Route exact path="/revision" component={CartasRevision} />
        <Route exact path="/template/SV-C-1S11-3/:userId" component={SVC1S113} />
        <Route exact path="/template/SV-C-1S11-4/:userId" component={SVC1S114} />
        <Route exact path="/template/SV-D-1S11-16/:userId" component={SVD1S1116} />
        <Route exact path="/template/SV-E-4S01-1/:userId" component={SVE4S01} />
        <Route component={MissingTemplate} />
      </Switch>
    </Router>
  );
}