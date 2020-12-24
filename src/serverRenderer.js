import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import fs from 'fs';
import path from 'path';
import qs from 'qs';
import App from './App';
import createStore from './store/initialState';
import routes from './serverRouting';
import Routes from './components/Routes';

function renderHtml(html, preloadedState) {
  return `
       <!DOCTYPE html>
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
           <script src="/dist/index.js"></script>
         </body>
       </html>
   `;
}

// export default function serverRenderer() {
//   return (req, res) => {
//     const context = {};
//     const params = qs.parse(req.query);
//     const movieId = parseInt(params.movieId, 10) || 0;
//     const store = createStore(preloadedState);

//     let preloadedState = { movieId };

//     const renderRoot = () => (
//       <App
//         Router={StaticRouter}
//         location={req.url}
//         context={context}
//         store={store}
//       />
//     );
//     if (context.url) {
//       res.writeHead(302, {
//         Location: context.url,
//       });
//       res.end();
//       return;
//     }

//     const htmlString = renderToString(renderRoot());
//     console.log('serverRenderer getState', store.getState());

//     const finalState = store.getState();
//     res.send(renderHtml(htmlString, finalState));
//   };
// }

export default function serverRenderer() {
  return (req, res) => {
    const store = createStore();
    const context = {};
    console.log('before getState', store.getState());

    const renderRoot = () => (
      <App
        Router={StaticRouter}
        location={req.url}
        context={context}
        store={store}
      />
    );
    console.log('after getState', store.getState());

    // renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const htmlString = renderToString(renderRoot());

    const finalState = store.getState();
    res.send(renderHtml(htmlString, finalState));
  };
}
