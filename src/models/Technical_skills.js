const { Model } = require('objection');
class Technical_skills extends Model {
    static get tableName() {
        return '' + PREFIX + 'technical_skills';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['skill_name'],
            properties: {
                id: { type: 'integer' },
                skill_name: { type: 'integer' },
                created_on: { type: 'datetime' }
            }
        };
    }

}
module.exports = Technical_skills;