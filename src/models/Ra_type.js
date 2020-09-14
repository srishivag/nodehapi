const { Model } = require('objection');

class Ra_type extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_type';
    }
    static get idColumn() {
        return 'type_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                type_id:{ type: 'integer' },
                name:{type:'string'},
                status:{ type: 'string' },
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime' }
            }
        };
    }
}
module.exports = Ra_type;