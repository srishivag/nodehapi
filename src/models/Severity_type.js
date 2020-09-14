
const { Model } = require('objection');
class Severity_type extends Model {
    static get tableName() {
        return '' + PREFIX + 'severity_type';
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
module.exports = Severity_type;