
const { Model } = require('objection');

class Multiple_injuries extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'multiple_injuries';
  }
  static get idColumn() {
    return 'mul_inj_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['	mul_inj_affe'],
      properties: {
        mul_inj_id: { type: 'integer' },
        mul_inj_affe	: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports =Multiple_injuries;