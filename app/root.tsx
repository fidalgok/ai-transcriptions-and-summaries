import type { MetaFunction, LinksFunction } from "@remix-run/node";
import { cssBundleHref } from "@remix-run/css-bundle";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import tailwindStylesheetUrl from "./styles/tailwind.css";

export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: "AI Audio Transcribe",
    viewport: "width=device-width,initial-scale=1",
  },
];

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: tailwindStylesheetUrl },

    cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : null,
  ].filter(Boolean);
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="font-sans">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
