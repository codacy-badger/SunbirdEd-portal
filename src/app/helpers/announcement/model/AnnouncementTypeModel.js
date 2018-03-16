let BaseModel = require('./BaseModel.js')
let Joi = require('joi')
/**
 * Whichs is used to validate the model object
 */
let modelSchema = Joi.object().keys({
  id: Joi.string().required(),
  rootorgid: Joi.string().required(),
  createddate: Joi.string().required(),
  name: Joi.string().min(2).max(50).required(),
  status: Joi.string().valid('active', 'inactive').required()
})

/**
 * Which is used to validate the api request object
 * @type {Object}
 */
let apiSchema = Joi.object().keys({
  request: Joi.object().keys({
    rootOrgId: Joi.string().required(),
    name: Joi.string().min(2).max(50).required(),
    status: Joi.string().valid('active', 'inactive').required()
  }).required()
})

class AnnouncementTypeModel extends BaseModel {
  constructor (modelSchema = {}, apiSchema = {}) {
    super()

    /**
     * Which defines the name of the table
     */
    this.table = 'announcementtype'

    /**
     * Defined schema which is used to validate the api request object structure.
     */
    this.apiSchema = apiSchema

    /**
     * Defined schema which is used to validate the model object structure.
     */
    this.modelSchema = modelSchema
  }
  /**
     * Which is used to validate the api request object structure based on the `this.apiSchema`
     * @param  {object} obj - request object
     * @return {object}
     */
  validateApi (obj) {
    return this.validate(obj, this.apiSchema)
  }
  /**
   * Which is used to validat the model object.
   * @param  {object} obj - Model request object.
   * @return {object}
   */
  validateModel (obj) {
    return this.validate(obj, this.modelSchema)
  }
  /**
   * Which is used to get the model subschema
   * @param  {string} key
   */
  getModelSubSchema (property) {
    return this.modelSubSchema(property)
  }

  /**
   * Which is used to get the api subschema
   * @param  {string} key
   */
  getApiSubSchema (property) {
    return this.apiSubSchema(property)
  }
}
module.exports = new AnnouncementTypeModel(modelSchema, apiSchema)
