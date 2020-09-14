const {
    Model
} = require('objection');

class Company_licenses extends Model {
    // Table name is the only required property.
    static get tableName() {
        return '' + PREFIX + 'Company_licenses';
    }
    static get idColumn() {
        return ' c_id';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['license_type'],

            properties: {
                c_id: {
                    type: 'integer'
                },
                license_type: {
                    type: 'string'
                },
                license_no: {
                    type: 'string'
                },
                valid_from: {
                    type: 'datetime'
                },
                valid_to: {
                    type: 'datetime'
                },
                status: {
                    type: 'integer'
                },
                created_on: {
                    type: 'datetimemp'
                },
                updated_on: {
                    type: 'datetime'
                }
            }
        }
    }
}
module.exports = Company_licenses;