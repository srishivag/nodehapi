const { Model } = require('objection');

class Ra_hazard_list extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_hazard_list';
    }
    static get idColumn() {
        return 'hazardId';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                hazardId:{ type: 'integer' },
                name:{type:'string'},
                status:{type:'string'},
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_hazard_list;