
const { Model } = require('objection');
class Form2 extends Model {
    static get tableName() {
        return '' + PREFIX + 'form2';
    }
    static get idColumn() {
        return 'id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            // required: ['frwd_id'],
            properties: {
                ref_num: { type: 'string' },
                date_and_time: { type: 'date' },
                // next_status: { type: 'integer' },
                user_id: { type: 'string' },
                // inc1_id: { type: 'integer' },
                // inc2_id: { type: 'integer' },
                // p_id: { type: 'integer' },
                // equi_id: { type: 'integer' },
                // sub_id: { type: 'integer' },
                // premi_id: { type: 'integer' },
                // rem_id: { type: 'integer' },
                // r_id: { type: 'integer' },
                // acc_id: { type: 'integer' },
                // assmnt_id: { type: 'integer' },
                // investigation_id: { type: 'integer' },


            }
        };
    }

}
module.exports = Form2;