import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from './components/App/App';
import Home from './components/Home/Home';
import ProjectYama from './components/ProjectYama/ProjectYama';
import About from './components/About/About';
import IBPDetails from './components/IBPDetails/IBPDetails';
import JeopardyDetails from './components/JeopardyDetails/JeopardyDetails';
import CovidStatDetails from './components/CovidStat/CovidStat';
import NotFound from './components/NotFound/NotFound';

// Root layout (header, nav, footer) wraps every page via <Outlet />.
const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });
const projectYamaRoute = createRoute({ getParentRoute: () => rootRoute, path: '/project-yama', component: ProjectYama });
const aboutMeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about-me', component: About });
const ibpDetailsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/work/ibm-blockchain-platform', component: IBPDetails });
const jeopardyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/work/jeopardy', component: JeopardyDetails });
const covidStatRoute = createRoute({ getParentRoute: () => rootRoute, path: '/work/covid-stat', component: CovidStatDetails });

const routeTree = rootRoute.addChildren([indexRoute, projectYamaRoute, aboutMeRoute, ibpDetailsRoute, jeopardyRoute, covidStatRoute]);

export const router = createRouter({
  routeTree,
  // New navigations start at the top; back/forward restore the previous scroll position.
  scrollRestoration: true,
});

// Registers the route tree with TypeScript so <Link to="..."> is checked against real paths.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
