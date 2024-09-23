document.getElementById('blockButton').addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: removeCommentsDiv,
    });
  });
  
  function removeCommentsDiv() {
    // This function should be the same as in content.js
  }