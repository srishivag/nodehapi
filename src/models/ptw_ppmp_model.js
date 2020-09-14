const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp';
    }

    static get idColumn() {
        return 'ppmp_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                ppmp_id: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                emp_id: {type: 'string'},
                role_for_wp:{type: 'integer'},
                remarks:{type: 'string'},
                competent:{type: 'string'},
                fit_for_purpose:{type: 'string'},
                adons:{type: 'string'},
                createdBy:{type:'string'},
                createdAt: {type: 'datetime'},
                updaatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
