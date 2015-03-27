var Project = require('../models/Project');

/**
 * GET /project/new
 */
exports.getNewProject = function(req, res) {  
  res.render('project/new', { title: res.locals.title + " - New project" });
};

/**
 * POST /project/new
 */
exports.postNewProject = function(req, res, next) {
  req.assert('name', 'Project name cannot be blank').notEmpty();
  req.assert('description', 'Description cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (req.headers['x-validate'])
    return res.json({ errors: errors });
  
  if (errors) {
    req.flash('errors', errors);
    return res.render('project/new');
  }

  var project = new Project({
    name: req.body.name,
    description: req.body.description,
    creator: {
      id: req.user.id,
      name: req.user.profile.name,
      email: req.user.email
    }
  });

  project.save(function(err) {
    if (err) return next(err);
    return res.redirect(project.getUrl());
  });

};

/**
 * GET /projects
 */
exports.getProjects = function(req, res) {
  var numberOfResultsLimit = 100;
  var numberOfResults = 10;
  if (numberOfResults > numberOfResultsLimit)
    numberOfResults = numberOfResultsLimit;
  
  var pageNumber = (parseInt(req.query.page) > 1) ? parseInt(req.query.page) : 1;

  var skip = 0;
  if (pageNumber > 1)
    skip = (pageNumber - 1) * numberOfResults;
  
  Project.find({}, null , { skip: skip, limit: numberOfResults, sort : { _id: -1 } }).exec(function (err, projects) {
    Project.count({}, function( err, count) {
        res.render('project/list', { title: res.locals.title + " - Projects", projects: projects, count: count, limit: numberOfResults, page: pageNumber });
    });
  });
  
};

/**
 * GET /project/:id
 */
exports.getProject = function(req, res) {
  var projectId = req.params.id;

  Project.findOne({ id: projectId }, function (err, project) {
    if (err)
      return res.render('404');
    
    return res.render('project/view', { title: res.locals.title + " - " + project.name, project: project });
  });
};


/**
 * GET /project/edit/:id
 */
exports.getEditProject = function(req, res) {
  var projectId = req.params.id;

  Project.findOne({ id: projectId }, function (err, project) {
    if (err)
      return res.render('404');

    if (req.user.id != project.creator.id 
        && req.user.permissions.moderator != true
        && req.user.permissions.admin != true )
      return res.render('403');
    
    return res.render('project/edit', { title: res.locals.title + " - Edit " + project.name, project: project });
  });
};

/**
 * POST /project/edit/:id
 */
exports.postEditProject = function(req, res) {
  req.assert('id', 'Project ID cannot be blank').notEmpty();
  req.assert('name', 'Project name cannot be blank').notEmpty();
  req.assert('description', 'Description cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (req.headers['x-validate'])
    return res.json({ errors: errors });
  
  if (errors) {
    req.flash('errors', errors);
    return res.render('new/project');
  }
  
  Project.findOne({ id: req.params.id }, function (err, project) {
    if (err)
      return res.render('404');
    
    if (req.user.id != project.creator.id 
        && req.user.permissions.moderator != true
        && req.user.permissions.admin != true )
      return res.render('403');
    
    project.name = req.body.name;
    project.description = req.body.description;

    project.save(function(err) {
      if (err) return next(err);
      return res.redirect(project.getUrl());
    });
      
  });
  
};

