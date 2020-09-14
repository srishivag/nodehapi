
const { Model } = require('objection');
class ActivityQuestions extends Model {
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
                question: { type:'string' },
                qn_id:{type:'integer'},                
                incident_id:{type:'integer'},
                incident_number:{type:'string'},
                incident_temp_id:{type:'string'},
            }
        };
    }

}
module.exports = ActivityQuestions;