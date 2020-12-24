import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import createStore from './store/initialState';

 const API_URL = 'http://localhost:4000/movies';

function renderHtml(html, preloadedState) {
  return `
       <!DOCTYPE html>
       <html>
         <head>
           <meta charset=utf-8>
           <title>Movies SSR</title>
           <link href="style.css" rel="stylesheet" type="text/css">'
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

const getInitialState = async () => {
  const items = await fetch(API_URL)
    .then(res => res.json())
    .then(res => res.data);

  return { movieDataReducer: {allMovies: items} }
 }


// serverRenderer
export default () => {
  return async (req, res) => {
    const initialState = await getInitialState(req);

    const store =  createStore(initialState);
    const context = {};

    const renderRoot = () => (
      <App
        Router={StaticRouter}
        location={req.url}
        context={context}
        store={store}
      />
    );

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
