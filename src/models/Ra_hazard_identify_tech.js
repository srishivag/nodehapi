const { Model } = require('objection');

class Ra_hazard_identify_tech extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_hazard_identify_tech';
    }
    static get idColumn() {
        return 'hazidentech';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                hazidentech:{ type: 'integer' },
                ra_ref_no:{ type: 'string' },
                ra_id:{type:'integer'},
                ra_risk_technique:{ type: 'integer' },
                status:{type:'string'},
                createdBy:{type:'integer'},
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_hazard_identify_tech;
