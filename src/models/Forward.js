
const { Model } = require('objection');
class Forward extends Model {
    static get tableName() {
        return '' + PREFIX + 'forward';
    }
    static get idColumn() {
        return 'frwd_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['frwd_id'],
            properties: {
                frwd_id: { type: 'integer' },
                name: { type: 'varchar' },
                designation: { type: 'string' },
                date: { type: 'date' },
                time: { type: 'time' },
            }
        };
    }

}
module.exports = Forward;