
const { Model } = require('objection');

class Equipment_cost extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'equipment_cost';
  }
  static get idColumn() {
    return 'equipment_cost_id	';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        equipment_cost_id	: { type: 'integer' },
        equipment_cost_value: { type: 'string' },
        equipment_cost_create: { type: 'datetime' },
        equipment_cost_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Equipment_cost;