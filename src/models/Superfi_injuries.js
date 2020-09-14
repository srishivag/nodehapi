
const { Model } = require('objection');

class Superfi_injuries extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'superfi_injuries';
  }
  static get idColumn() {
    return 'superfi_inj_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['superfi_inj_affe'],
      properties: {
        superfi_inj_id: { type: 'integer' },
        superfi_inj_affe	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Superfi_injuries;