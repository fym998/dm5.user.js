// ==UserScript==
// @name        DM5 动漫屋滚动阅读
// @namespace   https://github.com/fym998/
// @description DM5 动漫屋滚动阅读，展示章节内的所有图片。如果空间允许，会将图片从右到左排列。点击图片切换至下一张。
// @run-at      document-end
// @match       *://www.dm5.com/m*/
// @match       *://www.dm5.cn/m*/
// @exclude-match *://www.dm5.com/manhua-*/
// @exclude-match *://www.dm5.cn/manhua-*/
// @version     ${pkg.version}
// @author      ${pkg.author}
// @license     GPL-3.0-or-later
// @supportURL  https://github.com/fym998/dm5.user.js/issues
// @icon        https://www.dm5.com/favicon.ico
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/ui@0.7
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2/dist/solid.min.js
// ==/UserScript==

/**
 * Code here will be ignored on compilation. So it's a good place to leave messages to developers.
 *
 * - The `@grant`s used in your source code will be added automatically by `rollup-plugin-userscript`.
 *   However you have to add explicitly those used in required resources.
 * - `process.env.VERSION` and `process.env.AUTHOR` will be loaded from `package.json`.
 */
