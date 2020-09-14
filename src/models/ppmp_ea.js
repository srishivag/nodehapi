const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp_ea';
    }

    static get idColumn() {
        return 'ppmp_eaid';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                ppmp_eaid: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                equipmentId: {type: 'integer'},
                location:{type: 'string'},
                distance:{type: 'string'},
                type:{type: 'string'},
                status:{type: 'string'},
                lastinspectiondate:{type: 'datetime'},
                responsibility:{type: 'string'},
                adequate:{type: 'boolean'},
                addons:{type: 'string'},
                spare1:{type: 'string'},
                remark:{type: 'string'},
                createdBy:{type: 'string'},
                createdAt: {type: 'datetime'},
                updatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
