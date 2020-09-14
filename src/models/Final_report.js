const {
    Model
  } = require('objection');
  
  class Final_report extends Model {
    // Table name is the only required property.
    static get tableName() {
      return '' + PREFIX + 'final_report';
    }
    static get idColumn() {
      return 'incident_id';
    }
    static get jsonSchema() {
      return {
        type: 'object',
        // required: [''],
        properties: {
          final_report_id:{
            type: 'integer'
          },
          incident_id: {
            type: 'integer'
          },
          investigation_id:{
            type: 'integer' 
          },
          investigator_id:{
            type: 'integer'
          },
          severity_type: {
            type: 'string'
          },
          inv_severity: {
            type: 'string'
          },
          work_unit: {
            type: 'string'
          },
          incident_location: {
            type: 'string'
          },
          major_location: {
            type: 'string'
          },
          minor_location: {
            type: 'string'
          },
          supervisor: {
            type: 'string'
          },
          adverse_event_id: {
            type: 'integer'
          },
          adverse_event_id: {
            type: 'string'
          },
          evacuation: {
            type: 'string'
          },
          hospitalized: {
            type: 'string'
          },
          
          restricted_work_persons: {
            type: 'string'
          },
          lost_time_incident: {
            type: 'string'
          },
          incident_description: {
            type: 'string'
          },
          imdt_actn_taken: {
            type: 'string'
          },
          imdt_actn_details:{
            type: 'string'
          },
          image_type: {
            type: 'string'
          },
          image_type: {
            type: 'string'
          },
          management_comments: {
            type: 'string'
          },
          close_date: {
            type: 'datetime'
          },
          repeated_incident: {
            type: 'string'
          },
          plan_imporve: {
            type: 'string'
          },
          emrgncy_pln_actvtd: {
            type: 'string'
          },
          first_aid:{
            type: 'string'   
          },
          info_to_insr_agncy: {
            type: 'string'
          },
          info_to_lcl_authrts: {
            type: 'string'
          },
  
          info_to_rltvs: {
            type: 'string'
          },
          lcl_auth_list: {
            type: 'string'
          },
           
          // workplace_type_Id: {
          //   type: 'integer'
          // },
          // remarks: {
          //   type: 'string'
          // },
        
          status: {
            type: 'integer'
          },
          similarIncident: {
            type: 'integer'
          },
          risk: {
            type: 'integer'
          },
          risk_id: {
            type: 'integer'
          },
          pepole_at_risk: {
            type: 'string'
          },
          equipment_id: {
            type: 'string'
          },
          hlt_symp_id: {
            type: 'integer'
          },
          personnel_id: {
            type: 'integer'
          },
          substtype_id: {
            type: 'integer'
          },
          subststatus_id: {
            type: 'integer'
          },
          substance_id: {
            type: 'integer'
          },
          eq_status_id: {
            type: 'integer'
          },
          eqtype_id:{
            type: 'integer' 
          },
          prsonnel_sta_id:{
            type: 'integer'
          },
          training_id: {
            type: 'string'
          },
          created_by: {
            type: 'string'
          },
          invest_view: {
            type: 'integer'
          },
          
          premises_type_Id: {
            type: 'string'
          },
          premises_id: {
            type: 'integer'
          },
          rptng_prsn_id: {
            type: 'integer'
          },
          cntrbtng_fctr_id: {
            type: 'integer'
          },
          frwd_id: {
            type: 'integer'
          },
          sptng_evdnce_id: {
            type: 'integer'
          },
          assessors_cmt_action:{
            type: 'string'
          },
          likelihood:{
            type: 'string' 
          },
          consequences:{
            type: 'string' 
          },
          rid_reportable:{
            type: 'string'  
          },
          reported_to_rid:{
            type: 'string'
          },
          date_time_reported_to_ridddor:{
            type: 'datetime'
          },
          entry_in_acdnt_book:{
            type: 'string'  
          },
          entered_in_to_acdnt_book:{
            type: 'string'
          },
          date_entered_reference:{
            type: 'string'
          },
          further_investigation:{
            type: 'string'
          },
          cause_analysisi_rqd:{
            type: 'string'
          },
          initial_ass_per_id :{
            type: 'integer'
          },
          initial_ass_name:{
            type: 'string'
          },
          initial_ass_designation:{
            type: 'string'
          },
          priority:{
            type: 'string'
          },
          initial_date_time:{
            type: 'date'
          },
          created_at: {
            type: 'datetime'
          },
          updated_at: {
            type: 'datetime'
          }
        }
      };
    }
  }
  module.exports = Final_report;
