
const { Model } = require('objection');

class Contu_bruis extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'contu_bruis';
  }
  static get idColumn() {
    return 'contu_bruis_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['lace_affect'],
      properties: {
        contu_bruis_id: { type: 'integer' },
        contu_bruis_affect	: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Contu_bruis;