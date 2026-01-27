import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { MainFizScene, ReportTko, ReportTkoJur, RequestTko, RequestTkoJur, Support, SupportJur } from './scenes';
import Header from './components/HeaderLogo/index';
import Menu, { routes } from './components/Menu';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import PrivacyPolicyScene from './scenes/PrivacyPolicyScene';
import Notification from './components/Notification/index';

function App() {
    return (
        <Router>
            <div className="container_header_logo">
            <Header />
            <Notification />
            <div className="container_header_menu">
            <Menu />
            </div>
            </div>
            <div className="containersss">
                <Switch>
                    {routes.flatMap(route => route.routes.length > 0 ? route.routes : route).map((route, i) => (
                        <Route key={i} path={route.path} component={route.component} />
                    ))}
                    <Route key={routes.length} path="/report-tko" component={ReportTko} />
                    <Route key={routes.length} path="/request-tko" component={RequestTko} />
                    <Route key={routes.length} path="/support" component={Support} />
                    <Route key={routes.length} path="/report-tko-jur" component={ReportTkoJur} />
                    <Route key={routes.length} path="/request-tko-jur" component={RequestTkoJur} />
                    <Route key={routes.length} path="/support-jur" component={SupportJur} />
                    <Route key={routes.length} path="/privacy-policy" component={PrivacyPolicyScene} />
                    <Route key={routes.length} path="/" component={MainFizScene} />
                </Switch>
            </div>
            <Footer />
            <PrivacyPolicy />
        </Router>
    );
}

export default App;
