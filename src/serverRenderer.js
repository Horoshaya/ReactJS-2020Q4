import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import fs from 'fs';
import path from 'path';
import App from './App';
import store from './store/initialState';
import routes from './serverRouting';
import Routes from './components/Routes';

function renderHtml(html, preloadedState) {
  return `
       <!doctype html>
       <html>
         <head>
           <meta charset=utf-8>
           <title>Movies SSR</title>
           ${
             process.env.NODE_ENV === 'development'
               ? ''
               : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
           }
          <link rel="icon" href="./assets/images/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Web site created by Darya Horoshaya" />
          <link rel="apple-touch-icon" href="./assets/images/favicon.ico" />
          <title>test</title>
         </head>
         <body>
           <div id="root">${html}</div>
           <script>
             // WARNING: See the following for security issues around embedding JSON in HTML:
             // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
             window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
               /</g,
               '\\u003c',
             )}
           </script>
           <script src="/index.js"></script>
         </body>
       </html>
   `;
}

export default function serverRenderer() {
  return (req, res) => {
    const promises = routes.reduce((acc, route) => {
      console.log('route', route.component.filterByGenreHandle);
      if (
        matchPath(req.url, route) & route.component &&
        route.component.useEffect
      ) {
        acc.push(Promise.resolve(store.dispatch(route.component.useEffect())));
      } else {
        console.log('test', req.url, route);
      }
    }, []);
    console.log('routes', promises);
    Promise.all(promises)
      .then(() => {
        const context = {};

        const renderRoot = () => (
          <App
            Router={StaticRouter}
            location={req.url}
            context={context}
            store={store}
          />
        );

        renderToString(renderRoot());

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const htmlString = renderToString(renderRoot());
        const preloadedState = store.getState();

        res.send(renderHtml(htmlString, preloadedState));
      })
      .catch((e) => console.error(e));
  };
}
