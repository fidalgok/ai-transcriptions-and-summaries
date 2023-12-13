import { config } from "@netlify/remix-adapter";
import { flatRoutes } from "remix-flat-routes";

/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...(process.env.NODE_ENV === "production" ? config : undefined),
  routes: async (defineRoutes) => {
    return flatRoutes("routes", defineRoutes, {
      ignoredRouteFiles: [
        ".*",
        "**/*.css",
        "**/*.test.{js,jsx,ts,tsx}",
        "**/__*.*",
      ],
    });
  },
};
