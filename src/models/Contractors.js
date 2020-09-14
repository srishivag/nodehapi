const { Model } = require('objection');

class Contractors extends Model {
    // Table name is the only required property.code
    static get tableName() {
        return '' + PREFIX + 'contractors';
    }
    static get idColumn() {
        return 'cid';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],

            properties: {
                cid: { type: 'integer' },
                name: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' }
            }
        };
    }
}
module.exports = Contractors;