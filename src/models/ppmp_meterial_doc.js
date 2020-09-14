const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp_material_doc';
    }

    static get idColumn() {
        return 'ppmpdoc_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                ppmpdoc_id: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                ppmm_id: {type: 'integer'},
                doc_name:{type: 'string'},
                doc_path:{type: 'string'},
                status:{type: 'boolean'},
                createdBy:{type:'string'},
                createdAt: {type: 'datetime'},
                updatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
