/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module "gulp-decompress" {
	import type * as decompress from "decompress";
	import type { Transform } from "stream";

	function gulp_decompress(opts: decompress.DecompressOptions): Transform;

	export = gulp_decompress;
}
