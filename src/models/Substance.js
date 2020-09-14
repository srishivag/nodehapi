const { Model } = require('objection');

class Substance extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'substance';
  }
  static get idColumn() {
    return 'substance_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['type'],
      properties: {
        sub_id:{ type: 'integer' },
        substance_id: { type: 'integer' },
        form: { type: 'integer' },
        incident_id: { type: 'integer' },
        incident_number:{ type: 'string' },
        incident_temp_id:{ type: 'string' },
        substance_name: { type: 'string' },
        substance_type: { type: 'string' },
        substance_status: { type: 'string' },
        substance_phase: { type: 'string' },
        substance_damage: { type: 'string' },
        substance_Immediate_Action_Taken: { type: 'string' },
        substance_Estimated_damage_cost: { type: 'string' },
        substance_document_upload: { type: 'string' },
        substance_remarks: { type: 'string' },
        user_id:{ type: 'string' },
        relevant_type: { type: 'string' },
        filename: { type: 'string' },
        imageName:{ type: 'string' },
        sub_remarks: { type: 'string' },
        temp_id: { type: 'string' },
        step:{type:'integer'}
      }
    };
  }
}
module.exports = Substance;