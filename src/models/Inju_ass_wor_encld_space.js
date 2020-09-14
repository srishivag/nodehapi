
const { Model } = require('objection');

class Inju_ass_wor_encld_space extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'inju_ass_wor_encld_space';
  }
  static get idColumn() {
    return 'encld_space_id';
  }
   
  static get jsonSchema() {
    return {
      type: 'object',
     required: ['body_part_aff'],
      properties: {
        encld_space_id: { type: 'integer' },
        body_part_aff: { type: 'string' },
        created_at: { type: 'datetime' },
        updatted_at	: { type: 'datetime' }

      }
    };
  }
}
module.exports = Inju_ass_wor_encld_space;