/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import { execSync } from 'child_process';

const rootDir = execSync('git rev-parse --show-toplevel');

const chromeExecutablePath = '/usr/bin/chromium-browser';

const getMatchOptions = ({ context: { kind, story } }) => ({
  customDiffConfig: {
    // The box-shadow on the nav drawer was causing random failures, so upping from default 0.01
    threshold: (kind === 'navigation/NavBar' ? 0.1 : 0.01)
  },
  customSnapshotIdentifier: `${kind.replace(/\//g, '-')}-${story}`
});

const beforeScreenshot = () => new Promise((resolve) => setTimeout(() => { resolve(); }, 600));

initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `file://${rootDir}/storybook-static`,
    getMatchOptions,
    beforeScreenshot,
    chromeExecutablePath
  })
});
