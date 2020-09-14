
const { Model } = require('objection');

class Equipment_contribution extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' equipment_contribution';
  }
  static get idColumn() {
    return 'equipment_contri_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        equipment_contri_id: { type: 'integer' },
        equipment_contri_name: { type: 'string' },
        equipment_contri_create: { type: 'datetime' },
        equipment_contri_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Equipment_contribution;