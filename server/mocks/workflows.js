/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var workflowsRouter = express.Router();

  var idCount = 5;
  var workFlowData = [
      {
        id: 0,
        name: "Test-Name#1",
        gates: 4,
        tasks: 18,
        usageCountInProg: 18,
        usageCountComp: 16,
        duration: "10 Day(s) 4 Hour(s) ",
        createdOn: "05/28/2014 23:20:35 EST",
        updatedOn: "09/03/2014 10:30:19 EST",
        createdBy: "Ramakrishna Rao",
        updatedBy: "Amy Fandel",
        status: true
      },
      {
        id: 1,
        name: "Test-Name#2",
        gates: 3,
        tasks: 26,
        usageCountInProg: 867,
        usageCountComp: 134,
        duration: "6 Day(s) 5 Hour(s) ",
        createdOn: "06/25/2014 19:00:00 EST",
        updatedOn: "03/10/2015 05:59:47 EST",
        createdBy: "Ramakrishna Rao",
        updatedBy: "QA System Global Admin",
        status: true
      },
      {
        id: 2,
        name: "Test-Name#3",
        gates: 6,
        tasks: 37,
        usageCountInProg: 27,
        usageCountComp: 17,
        duration: "52 Day(s) 2 Hour(s) ",
        createdOn: "06/25/2014 19:00:00 EST",
        updatedOn: "10/21/2014 09:46:31 EST",
        createdBy: "Ramakrishna Rao",
        updatedBy: "Amy Fandel",
        status: false
      },
      {
        id: 3,
        name: "Test-Name#4",
        gates: 5,
        tasks: 17,
        usageCountInProg: 17,
        usageCountComp: 222,
        duration: "6 Day(s) 5 Hour(s)",
        createdOn: "06/29/2014 19:00:00 EST",
        updatedOn: "11/26/2014 14:41:06 EST",
        createdBy: "Ramakrishna Rao",
        updatedBy: "Amy Fandel",
        status: false
      },
      {
        id: 4,
        name: "Test-Name#5",
        gates: 6,
        tasks: 31,
        usageCountInProg: 4,
        usageCountComp: 41,
        duration: "19 Day(s) 3 Hour(s) ",
        createdOn: "06/29/2014 19:00:00 EST",
        updatedOn: "11/14/2014 08:04:46 EST",
        createdBy: "Ramakrishna Rao",
        updatedBy: "Surendhar Partner Admin",
        status: true
      }        
  ];

  workflowsRouter.get('/', function(req, res) {
    res.send({
      'workflows': workFlowData
    });
  });

  workflowsRouter.post('/', function(req, res) {
    var rec = {
          id: 0,
          name: "",
          gates: 0,
          tasks: 0,
          usageCountInProg: 0,
          usageCountComp: 0,
          duration: "10 Day(s) 4 Hour(s) ",
          createdOn: "05/28/2014 23:20:35 EST",
          updatedOn: "09/03/2014 10:30:19 EST",
          createdBy: "Ramakrishna Rao",
          updatedBy: "Amy Fandel",
          status: true    
    };    
    rec.id = idCount;
    rec.name=req.body.workflow.name,
    rec.gates= req.body.workflow.gates,
    rec.tasks= req.body.workflow.tasks,
    rec.usageCountInProg= req.body.workflow.usageCountInProg,
    rec.usageCountComp= req.body.workflow.usageCountComp,
    rec.duration= req.body.workflow.duration,
    rec.createdOn= req.body.workflow.createdOn,
    rec.updatedOn= req.body.workflow.updatedOn,
    rec.createdBy= req.body.workflow.createdBy,
    rec.updatedBy= req.body.workflow.updatedBy;
    if(req.body.workflow.status === 1) {
      rec.status = true;    
    } else {
      rec.status = false;          
    }
    
    idCount = idCount+1;
    workFlowData.push(rec);
    // res.status(201).end();
    // res.status(200).end();    
    res.set('Content-Type', 'application/vnd.api+json');
    res.send({
      data: {
        req: rec,
      }
    });
    
  });

  workflowsRouter.get('/:id', function(req, res) {
    res.send({
      'workflows': {
        id: req.params.id
      }
    });
  });

  workflowsRouter.put('/:id', function(req, res) {
    res.send({
      'workflows': {
        id: req.params.id
      }
    });
  });

  workflowsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  app.use('/api/workflows', require('body-parser').json());
  app.use('/api/workflows', workflowsRouter);
};
