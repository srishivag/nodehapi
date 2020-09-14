const { Model } = require('objection');

class  Serious_injury extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'serious_injury';
  }
  static get idColumn() {
    return 'serious_inj_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
    //  required: ['serious_in_typ'],
      properties: {
        serious_inj_id: { type: 'integer' },
        serious_in_typ: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }
      }
    };
  }
}
module.exports = Serious_injury;