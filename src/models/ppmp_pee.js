const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp_pee';
    }

    static get idColumn() {
        return 'pmpppeeId';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                pmpppeeId: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                factor: {type: 'string'},
                otimalrange:{type: 'string'},
                initalreading:{type: 'string'},
                controls:{type: 'string'},
                responsibility:{type: 'string'},
                workdone:{type: 'boolean'},
                addons:{type: 'string'},
                remark:{type: 'string'},
                createdBy:{type:'string'},
                createdAt: {type: 'datetime'},
                updatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
