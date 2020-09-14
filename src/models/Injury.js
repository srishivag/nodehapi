const { Model } = require('objection');

class  Injury extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'injury';
  }
  static get idColumn() {
    return 'injury_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
    //   required: [''],
      properties: {
        injury_id: { type: 'integer' },
        type_inj: { type: 'string' },
        status: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports = Injury;