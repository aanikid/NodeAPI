/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos (v3.5.1), and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {
  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary {
    version: 101;
  }

  /* === schema: public === */

  /* --- enums --- */

  /* --- tables --- */

  export namespace users {
    export type Table = 'users';
    export interface Selectable {
      /**
       * **users.user_id**
       * - `int4` in database
       * - `NOT NULL`, default: `nextval('users_user_id_seq'::regclass)`
       */
      user_id: number;
      /**
       * **users.first_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      first_name: string;
      /**
       * **users.last_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      last_name: string;
    }
    export interface JSONSelectable {
      /**
       * **users.user_id**
       * - `int4` in database
       * - `NOT NULL`, default: `nextval('users_user_id_seq'::regclass)`
       */
      user_id: number;
      /**
       * **users.first_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      first_name: string;
      /**
       * **users.last_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      last_name: string;
    }
    export interface Whereable {
      /**
       * **users.user_id**
       * - `int4` in database
       * - `NOT NULL`, default: `nextval('users_user_id_seq'::regclass)`
       */
      user_id?:
        | number
        | db.Parameter<number>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            number | db.Parameter<number> | db.SQLFragment | db.ParentColumn
          >;
      /**
       * **users.first_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      first_name?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
      /**
       * **users.last_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      last_name?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.ParentColumn
        | db.SQLFragment<
            any,
            string | db.Parameter<string> | db.SQLFragment | db.ParentColumn
          >;
    }
    export interface Insertable {
      /**
       * **users.user_id**
       * - `int4` in database
       * - `NOT NULL`, default: `nextval('users_user_id_seq'::regclass)`
       */
      user_id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
       * **users.first_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      first_name: string | db.Parameter<string> | db.SQLFragment;
      /**
       * **users.last_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      last_name: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
       * **users.user_id**
       * - `int4` in database
       * - `NOT NULL`, default: `nextval('users_user_id_seq'::regclass)`
       */
      user_id?:
        | number
        | db.Parameter<number>
        | db.DefaultType
        | db.SQLFragment
        | db.SQLFragment<
            any,
            number | db.Parameter<number> | db.DefaultType | db.SQLFragment
          >;
      /**
       * **users.first_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      first_name?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
       * **users.last_name**
       * - `varchar` in database
       * - `NOT NULL`, no default
       */
      last_name?:
        | string
        | db.Parameter<string>
        | db.SQLFragment
        | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'users_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<
      Selectable,
      T[number]
    >;
    export type SQLExpression =
      | db.GenericSQLExpression
      | db.ColumnNames<Updatable | (keyof Updatable)[]>
      | db.ColumnValues<Updatable>
      | Table
      | Whereable
      | Column;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* === cross-table types === */

  export type Table = users.Table;
  export type Selectable = users.Selectable;
  export type JSONSelectable = users.JSONSelectable;
  export type Whereable = users.Whereable;
  export type Insertable = users.Insertable;
  export type Updatable = users.Updatable;
  export type UniqueIndex = users.UniqueIndex;
  export type Column = users.Column;
  export type AllTables = [users.Table];
  export type AllMaterializedViews = [];

  export type SelectableForTable<T extends Table> = {
    users: users.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    users: users.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    users: users.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    users: users.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    users: users.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    users: users.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    users: users.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    users: users.SQL;
  }[T];
}
