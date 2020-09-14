const { Model } = require('objection');

class Investigation extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'investigation';
  }
  static get idColumn() {
    return 'investigation_id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      //   required: ['investigation_person_id'],
      properties: {
        ref_num: { type: 'string' },
        form: { type: 'integer' },
        draft: { type: 'integer' },
        next_status: { type: 'integer' },
        user_id: { type: 'string' },
        further_investigation: { type: 'string' },
        investigation_level: { type: 'string' },
        team_leader: { type: 'string' },
        team_member:{ type: 'string' },
        cause_analysis_rqd: { type: 'string' },
        analysis_tool: { type: 'string' },
        priority: { type: 'string' },
        team_member1: { type: 'string' },
        team_member2: { type: 'string' },
        team_member3: { type: 'string' },
        team_member4: { type: 'string' },
        notes: { type: 'string' },
      }
    };
  }
}
module.exports = Investigation;