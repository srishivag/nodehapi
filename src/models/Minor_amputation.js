
const { Model } = require('objection');

class Minor_amputation extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'minor_amputation';
  }
  static get idColumn() {
    return 'minor_am_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['	ampu_affect'],
      properties: {
        minor_am_id: { type: 'integer' },
        ampu_affect: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports = Minor_amputation;