

const { Model } = require('objection');

class Amputation extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'amputation';
  }
  static get idColumn() {
    return 'amputation_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_part_aff'],
      properties: {
        amputation_id: { type: 'integer' },
        body_part_aff: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports = Amputation;