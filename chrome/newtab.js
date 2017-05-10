chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // document.querySelector('#content').innerHTML = message

  const keyword = encodeURIComponent(message)

  fetch(`https://www.google.com/search?q=${keyword}`)
    .then(res => res.text())
    .then(text => {
      document.querySelector('#google').srcdoc = text
    })

  fetch(`https://www.baidu.com/s?wd=${keyword}`)
    .then(res => res.text())
    .then(text => {
      document.querySelector('#baidu').srcdoc = text
    })

  fetch(`https://www.bing.com/search?q=${keyword}`)
    .then(res => res.text())
    .then(text => {
      document.querySelector('#bing').srcdoc = text
    })
})
