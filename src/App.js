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
import CartasEspeciales from './pages/CartasEspeciales';
import TemplateEspecial from './pages/TemplateEspecial';
import Template from './pages/Template';
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
        <Route exact path="/template/:templateId/:userId" component={Template} />
        <Route exact path="/especiales" component={CartasEspeciales} />
        <Route exact path="/especiales/:templateId" component={TemplateEspecial} />
        <Route component={MissingTemplate} />
      </Switch>
    </Router>
  );
}