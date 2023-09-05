function highlightWords(wordsToHighlight) {
  function highlightWord(node, word) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      const highlightedText = text.replace(regex, `<span style="background-color: yellow;">$&</span>`);
      node.replaceWith(new DOMParser().parseFromString(highlightedText, 'text/html').body.firstChild);
    } else {
      for (const childNode of node.childNodes) {
        highlightWord(childNode, word);
      }
    }
  }

  wordsToHighlight.forEach(word => {
    highlightWord(document.body, word);
  });
}
