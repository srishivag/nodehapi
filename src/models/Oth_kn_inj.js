
const { Model } = require('objection');

class Oth_kn_inj extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'oth_kn_inj';
  }
  static get idColumn() {
    return 'oth_kn_inj_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['oth_kn_inj_affe'],
      properties: {
        oth_kn_inj_id: { type: 'integer' },
        oth_kn_inj_affe	: { type: 'string' },
        created_at: { type: 'date' },
        updatted_at	: { type: 'date' }

      }
    };
  }
}
module.exports =Oth_kn_inj;