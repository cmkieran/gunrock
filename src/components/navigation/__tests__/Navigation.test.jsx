/*
 * Gunrock is licensed under the MIT License. See the LICENSE file for details.
 *
 * Copyright (C) 2018 Eric Smyth <https://smyth.app>
 */

import { mapNavLinks } from '../Navigation';

describe('Navigation mapNavLinks', () => {
  it('Undefined', () => expect(mapNavLinks()).toEqual([]));
  it('No links', () => expect(mapNavLinks([])).toEqual([]));
  it('With links', () => expect(mapNavLinks([
    {
      navLink: {
        fields: {
          slug: '/foo'
        },
        meta: {
          siteNav: {
            label: 'Foo',
            icon: 'envelope'
          }
        }
      }
    },
    {
      navLink: {
        fields: {
          slug: '/bar'
        },
        meta: {
          siteNav: {
            label: 'Bar',
            icon: 'newspaper'
          }
        }
      }
    }
  ])).toEqual([
    {
      label: 'Foo',
      icon: 'envelope',
      url: '/foo'
    },
    {
      label: 'Bar',
      icon: 'newspaper',
      url: '/bar'
    }
  ]));
});
