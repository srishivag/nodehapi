const { Model } = require('objection');

class Ra_specific extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_specific';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                id:{ type: 'integer' },
                name:{type:'string'},
                status:{ type: 'string' },
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime' }
            }
        };
    }
}
module.exports = Ra_specific;