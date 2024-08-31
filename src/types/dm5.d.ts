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

declare const isVip: string;
declare const DM5_COOKIEDOMAIN: string;
declare const COMIC_MID: number;
declare const DM5_CURL: string;
declare const DM5_CURL_END: string;
declare const DM5_CTITLE: string;
declare const DM5_MID: number;
declare const DM5_CID: number;
declare const DM5_IMAGE_COUNT: number;
declare const DM5_USERID: number;
declare const DM5_FROM: string;
declare const DM5_PAGE: number;
declare const DM5_PAGETYPE: number;
declare const DM5_PAGEINDEX: number;
declare const DM5_PAGEPCOUNT: number;
declare const DM5_POSTCOUNT: number;
declare const DM5_TIEBATOPICID: string;
declare const DM5_LOADIMAGEURL: string;
declare const DM5_LOADIMAGEURLW: string;
declare const DM5_LOADIMAGEURLWH: string;
declare const DM5_LOADINGIMAGE: string;
declare const DM5_READMODEL: number;
declare const DM5_CURRENTFOCUS: number;
declare const DM5_VIEWSIGN: string;
declare const DM5_VIEWSIGN_DT: string;
declare function SetReadHistory(
  cid: typeof DM5_CID,
  mid: typeof DM5_MID,
  p: typeof DM5_PAGE,
  uid: typeof DM5_USERID,
);
