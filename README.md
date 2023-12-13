# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)
- [Netlify Functions Overview](https://docs.netlify.com/functions/overview)

## Netlify Setup

1. Install the [Netlify CLI](https://docs.netlify.com/cli/get-started/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you're ready to go!

### Adding Redirects and Rewrites

To add redirects and rewrites, add them to the `netlify.toml` file. For more information about redirects and rewrites, see the [Netlify docs](https://docs.netlify.com/routing/redirects/).

### Serve your site locally

To serve your site locally in a production-like environment, run

```sh
npm run start
```

Your site will be available at [http://localhost:8888](http://localhost:8888). Note that it will not auto-reload when you make changes.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```

## Packages of Note

A quick comment on additional packages added to this app. These are above and beyond the default packages in Netlify's Remix Template.

### Dependencies

```sh
npm i remix-utils
```

### Development Dependencies

```sh
npm i -D @total-typescript/ts-reset
```

- @total-typescript/ts-reset: This helps typescript with a few oddities that arise when checking for existence in various ways still gives you typescript errors

## Styling

Tailwindcss is the styling library of choice. Luckily, [Remix has native support for Tailwindcss](https://remix.run/docs/en/main/styling/tailwind). This starter has added a few things to make picking sensible sizing, spacing, and font styles a bit more friendly. You can check them out in the following files. The `tailwind.config.ts` has some extensions and overrides to the default Tailwindcss theme. There are [two custom fonts](https://github.blog/2022-12-02-introducing-mona-sans-and-hubot-sans/) in the `./public/fonts` directory. There are custom css variables and a few other base styles applied in the `app/styles/tailwind.css` file.
