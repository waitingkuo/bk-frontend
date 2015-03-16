/* ERROR PAGES */
var notfound = require('./routes/notfound.jsx');

/* APP PAGES */
var blank = require('./routes/app/blank.jsx');
var values = require('./routes/app/values.jsx');
var character = require('./routes/app/character.jsx');
var wordcloud = require('./routes/app/wordcloud.jsx');

/* ROUTES */
module.exports = (
  <Route handler={ReactRouter.RouteHandler}>
    <DefaultRoute handler={blank} />
    {/*
    <Route path='/' handler={blank} />
    */}
    <Route path='/character' handler={character} />
    <Route path='/values' handler={values} />
    <Route path='/wordcloud' handler={wordcloud} />
    <NotFoundRoute handler={notfound} />
  </Route>
);
