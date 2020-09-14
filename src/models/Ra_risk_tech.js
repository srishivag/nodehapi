const { Model } = require('objection');

class Ra_risk_tech extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_risk_techinque';
    }
    static get idColumn() {
        return 'techId';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                techId:{ type: 'integer' },
                name:{type:'string'},
                status:{ type: 'string' },
                createdAt:{ type: 'datetime' },
                createdBy:{type:'integer'},
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_risk_tech;
