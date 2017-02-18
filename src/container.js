import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  TextField,
  CircularProgress,
  Card,
  GridList,
  GridTile,
  RaisedButton,
} from 'material-ui'
import { changeKeyword, fetchData } from './reducers'

import style from './style.css'

const Input = ({ change, submit, keyword }) => (
  <form action="" onSubmit={submit(keyword)}>
    <TextField id="input" onChange={change} />
    <RaisedButton label="Search" primary={true} style={style} onClick={submit(keyword)} />
  </form>
)

const DataInput = connect(
  ({ keyword }) => ({ keyword }),
  dispatch => ({
    change: event => dispatch(changeKeyword(event.target.value)),
    submit: keyword => event => {
      console.log(event)
      event.preventDefault()
      dispatch(fetchData(keyword))
    }
  })
)(Input)

//const List = ({ list }) => (
//  <GridTile
//    //key={tile.img}
//    //title="abc
//    //actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
//    //actionPosition="left"
//    //titlePosition="top"
//    //titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
//    //cols={1}
//    rows={1}
//    style={{
//      height: 'auto'
//    }}
//  >
//    {list.map(item => (
//      <Item {...item} />
//    ))}
//  </GridTile>
//)

const List = ({ list }) => (
  <div dangerouslySetInnerHTML={{__html: `<iframe srcdoc="${list.html}" />`}}>
    {/*<style dangerouslySetInnerHTML={{__html: list.style}}></style>
    <div dangerouslySetInnerHTML={{__html: list.html}}></div>*/}
  </div>
)

const Lists = ({ lists, isLoading }) => isLoading ? (
  <CircularProgress size={1} />
) : (
  <GridList
    cols={3}
    padding={12}
    //style={{
    //  height: 'auto'
    //}}
  >
    {lists.map((data) => (
      <List list={data} />
    ))}
  </GridList>
)

const DataLists = connect(
  ({
    data: lists,
    isLoading,
  }) => ({
    lists,
    isLoading,
  }),
)(Lists)


const Item = ({ url, title, abstract }) => (
  <Card
    style={{
    margin: '10px',
    padding: '10px'
    }}
  >
    <a
      target="_blank"
      href={url}
      className={style.link}
    >
      <h3
        dangerouslySetInnerHTML={{__html: title}}
        className={style.title}
      ></h3>
    </a>
    <div className={style.url}>{url}</div>
    <p
      dangerouslySetInnerHTML={{__html: abstract}}
      className={style.abstract}
    ></p>
  </Card>
)

export default class Root extends Component {
  componentDidMount() {
    document.querySelector('#input').focus()
  }

  render() {
    return (
      <div>
        <DataInput />
        <DataLists />
      </div>
    )
  }
}
