const { Model } = require('objection');
class Natural_causes extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'natural_causes';
  }
  static get idColumn() {
    return '	nat_cau_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['nat_cau_affe'],
      properties: {
        nat_cau_id: { type: 'integer' },
        nat_cau_affe: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports =Natural_causes;