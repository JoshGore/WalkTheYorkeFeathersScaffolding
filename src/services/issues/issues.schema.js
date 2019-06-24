
// Define the Feathers schema for service `issues`. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

// Define the model using JSON-schema
let schema = {
  // !<DEFAULT> code: schema_header
  title: 'Issues',
  description: 'Issues database.',
  // !end
  // !code: schema_definitions
  fakeRecords: 6,
  // !end

  // Required fields.
  required: [
    // !code: schema_required
        'type',
        'details',
        'geom'
        // !end
  ],
  // Fields with unique values.
  uniqueItemProperties: [
    // !code: schema_unique
        'id'
        // !end
  ],

  // Fields in the model.
  properties: {
    // !code: schema_properties
    'id': { type: 'ID' },
    'createdAt': { format: 'date-time' },
    'updatedAt': { format: 'date-time' },
    'type': {},
    'details': {},
    'userName': {faker: 'fake("{{name.firstName}} {{name.lastName}}")'},
    'userContact': {faker: 'internet.email'},
    'geom': {
        type: 'object', 
        // 'required': 'type', 'coordinates',
        properties: {
            type: {
                type: 'string',
                enum: [
                    "Point"
                ]
            },
            coordinates: {
                type: 'array',
                minItems: 2,
                items: {
                    type: 'number'
                }
            },
            bbox: {
                type: 'array',
                minItems: 4,
                items: {
                    type: 'number'
                }
            }
        }
    }
    // !end
  },
  // !code: schema_more // !end
};

// Define optional, non-JSON-schema extensions.
let extensions = {
  // GraphQL generation.
  graphql: {
    // !code: graphql_header
        name: 'Issue',
        service: {
            sort: { id: 1 },
        },
        // sql: {
        //   sqlTable: 'Issues',
        //   uniqueKey: 'id',
        //   sqlColumn: {
        //     __authorId__: '__author_id__',
        //   },
        // },
        // !end
    discard: [
      // !code: graphql_discard // !end
    ],
    add: {
      // !<DEFAULT> code: graphql_add
      // __author__: { type: '__User__!', args: false, relation: { ourTable: '__authorId__', otherTable: 'id' } },
      // !end
    },
    // !code: graphql_more // !end
  },
};

// !code: more // !end

let moduleExports = {
  schema,
  extensions,
  // !code: moduleExports // !end
};

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
