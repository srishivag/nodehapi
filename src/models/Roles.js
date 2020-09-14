const { Model } = require('objection');
class Roles extends Model {
    static get tableName() {
        return '' + PREFIX + 'roles';
    }
    static get idColumn() {
        return 'rid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['created_at'],
            properties: {
                rid: { type: 'integer' },
                role: { type: 'string' },
                status: { type: 'integer' },
                created_at: { type: 'datetime' },
                updated_at: { type: 'datetime' }
            }
        };
    }

}
module.exports = Roles;