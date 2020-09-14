const { Model } = require('objection');

class Internal_injuries extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'internal_injuries';
  }
  static get idColumn() {
    return 'intel_inju_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['intel_inju_affect'],
      properties: {
        intel_inju_id: { type: 'integer' },
        intel_inju_affect	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Internal_injuries;