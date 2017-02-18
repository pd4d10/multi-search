const convertToDOM = html => new DOMParser().parseFromString(html, 'text/html')

export const parseGoogle = html => {
  // const dom = convertToDOM(html)
  // const results = dom.querySelectorAll('.g')

  //return [].map.call(results, dom => {
  //  const titleDOM = dom.querySelector('.r>a')
  //  const abstractDOM = dom.querySelector('.st')
  //
  //  return {
  //    title: titleDOM ? titleDOM.innerHTML : '无',
  //    url: titleDOM ? titleDOM.href : 'javascript:',
  //    abstract: abstractDOM ? abstractDOM.innerHTML : '无',
  //  }
  //})
  return {
    // html: dom.querySelector('.srg').innerHTML,
    // style: dom.querySelector('#gstyle').innerHTML,
    html: ''
  }
}

export const parseBing = html => {
  const dom = convertToDOM(html)
  //const results = dom.querySelectorAll('.b_algo')
  //
  //return [].map.call(results, dom => {
  //  const titleDOM = dom.querySelector('h2>a')
  //  const abstractDOM = dom.querySelector('.b_caption>p')
  //
  //  return {
  //    title: titleDOM ? titleDOM.innerHTML : '无',
  //    url: titleDOM ? titleDOM.href : 'javascript:',
  //    abstract: abstractDOM ? abstractDOM.innerHTML : '无',
  //  }
  //})
  return {
    // html: dom.querySelector('#b_results').innerHTML,
    // style: [].map.call(dom.querySelectorAll('style'), x => x.innerHTML).join('\n')
    html,
  }
}

export const parseBaidu = html => {
  const dom = convertToDOM(html)
  //const results = dom.querySelectorAll('.result')
  //
  //return [].map.call(results, dom => {
  //  const titleDOM = dom.querySelector('h3>a')
  //  const abstractDOM = dom.querySelector('.c-abstract')
  //
  //  return {
  //    title: titleDOM ? titleDOM.innerHTML : '无',
  //    url: titleDOM ? titleDOM.href : 'javascript:',
  //    abstract: abstractDOM ? abstractDOM.innerHTML : '无',
  //  }
  //})
  return {
    // html: dom.querySelector('#content_left').innerHTML,
    // style: [].map.call(dom.querySelectorAll('style'), x => x.innerHTML).join('\n')
    html,
  }
}
