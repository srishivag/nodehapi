
const { Model } = require('objection');
class Work_unit extends Model {
    static get tableName() {
        return '' + PREFIX + 'work_unit';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id'],
            properties: {
                id: { type: 'integer' },
                value: { type: 'string' },
                status: { type: 'integer' },
            }
        };
    }

}
module.exports = Work_unit;