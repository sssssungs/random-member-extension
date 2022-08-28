
chrome.action.onClicked.addListener(async (tab) => {
    chrome.tabs.create({active: true, url: "https://random-member.github.io"});
})

