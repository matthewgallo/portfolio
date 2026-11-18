import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from './components/App/App';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

// Root layout (header, nav, footer) wraps every page via <Outlet />.
const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: NotFound,
});

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home });

// Other pages (ProjectYama, About, IBPDetails, JeopardyDetails, CovidStat) are intentionally
// unrouted for now — their components are kept in src/components until they're re-enabled.
// Any other path falls through to NotFound.

const routeTree = rootRoute.addChildren([indexRoute]);

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
