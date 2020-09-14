const { Model } = require('objection');

class Save_Draft1 extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'saveasdraft';
    }
    static get idColumn() {
        return 'ref_num';
    }

    static get jsonSchema() {
        return {
            type: 'object',
           // required: [],
            properties: {
                ref_num: {type:'string'},
                form: {type:'number'},
                title: { type: 'string' },
                date: { type: 'datetime' },
                adverse: { type: 'string' },
                adverseEvent: { type: 'string' },
                pepole: { type: 'string' },
                details_adverse_event: { type: 'string' },
                Affected_area_evacuated: { type: 'string' },
                emrgncy_pln_actvtd: { type: 'string' },
                info_to_insr_agncy: { type: 'string' },
                relatives_informed: { type: 'string' },
                first_aid: { type: 'string' },
                hospitalized: { type: 'string' },
                infrmn_snt_to_authrts:{ type: 'string' },
                rltivs_infmd: { type: 'string' },
                Assessorscomment: { type: 'string' },
                reported: { type: 'string'},
                riddor_time: {type: 'date'},
                entry_in_acdnt_book: {type: 'string'},
                reference_time: {type: 'date'},
                investigation_level: {type: 'string'},
                priority: {type: 'string'},
                team_leader: {type: 'string'},
                team_member1: {type: 'string'},
                team_member2: {type: 'string'},
                team_member3: {type: 'string'},
                team_member4: {type: 'string'},
                further_investigation: {type: 'string'},
                cause_analysisi_rqd: {type: 'string'},
                analysis_tool: {type: 'string'},
                accendentnotes: {type: 'string'},
            }
        };
    }
}
module.exports = Save_Draft1;