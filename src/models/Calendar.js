const {
    Model
} = require('objection');

class Calendar extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'calendar';
    }
    static get idColumn() {
        return 'dt';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['dt'],

            properties: {
                dt: {
                    type: 'date'
                },
            }
        };
    }
}
module.exports = Calendar;