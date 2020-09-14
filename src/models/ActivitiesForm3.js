
const { Model } = require('objection');
class ActivitiesForm3 extends Model {
    static get tableName() {
        return '' + PREFIX + 'activities_form3';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                investigator_finding: { type:'string' },
                qn_id:{type:'integer'},                
                incident_id:{type:'integer'},
                incident_number:{type:'string'},
                incident_temp_id:{type:'string'},
            }
        };
    }

}
module.exports = ActivitiesForm3;