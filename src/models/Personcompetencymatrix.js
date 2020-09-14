
const { Model } = require('objection');
class Personcompetencymatrix extends Model {
    static get tableName() {
        return '' + PREFIX + 'person_competency_matrix';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                temp_id:{type:"string"},
                suitable:{type:'string'},
                competent:{type:'string'},
                relevant_type: { type: 'string' },
                filename: { type: 'string' },
                imageName: {type: 'string'},
                remarks:{type:'string'},
                incident_id:{type:'integer'},
                incident_number:{type:'string'},
                incident_temp_id:{type:'string'},
                //person_id:{type:'integer'},  
                user_id:{type:'integer'} ,
                form:{type:'integer'},
            }
        };
    }

}
module.exports = Personcompetencymatrix;