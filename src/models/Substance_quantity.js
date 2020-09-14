

const { Model } = require('objection');

class Substance_quantity extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'substance_quantity';
  }
  static get idColumn() {
    return 'substance_quantity_id	';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        substance_quantity_id	: { type: 'integer' },
        substance_quantity_name: { type: 'string' },
        substance_quantity_create: { type: 'datetime' },
        substance_quantity_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Substance_quantity;