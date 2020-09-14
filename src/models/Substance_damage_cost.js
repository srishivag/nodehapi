
const { Model } = require('objection');

class Substance_damage_cost extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'substance_damage_cost';
  }
  static get idColumn() {
    return 'substance_damage_cost_id	';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        substance_damage_cost_id	: { type: 'integer' },
        substance_damage_cost_name: { type: 'string' },
        substance_damage_cost_create: { type: 'datetime' },
        substance_damage_cost_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Substance_damage_cost;