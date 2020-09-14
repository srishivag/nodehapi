
const { Model } = require('objection');

class Minor_burns extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'minor_burns';
  }
  static get idColumn() {
    return 'burns_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['burns_affect'],
      properties: {
        burns_id: { type: 'integer' },
        burns_affect	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Minor_burns;