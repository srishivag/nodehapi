const {
    Model
} = require('objection');

class Event_adverse extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'adverse_event';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id'],
            properties: {
                id_adverse: {
                    type: 'integer'
                },
                name: {
                    type: 'string'
                },
                status: {
                    type: 'integer'
                },
                created_at: {
                    type: 'date'
                },
                updated_at: {
                    type: 'date'
                },
                type: {
                    type: 'string'
                },
                details: {
                    type: 'string'
                }
            }
        };
    }
}
module.exports = Event_adverse;