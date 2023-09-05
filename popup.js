document.getElementById('highlightButton').addEventListener('click', () => {
    const wordInput = document.getElementById('wordInput').value;
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: highlightWords,
        args: [wordInput.split(' ')]
      });
    });
  });
  