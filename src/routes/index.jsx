import Components from 'views/Components/Components.jsx';
import LandingPage from 'views/LandingPage/LandingPage.jsx';
import SignUpPage from 'views/SignUpPage/SignUpPage.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';

var indexRoutes = [
  { path: '/landing-page', name: 'LandingPage', component: LandingPage },
  { path: '/signup', name: 'SignUpPage', component: SignUpPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/components', name: 'Components', component: Components }
];

export default indexRoutes;
