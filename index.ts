/**
 * @license
 * Copyright (c) TechAurelian
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Re-export everything that the user needs to access from this Astro integration.
// Currently, this is the Link Astro component.

import type { AstroIntegration } from 'astro';
import { IntegrationOptions } from './src/types';

declare global {
  // eslint-disable-next-line no-var
  var astroLinkPlusOptions: IntegrationOptions;
}

export default function integration(options: IntegrationOptions = {}): AstroIntegration {
  globalThis.astroLinkPlusOptions = options;
  console.log('Options passed to me, the integration:', astroLinkPlusOptions);

  return {
    name: 'astro-link-plus',
    hooks: {},
  };
}
