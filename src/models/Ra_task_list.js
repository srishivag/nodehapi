const { Model } = require('objection');

class Ra_task_list extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_task_list';
    }
    static get idColumn() {
        return 'tasklistId';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                tasklistId:{ type: 'integer' },
                taskname:{type:'string'},
                status:{ type: 'string' },
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_task_list;
