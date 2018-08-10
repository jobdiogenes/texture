import DefaultModel from './DefaultModel'
import { getLabel } from '../shared/nodeHelpers'

export default class ArticleRecord extends DefaultModel {
  get type () {
    return 'article-record'
  }

  get id () {
    return 'article-record'
  }

  getLabel () {
    return getLabel(this._node)
  }
}