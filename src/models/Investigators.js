const { Model } = require('objection');

class Investigators extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'investigators';
  }
  static get idColumn() {
    return 'investigator_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
    //   required: ['investigation_name'],
      properties: {
        investigator_id: { type: 'integer' },
        investigation_name: { type: 'string' },
        designation: { type: 'integer' },
        role:{type:'string'},
        investigation_level:{type:'string'}
      }
    };
  }
}
module.exports = Investigators;