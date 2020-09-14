const {
    Model
  } = require('objection');
  
  class Adverse_event extends Model {
    // Table name is the only required property.
    static get tableName() {
      return '' + PREFIX + 'adverse_event';
    }
    static get idColumn() {
      return 'adverse_event_id';
    }
     
    static get jsonSchema() {
      return {
        type: 'object',
        // required: ['roleid'],
        properties: {
            adverse_event_id: { type: 'integer'},
            name:{ type: 'string' },
            status: { type: 'integer'},
            updated_at: { type: 'datetime' },
            created_at: { type: 'datetime' },
            type:{ type: 'string' },
            relatives_informed:{ type: 'string' },
            details:{ type: 'string' }
          
        }
      };
    }
  }
  module.exports = Adverse_event;