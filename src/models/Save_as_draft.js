const { Model } = require('objection');

class Save_Draft extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'saveasdraft';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                // id: { type: 'number'},
                ref_num: { type: 'string' },
                form: { type: 'integer' },
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
                infrmn_snt_to_authrts: { type: 'string' },
                rltivs_infmd: { type: 'string' },
                Assessorscomment: { type: 'string' },
                consequencesaction: { type: 'string' },
                likalihoodaction: { type: 'string' },
                remarks: { type: 'string' },

            }
        };
    }
}
module.exports = Save_Draft;