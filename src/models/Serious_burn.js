

const { Model } = require('objection');

class Serious_burn extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'serious_burn';
  }
  static get idColumn() {
    return '	serious_burn_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_part_aff'],
      properties: {
        serious_burn_id: { type: 'integer' },
        body_part_aff: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports = Serious_burn;