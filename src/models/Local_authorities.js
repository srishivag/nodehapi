const { Model } = require('objection');

class Local_authorities extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'local_authorities';
  }
  static get idColumn() {
    return 'local_authorities_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
    //  required: ['intel_inju_affect'],
      properties: {
        local_authorities_id: { type: 'integer' },
        local_authorities_name	: { type: 'string' },
        local_authorities_create: { type: 'datetime' },
        local_authorities_update	: { type: 'datetime' }

      }
    };
  }
}
module.exports =Local_authorities;