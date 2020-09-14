
const { Model } = require('objection');
class Work_permit_employees extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_permit_employees';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['role'],
            properties: {
                id: { type: 'integer' },
                wp_id: { type: 'integer' },
                emp_id: { type: 'string' },
                role: { type: 'string' } ,
                status: { type: 'integer' } ,
                created_dt: { type: 'datetime' } ,
                updated_at: { type: 'datetime' } 
            }
        };
    }

}
module.exports = Work_permit_employees;