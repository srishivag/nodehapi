const { Model } = require('objection');

class Link_permits_technicalskills extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'link_permits_technicalskills';
    }
    static get idColumn() {
        return 'l_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['id'],

            properties: {
                l_id: { type: 'integer' },
                id: { type: 'integer' },
                technical_skills: { type: 'integer' },
                emp_count: { type: 'integer' },
                status: { type: "integer" },
                created_on: { type: 'datetime' },
                updated_on: { type: 'datetime' },
            }
        };
    }
}
module.exports = Link_permits_technicalskills;