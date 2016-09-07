/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();
  var taskData = [
    {
      "id": 40004,
      "partner_id": 35100,
      "name": "Implementation Plan",
      "task_template_id": 34850,
      "seq_number": 1000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "Implementation Plan",
      "created_at": 1448794711000,
      "created_by": "User-7306f58498",
      "updated_at": 1448794711000,
      "updated_by": "User-e8f00b547f",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40005,
      "partner_id": 35100,
      "name": "LNP Request",
      "task_template_id": 34850,
      "seq_number": 2000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "LNP Request",
      "created_at": 1448794711000,
      "created_by": "User-30b93c94bc",
      "updated_at": 1448794711000,
      "updated_by": "User-515fbd58f0",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40006,
      "partner_id": 35100,
      "name": "CPE Delivered",
      "task_template_id": 34850,
      "seq_number": 3000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "CPE Delivered",
      "created_at": 1448794711000,
      "created_by": "User-b93f80f569",
      "updated_at": 1448794711000,
      "updated_by": "User-57750f8e49",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40007,
      "partner_id": 35100,
      "name": "PBX TTU",
      "task_template_id": 34850,
      "seq_number": 4000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "TTU",
      "created_at": 1448794711000,
      "created_by": "User-b9cf55d0cb",
      "updated_at": 1448794711000,
      "updated_by": "User-68a3670112",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40008,
      "partner_id": 35100,
      "name": "LNP Due Date",
      "task_template_id": 34850,
      "seq_number": 5000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "LNP Due Date",
      "created_at": 1448794711000,
      "created_by": "User-1999e4541c",
      "updated_at": 1448794711000,
      "updated_by": "User-de386b91ab",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40009,
      "partner_id": 35100,
      "name": "Final TTU",
      "task_template_id": 34850,
      "seq_number": 6000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "Final TTU",
      "created_at": 1448794711000,
      "created_by": "User-f6435cd8c7",
      "updated_at": 1448794711000,
      "updated_by": "User-e8c7471110",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40010,
      "partner_id": 35100,
      "name": "LNP SystemTask",
      "task_template_id": 34850,
      "seq_number": 7000,
      "system_task_id": 20,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": true,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "DID change task",
      "created_at": 1448794711000,
      "created_by": "User-79f077a91e",
      "updated_at": 1448794711000,
      "updated_by": "User-f025058589",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    },
    {
      "id": 40011,
      "partner_id": 35100,
      "name": "LNP Completed",
      "task_template_id": 34850,
      "seq_number": 8000,
      "system_task_id": null,
      "duration": 1,
      "functional_group_id": 29731,
      "is_system_task": false,
      "duration_unit": "HOUR",
      "is_milestone": false,
      "comments": "Change DID completed task",
      "created_at": 1448794711000,
      "created_by": "User-f2d00e794c",
      "updated_at": 1448794711000,
      "updated_by": "User-5dabb83e7d",
      "dependent_task_ids": [],
      "is_skippable": false,
      "is_critical": false
    }
  ];
  tasksRouter.get('/', function(req, res) {
    res.send({
      'tasks': taskData
    });
  });

  tasksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tasksRouter.get('/:id', function(req, res) {
    var f = false;
    taskData.forEach(function(e) {
      if(e.id == req.params.id) {
        res.send({
          'tasks': e
        });

        f = true;        
      }
    }, this);

    if(!f) {
      res.status(404).end();
    }

    // res.send({
    //   'tasks': {
    //     id: req.params.id
    //   }
    // });
  });

  tasksRouter.put('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  tasksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/tasks', require('body-parser').json());
  app.use('/api/tasks', tasksRouter);
};
