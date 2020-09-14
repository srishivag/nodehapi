const {
  Model
} = require('objection');
//check incident
//msising file
class Incidents extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'incidents';
  }
  static get idColumn() {
    return 'incident_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: [],
      properties: {
        form: { type: 'integer' },
        pers_id: { type: 'string' },
        equip_id: { type: 'string' },
        prem_id: { type: 'string' },
        sub_id: { type: 'string' },
        incident_name: { type: 'string' },
        incident_time: { type: 'datetime' },
        majorlocation: { type: 'string' },
        minorlocation: { type: 'string' },
        details_adverseEvent: { type: 'string' },
        // details_adverse_event: { type: 'string' },
        option: { type: 'string' },
        imdt_actn_details: { type: 'string' },
        pepole_at_risk: { type: 'string' },
        user_id: { type: 'string' },
        incident_id: { type: 'integer' },
        incident_number: { type: 'string' },
        incident_temp_id: { type: 'string' },
        temp_id: { type: 'string' },
        reportedBy:{ type: 'string' },
        assessedBy:{ type: 'string' },
        assessed_time:{type:'datetime'},
        assessor_contact:{ type: 'string' },
        likalihoodaction :{ type: 'string' },
        consequencesaction:{ type: 'string' },
        potential_risk_color :{ type: 'string' },
        potential_risk_name :{ type: 'string' },
        potential_remarks:{ type: 'string' },
        assessors_cmt_action:{ type: 'string' },
        next_status:{ type: 'integer' },
        draft:{ type: 'integer' },
        filename:{type: 'string'},
        imageName:{type: 'string'},
        relevant_type:{type: 'string'},
        affected_area_evacuated:{type:'string'},
        emergency_plan_activated:{type:'string'},
        Infrmtn_sent_to_insurance_agency:{type:'string'},
        relatives_informed:{type:'string'},
        first_aid:{type:'string'},
        hospitalization:{type:'string'},
        infrmtin_sent_to_local_authorities:{type:'string'}
      }
    };
  }
}
module.exports = Incidents;