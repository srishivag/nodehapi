const { Model } = require('objection');

class Lace_wounds extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'lace_wounds';
  }
  static get idColumn() {
    return '	lace_wou_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['lace_affect'],
      properties: {
        lace_wou_id: { type: 'integer' },
        lace_affect	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Lace_wounds;