/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { execSync } from 'child_process';
import devices from '../../node_modules/puppeteer/DeviceDescriptors';

const rootDir = execSync('git rev-parse --show-toplevel');
const chromeExecutablePath = '/usr/bin/chromium-browser';
const beforeScreenshot = () => new Promise((resolve) => setTimeout(() => { resolve(); }, 600));
const imageSnapshotOptions = {
  storybookUrl: `file://${rootDir}/storybook-static`,
  beforeScreenshot,
  chromeExecutablePath
};

const buildSnapshotIdentifier = (arr) => arr
  .map((word) => word.replace(/[/ ]/g, '-')).join('_').toLowerCase();

['iPhone 6', 'iPad Pro landscape'].forEach((device) => {
  initStoryshots({
    suite: `${device} visual regression tests`,
    test: imageSnapshot({
      ...imageSnapshotOptions,
      // eslint-disable-next-line security/detect-object-injection
      customizePage: (page) => page.emulate(devices[device]),
      getMatchOptions: ({ context: { kind, story } }) => ({
        customDiffConfig: {
          // The box-shadow causes random failures, so upping the per pixel threshold from default 0.01
          threshold: (kind === 'navigation/NavBar' ? 0.1 : 0.01)
        },
        customSnapshotIdentifier: buildSnapshotIdentifier([device, kind, story])
      })
    })
  });
});
