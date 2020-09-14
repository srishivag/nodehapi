


const { Model } = require('objection');

class Fracture extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'fracture';
  }
  static get idColumn() {
    return 'fracture_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['fracture_affect'],
      properties: {
        fracture_id: { type: 'integer' },
        fracture_affect: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Fracture;