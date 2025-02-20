/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { scenario, hover, focus } = require('./~scenarioHelper.cjs');

module.exports = [
  // Select types
  scenario('Type Default', {
    selectors: ['#demo-default'],
    viewports: [{ width: 800, height: 600 }],
  }),

  scenario('Type Borderless', {
    selectors: ['#demo-borderless'],
    viewports: [{ width: 800, height: 600 }],
  }),

  // Select Without Label types
  scenario('Type Without Label', {
    selectors: ['#demo-no-label'],
  }),

  scenario('Sizes', {
    selectors: ['#demo-sizes'],
    viewports: [{ width: 800, height: 600 }],
  }),

  // Hover states
  scenario('State hover', {
    actions: [hover('#test-select-1')],
    selectors: ['#demo-default-singular'],
    viewports: [{ width: 800, height: 600 }],
  }),

  scenario('State hover', {
    actions: [hover('#test-select-2')],
    selectors: ['#demo-borderless-singular'],
    viewports: [{ width: 800, height: 600 }],
  }),

  // Focus states
  scenario('State focus', {
    actions: [focus('#test-select-1')],
    selectors: ['#demo-default-singular'],
    viewports: [{ width: 800, height: 600 }],
  }),

  scenario('State focus', {
    actions: [focus('#test-select-2')],
    selectors: ['#demo-borderless-singular'],
    viewports: [{ width: 800, height: 600 }],
  }),

  // Inline combo
  scenario('Inline combo', {
    selectors: ['#demo-inline-combo'],
    viewports: [{ width: 800, height: 600 }],
  }),

  // Multi demo
  scenario('Type Multi', {
    selectors: ['#demo-multi'],
    viewports: [{ width: 800, height: 600 }],
  }),
];
