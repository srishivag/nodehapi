const { Model } = require('objection');

class Allergies extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'allergies';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['alrg_code'],
      
      properties: {
        id: { type: 'integer' },
        alrg_code: { type: 'string' },
        allergy: { type: 'string' },
        status: { type: 'integer' }
      }
    };
  }
}
module.exports = Allergies;