const { Model } = require('objection');

class Work_involve_list_table extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_work_involve_list_table';
    }
    static get idColumn() {
        return 'wi_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                wi_id: { type: 'integer'},
                name:{ type: 'string'},
                status: { type: 'boolean'},
                createdAt: { type: 'date' },
                updatedAt: { type: 'date' }
            }


        };
    }
}
module.exports = Work_involve_list_table;