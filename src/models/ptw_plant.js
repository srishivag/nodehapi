const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_plant_table';
    }

    static get idColumn() {
        return 'ppl_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                ppl_id: {type: 'integer'},
                plantid: {type: 'string'},
                plantname: {type: 'string'},
                status: {type: 'boolean'},
                createdAt: {type: 'datetime'},
                updaatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
