
const { Model } = require('objection');

class Blinding extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'blinding';
  }
  static get idColumn() {
    return 'blinding_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['blinding_type'],
      properties: {
        blinding_id: { type: 'integer' },
        blinding_type: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports = Blinding;