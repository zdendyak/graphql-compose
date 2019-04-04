/* @flow */

import { schemaComposer as sc } from '..';
import { EnumTypeComposer } from '../EnumTypeComposer';
import { InputTypeComposer } from '../InputTypeComposer';
import { InterfaceTypeComposer } from '../InterfaceTypeComposer';
import { ScalarTypeComposer } from '../ScalarTypeComposer';
import { ObjectTypeComposer } from '../ObjectTypeComposer';
import { UnionTypeComposer } from '../UnionTypeComposer';

beforeEach(() => {
  sc.clear();
});

describe('Extensions', () => {
  describe('ObjectTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = ObjectTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
        },
        sc
      );
      testTypeExtensions(tc);
    });

    it('has field Extensions methods', () => {
      const tc = ObjectTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
        },
        sc
      );
      testFieldExtensions(tc);
    });

    it('has type extension initializers', () => {
      const tc = ObjectTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
          extensions: { tags: ['generated'] },
        },
        sc
      );
      expect(tc.getExtensions()).toEqual({ tags: ['generated'] });
    });

    it('has field extension initializers', () => {
      const tc = ObjectTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: {
              type: 'String',
              extensions: {
                noFilter: true,
              },
            },
            nonExistingType: {
              type: 'Bar',
              extensions: {
                noFilter: true,
              },
            },
            thunkedField: () => ({
              type: 'String',
              extensions: {
                noFilter: true,
              },
            }),
          },
        },
        sc
      );
      testFieldExtensionsInitializers(tc);
    });
  });

  describe('InputTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = InputTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
        },
        sc
      );
      testTypeExtensions(tc);
    });

    it('has field Extensions methods', () => {
      const tc = InputTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
        },
        sc
      );
      testFieldExtensions(tc);
    });

    it('has type extension initializers', () => {
      const tc = InputTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
          extensions: { tags: ['generated'] },
        },
        sc
      );
      expect(tc.getExtensions()).toEqual({ tags: ['generated'] });
    });

    it('has field extension initializers', () => {
      const tc = InputTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: {
              type: 'String',
              extensions: {
                noFilter: true,
              },
            },
            nonExistingType: {
              type: 'Bar',
              extensions: {
                noFilter: true,
              },
            },
            thunkedField: () => ({
              type: 'String',
              extensions: {
                noFilter: true,
              },
            }),
          },
        },
        sc
      );
      testFieldExtensionsInitializers(tc);
    });
  });

  describe('InterfaceTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = InterfaceTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
        },
        sc
      );
      testTypeExtensions(tc);
    });

    it('has field Extensions methods', () => {
      const tc = InterfaceTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
            nonExistingType: 'Bar',
            thunkedField: () => ({
              type: 'String',
            }),
          },
        },
        sc
      );
      testFieldExtensions(tc);
    });

    it('has type extension initializers', () => {
      const tc = InterfaceTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
          },
          nonExistingType: 'Bar',
          thunkedField: () => ({
            type: 'String',
          }),
          extensions: { tags: ['generated'] },
        },
        sc
      );
      expect(tc.getExtensions()).toEqual({ tags: ['generated'] });
    });

    it('has field extension initializers', () => {
      const tc = InterfaceTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: {
              type: 'String',
              extensions: {
                noFilter: true,
              },
            },
            nonExistingType: {
              type: 'Bar',
              extensions: {
                noFilter: true,
              },
            },
            thunkedField: () => ({
              type: 'String',
              extensions: {
                noFilter: true,
              },
            }),
          },
        },
        sc
      );
      testFieldExtensionsInitializers(tc);
    });
  });

  describe('EnumTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = EnumTypeComposer.create(
        {
          name: 'Foo',
          values: {
            FOO: { value: 'FOO' },
            BAR: { value: 'BAR' },
          },
        },
        sc
      );
      testTypeExtensions(tc);
    });

    it('has type extension initializers', () => {
      const tc = EnumTypeComposer.create(
        {
          name: 'Foo',
          values: {
            FOO: { value: 'FOO' },
            BAR: { value: 'BAR' },
          },
          extensions: { tags: ['generated'] },
        },
        sc
      );
      expect(tc.getExtensions()).toEqual({ tags: ['generated'] });
    });
  });

  describe('UnionTypeComposer', () => {
    it('has type Extensions methods', () => {
      const foo = ObjectTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
          },
        },
        sc
      );
      const tc = UnionTypeComposer.create(
        {
          name: 'FooUnion',
          types: [foo],
        },
        sc
      );
      testTypeExtensions(tc);
    });

    it('has type extension initializers', () => {
      const foo = ObjectTypeComposer.create(
        {
          name: 'Foo',
          fields: {
            id: 'ID!',
            name: 'String',
          },
        },
        sc
      );
      const tc = UnionTypeComposer.create(
        {
          name: 'FooUnion',
          types: [foo],
          extensions: { tags: ['generated'] },
        },
        sc
      );
      expect(tc.getExtensions()).toEqual({ tags: ['generated'] });
    });
  });

  describe('ScalarTypeComposer', () => {
    it('has type Extensions methods', () => {
      const tc = ScalarTypeComposer.create(
        {
          name: 'Foo',
          serialize() {},
        },
        sc
      );
      testTypeExtensions(tc);
    });

    it('has type extension initializers', () => {
      const tc = ScalarTypeComposer.create(
        {
          name: 'Foo',
          serialize: () => {},
          extensions: { tags: ['generated'] },
        },
        sc
      );
      expect(tc.getExtensions()).toEqual({ tags: ['generated'] });
    });
  });

  function testTypeExtensions(instance) {
    expect(instance.getExtensions()).toEqual({});
    instance.setExtensions({
      tags: ['generated'],
      source: 'inference',
    });
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference',
    });
    instance.extendExtensions({
      source: 'user',
      originalName: 'foo',
    });
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'user',
      originalName: 'foo',
    });
    expect(instance.getExtension('source')).toEqual('user');
    expect(instance.hasExtension('source')).toEqual(true);
    expect(instance.hasExtension('nonExistant')).toEqual(false);
    instance.setExtension('source', 'inference');
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference',
      originalName: 'foo',
    });
    expect(instance.getExtension('source')).toEqual('inference');
    instance.removeExtension('originalName');
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference',
    });
    instance.clearExtensions();
    expect(instance.getExtensions()).toEqual({});
    expect(instance.hasExtension('source')).toEqual(false);
    instance.setExtensions({
      tags: ['generated'],
      source: 'inference',
    });
    expect(instance.getExtensions()).toEqual({
      tags: ['generated'],
      source: 'inference',
    });
    instance.clearExtensions();
  }

  function testFieldExtensions(instance) {
    ['id', 'name', 'nonExistingType', 'thunkedField'].forEach(fieldName => {
      expect(instance.getFieldExtensions(fieldName)).toEqual({});
      instance.setFieldExtensions(fieldName, {
        tags: ['generated'],
        source: 'inference',
      });
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference',
      });
      instance.extendFieldExtensions(fieldName, {
        source: 'user',
        originalName: 'foo',
      });
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'user',
        originalName: 'foo',
      });
      expect(instance.getFieldExtension(fieldName, 'source')).toEqual('user');
      expect(instance.hasFieldExtension(fieldName, 'source')).toEqual(true);
      expect(instance.hasFieldExtension(fieldName, 'nonExistant')).toEqual(false);
      instance.setFieldExtension(fieldName, 'source', 'inference');
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference',
        originalName: 'foo',
      });
      expect(instance.getFieldExtension(fieldName, 'source')).toEqual('inference');
      instance.removeFieldExtension(fieldName, 'originalName');
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference',
      });
      instance.clearFieldExtensions(fieldName);
      expect(instance.getFieldExtensions(fieldName)).toEqual({});
      expect(instance.hasFieldExtension(fieldName, 'source')).toEqual(false);
      instance.setFieldExtensions(fieldName, {
        tags: ['generated'],
        source: 'inference',
      });
      expect(instance.getFieldExtensions(fieldName)).toEqual({
        tags: ['generated'],
        source: 'inference',
      });
      instance.clearFieldExtensions(fieldName);
    });
  }

  function testFieldExtensionsInitializers(instance) {
    expect(instance.getFieldExtensions('name')).toEqual({
      noFilter: true,
    });
    expect(instance.getFieldExtensions('nonExistingType')).toEqual({
      noFilter: true,
    });
    expect(instance.getFieldExtensions('thunkedField')).toEqual({
      noFilter: true,
    });
  }
});
