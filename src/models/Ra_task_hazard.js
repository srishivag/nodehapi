const { Model } = require('objection');

class Ra_task_hazards extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_task_hazard';
    }
    static get idColumn() {
        return 'taskhazId';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                taskhazId:{ type: 'integer' },
                ra_ref_no:{type:'string'},
                ra_id:{ type: 'integer' },
                hazard:{ type: 'string' },
                status:{ type: 'string' },
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'},
                createdBy:{type:'integer'}
               
            }
        };
    }
}
module.exports = Ra_task_hazards;
