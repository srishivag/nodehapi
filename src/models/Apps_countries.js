const { Model } = require('objection');

class Apps_countries extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'apps_countries';
    }
    static get idColumn() {
        return 'id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['country_code'],
            properties: {
                id: { type: 'integer' },
                country_code: { type: 'string' },
                country_name: { type: 'string' },

            }
        };
    }
}
module.exports = Apps_countries;