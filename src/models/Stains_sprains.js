


const { Model } = require('objection');

class stains_sprains extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'stains_sprains';
  }
  static get idColumn() {
    return 'ss_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['	poiso_affect'],
      properties: {
        	ss_id: { type: 'integer' },
            ss_affect	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =stains_sprains;