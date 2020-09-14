
const { Model } = require('objection');

class Minor_injury extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'minor_injury';
  }
  static get idColumn() {
    return '	minor_inju_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['minor_inju_type'],
      properties: {
        minor_inju_id: { type: 'integer' },
        minor_inju_type: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports = Minor_injury;