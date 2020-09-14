const { Model } = require('objection');

class Document_user_role extends Model {
  // Table name is the only required property.
  static get tableName() {
    return '' + PREFIX + 'document_user_role';
  }
  static get idColumn() {
    return 'link_id';
  }
  static get relationMappings() {
    return {
      d: {
        relation: Model.BelongsToOneRelation,
        modelClass: documents,
        join: {
          from: '' + PREFIX + 'dr.doc_id and dr.role =Review,',
          to: '' + PREFIX + 'd.doc_id,d.doc_id and da.role = Approve'
        }
      },
      d: {
        relation: Model.BelongsToOneRelation,
        modelClass: documents,
        join: {
          from: '' + PREFIX + 'dp.doc_id,dp.role =Prepare and  dp.role = Prepare',
          to: '' + PREFIX + ' d.doc_id'
        }
      },
      e: {
        relation: Model.BelongsToOneRelation,
        modelClass: employees,
        join: {
          from: '' + PREFIX + 'da.doc_id',
          to: '' + PREFIX + 'e.emp_id '
        }
      },
      u: {
        relation: Model.BelongsToOneRelation,
        modelClass: employees,
        join: {
          from: '' + PREFIX + 'dur.userid',
          to: '' + PREFIX + 'u.userid '
        }
      },
    }
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['link_id'],
      properties: {
        link_id: { type: 'integer' },
        doc_id: { type: 'integer' },
        userid: { type: 'string' },
        role: { type: 'string' },
        status: { type: 'integer' },
        created_at: { type: 'date' },
        updated_at: { type: 'date' },
      }
    };
  }
}
module.exports = Document_user_role;