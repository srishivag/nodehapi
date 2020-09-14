const { Model } = require('objection');

class Equipment_damage extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' equipment_damage';
  }
  static get idColumn() {
    return 'equip_damage_idPrimary	';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],
    
      properties: {
        equip_damage_idPrimary	: { type: 'integer' },
        equipment_damage_name: { type: 'string' },
        equipment_damage_create: { type: 'datetime' },
        equipment_damage_update: { type: 'datetime' },
        
      }
    };
  }
}
module.exports =  Equipment_damage;