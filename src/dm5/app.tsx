/*
SPDX-License-Identifier: GPL-3.0-or-later
This file is part of dm5.user.js
Copyright (C) 2024 fym

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import {
  For,
  createSignal,
  createResource,
  Show,
  createEffect,
} from 'solid-js';
import { render } from 'solid-js/web';
// global CSS
import globalCss from './style.css';
globalCss;
// CSS modules
import styles from './style.module.css';
// stylesheet;

async function fetchImageURLs(): Promise<string[]> {
  const count = DM5_IMAGE_COUNT;
  const ret = Array(count + 1);
  const params = new URLSearchParams({
    cid: DM5_CID.toString(),
    key: (document.querySelector('#dm5_key') as HTMLInputElement).value,
    language: (1).toString(),
    gtk: (6).toString(),
    _cid: DM5_CID.toString(),
    _mid: DM5_MID.toString(),
    _dt: DM5_VIEWSIGN_DT.toString(),
    _sign: DM5_VIEWSIGN.toString(),
  });
  for (let i = 1; i <= count; i++) {
    if (ret[i]) continue;

    params.set('page', i.toString());
    const code = await (
      await fetch(`chapterfun.ashx?${params.toString()}`)
    ).text();
    const URLs: string[] = eval(code);

    console.log(params.toString(), URLs);

    URLs.forEach((URL) => {
      const page = Number(URL.match(/\/(\d+)_/)[1]);
      ret[page] = URL;
    });
  }
  return ret;
}

function setHistory(page: number) {
  SetReadHistory(DM5_CID, DM5_MID, page, DM5_USERID);
}

function goToPage(index: number) {
  window.location.hash = `#ipg${index}`;
}

const ImageFlow = () => {
  const [imageURLs] = createResource(fetchImageURLs);
  const imageCount = DM5_IMAGE_COUNT;
  const [currentPage, setCurrentPage] = createSignal(DM5_PAGE);

  createEffect(() => {
    if (imageURLs()) {
      goToPage(currentPage());
      setHistory(currentPage());
    }
  });

  return (
    <div class={styles.imageflow}>
      <For each={imageURLs()}>
        {(URL, i) => (
          <Show when={URL}>
            <img
              id={`ipg${i()}`}
              src={URL}
              onClick={() => {
                if (i() < imageCount) setCurrentPage(i() + 1);
              }}
              onLoad={() => {
                if (currentPage() === i()) goToPage(i());
              }}
              alt={`page ${i()}`}
              title={`page ${i()}`}
              loading="lazy"
            />
          </Show>
        )}
      </For>
    </div>
  );
};

const container = document.querySelector('#cp_img, #barChapter');
container.removeAttribute('oncontextmenu');
container.parentElement.removeAttribute('oncontextmenu');
if (container.id === 'cp_img') {
  render(ImageFlow, container);
} else if (container.id === 'barChapter') {
  container.querySelectorAll('img').forEach((img) => {
    img.removeAttribute('onclick');
  });
}
document.querySelector('footer').style.display = 'none';

const backAnchorHTML = `
<a href=${(document.querySelector('a.back') as HTMLAnchorElement).href}>
  <div>退出</div>
</a>`;
document
  .querySelector('.rightToolBar')
  .insertAdjacentHTML('afterbegin', backAnchorHTML);

const metaViewPointHTML = `<meta name="viewport" content="width=device-width, initial-scale=1">`;
document.head.insertAdjacentHTML('afterbegin', metaViewPointHTML);
