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
import SVA1S111 from './pages/SV-A-1S11-1';
import SVB1S111 from './pages/SV-B-1S11-1';
import SVC1S111 from './pages/SV-C-1S11-1';
import SVC1S112 from './pages/SV-C-1S11-2';
import SVC1S113 from './pages/SV-C-1S11-3';
import SVC1S114 from './pages/SV-C-1S11-4';
import SVC1S115 from './pages/SV-C-1S11-5';
import SVD1S1112 from './pages/SV-D-1S11-12';
import SVD1S1116 from './pages/SV-D-1S11-16';
import SVE4S011 from './pages/SV-E-4S01-1';
import SVF4S011 from './pages/SV-F-4S01-1';
import SVJ1S111 from './pages/SV-J-1S11-1';
import SVK3S111 from './pages/SV-K-3S11-1';
import MissingTemplate from './pages/MissingTemplate';

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
        <Route exact path="/template/SV-A-1S11-1/:userId" component={SVA1S111} />
        <Route exact path="/template/SV-B-1S11-1/:userId" component={SVB1S111} />
        <Route exact path="/template/SV-C-1S11-1/:userId" component={SVC1S111} />
        <Route exact path="/template/SV-C-1S11-2/:userId" component={SVC1S112} />
        <Route exact path="/template/SV-C-1S11-3/:userId" component={SVC1S113} />
        <Route exact path="/template/SV-C-1S11-4/:userId" component={SVC1S114} />
        <Route exact path="/template/SV-C-1S11-5/:userId" component={SVC1S115} />
        <Route exact path="/template/SV-D-1S11-12/:userId" component={SVD1S1112} />
        <Route exact path="/template/SV-D-1S11-16/:userId" component={SVD1S1116} />
        <Route exact path="/template/SV-E-4S01-1/:userId" component={SVE4S011} />
        <Route exact path="/template/SV-F-4S01-1/:userId" component={SVF4S011} />
        <Route exact path="/template/SV-J-1S11-1/:userId" component={SVJ1S111} />
        <Route exact path="/template/SV-K-3S11-1/:userId" component={SVK3S111} />
        
        <Route component={MissingTemplate} />
      </Switch>
    </Router>
  );
}