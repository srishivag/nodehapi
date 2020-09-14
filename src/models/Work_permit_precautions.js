
const { Model } = require('objection');
class Work_permit_precautions extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_precautions';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['module_name'],
            properties: {
                id: { type: 'integer' },
                module_name: { type: 'string' },
                question_type: { type: 'string' },
                s_no: { type: 'integer' } ,
               
                checklist_type: { type: 'string' } ,
                option_type: { type: 'string' } ,
                options_list: { type: 'string' } ,
                checklist: { type: 'string' }, 
                required: { type: 'string' } ,
                status: { type: 'integer' } ,
                created_on: { type: 'datetime' } , 
                modified_on: { type: 'datetime' } 
            }
        };
    }

}
module.exports = Work_permit_precautions;