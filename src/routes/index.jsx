import ChatPage from 'views/chatPage/ChatPage.jsx';
import LoginPage from 'views/loginPage/LoginPage.jsx';

var indexRoutes = [
  {
    path: '/',
    name: 'ChatPage',
    component: ChatPage
  },
  { path: '/login', name: 'LoginPage', component: LoginPage }
];

export default indexRoutes;
