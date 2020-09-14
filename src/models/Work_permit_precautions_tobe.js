

const { Model } = require('objection');
class Work_permit_precautions_tobe extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_precautions_tobe';
    }
    static get idColumn() {
        return '	wpp_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['precaution_id'],
            properties: {
                wpp_id: { type: 'integer' },
                wp_id: { type: 'integer' },
                precaution_id: { type: 'integer' },
                
                status: { type: 'integer' } ,
                created_on: { type: 'datetime' } 
            }
        };
    }

}
module.exports = Work_permit_precautions_tobe;