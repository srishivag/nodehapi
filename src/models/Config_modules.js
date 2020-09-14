const {
  Model
} = require('objection');

class Config_modules extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'config_modules';
  }
  static get idColumn() {
    return 'md_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['short_code'],

      properties: {
        md_id: { type: 'integer' },
        short_code: { type: 'string' },
        module_name: { type: 'string' },
        status: { type: 'integer' },
        created_on: { type: 'datetime' },
        modified_on: { type: 'datetime' },
      }
    };
  }
}
module.exports = Config_modules;