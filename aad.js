// ==UserScript==
// @name         Anti-Anti AD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Kingron
// @run-at       document-start
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    // 创建 MutationObserver 监听器, 检查每个 DOM 变化
    var observer = new MutationObserver(function(mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (var addedNode of mutation.addedNodes) {
                    // 检查是否是 <script> 元素
                    if (addedNode.tagName === 'SCRIPT') {
                        if (addedNode.src.indexOf('adsninja_client.js' > 0)) {
                            addedNode.src = "";
                        }
                        addedNode.textContent = addedNode.textContent.replace("r9aeadS();", "");
                        addedNode.textContent = addedNode.textContent.replace("document.getElementById('google_esf')", "document.body");
                    }
                }
            }
        }
    });
    // 监听整个文档树的变化
    observer.observe(document, { childList: true, subtree: true });
    document.addEventListener("DOMContentLoaded", function () {
        const node = document.createElement('div');
        node.id = 'google_esf';
        node.style.display = 'none';
        document.body.appendChild(node);
    });
})();
