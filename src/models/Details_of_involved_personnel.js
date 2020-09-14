
const { Model } = require('objection');

class Details_of_involved_personnel extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'details_of_involved_personnel';
  }
  static get idColumn() {
    return '	personnel_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['person_name'],
      properties: {
        personnel_id: { type: 'integer' },
        form_id: { type: 'integer' },
        person_name: { type: 'string' },
        occupation: { type: 'stringr' },
        per_status: { type: 'string' },
        ty_of_involvement: { type: 'string' },
        injury_health_symptoms: { type: 'string' },
        part_body_affected_Disease_diagnosed: { type: 'string' },
        per_imdt_action_taken: { type: 'string' },
        stm_diag_rep_upload: { type: 'string' },
        per_remarks: { type: 'string' },
        for_part: { type: 'integer' }
      }


    };
  }
}
module.exports = Details_of_involved_personnel;