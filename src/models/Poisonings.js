

const { Model } = require('objection');

class Poisonings extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'poisonings';
  }
  static get idColumn() {
    return 'poiso_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['	poiso_affect'],
      properties: {
        poiso_id: { type: 'integer' },
        poiso_affect	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Poisonings;