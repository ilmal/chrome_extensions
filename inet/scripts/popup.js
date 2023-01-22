
const handler = () => {
    let selected_value = document.getElementById("min_discount").value
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, selected_value);
    });
}


document.getElementById('btn_check').addEventListener('click', handler);


