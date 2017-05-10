chrome.omnibox.onInputEntered.addListener((text, suggest) => {
  // console.log(text, suggest)
  // suggest([])

  chrome.runtime.sendMessage(text)
})
