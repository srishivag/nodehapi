const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp_pcagent';
    }

    static get idColumn() {
        return 'pcaagent';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                pcaagent: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                agent: {type: 'string'},
                nature:{type: 'string'},
                twa:{type: 'string'},
                stel:{type: 'string'},
                intialreading:{type: 'string'},
                control:{type: 'string'},
                responsibility:{type: 'string'},
                workdone:{type: 'boolean'},
                Addons:{type: 'string'},
                Remarks:{type: 'string'},
                createdBy:{type:'string'},
                createdAt: {type: 'datetime'},
                updatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
