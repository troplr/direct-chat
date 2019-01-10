import ChatPage from 'views/chatPage/ChatPage';
import LoginPage from 'views/loginPage/LoginPage';
import AuthPage from 'views/AuthPage';
import ErrorPage from 'views/ErrorPage';
import NoMatchPage from 'views/NoMatchPage';

var indexRoutes = [
  {
    path: '/',
    name: 'ChatPage',
    component: ChatPage
  },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/auth', name: 'AuthPage', component: AuthPage },
  { path: '/error', name: 'ErrorPage', component: ErrorPage },
  { component: NoMatchPage }
];

export default indexRoutes;
