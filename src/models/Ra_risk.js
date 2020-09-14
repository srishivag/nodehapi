const { Model } = require('objection');

class Ra_risk extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ra_risk';
    }
    static get idColumn() {
        return 'risk_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            //required: ['ra_assessment_id'],
            properties: {
                risk_id:{ type: 'integer' },
                ts_ref_no:{ type: 'string' },
                title:{type:'string'},
                decription:{ type: 'string' },
                location:{ type: 'integer' },
                raconductedOn:{ type: 'date' },
                status:{ type: 'string' },
                ratype:{type:'integer'},
                createdBy:{type:'string'},
                createdAt:{ type: 'datetime' },
                updatedAt:{ type: 'datetime'}
            }
        };
    }
}
module.exports = Ra_risk;
