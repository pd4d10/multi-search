import { compose } from 'redux'
import { parseGoogle, parseBaidu, parseBing } from '../parser'

const CHANGE_KEYWORD = 'CHANGE_KEYWORD'
const CHANGE_KEYWORD_SUC = 'CHANGE_KEYWORD_SUC'
const CHANGE_KEYWORD_ERR = 'CHANGE_KEYWORD_ERR'

const FETCH_DATA_START = 'FETCH_DATA_START'
const FETCH_DATA_SUC = 'FETCH_DATA_SUC'
const FETCH_DATA_ERR = 'FETCH_DATA_ERR'

export default function reducer(state = {
  keyword: '',
  data: [],
  isLoading: false,
}, action = {}) {
  switch (action.type) {
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword,
      }
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_DATA_SUC:
      return {
        ...state,
        isLoading: false,
        data: action.data
      }
    case FETCH_DATA_ERR:
      return {
        ...state,
        isLoading: false,
        err: action.err,
      }
    default:
      return state
  }
}

export const changeKeyword = keyword => ({
  type: CHANGE_KEYWORD,
  keyword,
})

const fetchDataSuc = data => ({
  type: FETCH_DATA_SUC,
  data,
})

const fetchDataErr = err => ({
  type: FETCH_DATA_ERR,
  err,
})

const fetchDataStart = () => ({
  type: FETCH_DATA_START
})

export const fetchData = keyword => dispatch => {
  dispatch(fetchDataStart())

  const k = encodeURIComponent(keyword)

  const parseMap = [parseGoogle, parseBing, parseBaidu]

  return Promise.all(
    [
      'https://www.google.com/search?q=',
      'https://www.bing.com/search?q=',
      'https://www.baidu.com/s?wd=',
    ].map(
      url => fetch(url + k).then(res => res.text())
    )
  )
    .then(arr => arr.map((x, i) => parseMap[i](x)))
    .then(compose(dispatch, fetchDataSuc))
  //.catch(err => {
  //  console.error(err)
  //  compose(dispatch, changeKeywordErr)(err)
  //})
}
