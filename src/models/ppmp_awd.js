const {Model} = require('objection');

class ptw_plant extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'ptw_ppmp_awd';
    }

    static get idColumn() {
        return 'powwe_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['person_name'],
            properties: {
                powwe_id: {type: 'integer'},
                ptw_ref_id: {type: 'string'},
                ptw_id: {type: 'integer'},
                interaction: {type: 'integer'},
                activity: {type: 'string'},
                title: {type: 'string'},
                interactivehazard: {type: 'string'},
                docRefNo: {type: 'string'},
                NoofPeople: {type: 'integer'},
                candowork: {type: 'boolean'},
                Addons: {type: 'string'},
                Remarks: {type: 'string'},
                createdBy: {type: 'string'},
                createdAt: {type: 'datetime'},
                updatedAt: {type: 'datetime'}
            }
        };
    }
}

module.exports = ptw_plant;
