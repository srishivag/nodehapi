const { Model } = require('objection');

class Confined_path_locations extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'confined_path_locations';
    }
    static get idColumn() {
        return 'epl_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['co_id'],

            properties: {
                epl_id: { type: 'integer' },
                co_id: { type: 'integer' },
                loc_id: { type: 'integer' },
                created_on: { type: 'datetime' },
            }
        };
    }
}
module.exports = Confined_path_locations;