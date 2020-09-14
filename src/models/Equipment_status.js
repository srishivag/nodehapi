const { Model } = require('objection');

class Equipment_status extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' equipment_status';
  }
  static get idColumn() {
    return 'equipment_status_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        equipment_status_id: { type: 'integer' },
        equipment_status_name: { type: 'string' },
        equipment_status_create: { type: 'datetime' },
        equipment_status_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Equipment_status;