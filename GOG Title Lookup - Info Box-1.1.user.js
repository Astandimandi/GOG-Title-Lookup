// ==UserScript==
// @name         Game Info Box
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Pulls punchy Steam blurbs with a Close button and direct Steam Link.
// @match        https://gog-games.to/*
// @grant        GM_xmlhttpRequest
// @connect      store.steampowered.com
// ==/UserScript==

(function() {
    'use strict';

    const waitForTitle = setInterval(() => {
        const el = document.querySelector(".game-info-title");
        if (el) {
            const rawTitle = el.innerText.trim();
            clearInterval(waitForTitle);
            searchSteam(rawTitle);
        }
    }, 500);

    function searchSteam(title) {
        const searchUrl = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(title)}&l=english&cc=US`;

        GM_xmlhttpRequest({
            method: "GET",
            url: searchUrl,
            onload: function(res) {
                const data = JSON.parse(res.responseText);
                if (data.items && data.items.length > 0) {
                    fetchSteamDetails(data.items[0].id);
                }
            }
        });
    }

    function fetchSteamDetails(appId) {
        const detailUrl = `https://store.steampowered.com/api/appdetails?appids=${appId}`;

        GM_xmlhttpRequest({
            method: "GET",
            url: detailUrl,
            onload: function(res) {
                const data = JSON.parse(res.responseText);
                const gameData = data[appId].data;

                if (gameData) {
                    injectInfo(gameData.name, gameData.short_description, appId);
                }
            }
        });
    }

    function injectInfo(name, text, appId) {
        const box = document.createElement("div");
        box.id = "steam-info-box";
        box.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 9999;
            padding: 15px; background: #1e1e1e; color: #000;
            border: 2px solid #66c0f4; width: 350px; border-radius: 8px;
            font-family: sans-serif; box-shadow: 0 4px 15px rgba(0,0,0,0.5);
        `;


        box.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <h2 style="margin:0; font-size:18px; color:#fff;">${name}</h2>
                <button id="close-steam-box" style="background:none; border:none; color:#66c0f4; cursor:pointer; font-size:18px; font-weight:bold; padding:0 5px;">&times;</button>
            </div>
            <p style="font-size:13px; line-height:1.5; color:#acb2b8; margin-bottom:15px;">${text}</p>
            <a href="https://store.steampowered.com/app/${appId}" target="_blank" style="display:inline-block; background:#66c0f4; color:#000; padding:5px 10px; border-radius:4px; text-decoration:none; font-size:12px; font-weight:bold;">View on Steam</a>
        `;

        document.body.appendChild(box);

        // Functional Close Button
        document.getElementById("close-steam-box").onclick = function() {
            box.remove();
        };
    }
})();
