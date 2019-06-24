
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `issues`. (Can be re-generated.)
const merge = require('lodash.merge');
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      createdAt: {
        format: "date-time",
        bsonType: "string"
      },
      updatedAt: {
        format: "date-time",
        bsonType: "string"
      },
      type: {
        bsonType: "string"
      },
      details: {
        bsonType: "string"
      },
      userName: {
        faker: "fake(\"{{name.firstName}} {{name.lastName}}\")",
        bsonType: "string"
      },
      userContact: {
        faker: "internet.email",
        bsonType: "string"
      },
      geom: {
        bsonType: "object",
        additionalProperties: false,
        properties: {
          _id: {
            bsonType: "objectId"
          },
          type: {
            enum: [
              "Point"
            ],
            bsonType: "string"
          },
          coordinates: {
            minItems: 2,
            items: {
              type: "number"
            },
            bsonType: "array"
          },
          bbox: {
            minItems: 4,
            items: {
              type: "number"
            },
            bsonType: "array"
          }
        }
      }
    },
    required: [
      "type",
      "details",
      "geom"
    ]
  },
  // !end
  // !code: moduleExports // !end
);

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
