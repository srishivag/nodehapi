
const { Model } = require('objection');
class Training_employees_log extends Model {
    static get tableName() {
        return '' + PREFIX + 'training_employees_log';
    }
    static get idColumn() {
        return 'emp_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['emp_score'],
            properties: {
                emp_id: { type: 'string' },
                training_id: { type: 'integer' },
                dept_id: { type: 'integer' },
                emp_score: { type: 'integer' } ,
                due_date: { type: 'date' } ,
                created_at: { type: 'date' } ,
                result: { type: 'string' },
                status: { type: 'integer' },
                estimated_due_date: { type: 'datetime' } 
                
            }
        };
    }

}
module.exports = Training_employees_log;