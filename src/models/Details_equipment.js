const { Model } = require('objection');

class Details_equipment extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + ' details_equipment';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: [' name'],

      properties: {
        equipment_id: { type: 'integer' },
        incident_id: { type: "integer" },
        equipment_name: { type: 'string' },
        equipment_type: { type: 'string' },
        equipment_status: { type: 'string' },
        equipment_type_of_contribution: { type: 'string' },
        equipment_type_of_damage_recieved: { type: 'string' },
        equipment_immediate_action_taken: { type: 'string' },
        equipment_Estimated_damage_cost: { type: 'string' },
        equipment_relevant_document_upload: { type: 'string' },
        equipment_remarks: { type: 'string' },
        for_part: { type: 'string' }
      }
    };
  }
}
module.exports = Details_equipment;