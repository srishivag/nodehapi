
const {
    Model
  } = require('objection');
  
  class Substance_phase extends Model {
    // Table name is the only required property.
    static get tableName() {
      return '' + PREFIX + 'substance_phase';
    }
    static get idColumn() {
      return 'substance_phase_id';
    }
     
    static get jsonSchema() {
      return {
        type: 'object',
        // required: ['roleid'],
        properties: {
            substance_phase_id: { type: 'integer' },
            substance_phase_name: { type: 'string' },
            substance_phase_create: { type: 'datetime' },
            substance_phase_update: { type: 'datetime' },
             
          
        }
      };
    }
  }
  module.exports = Substance_phase;