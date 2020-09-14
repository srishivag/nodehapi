const {
    Model
  } = require('objection');
  
  class Substance_status extends Model {
    // Table name is the only required property.
    static get tableName() {
      return '' + PREFIX + 'Substance_status';
    }
    static get idColumn() {
      return 'substance_id';
    }
     
    static get jsonSchema() {
      return {
        type: 'object',
        // required: ['roleid'],
        properties: {
            substance_id: { type: 'integer' },
            incident_id:{ type: 'integer' },
            sub_status: { type: 'string' },
            created_at: { type: 'datetime' },
            updated_at: { type: 'datetime' },
            for_part:{ type: 'integer' }
          
        }
      };
    }
  }
  module.exports = Substance_status;