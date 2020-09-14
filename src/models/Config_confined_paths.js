const {
    Model
} = require('objection');

class Config_confined_paths extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'config_confined_paths';
    }
    static get idColumn() {
        return 'co_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [' confined_path'],

            properties: {
                co_id: {
                    type: 'integer'
                },
                confined_path: {
                    type: 'string'
                },
                status: {
                    type: 'integer'
                },
                created_on: {
                    type: 'datetime'
                },
            }
        };
    }
}
module.exports = Config_confined_paths;