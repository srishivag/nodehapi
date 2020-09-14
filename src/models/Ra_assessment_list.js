const { Model } = require('objection');

class Ra_assessment_list extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_assessmentlist';
    }
    static get idColumn() {
        return 'ra_assessment_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                ra_assessment_id:{ type: 'integer' },
                ra_ref_no:{ type: 'string' },
                ra_id:{type:'integer'},
                emp_id:{ type: 'string' },
                ra_role:{ type: 'string' },
                createdBy:{type:'string'},
                createdAt:{ type: 'datetime' },
                updaatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_assessment_list;
