const { Model } = require('objection');
const All_roles = require('../models/All_roles')
class Config_roles extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'config_roles';
    }
    static get idColumn() {
        return 'rol_id';
    }
    static get relationMappings() {
        return {
            ar: {
                relation: Model.BelongsToOneRelation,
                modelClass: All_roles,
                join: {
                    from: '' + PREFIX + 'cr.rol_id',
                    to: '' + PREFIX + 'ar.roleid'
                }
            },
        }
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['role_name'],

            properties: {
                rol_id: { type: 'integer' },
                role_name: { type: 'string' },
                status: { type: 'integer' },
                created_on: { type: 'datetime' },
                modified_on: { type: 'datetime' }
            }
        };
    }
}
module.exports = Config_roles;