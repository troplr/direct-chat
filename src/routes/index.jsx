import Components from 'views/Components/Components.jsx';
import ChatPage from 'views/ChatPage/ChatPage.jsx';
import LoginPage from 'views/LoginPage/LoginPage.jsx';

var indexRoutes = [
  { path: '/', name: 'ChatPage', component: ChatPage },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/components', name: 'Components', component: Components }
];

export default indexRoutes;
