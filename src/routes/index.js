import routesConfig from '~/config/routes';
//Layout
import { HeaderOnly } from '~/components/Layout';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    //cái gì sau @ thì nó lọt vào file profile
    { path: '/:nickname', component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
