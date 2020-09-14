const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp_material_details';
    }

    static get idColumn() {
        return 'ppmm_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                ppmm_id: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                elementid: {type: 'integer'},
                nature:{type: 'integer'},
                phase:{type: 'integer'},
                quantity:{type: 'integer'},
                quantityunit:{type: 'string'},
                container:{type: 'string'},
                fitforpurpose:{type: 'boolean'},
                addons:{type: 'string'},
                remark:{type: 'string'},
                createdAt: {type: 'datetime'},
                updatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
