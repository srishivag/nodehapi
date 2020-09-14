const { Model } = require('objection');

class Config_emergency_paths extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'config_emergency_paths';
    }
    static get idColumn() {
        return 'c_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['emergency_path'],

            properties: {
                c_id: { type: 'integer' },
                emergency_path: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' },
            }
        };
    }
}
module.exports = Config_emergency_paths;