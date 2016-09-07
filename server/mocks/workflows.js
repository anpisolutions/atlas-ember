/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var workflowsRouter = express.Router();

  var idCount = 5;
  var workFlowData = [
      {
      "id": 355104,
      "partner_id": 1,
      "name": "Karthik test",
      "source_id": 3,
      "is_default": false,
      "created_at": 1467347875000,
      "created_by": "User-1e7a436798",
      "updated_at": 1467348800000,
      "updated_by": "User-0404e3d491",
      "gate_ids": [
        2471,
        2465,
        2337
      ],
      "is_active": true,
      "duration": 2,
      "is_deleted": false,
      "gates_count": 3,
      "tasks_count": 19
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
