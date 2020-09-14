const { Model } = require('objection');

class Ra_task_analysis extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_task_analysis';
    }
    static get idColumn() {
        return 'task_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                task_id:{ type: 'integer' },
                ra_ref_no:{type:'string'},
                ra_id:{type:'integer'},
                rastep:{type:'string'},
                status:{ type: 'string' },
                createdBy:{type:'integer'},
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_task_analysis;
