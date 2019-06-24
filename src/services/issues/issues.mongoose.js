
/* eslint quotes: 0 */
// Defines Mongoose model for service `issues`. (Can be re-generated.)
const merge = require('lodash.merge');
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    createdAt: Date,
    updatedAt: Date,
    type: {
      type: String,
      required: true
    },
    details: {
      type: String,
      required: true
    },
    userName: String,
    userContact: String,
    geom: {
      type: {
        type: String,
        enum: [
          "Point"
        ]
      },
      coordinates: [
        Number
      ],
      bbox: [
        Number
      ]
    }
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
