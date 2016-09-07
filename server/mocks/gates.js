/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var gatesRouter = express.Router();

  var gatesData = [
    {
      "id": 2471,
      "partner_id": 1,
      "name": "New Gate of 355104",
      "workflow_id": 355104,
      "task_template_id": 34850,
      "functional_group_id": 29731,
      "seq_number": 0,
      "comments": "gg",
      "is_skippable": true,
      "task_ids": [
        40011,
        40010,
        40009,
        40008,
        40007,
        40006,
        40005,
        40004
      ],
      "created_at": 1471957620968,
      "created_by": "User-3bebf493bf",
      "updated_at": 1471957620968,
      "updated_by": "User-fb65dca9b0",
      "tasks_count": 8,
      "duration": null
    },
    {
      "id": 2465,
      "partner_id": 1,
      "name": "New Gate of 355104",
      "workflow_id": 355104,
      "task_template_id": 34850,
      "functional_group_id": 29731,
      "seq_number": 0,
      "comments": "gg",
      "is_skippable": true,
      "task_ids": [
        40011,
        40010,
        40009,
        40008,
        40007,
        40006,
        40005,
        40004
      ],
      "created_at": 1471930605196,
      "created_by": "User-0517fee756",
      "updated_at": 1471930605196,
      "updated_by": "User-002571f43d",
      "tasks_count": 8,
      "duration": null
    },
    {
      "id": 2337,
      "partner_id": 1,
      "name": "Check 1",
      "workflow_id": 355104,
      "task_template_id": 17550,
      "functional_group_id": 5453,
      "seq_number": 1000,
      "comments": "",
      "is_skippable": false,
      "task_ids": [
        19650,
        19652,
        19651
      ],
      "created_at": 1467349055000,
      "created_by": "User-d72606bb7a",
      "updated_at": 1467349055000,
      "updated_by": "User-c07297df71",
      "tasks_count": 3,
      "duration": null
    }
  ];

  gatesRouter.get('/', function(req, res) {
    res.send({
      'gates': gatesData
    });
  });

  gatesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  gatesRouter.get('/:id', function(req, res) {
    var f = false;
    gatesData.forEach(function(e) {
      if(e.id == req.params.id) {
        res.send({
          'gates': e
        });

        f = true;        
      }
    }, this);

    if(!f) {
      res.status(404).end();
    }
    // res.send({
    //   'gates': {
    //     id: req.params.id
    //   }
    // });
  });

  gatesRouter.put('/:id', function(req, res) {
    res.send({
      'gates': {
        id: req.params.id
      }
    });
  });

  gatesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/gates', require('body-parser').json());
  app.use('/api/gates', gatesRouter);
};
