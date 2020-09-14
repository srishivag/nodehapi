const { Model } = require('objection');

class Config_precautions extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'config_precautions';
    }
    static get idColumn() {
        return 'cp_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['precaution_code'],

            properties: {
                cp_id: { type: 'integer' },
                precaution_code: { type: 'string' },
                precaution_name: { type: 'string' },
                precaution_type: { type: 'string' },
                status: { type: 'integer' }
            }
        };
    }
}
module.exports = Config_precautions;