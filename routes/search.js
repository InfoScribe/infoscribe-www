var Project = require('../models/Project');

/**
 * GET /search
 */
exports.getSearch = function(req, res) {
  
  if (req.query.q) {
    Project.search(req.query.q, {}, { sort: { date: -1 }, limit: 50 }, function(err, data) {
          res.render('search', { title: res.locals.title + " - Search",
                                 query: req.query.q,
                                 results: data.results,
                                 count: data.totalCount
                               });
      });
  } else {
    res.render('search', { title: res.locals.title + " - Search",
                           query: '',
                           results: []
                         });
  }
  
};