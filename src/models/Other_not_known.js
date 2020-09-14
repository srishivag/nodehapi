const { Model } = require('objection');

class Other_not_known extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'other_not_known';
  }
  static get idColumn() {
    return 'oth_not_kn_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['oth_not_kn_affe'],
      properties: {
        oth_not_kn_id: { type: 'integer' },
        oth_not_kn_affe	: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports =Other_not_known;