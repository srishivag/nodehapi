const {
  Model
} = require('objection');

class All_roles extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'all_roles';
  }
  static get idColumn() {
    return 'rid';
  }
  static get relationMappings() {
    return {
      ar: {
        relation: Model.BelongsToOneRelation,
        modelClass: All_roles,
        join: {
          from: '' + PREFIX + 'ar.rid',
          to: '' + PREFIX + 'aur.role'
        }
      },
    }
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['roleid'],
      properties: {
        rid: { type: 'integer' },
        module: { type: 'integer' },
        roleid: { type: 'integer' },
        status: { type: 'integer' },
        created_on: { type: 'datetime' },
        modified_on: { type: 'datetime' }
      }
    };
  }
}
module.exports = All_roles;