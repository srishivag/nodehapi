const { Model } = require('objection');

class employee_technical_skills extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'employee_technical_skills';
  }
  static get idColumn() {
    return 'id';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'integer' },
        emp_id : { type: 'string' },
        technical_skill: {type:'string'},	
        experience: {type:'string'},  
        status: { type: 'integer'},
        created_at: { type: 'date'},
        updated_at: { type: 'date'},
      }
    };
  }
}
module.exports = employee_technical_skills;