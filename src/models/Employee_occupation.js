
const { Model } = require('objection');

class Employee_occupation extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'employee_occupation';
    }
    static get idColumn() {
        return 'person_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                
                emp_occ_id: { type: 'integer' },
                emp_occ_name: { type: 'string' },
                emp_occ_created: { type: 'datetime' },
                updated: { type: 'datetime' },
                 
            }


        };
    }
}
module.exports = Employee_occupation;