const { Model } = require('objection');

class Ra_role extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_role';
    }
    static get idColumn() {
        return 'ra_role_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                ra_role_id:{ type: 'integer' },
                name:{type:'string'},
                status:{ type: 'string' },
                createdAt:{ type: 'datetime' }
            }
        };
    }
}
module.exports = Ra_role;