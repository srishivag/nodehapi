const { Model } = require('objection');

class All_user_roles extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'all_user_roles';
  }
  static get idColumn() {
    return 'urid';
  }
  static get relationMappings() {
    return {
      aur: {
        relation: Model.BelongsToOneRelation,
        modelClass: All_user_roles,
        join: {
          from: '' + PREFIX + 'e.emp_id',
          to: '' + PREFIX + 'aur.emp_id'
        }
      },
    }
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['emp_id'],
      properties: {
        urid: { type: 'integer' },
        emp_id: { type: 'integer' },
        role: { type: 'integer' },
        display_name: { type: 'string' },
        change_date: { type: 'date' },
        upto: { type: 'date' }

      }
    };
  }
}
module.exports = All_user_roles;