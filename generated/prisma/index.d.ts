
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Specialties
 * 
 */
export type Specialties = $Result.DefaultSelection<Prisma.$SpecialtiesPayload>
/**
 * Model DoctorSpecialties
 * 
 */
export type DoctorSpecialties = $Result.DefaultSelection<Prisma.$DoctorSpecialtiesPayload>
/**
 * Model PatientHealthData
 * 
 */
export type PatientHealthData = $Result.DefaultSelection<Prisma.$PatientHealthDataPayload>
/**
 * Model MedicalReport
 * 
 */
export type MedicalReport = $Result.DefaultSelection<Prisma.$MedicalReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  DOCTOR: 'DOCTOR',
  PATIENT: 'PATIENT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  BLOCKED: 'BLOCKED',
  DELETED: 'DELETED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const BloodGroup: {
  A_POSITIVE: 'A_POSITIVE',
  B_POSITIVE: 'B_POSITIVE',
  O_POSITIVE: 'O_POSITIVE',
  AB_POSITIVE: 'AB_POSITIVE',
  A_NEGATIVE: 'A_NEGATIVE',
  B_NEGATIVE: 'B_NEGATIVE',
  O_NEGATIVE: 'O_NEGATIVE',
  AB_NEGATIVE: 'AB_NEGATIVE'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]


export const MaritalStatus: {
  MARRIED: 'MARRIED',
  UNMARRIED: 'UNMARRIED'
};

export type MaritalStatus = (typeof MaritalStatus)[keyof typeof MaritalStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

export type MaritalStatus = $Enums.MaritalStatus

export const MaritalStatus: typeof $Enums.MaritalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialties`: Exposes CRUD operations for the **Specialties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specialties
    * const specialties = await prisma.specialties.findMany()
    * ```
    */
  get specialties(): Prisma.SpecialtiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSpecialties`: Exposes CRUD operations for the **DoctorSpecialties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecialties
    * const doctorSpecialties = await prisma.doctorSpecialties.findMany()
    * ```
    */
  get doctorSpecialties(): Prisma.DoctorSpecialtiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientHealthData`: Exposes CRUD operations for the **PatientHealthData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientHealthData
    * const patientHealthData = await prisma.patientHealthData.findMany()
    * ```
    */
  get patientHealthData(): Prisma.PatientHealthDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicalReport`: Exposes CRUD operations for the **MedicalReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicalReports
    * const medicalReports = await prisma.medicalReport.findMany()
    * ```
    */
  get medicalReport(): Prisma.MedicalReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Admin: 'Admin',
    Doctor: 'Doctor',
    Patient: 'Patient',
    Specialties: 'Specialties',
    DoctorSpecialties: 'DoctorSpecialties',
    PatientHealthData: 'PatientHealthData',
    MedicalReport: 'MedicalReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "admin" | "doctor" | "patient" | "specialties" | "doctorSpecialties" | "patientHealthData" | "medicalReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Specialties: {
        payload: Prisma.$SpecialtiesPayload<ExtArgs>
        fields: Prisma.SpecialtiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialtiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialtiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          findFirst: {
            args: Prisma.SpecialtiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialtiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          findMany: {
            args: Prisma.SpecialtiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          create: {
            args: Prisma.SpecialtiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          createMany: {
            args: Prisma.SpecialtiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialtiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          delete: {
            args: Prisma.SpecialtiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          update: {
            args: Prisma.SpecialtiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          deleteMany: {
            args: Prisma.SpecialtiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialtiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpecialtiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>[]
          }
          upsert: {
            args: Prisma.SpecialtiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialtiesPayload>
          }
          aggregate: {
            args: Prisma.SpecialtiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialties>
          }
          groupBy: {
            args: Prisma.SpecialtiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialtiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialtiesCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialtiesCountAggregateOutputType> | number
          }
        }
      }
      DoctorSpecialties: {
        payload: Prisma.$DoctorSpecialtiesPayload<ExtArgs>
        fields: Prisma.DoctorSpecialtiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecialtiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecialtiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecialtiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecialtiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecialtiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorSpecialtiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>[]
          }
          delete: {
            args: Prisma.DoctorSpecialtiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          update: {
            args: Prisma.DoctorSpecialtiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecialtiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecialtiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorSpecialtiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>[]
          }
          upsert: {
            args: Prisma.DoctorSpecialtiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecialtiesPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecialtiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpecialties>
          }
          groupBy: {
            args: Prisma.DoctorSpecialtiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecialtiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecialtiesCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecialtiesCountAggregateOutputType> | number
          }
        }
      }
      PatientHealthData: {
        payload: Prisma.$PatientHealthDataPayload<ExtArgs>
        fields: Prisma.PatientHealthDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientHealthDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          findFirst: {
            args: Prisma.PatientHealthDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientHealthDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          findMany: {
            args: Prisma.PatientHealthDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          create: {
            args: Prisma.PatientHealthDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          createMany: {
            args: Prisma.PatientHealthDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientHealthDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          delete: {
            args: Prisma.PatientHealthDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          update: {
            args: Prisma.PatientHealthDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          deleteMany: {
            args: Prisma.PatientHealthDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientHealthDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientHealthDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>[]
          }
          upsert: {
            args: Prisma.PatientHealthDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientHealthDataPayload>
          }
          aggregate: {
            args: Prisma.PatientHealthDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientHealthData>
          }
          groupBy: {
            args: Prisma.PatientHealthDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientHealthDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientHealthDataCountArgs<ExtArgs>
            result: $Utils.Optional<PatientHealthDataCountAggregateOutputType> | number
          }
        }
      }
      MedicalReport: {
        payload: Prisma.$MedicalReportPayload<ExtArgs>
        fields: Prisma.MedicalReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          findFirst: {
            args: Prisma.MedicalReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          findMany: {
            args: Prisma.MedicalReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          create: {
            args: Prisma.MedicalReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          createMany: {
            args: Prisma.MedicalReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          delete: {
            args: Prisma.MedicalReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          update: {
            args: Prisma.MedicalReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          deleteMany: {
            args: Prisma.MedicalReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>[]
          }
          upsert: {
            args: Prisma.MedicalReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalReportPayload>
          }
          aggregate: {
            args: Prisma.MedicalReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicalReport>
          }
          groupBy: {
            args: Prisma.MedicalReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalReportCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    admin?: AdminOmit
    doctor?: DoctorOmit
    patient?: PatientOmit
    specialties?: SpecialtiesOmit
    doctorSpecialties?: DoctorSpecialtiesOmit
    patientHealthData?: PatientHealthDataOmit
    medicalReport?: MedicalReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    doctorSpecialties: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | DoctorCountOutputTypeCountDoctorSpecialtiesArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialtiesWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    medicalReport: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicalReport?: boolean | PatientCountOutputTypeCountMedicalReportArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicalReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalReportWhereInput
  }


  /**
   * Count Type SpecialtiesCountOutputType
   */

  export type SpecialtiesCountOutputType = {
    doctorSpecialties: number
  }

  export type SpecialtiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | SpecialtiesCountOutputTypeCountDoctorSpecialtiesArgs
  }

  // Custom InputTypes
  /**
   * SpecialtiesCountOutputType without action
   */
  export type SpecialtiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialtiesCountOutputType
     */
    select?: SpecialtiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialtiesCountOutputType without action
   */
  export type SpecialtiesCountOutputTypeCountDoctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialtiesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    needPasswordChange: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    needPasswordChange: boolean | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    needPasswordChange: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    needPasswordChange?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange: boolean
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | User$adminArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    needPasswordChange?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "needPasswordChange" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | User$adminArgs<ExtArgs>
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      needPasswordChange: boolean
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly needPasswordChange: FieldRef<"User", 'Boolean'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePhoto: number
    contactNumber: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    profilePhoto: string | null
    contactNumber: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "profilePhoto" | "contactNumber" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profilePhoto: string | null
      contactNumber: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly profilePhoto: FieldRef<"Admin", 'String'>
    readonly contactNumber: FieldRef<"Admin", 'String'>
    readonly isDeleted: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    experience: number | null
    appointmentFee: number | null
    averageRating: number | null
  }

  export type DoctorSumAggregateOutputType = {
    experience: number | null
    appointmentFee: number | null
    averageRating: number | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    registrationNumber: string | null
    experience: number | null
    gender: $Enums.Gender | null
    appointmentFee: number | null
    qualification: string | null
    currentWorkingPlace: string | null
    designation: string | null
    averageRating: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    registrationNumber: string | null
    experience: number | null
    gender: $Enums.Gender | null
    appointmentFee: number | null
    qualification: string | null
    currentWorkingPlace: string | null
    designation: string | null
    averageRating: number | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePhoto: number
    contactNumber: number
    address: number
    registrationNumber: number
    experience: number
    gender: number
    appointmentFee: number
    qualification: number
    currentWorkingPlace: number
    designation: number
    averageRating: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    experience?: true
    appointmentFee?: true
    averageRating?: true
  }

  export type DoctorSumAggregateInputType = {
    experience?: true
    appointmentFee?: true
    averageRating?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkingPlace?: true
    designation?: true
    averageRating?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkingPlace?: true
    designation?: true
    averageRating?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    registrationNumber?: true
    experience?: true
    gender?: true
    appointmentFee?: true
    qualification?: true
    currentWorkingPlace?: true
    designation?: true
    averageRating?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    name: string
    email: string
    profilePhoto: string | null
    contactNumber: string
    address: string | null
    registrationNumber: string
    experience: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkingPlace?: boolean
    designation?: boolean
    averageRating?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorSpecialties?: boolean | Doctor$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkingPlace?: boolean
    designation?: boolean
    averageRating?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkingPlace?: boolean
    designation?: boolean
    averageRating?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    registrationNumber?: boolean
    experience?: boolean
    gender?: boolean
    appointmentFee?: boolean
    qualification?: boolean
    currentWorkingPlace?: boolean
    designation?: boolean
    averageRating?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "profilePhoto" | "contactNumber" | "address" | "registrationNumber" | "experience" | "gender" | "appointmentFee" | "qualification" | "currentWorkingPlace" | "designation" | "averageRating" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    doctorSpecialties?: boolean | Doctor$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      doctorSpecialties: Prisma.$DoctorSpecialtiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profilePhoto: string | null
      contactNumber: string
      address: string | null
      registrationNumber: string
      experience: number
      gender: $Enums.Gender
      appointmentFee: number
      qualification: string
      currentWorkingPlace: string
      designation: string
      averageRating: number
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctorSpecialties<T extends Doctor$doctorSpecialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$doctorSpecialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly profilePhoto: FieldRef<"Doctor", 'String'>
    readonly contactNumber: FieldRef<"Doctor", 'String'>
    readonly address: FieldRef<"Doctor", 'String'>
    readonly registrationNumber: FieldRef<"Doctor", 'String'>
    readonly experience: FieldRef<"Doctor", 'Int'>
    readonly gender: FieldRef<"Doctor", 'Gender'>
    readonly appointmentFee: FieldRef<"Doctor", 'Int'>
    readonly qualification: FieldRef<"Doctor", 'String'>
    readonly currentWorkingPlace: FieldRef<"Doctor", 'String'>
    readonly designation: FieldRef<"Doctor", 'String'>
    readonly averageRating: FieldRef<"Doctor", 'Float'>
    readonly isDeleted: FieldRef<"Doctor", 'Boolean'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.doctorSpecialties
   */
  export type Doctor$doctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    where?: DoctorSpecialtiesWhereInput
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    cursor?: DoctorSpecialtiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    profilePhoto: string | null
    contactNumber: string | null
    address: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    profilePhoto: number
    contactNumber: number
    address: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    profilePhoto?: true
    contactNumber?: true
    address?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    email: string
    profilePhoto: string | null
    contactNumber: string
    address: string | null
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    patientHealthData?: boolean | Patient$patientHealthDataArgs<ExtArgs>
    medicalReport?: boolean | Patient$medicalReportArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    profilePhoto?: boolean
    contactNumber?: boolean
    address?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "profilePhoto" | "contactNumber" | "address" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    patientHealthData?: boolean | Patient$patientHealthDataArgs<ExtArgs>
    medicalReport?: boolean | Patient$medicalReportArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      patientHealthData: Prisma.$PatientHealthDataPayload<ExtArgs> | null
      medicalReport: Prisma.$MedicalReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      profilePhoto: string | null
      contactNumber: string
      address: string | null
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patientHealthData<T extends Patient$patientHealthDataArgs<ExtArgs> = {}>(args?: Subset<T, Patient$patientHealthDataArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    medicalReport<T extends Patient$medicalReportArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicalReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly profilePhoto: FieldRef<"Patient", 'String'>
    readonly contactNumber: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly isDeleted: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.patientHealthData
   */
  export type Patient$patientHealthDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    where?: PatientHealthDataWhereInput
  }

  /**
   * Patient.medicalReport
   */
  export type Patient$medicalReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    where?: MedicalReportWhereInput
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    cursor?: MedicalReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Specialties
   */

  export type AggregateSpecialties = {
    _count: SpecialtiesCountAggregateOutputType | null
    _min: SpecialtiesMinAggregateOutputType | null
    _max: SpecialtiesMaxAggregateOutputType | null
  }

  export type SpecialtiesMinAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
  }

  export type SpecialtiesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    icon: string | null
  }

  export type SpecialtiesCountAggregateOutputType = {
    id: number
    title: number
    icon: number
    _all: number
  }


  export type SpecialtiesMinAggregateInputType = {
    id?: true
    title?: true
    icon?: true
  }

  export type SpecialtiesMaxAggregateInputType = {
    id?: true
    title?: true
    icon?: true
  }

  export type SpecialtiesCountAggregateInputType = {
    id?: true
    title?: true
    icon?: true
    _all?: true
  }

  export type SpecialtiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to aggregate.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specialties
    **/
    _count?: true | SpecialtiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialtiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialtiesMaxAggregateInputType
  }

  export type GetSpecialtiesAggregateType<T extends SpecialtiesAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialties[P]>
      : GetScalarType<T[P], AggregateSpecialties[P]>
  }




  export type SpecialtiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialtiesWhereInput
    orderBy?: SpecialtiesOrderByWithAggregationInput | SpecialtiesOrderByWithAggregationInput[]
    by: SpecialtiesScalarFieldEnum[] | SpecialtiesScalarFieldEnum
    having?: SpecialtiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialtiesCountAggregateInputType | true
    _min?: SpecialtiesMinAggregateInputType
    _max?: SpecialtiesMaxAggregateInputType
  }

  export type SpecialtiesGroupByOutputType = {
    id: string
    title: string
    icon: string
    _count: SpecialtiesCountAggregateOutputType | null
    _min: SpecialtiesMinAggregateOutputType | null
    _max: SpecialtiesMaxAggregateOutputType | null
  }

  type GetSpecialtiesGroupByPayload<T extends SpecialtiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialtiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialtiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialtiesGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialtiesGroupByOutputType[P]>
        }
      >
    >


  export type SpecialtiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
    doctorSpecialties?: boolean | Specialties$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    icon?: boolean
  }, ExtArgs["result"]["specialties"]>

  export type SpecialtiesSelectScalar = {
    id?: boolean
    title?: boolean
    icon?: boolean
  }

  export type SpecialtiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "icon", ExtArgs["result"]["specialties"]>
  export type SpecialtiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctorSpecialties?: boolean | Specialties$doctorSpecialtiesArgs<ExtArgs>
    _count?: boolean | SpecialtiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialtiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SpecialtiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SpecialtiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Specialties"
    objects: {
      doctorSpecialties: Prisma.$DoctorSpecialtiesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      icon: string
    }, ExtArgs["result"]["specialties"]>
    composites: {}
  }

  type SpecialtiesGetPayload<S extends boolean | null | undefined | SpecialtiesDefaultArgs> = $Result.GetResult<Prisma.$SpecialtiesPayload, S>

  type SpecialtiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialtiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialtiesCountAggregateInputType | true
    }

  export interface SpecialtiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Specialties'], meta: { name: 'Specialties' } }
    /**
     * Find zero or one Specialties that matches the filter.
     * @param {SpecialtiesFindUniqueArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialtiesFindUniqueArgs>(args: SelectSubset<T, SpecialtiesFindUniqueArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Specialties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialtiesFindUniqueOrThrowArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialtiesFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialtiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindFirstArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialtiesFindFirstArgs>(args?: SelectSubset<T, SpecialtiesFindFirstArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Specialties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindFirstOrThrowArgs} args - Arguments to find a Specialties
     * @example
     * // Get one Specialties
     * const specialties = await prisma.specialties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialtiesFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialtiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Specialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specialties
     * const specialties = await prisma.specialties.findMany()
     * 
     * // Get first 10 Specialties
     * const specialties = await prisma.specialties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialtiesFindManyArgs>(args?: SelectSubset<T, SpecialtiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Specialties.
     * @param {SpecialtiesCreateArgs} args - Arguments to create a Specialties.
     * @example
     * // Create one Specialties
     * const Specialties = await prisma.specialties.create({
     *   data: {
     *     // ... data to create a Specialties
     *   }
     * })
     * 
     */
    create<T extends SpecialtiesCreateArgs>(args: SelectSubset<T, SpecialtiesCreateArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Specialties.
     * @param {SpecialtiesCreateManyArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialties = await prisma.specialties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialtiesCreateManyArgs>(args?: SelectSubset<T, SpecialtiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specialties and returns the data saved in the database.
     * @param {SpecialtiesCreateManyAndReturnArgs} args - Arguments to create many Specialties.
     * @example
     * // Create many Specialties
     * const specialties = await prisma.specialties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specialties and only return the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialtiesCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialtiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Specialties.
     * @param {SpecialtiesDeleteArgs} args - Arguments to delete one Specialties.
     * @example
     * // Delete one Specialties
     * const Specialties = await prisma.specialties.delete({
     *   where: {
     *     // ... filter to delete one Specialties
     *   }
     * })
     * 
     */
    delete<T extends SpecialtiesDeleteArgs>(args: SelectSubset<T, SpecialtiesDeleteArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Specialties.
     * @param {SpecialtiesUpdateArgs} args - Arguments to update one Specialties.
     * @example
     * // Update one Specialties
     * const specialties = await prisma.specialties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialtiesUpdateArgs>(args: SelectSubset<T, SpecialtiesUpdateArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Specialties.
     * @param {SpecialtiesDeleteManyArgs} args - Arguments to filter Specialties to delete.
     * @example
     * // Delete a few Specialties
     * const { count } = await prisma.specialties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialtiesDeleteManyArgs>(args?: SelectSubset<T, SpecialtiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specialties
     * const specialties = await prisma.specialties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialtiesUpdateManyArgs>(args: SelectSubset<T, SpecialtiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specialties and returns the data updated in the database.
     * @param {SpecialtiesUpdateManyAndReturnArgs} args - Arguments to update many Specialties.
     * @example
     * // Update many Specialties
     * const specialties = await prisma.specialties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Specialties and only return the `id`
     * const specialtiesWithIdOnly = await prisma.specialties.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpecialtiesUpdateManyAndReturnArgs>(args: SelectSubset<T, SpecialtiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Specialties.
     * @param {SpecialtiesUpsertArgs} args - Arguments to update or create a Specialties.
     * @example
     * // Update or create a Specialties
     * const specialties = await prisma.specialties.upsert({
     *   create: {
     *     // ... data to create a Specialties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Specialties we want to update
     *   }
     * })
     */
    upsert<T extends SpecialtiesUpsertArgs>(args: SelectSubset<T, SpecialtiesUpsertArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesCountArgs} args - Arguments to filter Specialties to count.
     * @example
     * // Count the number of Specialties
     * const count = await prisma.specialties.count({
     *   where: {
     *     // ... the filter for the Specialties we want to count
     *   }
     * })
    **/
    count<T extends SpecialtiesCountArgs>(
      args?: Subset<T, SpecialtiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialtiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialtiesAggregateArgs>(args: Subset<T, SpecialtiesAggregateArgs>): Prisma.PrismaPromise<GetSpecialtiesAggregateType<T>>

    /**
     * Group by Specialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialtiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialtiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialtiesGroupByArgs['orderBy'] }
        : { orderBy?: SpecialtiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialtiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialtiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Specialties model
   */
  readonly fields: SpecialtiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Specialties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialtiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctorSpecialties<T extends Specialties$doctorSpecialtiesArgs<ExtArgs> = {}>(args?: Subset<T, Specialties$doctorSpecialtiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Specialties model
   */
  interface SpecialtiesFieldRefs {
    readonly id: FieldRef<"Specialties", 'String'>
    readonly title: FieldRef<"Specialties", 'String'>
    readonly icon: FieldRef<"Specialties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Specialties findUnique
   */
  export type SpecialtiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties findUniqueOrThrow
   */
  export type SpecialtiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties findFirst
   */
  export type SpecialtiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties findFirstOrThrow
   */
  export type SpecialtiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specialties.
     */
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties findMany
   */
  export type SpecialtiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which Specialties to fetch.
     */
    where?: SpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specialties to fetch.
     */
    orderBy?: SpecialtiesOrderByWithRelationInput | SpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specialties.
     */
    cursor?: SpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specialties.
     */
    skip?: number
    distinct?: SpecialtiesScalarFieldEnum | SpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties create
   */
  export type SpecialtiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Specialties.
     */
    data: XOR<SpecialtiesCreateInput, SpecialtiesUncheckedCreateInput>
  }

  /**
   * Specialties createMany
   */
  export type SpecialtiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtiesCreateManyInput | SpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialties createManyAndReturn
   */
  export type SpecialtiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to create many Specialties.
     */
    data: SpecialtiesCreateManyInput | SpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Specialties update
   */
  export type SpecialtiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Specialties.
     */
    data: XOR<SpecialtiesUpdateInput, SpecialtiesUncheckedUpdateInput>
    /**
     * Choose, which Specialties to update.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties updateMany
   */
  export type SpecialtiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtiesUpdateManyMutationInput, SpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtiesWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialties updateManyAndReturn
   */
  export type SpecialtiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to update Specialties.
     */
    data: XOR<SpecialtiesUpdateManyMutationInput, SpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which Specialties to update
     */
    where?: SpecialtiesWhereInput
    /**
     * Limit how many Specialties to update.
     */
    limit?: number
  }

  /**
   * Specialties upsert
   */
  export type SpecialtiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Specialties to update in case it exists.
     */
    where: SpecialtiesWhereUniqueInput
    /**
     * In case the Specialties found by the `where` argument doesn't exist, create a new Specialties with this data.
     */
    create: XOR<SpecialtiesCreateInput, SpecialtiesUncheckedCreateInput>
    /**
     * In case the Specialties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialtiesUpdateInput, SpecialtiesUncheckedUpdateInput>
  }

  /**
   * Specialties delete
   */
  export type SpecialtiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
    /**
     * Filter which Specialties to delete.
     */
    where: SpecialtiesWhereUniqueInput
  }

  /**
   * Specialties deleteMany
   */
  export type SpecialtiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specialties to delete
     */
    where?: SpecialtiesWhereInput
    /**
     * Limit how many Specialties to delete.
     */
    limit?: number
  }

  /**
   * Specialties.doctorSpecialties
   */
  export type Specialties$doctorSpecialtiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    where?: DoctorSpecialtiesWhereInput
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    cursor?: DoctorSpecialtiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * Specialties without action
   */
  export type SpecialtiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Specialties
     */
    select?: SpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Specialties
     */
    omit?: SpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialtiesInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpecialties
   */

  export type AggregateDoctorSpecialties = {
    _count: DoctorSpecialtiesCountAggregateOutputType | null
    _min: DoctorSpecialtiesMinAggregateOutputType | null
    _max: DoctorSpecialtiesMaxAggregateOutputType | null
  }

  export type DoctorSpecialtiesMinAggregateOutputType = {
    specialitiesId: string | null
    doctorId: string | null
  }

  export type DoctorSpecialtiesMaxAggregateOutputType = {
    specialitiesId: string | null
    doctorId: string | null
  }

  export type DoctorSpecialtiesCountAggregateOutputType = {
    specialitiesId: number
    doctorId: number
    _all: number
  }


  export type DoctorSpecialtiesMinAggregateInputType = {
    specialitiesId?: true
    doctorId?: true
  }

  export type DoctorSpecialtiesMaxAggregateInputType = {
    specialitiesId?: true
    doctorId?: true
  }

  export type DoctorSpecialtiesCountAggregateInputType = {
    specialitiesId?: true
    doctorId?: true
    _all?: true
  }

  export type DoctorSpecialtiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialties to aggregate.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecialties
    **/
    _count?: true | DoctorSpecialtiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecialtiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecialtiesMaxAggregateInputType
  }

  export type GetDoctorSpecialtiesAggregateType<T extends DoctorSpecialtiesAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialties[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialties[P]>
  }




  export type DoctorSpecialtiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecialtiesWhereInput
    orderBy?: DoctorSpecialtiesOrderByWithAggregationInput | DoctorSpecialtiesOrderByWithAggregationInput[]
    by: DoctorSpecialtiesScalarFieldEnum[] | DoctorSpecialtiesScalarFieldEnum
    having?: DoctorSpecialtiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecialtiesCountAggregateInputType | true
    _min?: DoctorSpecialtiesMinAggregateInputType
    _max?: DoctorSpecialtiesMaxAggregateInputType
  }

  export type DoctorSpecialtiesGroupByOutputType = {
    specialitiesId: string
    doctorId: string
    _count: DoctorSpecialtiesCountAggregateOutputType | null
    _min: DoctorSpecialtiesMinAggregateOutputType | null
    _max: DoctorSpecialtiesMaxAggregateOutputType | null
  }

  type GetDoctorSpecialtiesGroupByPayload<T extends DoctorSpecialtiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecialtiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecialtiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecialtiesGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecialtiesGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecialtiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialitiesId?: boolean
    doctorId?: boolean
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type DoctorSpecialtiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialitiesId?: boolean
    doctorId?: boolean
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type DoctorSpecialtiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    specialitiesId?: boolean
    doctorId?: boolean
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialties"]>

  export type DoctorSpecialtiesSelectScalar = {
    specialitiesId?: boolean
    doctorId?: boolean
  }

  export type DoctorSpecialtiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"specialitiesId" | "doctorId", ExtArgs["result"]["doctorSpecialties"]>
  export type DoctorSpecialtiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorSpecialtiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type DoctorSpecialtiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialties?: boolean | SpecialtiesDefaultArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $DoctorSpecialtiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpecialties"
    objects: {
      specialties: Prisma.$SpecialtiesPayload<ExtArgs>
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      specialitiesId: string
      doctorId: string
    }, ExtArgs["result"]["doctorSpecialties"]>
    composites: {}
  }

  type DoctorSpecialtiesGetPayload<S extends boolean | null | undefined | DoctorSpecialtiesDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecialtiesPayload, S>

  type DoctorSpecialtiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSpecialtiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecialtiesCountAggregateInputType | true
    }

  export interface DoctorSpecialtiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialties'], meta: { name: 'DoctorSpecialties' } }
    /**
     * Find zero or one DoctorSpecialties that matches the filter.
     * @param {DoctorSpecialtiesFindUniqueArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSpecialtiesFindUniqueArgs>(args: SelectSubset<T, DoctorSpecialtiesFindUniqueArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpecialties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSpecialtiesFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSpecialtiesFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesFindFirstArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSpecialtiesFindFirstArgs>(args?: SelectSubset<T, DoctorSpecialtiesFindFirstArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialties
     * @example
     * // Get one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSpecialtiesFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecialties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findMany()
     * 
     * // Get first 10 DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.findMany({ take: 10 })
     * 
     * // Only select the `specialitiesId`
     * const doctorSpecialtiesWithSpecialitiesIdOnly = await prisma.doctorSpecialties.findMany({ select: { specialitiesId: true } })
     * 
     */
    findMany<T extends DoctorSpecialtiesFindManyArgs>(args?: SelectSubset<T, DoctorSpecialtiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpecialties.
     * @param {DoctorSpecialtiesCreateArgs} args - Arguments to create a DoctorSpecialties.
     * @example
     * // Create one DoctorSpecialties
     * const DoctorSpecialties = await prisma.doctorSpecialties.create({
     *   data: {
     *     // ... data to create a DoctorSpecialties
     *   }
     * })
     * 
     */
    create<T extends DoctorSpecialtiesCreateArgs>(args: SelectSubset<T, DoctorSpecialtiesCreateArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecialties.
     * @param {DoctorSpecialtiesCreateManyArgs} args - Arguments to create many DoctorSpecialties.
     * @example
     * // Create many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSpecialtiesCreateManyArgs>(args?: SelectSubset<T, DoctorSpecialtiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DoctorSpecialties and returns the data saved in the database.
     * @param {DoctorSpecialtiesCreateManyAndReturnArgs} args - Arguments to create many DoctorSpecialties.
     * @example
     * // Create many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DoctorSpecialties and only return the `specialitiesId`
     * const doctorSpecialtiesWithSpecialitiesIdOnly = await prisma.doctorSpecialties.createManyAndReturn({
     *   select: { specialitiesId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorSpecialtiesCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorSpecialtiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DoctorSpecialties.
     * @param {DoctorSpecialtiesDeleteArgs} args - Arguments to delete one DoctorSpecialties.
     * @example
     * // Delete one DoctorSpecialties
     * const DoctorSpecialties = await prisma.doctorSpecialties.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialties
     *   }
     * })
     * 
     */
    delete<T extends DoctorSpecialtiesDeleteArgs>(args: SelectSubset<T, DoctorSpecialtiesDeleteArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpecialties.
     * @param {DoctorSpecialtiesUpdateArgs} args - Arguments to update one DoctorSpecialties.
     * @example
     * // Update one DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSpecialtiesUpdateArgs>(args: SelectSubset<T, DoctorSpecialtiesUpdateArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecialties.
     * @param {DoctorSpecialtiesDeleteManyArgs} args - Arguments to filter DoctorSpecialties to delete.
     * @example
     * // Delete a few DoctorSpecialties
     * const { count } = await prisma.doctorSpecialties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSpecialtiesDeleteManyArgs>(args?: SelectSubset<T, DoctorSpecialtiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSpecialtiesUpdateManyArgs>(args: SelectSubset<T, DoctorSpecialtiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecialties and returns the data updated in the database.
     * @param {DoctorSpecialtiesUpdateManyAndReturnArgs} args - Arguments to update many DoctorSpecialties.
     * @example
     * // Update many DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DoctorSpecialties and only return the `specialitiesId`
     * const doctorSpecialtiesWithSpecialitiesIdOnly = await prisma.doctorSpecialties.updateManyAndReturn({
     *   select: { specialitiesId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorSpecialtiesUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorSpecialtiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DoctorSpecialties.
     * @param {DoctorSpecialtiesUpsertArgs} args - Arguments to update or create a DoctorSpecialties.
     * @example
     * // Update or create a DoctorSpecialties
     * const doctorSpecialties = await prisma.doctorSpecialties.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialties we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSpecialtiesUpsertArgs>(args: SelectSubset<T, DoctorSpecialtiesUpsertArgs<ExtArgs>>): Prisma__DoctorSpecialtiesClient<$Result.GetResult<Prisma.$DoctorSpecialtiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesCountArgs} args - Arguments to filter DoctorSpecialties to count.
     * @example
     * // Count the number of DoctorSpecialties
     * const count = await prisma.doctorSpecialties.count({
     *   where: {
     *     // ... the filter for the DoctorSpecialties we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecialtiesCountArgs>(
      args?: Subset<T, DoctorSpecialtiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecialtiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorSpecialtiesAggregateArgs>(args: Subset<T, DoctorSpecialtiesAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecialtiesAggregateType<T>>

    /**
     * Group by DoctorSpecialties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecialtiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorSpecialtiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecialtiesGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecialtiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorSpecialtiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecialtiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpecialties model
   */
  readonly fields: DoctorSpecialtiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpecialties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecialtiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialties<T extends SpecialtiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SpecialtiesDefaultArgs<ExtArgs>>): Prisma__SpecialtiesClient<$Result.GetResult<Prisma.$SpecialtiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DoctorSpecialties model
   */
  interface DoctorSpecialtiesFieldRefs {
    readonly specialitiesId: FieldRef<"DoctorSpecialties", 'String'>
    readonly doctorId: FieldRef<"DoctorSpecialties", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpecialties findUnique
   */
  export type DoctorSpecialtiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties findUniqueOrThrow
   */
  export type DoctorSpecialtiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties findFirst
   */
  export type DoctorSpecialtiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecialties.
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecialties.
     */
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * DoctorSpecialties findFirstOrThrow
   */
  export type DoctorSpecialtiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecialties.
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecialties.
     */
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * DoctorSpecialties findMany
   */
  export type DoctorSpecialtiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialties to fetch.
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecialties to fetch.
     */
    orderBy?: DoctorSpecialtiesOrderByWithRelationInput | DoctorSpecialtiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecialties.
     */
    cursor?: DoctorSpecialtiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecialties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecialties.
     */
    skip?: number
    distinct?: DoctorSpecialtiesScalarFieldEnum | DoctorSpecialtiesScalarFieldEnum[]
  }

  /**
   * DoctorSpecialties create
   */
  export type DoctorSpecialtiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesCreateInput, DoctorSpecialtiesUncheckedCreateInput>
  }

  /**
   * DoctorSpecialties createMany
   */
  export type DoctorSpecialtiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecialties.
     */
    data: DoctorSpecialtiesCreateManyInput | DoctorSpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialties createManyAndReturn
   */
  export type DoctorSpecialtiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to create many DoctorSpecialties.
     */
    data: DoctorSpecialtiesCreateManyInput | DoctorSpecialtiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSpecialties update
   */
  export type DoctorSpecialtiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesUpdateInput, DoctorSpecialtiesUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpecialties to update.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties updateMany
   */
  export type DoctorSpecialtiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecialties to update
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * Limit how many DoctorSpecialties to update.
     */
    limit?: number
  }

  /**
   * DoctorSpecialties updateManyAndReturn
   */
  export type DoctorSpecialtiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * The data used to update DoctorSpecialties.
     */
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecialties to update
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * Limit how many DoctorSpecialties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DoctorSpecialties upsert
   */
  export type DoctorSpecialtiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpecialties to update in case it exists.
     */
    where: DoctorSpecialtiesWhereUniqueInput
    /**
     * In case the DoctorSpecialties found by the `where` argument doesn't exist, create a new DoctorSpecialties with this data.
     */
    create: XOR<DoctorSpecialtiesCreateInput, DoctorSpecialtiesUncheckedCreateInput>
    /**
     * In case the DoctorSpecialties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecialtiesUpdateInput, DoctorSpecialtiesUncheckedUpdateInput>
  }

  /**
   * DoctorSpecialties delete
   */
  export type DoctorSpecialtiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpecialties to delete.
     */
    where: DoctorSpecialtiesWhereUniqueInput
  }

  /**
   * DoctorSpecialties deleteMany
   */
  export type DoctorSpecialtiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialties to delete
     */
    where?: DoctorSpecialtiesWhereInput
    /**
     * Limit how many DoctorSpecialties to delete.
     */
    limit?: number
  }

  /**
   * DoctorSpecialties without action
   */
  export type DoctorSpecialtiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialties
     */
    select?: DoctorSpecialtiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialties
     */
    omit?: DoctorSpecialtiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecialtiesInclude<ExtArgs> | null
  }


  /**
   * Model PatientHealthData
   */

  export type AggregatePatientHealthData = {
    _count: PatientHealthDataCountAggregateOutputType | null
    _min: PatientHealthDataMinAggregateOutputType | null
    _max: PatientHealthDataMaxAggregateOutputType | null
  }

  export type PatientHealthDataMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string | null
    weight: string | null
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientHealthDataMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean | null
    hasDiabetes: boolean | null
    height: string | null
    weight: string | null
    smokingStatus: boolean | null
    dietaryPreferences: string | null
    pregnancyStatus: boolean | null
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean | null
    recentAnxiety: boolean | null
    recentDepression: boolean | null
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientHealthDataCountAggregateOutputType = {
    id: number
    patientId: number
    dateOfBirth: number
    gender: number
    bloodGroup: number
    hasAllergies: number
    hasDiabetes: number
    height: number
    weight: number
    smokingStatus: number
    dietaryPreferences: number
    pregnancyStatus: number
    mentalHealthHistory: number
    immunizationStatus: number
    hasPastSurgeries: number
    recentAnxiety: number
    recentDepression: number
    maritalStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientHealthDataMinAggregateInputType = {
    id?: true
    patientId?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientHealthDataMaxAggregateInputType = {
    id?: true
    patientId?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientHealthDataCountAggregateInputType = {
    id?: true
    patientId?: true
    dateOfBirth?: true
    gender?: true
    bloodGroup?: true
    hasAllergies?: true
    hasDiabetes?: true
    height?: true
    weight?: true
    smokingStatus?: true
    dietaryPreferences?: true
    pregnancyStatus?: true
    mentalHealthHistory?: true
    immunizationStatus?: true
    hasPastSurgeries?: true
    recentAnxiety?: true
    recentDepression?: true
    maritalStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientHealthDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientHealthData to aggregate.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientHealthData
    **/
    _count?: true | PatientHealthDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientHealthDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientHealthDataMaxAggregateInputType
  }

  export type GetPatientHealthDataAggregateType<T extends PatientHealthDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientHealthData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientHealthData[P]>
      : GetScalarType<T[P], AggregatePatientHealthData[P]>
  }




  export type PatientHealthDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientHealthDataWhereInput
    orderBy?: PatientHealthDataOrderByWithAggregationInput | PatientHealthDataOrderByWithAggregationInput[]
    by: PatientHealthDataScalarFieldEnum[] | PatientHealthDataScalarFieldEnum
    having?: PatientHealthDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientHealthDataCountAggregateInputType | true
    _min?: PatientHealthDataMinAggregateInputType
    _max?: PatientHealthDataMaxAggregateInputType
  }

  export type PatientHealthDataGroupByOutputType = {
    id: string
    patientId: string
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    bloodGroup: $Enums.BloodGroup | null
    hasAllergies: boolean
    hasDiabetes: boolean
    height: string | null
    weight: string | null
    smokingStatus: boolean
    dietaryPreferences: string | null
    pregnancyStatus: boolean
    mentalHealthHistory: string | null
    immunizationStatus: string | null
    hasPastSurgeries: boolean
    recentAnxiety: boolean
    recentDepression: boolean
    maritalStatus: $Enums.MaritalStatus | null
    createdAt: Date
    updatedAt: Date
    _count: PatientHealthDataCountAggregateOutputType | null
    _min: PatientHealthDataMinAggregateOutputType | null
    _max: PatientHealthDataMaxAggregateOutputType | null
  }

  type GetPatientHealthDataGroupByPayload<T extends PatientHealthDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientHealthDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientHealthDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientHealthDataGroupByOutputType[P]>
            : GetScalarType<T[P], PatientHealthDataGroupByOutputType[P]>
        }
      >
    >


  export type PatientHealthDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patientHealthData"]>

  export type PatientHealthDataSelectScalar = {
    id?: boolean
    patientId?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    bloodGroup?: boolean
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: boolean
    weight?: boolean
    smokingStatus?: boolean
    dietaryPreferences?: boolean
    pregnancyStatus?: boolean
    mentalHealthHistory?: boolean
    immunizationStatus?: boolean
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientHealthDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "dateOfBirth" | "gender" | "bloodGroup" | "hasAllergies" | "hasDiabetes" | "height" | "weight" | "smokingStatus" | "dietaryPreferences" | "pregnancyStatus" | "mentalHealthHistory" | "immunizationStatus" | "hasPastSurgeries" | "recentAnxiety" | "recentDepression" | "maritalStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["patientHealthData"]>
  export type PatientHealthDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PatientHealthDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PatientHealthDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $PatientHealthDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientHealthData"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      dateOfBirth: Date | null
      gender: $Enums.Gender | null
      bloodGroup: $Enums.BloodGroup | null
      hasAllergies: boolean
      hasDiabetes: boolean
      height: string | null
      weight: string | null
      smokingStatus: boolean
      dietaryPreferences: string | null
      pregnancyStatus: boolean
      mentalHealthHistory: string | null
      immunizationStatus: string | null
      hasPastSurgeries: boolean
      recentAnxiety: boolean
      recentDepression: boolean
      maritalStatus: $Enums.MaritalStatus | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientHealthData"]>
    composites: {}
  }

  type PatientHealthDataGetPayload<S extends boolean | null | undefined | PatientHealthDataDefaultArgs> = $Result.GetResult<Prisma.$PatientHealthDataPayload, S>

  type PatientHealthDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientHealthDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientHealthDataCountAggregateInputType | true
    }

  export interface PatientHealthDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientHealthData'], meta: { name: 'PatientHealthData' } }
    /**
     * Find zero or one PatientHealthData that matches the filter.
     * @param {PatientHealthDataFindUniqueArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientHealthDataFindUniqueArgs>(args: SelectSubset<T, PatientHealthDataFindUniqueArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientHealthData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientHealthDataFindUniqueOrThrowArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientHealthDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientHealthDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientHealthData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindFirstArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientHealthDataFindFirstArgs>(args?: SelectSubset<T, PatientHealthDataFindFirstArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientHealthData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindFirstOrThrowArgs} args - Arguments to find a PatientHealthData
     * @example
     * // Get one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientHealthDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientHealthDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientHealthData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findMany()
     * 
     * // Get first 10 PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientHealthDataFindManyArgs>(args?: SelectSubset<T, PatientHealthDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientHealthData.
     * @param {PatientHealthDataCreateArgs} args - Arguments to create a PatientHealthData.
     * @example
     * // Create one PatientHealthData
     * const PatientHealthData = await prisma.patientHealthData.create({
     *   data: {
     *     // ... data to create a PatientHealthData
     *   }
     * })
     * 
     */
    create<T extends PatientHealthDataCreateArgs>(args: SelectSubset<T, PatientHealthDataCreateArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientHealthData.
     * @param {PatientHealthDataCreateManyArgs} args - Arguments to create many PatientHealthData.
     * @example
     * // Create many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientHealthDataCreateManyArgs>(args?: SelectSubset<T, PatientHealthDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatientHealthData and returns the data saved in the database.
     * @param {PatientHealthDataCreateManyAndReturnArgs} args - Arguments to create many PatientHealthData.
     * @example
     * // Create many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatientHealthData and only return the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientHealthDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientHealthDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatientHealthData.
     * @param {PatientHealthDataDeleteArgs} args - Arguments to delete one PatientHealthData.
     * @example
     * // Delete one PatientHealthData
     * const PatientHealthData = await prisma.patientHealthData.delete({
     *   where: {
     *     // ... filter to delete one PatientHealthData
     *   }
     * })
     * 
     */
    delete<T extends PatientHealthDataDeleteArgs>(args: SelectSubset<T, PatientHealthDataDeleteArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientHealthData.
     * @param {PatientHealthDataUpdateArgs} args - Arguments to update one PatientHealthData.
     * @example
     * // Update one PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientHealthDataUpdateArgs>(args: SelectSubset<T, PatientHealthDataUpdateArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientHealthData.
     * @param {PatientHealthDataDeleteManyArgs} args - Arguments to filter PatientHealthData to delete.
     * @example
     * // Delete a few PatientHealthData
     * const { count } = await prisma.patientHealthData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientHealthDataDeleteManyArgs>(args?: SelectSubset<T, PatientHealthDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientHealthDataUpdateManyArgs>(args: SelectSubset<T, PatientHealthDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientHealthData and returns the data updated in the database.
     * @param {PatientHealthDataUpdateManyAndReturnArgs} args - Arguments to update many PatientHealthData.
     * @example
     * // Update many PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatientHealthData and only return the `id`
     * const patientHealthDataWithIdOnly = await prisma.patientHealthData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientHealthDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientHealthDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatientHealthData.
     * @param {PatientHealthDataUpsertArgs} args - Arguments to update or create a PatientHealthData.
     * @example
     * // Update or create a PatientHealthData
     * const patientHealthData = await prisma.patientHealthData.upsert({
     *   create: {
     *     // ... data to create a PatientHealthData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientHealthData we want to update
     *   }
     * })
     */
    upsert<T extends PatientHealthDataUpsertArgs>(args: SelectSubset<T, PatientHealthDataUpsertArgs<ExtArgs>>): Prisma__PatientHealthDataClient<$Result.GetResult<Prisma.$PatientHealthDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataCountArgs} args - Arguments to filter PatientHealthData to count.
     * @example
     * // Count the number of PatientHealthData
     * const count = await prisma.patientHealthData.count({
     *   where: {
     *     // ... the filter for the PatientHealthData we want to count
     *   }
     * })
    **/
    count<T extends PatientHealthDataCountArgs>(
      args?: Subset<T, PatientHealthDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientHealthDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientHealthDataAggregateArgs>(args: Subset<T, PatientHealthDataAggregateArgs>): Prisma.PrismaPromise<GetPatientHealthDataAggregateType<T>>

    /**
     * Group by PatientHealthData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientHealthDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientHealthDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientHealthDataGroupByArgs['orderBy'] }
        : { orderBy?: PatientHealthDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientHealthDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientHealthDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientHealthData model
   */
  readonly fields: PatientHealthDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientHealthData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientHealthDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientHealthData model
   */
  interface PatientHealthDataFieldRefs {
    readonly id: FieldRef<"PatientHealthData", 'String'>
    readonly patientId: FieldRef<"PatientHealthData", 'String'>
    readonly dateOfBirth: FieldRef<"PatientHealthData", 'DateTime'>
    readonly gender: FieldRef<"PatientHealthData", 'Gender'>
    readonly bloodGroup: FieldRef<"PatientHealthData", 'BloodGroup'>
    readonly hasAllergies: FieldRef<"PatientHealthData", 'Boolean'>
    readonly hasDiabetes: FieldRef<"PatientHealthData", 'Boolean'>
    readonly height: FieldRef<"PatientHealthData", 'String'>
    readonly weight: FieldRef<"PatientHealthData", 'String'>
    readonly smokingStatus: FieldRef<"PatientHealthData", 'Boolean'>
    readonly dietaryPreferences: FieldRef<"PatientHealthData", 'String'>
    readonly pregnancyStatus: FieldRef<"PatientHealthData", 'Boolean'>
    readonly mentalHealthHistory: FieldRef<"PatientHealthData", 'String'>
    readonly immunizationStatus: FieldRef<"PatientHealthData", 'String'>
    readonly hasPastSurgeries: FieldRef<"PatientHealthData", 'Boolean'>
    readonly recentAnxiety: FieldRef<"PatientHealthData", 'Boolean'>
    readonly recentDepression: FieldRef<"PatientHealthData", 'Boolean'>
    readonly maritalStatus: FieldRef<"PatientHealthData", 'MaritalStatus'>
    readonly createdAt: FieldRef<"PatientHealthData", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientHealthData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientHealthData findUnique
   */
  export type PatientHealthDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData findUniqueOrThrow
   */
  export type PatientHealthDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData findFirst
   */
  export type PatientHealthDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientHealthData.
     */
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData findFirstOrThrow
   */
  export type PatientHealthDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientHealthData.
     */
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData findMany
   */
  export type PatientHealthDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter, which PatientHealthData to fetch.
     */
    where?: PatientHealthDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientHealthData to fetch.
     */
    orderBy?: PatientHealthDataOrderByWithRelationInput | PatientHealthDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientHealthData.
     */
    cursor?: PatientHealthDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientHealthData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientHealthData.
     */
    skip?: number
    distinct?: PatientHealthDataScalarFieldEnum | PatientHealthDataScalarFieldEnum[]
  }

  /**
   * PatientHealthData create
   */
  export type PatientHealthDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientHealthData.
     */
    data: XOR<PatientHealthDataCreateInput, PatientHealthDataUncheckedCreateInput>
  }

  /**
   * PatientHealthData createMany
   */
  export type PatientHealthDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientHealthData.
     */
    data: PatientHealthDataCreateManyInput | PatientHealthDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatientHealthData createManyAndReturn
   */
  export type PatientHealthDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * The data used to create many PatientHealthData.
     */
    data: PatientHealthDataCreateManyInput | PatientHealthDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientHealthData update
   */
  export type PatientHealthDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateInput, PatientHealthDataUncheckedUpdateInput>
    /**
     * Choose, which PatientHealthData to update.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData updateMany
   */
  export type PatientHealthDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateManyMutationInput, PatientHealthDataUncheckedUpdateManyInput>
    /**
     * Filter which PatientHealthData to update
     */
    where?: PatientHealthDataWhereInput
    /**
     * Limit how many PatientHealthData to update.
     */
    limit?: number
  }

  /**
   * PatientHealthData updateManyAndReturn
   */
  export type PatientHealthDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * The data used to update PatientHealthData.
     */
    data: XOR<PatientHealthDataUpdateManyMutationInput, PatientHealthDataUncheckedUpdateManyInput>
    /**
     * Filter which PatientHealthData to update
     */
    where?: PatientHealthDataWhereInput
    /**
     * Limit how many PatientHealthData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatientHealthData upsert
   */
  export type PatientHealthDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientHealthData to update in case it exists.
     */
    where: PatientHealthDataWhereUniqueInput
    /**
     * In case the PatientHealthData found by the `where` argument doesn't exist, create a new PatientHealthData with this data.
     */
    create: XOR<PatientHealthDataCreateInput, PatientHealthDataUncheckedCreateInput>
    /**
     * In case the PatientHealthData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientHealthDataUpdateInput, PatientHealthDataUncheckedUpdateInput>
  }

  /**
   * PatientHealthData delete
   */
  export type PatientHealthDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
    /**
     * Filter which PatientHealthData to delete.
     */
    where: PatientHealthDataWhereUniqueInput
  }

  /**
   * PatientHealthData deleteMany
   */
  export type PatientHealthDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientHealthData to delete
     */
    where?: PatientHealthDataWhereInput
    /**
     * Limit how many PatientHealthData to delete.
     */
    limit?: number
  }

  /**
   * PatientHealthData without action
   */
  export type PatientHealthDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientHealthData
     */
    select?: PatientHealthDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientHealthData
     */
    omit?: PatientHealthDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientHealthDataInclude<ExtArgs> | null
  }


  /**
   * Model MedicalReport
   */

  export type AggregateMedicalReport = {
    _count: MedicalReportCountAggregateOutputType | null
    _min: MedicalReportMinAggregateOutputType | null
    _max: MedicalReportMaxAggregateOutputType | null
  }

  export type MedicalReportMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    reportName: string | null
    reportLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalReportMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    reportName: string | null
    reportLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicalReportCountAggregateOutputType = {
    id: number
    patientId: number
    reportName: number
    reportLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicalReportMinAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalReportMaxAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicalReportCountAggregateInputType = {
    id?: true
    patientId?: true
    reportName?: true
    reportLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicalReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalReport to aggregate.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicalReports
    **/
    _count?: true | MedicalReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalReportMaxAggregateInputType
  }

  export type GetMedicalReportAggregateType<T extends MedicalReportAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicalReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicalReport[P]>
      : GetScalarType<T[P], AggregateMedicalReport[P]>
  }




  export type MedicalReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalReportWhereInput
    orderBy?: MedicalReportOrderByWithAggregationInput | MedicalReportOrderByWithAggregationInput[]
    by: MedicalReportScalarFieldEnum[] | MedicalReportScalarFieldEnum
    having?: MedicalReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalReportCountAggregateInputType | true
    _min?: MedicalReportMinAggregateInputType
    _max?: MedicalReportMaxAggregateInputType
  }

  export type MedicalReportGroupByOutputType = {
    id: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt: Date
    updatedAt: Date
    _count: MedicalReportCountAggregateOutputType | null
    _min: MedicalReportMinAggregateOutputType | null
    _max: MedicalReportMaxAggregateOutputType | null
  }

  type GetMedicalReportGroupByPayload<T extends MedicalReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalReportGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalReportGroupByOutputType[P]>
        }
      >
    >


  export type MedicalReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicalReport"]>

  export type MedicalReportSelectScalar = {
    id?: boolean
    patientId?: boolean
    reportName?: boolean
    reportLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicalReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "reportName" | "reportLink" | "createdAt" | "updatedAt", ExtArgs["result"]["medicalReport"]>
  export type MedicalReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type MedicalReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $MedicalReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicalReport"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      reportName: string
      reportLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicalReport"]>
    composites: {}
  }

  type MedicalReportGetPayload<S extends boolean | null | undefined | MedicalReportDefaultArgs> = $Result.GetResult<Prisma.$MedicalReportPayload, S>

  type MedicalReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalReportCountAggregateInputType | true
    }

  export interface MedicalReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicalReport'], meta: { name: 'MedicalReport' } }
    /**
     * Find zero or one MedicalReport that matches the filter.
     * @param {MedicalReportFindUniqueArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalReportFindUniqueArgs>(args: SelectSubset<T, MedicalReportFindUniqueArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicalReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalReportFindUniqueOrThrowArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalReportFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindFirstArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalReportFindFirstArgs>(args?: SelectSubset<T, MedicalReportFindFirstArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicalReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindFirstOrThrowArgs} args - Arguments to find a MedicalReport
     * @example
     * // Get one MedicalReport
     * const medicalReport = await prisma.medicalReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalReportFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicalReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicalReports
     * const medicalReports = await prisma.medicalReport.findMany()
     * 
     * // Get first 10 MedicalReports
     * const medicalReports = await prisma.medicalReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalReportFindManyArgs>(args?: SelectSubset<T, MedicalReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicalReport.
     * @param {MedicalReportCreateArgs} args - Arguments to create a MedicalReport.
     * @example
     * // Create one MedicalReport
     * const MedicalReport = await prisma.medicalReport.create({
     *   data: {
     *     // ... data to create a MedicalReport
     *   }
     * })
     * 
     */
    create<T extends MedicalReportCreateArgs>(args: SelectSubset<T, MedicalReportCreateArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicalReports.
     * @param {MedicalReportCreateManyArgs} args - Arguments to create many MedicalReports.
     * @example
     * // Create many MedicalReports
     * const medicalReport = await prisma.medicalReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalReportCreateManyArgs>(args?: SelectSubset<T, MedicalReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicalReports and returns the data saved in the database.
     * @param {MedicalReportCreateManyAndReturnArgs} args - Arguments to create many MedicalReports.
     * @example
     * // Create many MedicalReports
     * const medicalReport = await prisma.medicalReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicalReports and only return the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalReportCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicalReport.
     * @param {MedicalReportDeleteArgs} args - Arguments to delete one MedicalReport.
     * @example
     * // Delete one MedicalReport
     * const MedicalReport = await prisma.medicalReport.delete({
     *   where: {
     *     // ... filter to delete one MedicalReport
     *   }
     * })
     * 
     */
    delete<T extends MedicalReportDeleteArgs>(args: SelectSubset<T, MedicalReportDeleteArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicalReport.
     * @param {MedicalReportUpdateArgs} args - Arguments to update one MedicalReport.
     * @example
     * // Update one MedicalReport
     * const medicalReport = await prisma.medicalReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalReportUpdateArgs>(args: SelectSubset<T, MedicalReportUpdateArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicalReports.
     * @param {MedicalReportDeleteManyArgs} args - Arguments to filter MedicalReports to delete.
     * @example
     * // Delete a few MedicalReports
     * const { count } = await prisma.medicalReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalReportDeleteManyArgs>(args?: SelectSubset<T, MedicalReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicalReports
     * const medicalReport = await prisma.medicalReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalReportUpdateManyArgs>(args: SelectSubset<T, MedicalReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicalReports and returns the data updated in the database.
     * @param {MedicalReportUpdateManyAndReturnArgs} args - Arguments to update many MedicalReports.
     * @example
     * // Update many MedicalReports
     * const medicalReport = await prisma.medicalReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicalReports and only return the `id`
     * const medicalReportWithIdOnly = await prisma.medicalReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalReportUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicalReport.
     * @param {MedicalReportUpsertArgs} args - Arguments to update or create a MedicalReport.
     * @example
     * // Update or create a MedicalReport
     * const medicalReport = await prisma.medicalReport.upsert({
     *   create: {
     *     // ... data to create a MedicalReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicalReport we want to update
     *   }
     * })
     */
    upsert<T extends MedicalReportUpsertArgs>(args: SelectSubset<T, MedicalReportUpsertArgs<ExtArgs>>): Prisma__MedicalReportClient<$Result.GetResult<Prisma.$MedicalReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicalReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportCountArgs} args - Arguments to filter MedicalReports to count.
     * @example
     * // Count the number of MedicalReports
     * const count = await prisma.medicalReport.count({
     *   where: {
     *     // ... the filter for the MedicalReports we want to count
     *   }
     * })
    **/
    count<T extends MedicalReportCountArgs>(
      args?: Subset<T, MedicalReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicalReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalReportAggregateArgs>(args: Subset<T, MedicalReportAggregateArgs>): Prisma.PrismaPromise<GetMedicalReportAggregateType<T>>

    /**
     * Group by MedicalReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalReportGroupByArgs['orderBy'] }
        : { orderBy?: MedicalReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicalReport model
   */
  readonly fields: MedicalReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicalReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicalReport model
   */
  interface MedicalReportFieldRefs {
    readonly id: FieldRef<"MedicalReport", 'String'>
    readonly patientId: FieldRef<"MedicalReport", 'String'>
    readonly reportName: FieldRef<"MedicalReport", 'String'>
    readonly reportLink: FieldRef<"MedicalReport", 'String'>
    readonly createdAt: FieldRef<"MedicalReport", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicalReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicalReport findUnique
   */
  export type MedicalReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport findUniqueOrThrow
   */
  export type MedicalReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport findFirst
   */
  export type MedicalReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalReports.
     */
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport findFirstOrThrow
   */
  export type MedicalReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReport to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicalReports.
     */
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport findMany
   */
  export type MedicalReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter, which MedicalReports to fetch.
     */
    where?: MedicalReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicalReports to fetch.
     */
    orderBy?: MedicalReportOrderByWithRelationInput | MedicalReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicalReports.
     */
    cursor?: MedicalReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicalReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicalReports.
     */
    skip?: number
    distinct?: MedicalReportScalarFieldEnum | MedicalReportScalarFieldEnum[]
  }

  /**
   * MedicalReport create
   */
  export type MedicalReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicalReport.
     */
    data: XOR<MedicalReportCreateInput, MedicalReportUncheckedCreateInput>
  }

  /**
   * MedicalReport createMany
   */
  export type MedicalReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicalReports.
     */
    data: MedicalReportCreateManyInput | MedicalReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicalReport createManyAndReturn
   */
  export type MedicalReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * The data used to create many MedicalReports.
     */
    data: MedicalReportCreateManyInput | MedicalReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalReport update
   */
  export type MedicalReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicalReport.
     */
    data: XOR<MedicalReportUpdateInput, MedicalReportUncheckedUpdateInput>
    /**
     * Choose, which MedicalReport to update.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport updateMany
   */
  export type MedicalReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicalReports.
     */
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyInput>
    /**
     * Filter which MedicalReports to update
     */
    where?: MedicalReportWhereInput
    /**
     * Limit how many MedicalReports to update.
     */
    limit?: number
  }

  /**
   * MedicalReport updateManyAndReturn
   */
  export type MedicalReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * The data used to update MedicalReports.
     */
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyInput>
    /**
     * Filter which MedicalReports to update
     */
    where?: MedicalReportWhereInput
    /**
     * Limit how many MedicalReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicalReport upsert
   */
  export type MedicalReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicalReport to update in case it exists.
     */
    where: MedicalReportWhereUniqueInput
    /**
     * In case the MedicalReport found by the `where` argument doesn't exist, create a new MedicalReport with this data.
     */
    create: XOR<MedicalReportCreateInput, MedicalReportUncheckedCreateInput>
    /**
     * In case the MedicalReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalReportUpdateInput, MedicalReportUncheckedUpdateInput>
  }

  /**
   * MedicalReport delete
   */
  export type MedicalReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
    /**
     * Filter which MedicalReport to delete.
     */
    where: MedicalReportWhereUniqueInput
  }

  /**
   * MedicalReport deleteMany
   */
  export type MedicalReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicalReports to delete
     */
    where?: MedicalReportWhereInput
    /**
     * Limit how many MedicalReports to delete.
     */
    limit?: number
  }

  /**
   * MedicalReport without action
   */
  export type MedicalReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicalReport
     */
    select?: MedicalReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicalReport
     */
    omit?: MedicalReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    needPasswordChange: 'needPasswordChange',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    address: 'address',
    registrationNumber: 'registrationNumber',
    experience: 'experience',
    gender: 'gender',
    appointmentFee: 'appointmentFee',
    qualification: 'qualification',
    currentWorkingPlace: 'currentWorkingPlace',
    designation: 'designation',
    averageRating: 'averageRating',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    profilePhoto: 'profilePhoto',
    contactNumber: 'contactNumber',
    address: 'address',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const SpecialtiesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    icon: 'icon'
  };

  export type SpecialtiesScalarFieldEnum = (typeof SpecialtiesScalarFieldEnum)[keyof typeof SpecialtiesScalarFieldEnum]


  export const DoctorSpecialtiesScalarFieldEnum: {
    specialitiesId: 'specialitiesId',
    doctorId: 'doctorId'
  };

  export type DoctorSpecialtiesScalarFieldEnum = (typeof DoctorSpecialtiesScalarFieldEnum)[keyof typeof DoctorSpecialtiesScalarFieldEnum]


  export const PatientHealthDataScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    bloodGroup: 'bloodGroup',
    hasAllergies: 'hasAllergies',
    hasDiabetes: 'hasDiabetes',
    height: 'height',
    weight: 'weight',
    smokingStatus: 'smokingStatus',
    dietaryPreferences: 'dietaryPreferences',
    pregnancyStatus: 'pregnancyStatus',
    mentalHealthHistory: 'mentalHealthHistory',
    immunizationStatus: 'immunizationStatus',
    hasPastSurgeries: 'hasPastSurgeries',
    recentAnxiety: 'recentAnxiety',
    recentDepression: 'recentDepression',
    maritalStatus: 'maritalStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientHealthDataScalarFieldEnum = (typeof PatientHealthDataScalarFieldEnum)[keyof typeof PatientHealthDataScalarFieldEnum]


  export const MedicalReportScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    reportName: 'reportName',
    reportLink: 'reportLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicalReportScalarFieldEnum = (typeof MedicalReportScalarFieldEnum)[keyof typeof MedicalReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'MaritalStatus'
   */
  export type EnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus'>
    


  /**
   * Reference to a field of type 'MaritalStatus[]'
   */
  export type ListEnumMaritalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaritalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolFilter<"User"> | boolean
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    needPasswordChange?: BoolWithAggregatesFilter<"User"> | boolean
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    profilePhoto?: StringNullableFilter<"Admin"> | string | null
    contactNumber?: StringFilter<"Admin"> | string
    isDeleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    contactNumber?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    profilePhoto?: StringNullableFilter<"Admin"> | string | null
    isDeleted?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "email" | "contactNumber">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Admin"> | string
    isDeleted?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    profilePhoto?: StringNullableFilter<"Doctor"> | string | null
    contactNumber?: StringFilter<"Doctor"> | string
    address?: StringNullableFilter<"Doctor"> | string | null
    registrationNumber?: StringFilter<"Doctor"> | string
    experience?: IntFilter<"Doctor"> | number
    gender?: EnumGenderFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntFilter<"Doctor"> | number
    qualification?: StringFilter<"Doctor"> | string
    currentWorkingPlace?: StringFilter<"Doctor"> | string
    designation?: StringFilter<"Doctor"> | string
    averageRating?: FloatFilter<"Doctor"> | number
    isDeleted?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    doctorSpecialties?: DoctorSpecialtiesOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    contactNumber?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    profilePhoto?: StringNullableFilter<"Doctor"> | string | null
    address?: StringNullableFilter<"Doctor"> | string | null
    registrationNumber?: StringFilter<"Doctor"> | string
    experience?: IntFilter<"Doctor"> | number
    gender?: EnumGenderFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntFilter<"Doctor"> | number
    qualification?: StringFilter<"Doctor"> | string
    currentWorkingPlace?: StringFilter<"Doctor"> | string
    designation?: StringFilter<"Doctor"> | string
    averageRating?: FloatFilter<"Doctor"> | number
    isDeleted?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }, "id" | "email" | "contactNumber">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrderInput | SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Doctor"> | string
    address?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    registrationNumber?: StringWithAggregatesFilter<"Doctor"> | string
    experience?: IntWithAggregatesFilter<"Doctor"> | number
    gender?: EnumGenderWithAggregatesFilter<"Doctor"> | $Enums.Gender
    appointmentFee?: IntWithAggregatesFilter<"Doctor"> | number
    qualification?: StringWithAggregatesFilter<"Doctor"> | string
    currentWorkingPlace?: StringWithAggregatesFilter<"Doctor"> | string
    designation?: StringWithAggregatesFilter<"Doctor"> | string
    averageRating?: FloatWithAggregatesFilter<"Doctor"> | number
    isDeleted?: BoolWithAggregatesFilter<"Doctor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
    profilePhoto?: StringNullableFilter<"Patient"> | string | null
    contactNumber?: StringFilter<"Patient"> | string
    address?: StringNullableFilter<"Patient"> | string | null
    isDeleted?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    patientHealthData?: XOR<PatientHealthDataNullableScalarRelationFilter, PatientHealthDataWhereInput> | null
    medicalReport?: MedicalReportListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    patientHealthData?: PatientHealthDataOrderByWithRelationInput
    medicalReport?: MedicalReportOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    contactNumber?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    profilePhoto?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    isDeleted?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    patientHealthData?: XOR<PatientHealthDataNullableScalarRelationFilter, PatientHealthDataWhereInput> | null
    medicalReport?: MedicalReportListRelationFilter
  }, "id" | "email" | "contactNumber">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    contactNumber?: SortOrder
    address?: SortOrderInput | SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
    profilePhoto?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    contactNumber?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    isDeleted?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type SpecialtiesWhereInput = {
    AND?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    OR?: SpecialtiesWhereInput[]
    NOT?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    id?: StringFilter<"Specialties"> | string
    title?: StringFilter<"Specialties"> | string
    icon?: StringFilter<"Specialties"> | string
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }

  export type SpecialtiesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    doctorSpecialties?: DoctorSpecialtiesOrderByRelationAggregateInput
  }

  export type SpecialtiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    OR?: SpecialtiesWhereInput[]
    NOT?: SpecialtiesWhereInput | SpecialtiesWhereInput[]
    icon?: StringFilter<"Specialties"> | string
    doctorSpecialties?: DoctorSpecialtiesListRelationFilter
  }, "id" | "title">

  export type SpecialtiesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
    _count?: SpecialtiesCountOrderByAggregateInput
    _max?: SpecialtiesMaxOrderByAggregateInput
    _min?: SpecialtiesMinOrderByAggregateInput
  }

  export type SpecialtiesScalarWhereWithAggregatesInput = {
    AND?: SpecialtiesScalarWhereWithAggregatesInput | SpecialtiesScalarWhereWithAggregatesInput[]
    OR?: SpecialtiesScalarWhereWithAggregatesInput[]
    NOT?: SpecialtiesScalarWhereWithAggregatesInput | SpecialtiesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Specialties"> | string
    title?: StringWithAggregatesFilter<"Specialties"> | string
    icon?: StringWithAggregatesFilter<"Specialties"> | string
  }

  export type DoctorSpecialtiesWhereInput = {
    AND?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    OR?: DoctorSpecialtiesWhereInput[]
    NOT?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    specialitiesId?: StringFilter<"DoctorSpecialties"> | string
    doctorId?: StringFilter<"DoctorSpecialties"> | string
    specialties?: XOR<SpecialtiesScalarRelationFilter, SpecialtiesWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type DoctorSpecialtiesOrderByWithRelationInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
    specialties?: SpecialtiesOrderByWithRelationInput
    doctor?: DoctorOrderByWithRelationInput
  }

  export type DoctorSpecialtiesWhereUniqueInput = Prisma.AtLeast<{
    specialitiesId_doctorId?: DoctorSpecialtiesSpecialitiesIdDoctorIdCompoundUniqueInput
    AND?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    OR?: DoctorSpecialtiesWhereInput[]
    NOT?: DoctorSpecialtiesWhereInput | DoctorSpecialtiesWhereInput[]
    specialitiesId?: StringFilter<"DoctorSpecialties"> | string
    doctorId?: StringFilter<"DoctorSpecialties"> | string
    specialties?: XOR<SpecialtiesScalarRelationFilter, SpecialtiesWhereInput>
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "specialitiesId_doctorId">

  export type DoctorSpecialtiesOrderByWithAggregationInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
    _count?: DoctorSpecialtiesCountOrderByAggregateInput
    _max?: DoctorSpecialtiesMaxOrderByAggregateInput
    _min?: DoctorSpecialtiesMinOrderByAggregateInput
  }

  export type DoctorSpecialtiesScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecialtiesScalarWhereWithAggregatesInput | DoctorSpecialtiesScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecialtiesScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecialtiesScalarWhereWithAggregatesInput | DoctorSpecialtiesScalarWhereWithAggregatesInput[]
    specialitiesId?: StringWithAggregatesFilter<"DoctorSpecialties"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorSpecialties"> | string
  }

  export type PatientHealthDataWhereInput = {
    AND?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    OR?: PatientHealthDataWhereInput[]
    NOT?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    id?: StringFilter<"PatientHealthData"> | string
    patientId?: StringFilter<"PatientHealthData"> | string
    dateOfBirth?: DateTimeNullableFilter<"PatientHealthData"> | Date | string | null
    gender?: EnumGenderNullableFilter<"PatientHealthData"> | $Enums.Gender | null
    bloodGroup?: EnumBloodGroupNullableFilter<"PatientHealthData"> | $Enums.BloodGroup | null
    hasAllergies?: BoolFilter<"PatientHealthData"> | boolean
    hasDiabetes?: BoolFilter<"PatientHealthData"> | boolean
    height?: StringNullableFilter<"PatientHealthData"> | string | null
    weight?: StringNullableFilter<"PatientHealthData"> | string | null
    smokingStatus?: BoolFilter<"PatientHealthData"> | boolean
    dietaryPreferences?: StringNullableFilter<"PatientHealthData"> | string | null
    pregnancyStatus?: BoolFilter<"PatientHealthData"> | boolean
    mentalHealthHistory?: StringNullableFilter<"PatientHealthData"> | string | null
    immunizationStatus?: StringNullableFilter<"PatientHealthData"> | string | null
    hasPastSurgeries?: BoolFilter<"PatientHealthData"> | boolean
    recentAnxiety?: BoolFilter<"PatientHealthData"> | boolean
    recentDepression?: BoolFilter<"PatientHealthData"> | boolean
    maritalStatus?: EnumMaritalStatusNullableFilter<"PatientHealthData"> | $Enums.MaritalStatus | null
    createdAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type PatientHealthDataOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrderInput | SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrderInput | SortOrder
    immunizationStatus?: SortOrderInput | SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type PatientHealthDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    patientId?: string
    AND?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    OR?: PatientHealthDataWhereInput[]
    NOT?: PatientHealthDataWhereInput | PatientHealthDataWhereInput[]
    dateOfBirth?: DateTimeNullableFilter<"PatientHealthData"> | Date | string | null
    gender?: EnumGenderNullableFilter<"PatientHealthData"> | $Enums.Gender | null
    bloodGroup?: EnumBloodGroupNullableFilter<"PatientHealthData"> | $Enums.BloodGroup | null
    hasAllergies?: BoolFilter<"PatientHealthData"> | boolean
    hasDiabetes?: BoolFilter<"PatientHealthData"> | boolean
    height?: StringNullableFilter<"PatientHealthData"> | string | null
    weight?: StringNullableFilter<"PatientHealthData"> | string | null
    smokingStatus?: BoolFilter<"PatientHealthData"> | boolean
    dietaryPreferences?: StringNullableFilter<"PatientHealthData"> | string | null
    pregnancyStatus?: BoolFilter<"PatientHealthData"> | boolean
    mentalHealthHistory?: StringNullableFilter<"PatientHealthData"> | string | null
    immunizationStatus?: StringNullableFilter<"PatientHealthData"> | string | null
    hasPastSurgeries?: BoolFilter<"PatientHealthData"> | boolean
    recentAnxiety?: BoolFilter<"PatientHealthData"> | boolean
    recentDepression?: BoolFilter<"PatientHealthData"> | boolean
    maritalStatus?: EnumMaritalStatusNullableFilter<"PatientHealthData"> | $Enums.MaritalStatus | null
    createdAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeFilter<"PatientHealthData"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "patientId">

  export type PatientHealthDataOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrderInput | SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrderInput | SortOrder
    immunizationStatus?: SortOrderInput | SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientHealthDataCountOrderByAggregateInput
    _max?: PatientHealthDataMaxOrderByAggregateInput
    _min?: PatientHealthDataMinOrderByAggregateInput
  }

  export type PatientHealthDataScalarWhereWithAggregatesInput = {
    AND?: PatientHealthDataScalarWhereWithAggregatesInput | PatientHealthDataScalarWhereWithAggregatesInput[]
    OR?: PatientHealthDataScalarWhereWithAggregatesInput[]
    NOT?: PatientHealthDataScalarWhereWithAggregatesInput | PatientHealthDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientHealthData"> | string
    patientId?: StringWithAggregatesFilter<"PatientHealthData"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"PatientHealthData"> | Date | string | null
    gender?: EnumGenderNullableWithAggregatesFilter<"PatientHealthData"> | $Enums.Gender | null
    bloodGroup?: EnumBloodGroupNullableWithAggregatesFilter<"PatientHealthData"> | $Enums.BloodGroup | null
    hasAllergies?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    hasDiabetes?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    height?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    weight?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    smokingStatus?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    dietaryPreferences?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    pregnancyStatus?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    mentalHealthHistory?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    immunizationStatus?: StringNullableWithAggregatesFilter<"PatientHealthData"> | string | null
    hasPastSurgeries?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    recentAnxiety?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    recentDepression?: BoolWithAggregatesFilter<"PatientHealthData"> | boolean
    maritalStatus?: EnumMaritalStatusNullableWithAggregatesFilter<"PatientHealthData"> | $Enums.MaritalStatus | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientHealthData"> | Date | string
  }

  export type MedicalReportWhereInput = {
    AND?: MedicalReportWhereInput | MedicalReportWhereInput[]
    OR?: MedicalReportWhereInput[]
    NOT?: MedicalReportWhereInput | MedicalReportWhereInput[]
    id?: StringFilter<"MedicalReport"> | string
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type MedicalReportOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type MedicalReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalReportWhereInput | MedicalReportWhereInput[]
    OR?: MedicalReportWhereInput[]
    NOT?: MedicalReportWhereInput | MedicalReportWhereInput[]
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type MedicalReportOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicalReportCountOrderByAggregateInput
    _max?: MedicalReportMaxOrderByAggregateInput
    _min?: MedicalReportMinOrderByAggregateInput
  }

  export type MedicalReportScalarWhereWithAggregatesInput = {
    AND?: MedicalReportScalarWhereWithAggregatesInput | MedicalReportScalarWhereWithAggregatesInput[]
    OR?: MedicalReportScalarWhereWithAggregatesInput[]
    NOT?: MedicalReportScalarWhereWithAggregatesInput | MedicalReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicalReport"> | string
    patientId?: StringWithAggregatesFilter<"MedicalReport"> | string
    reportName?: StringWithAggregatesFilter<"MedicalReport"> | string
    reportLink?: StringWithAggregatesFilter<"MedicalReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicalReport"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialtiesCreateInput = {
    id?: string
    title: string
    icon: string
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutSpecialtiesInput
  }

  export type SpecialtiesUncheckedCreateInput = {
    id?: string
    title: string
    icon: string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutSpecialtiesInput
  }

  export type SpecialtiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutSpecialtiesNestedInput
  }

  export type SpecialtiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesNestedInput
  }

  export type SpecialtiesCreateManyInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesCreateInput = {
    specialties: SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type DoctorSpecialtiesUncheckedCreateInput = {
    specialitiesId: string
    doctorId: string
  }

  export type DoctorSpecialtiesUpdateInput = {
    specialties?: SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type DoctorSpecialtiesUncheckedUpdateInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesCreateManyInput = {
    specialitiesId: string
    doctorId: string
  }

  export type DoctorSpecialtiesUpdateManyMutationInput = {

  }

  export type DoctorSpecialtiesUncheckedUpdateManyInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientHealthDataCreateInput = {
    id?: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bloodGroup?: $Enums.BloodGroup | null
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: string | null
    weight?: string | null
    smokingStatus?: boolean
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: $Enums.MaritalStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutPatientHealthDataInput
  }

  export type PatientHealthDataUncheckedCreateInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bloodGroup?: $Enums.BloodGroup | null
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: string | null
    weight?: string | null
    smokingStatus?: boolean
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: $Enums.MaritalStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    hasAllergies?: BoolFieldUpdateOperationsInput | boolean
    hasDiabetes?: BoolFieldUpdateOperationsInput | boolean
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    smokingStatus?: BoolFieldUpdateOperationsInput | boolean
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: BoolFieldUpdateOperationsInput | boolean
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: BoolFieldUpdateOperationsInput | boolean
    recentAnxiety?: BoolFieldUpdateOperationsInput | boolean
    recentDepression?: BoolFieldUpdateOperationsInput | boolean
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPatientHealthDataNestedInput
  }

  export type PatientHealthDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    hasAllergies?: BoolFieldUpdateOperationsInput | boolean
    hasDiabetes?: BoolFieldUpdateOperationsInput | boolean
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    smokingStatus?: BoolFieldUpdateOperationsInput | boolean
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: BoolFieldUpdateOperationsInput | boolean
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: BoolFieldUpdateOperationsInput | boolean
    recentAnxiety?: BoolFieldUpdateOperationsInput | boolean
    recentDepression?: BoolFieldUpdateOperationsInput | boolean
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataCreateManyInput = {
    id?: string
    patientId: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bloodGroup?: $Enums.BloodGroup | null
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: string | null
    weight?: string | null
    smokingStatus?: boolean
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: $Enums.MaritalStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    hasAllergies?: BoolFieldUpdateOperationsInput | boolean
    hasDiabetes?: BoolFieldUpdateOperationsInput | boolean
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    smokingStatus?: BoolFieldUpdateOperationsInput | boolean
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: BoolFieldUpdateOperationsInput | boolean
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: BoolFieldUpdateOperationsInput | boolean
    recentAnxiety?: BoolFieldUpdateOperationsInput | boolean
    recentDepression?: BoolFieldUpdateOperationsInput | boolean
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    hasAllergies?: BoolFieldUpdateOperationsInput | boolean
    hasDiabetes?: BoolFieldUpdateOperationsInput | boolean
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    smokingStatus?: BoolFieldUpdateOperationsInput | boolean
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: BoolFieldUpdateOperationsInput | boolean
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: BoolFieldUpdateOperationsInput | boolean
    recentAnxiety?: BoolFieldUpdateOperationsInput | boolean
    recentDepression?: BoolFieldUpdateOperationsInput | boolean
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicalReportInput
  }

  export type MedicalReportUncheckedCreateInput = {
    id?: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicalReportNestedInput
  }

  export type MedicalReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportCreateManyInput = {
    id?: string
    patientId: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    needPasswordChange?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DoctorSpecialtiesListRelationFilter = {
    every?: DoctorSpecialtiesWhereInput
    some?: DoctorSpecialtiesWhereInput
    none?: DoctorSpecialtiesWhereInput
  }

  export type DoctorSpecialtiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    experience?: SortOrder
    appointmentFee?: SortOrder
    averageRating?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    registrationNumber?: SortOrder
    experience?: SortOrder
    gender?: SortOrder
    appointmentFee?: SortOrder
    qualification?: SortOrder
    currentWorkingPlace?: SortOrder
    designation?: SortOrder
    averageRating?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    experience?: SortOrder
    appointmentFee?: SortOrder
    averageRating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PatientHealthDataNullableScalarRelationFilter = {
    is?: PatientHealthDataWhereInput | null
    isNot?: PatientHealthDataWhereInput | null
  }

  export type MedicalReportListRelationFilter = {
    every?: MedicalReportWhereInput
    some?: MedicalReportWhereInput
    none?: MedicalReportWhereInput
  }

  export type MedicalReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    profilePhoto?: SortOrder
    contactNumber?: SortOrder
    address?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialtiesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    icon?: SortOrder
  }

  export type SpecialtiesScalarRelationFilter = {
    is?: SpecialtiesWhereInput
    isNot?: SpecialtiesWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type DoctorSpecialtiesSpecialitiesIdDoctorIdCompoundUniqueInput = {
    specialitiesId: string
    doctorId: string
  }

  export type DoctorSpecialtiesCountOrderByAggregateInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorSpecialtiesMaxOrderByAggregateInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type DoctorSpecialtiesMinOrderByAggregateInput = {
    specialitiesId?: SortOrder
    doctorId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type EnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null
  }

  export type EnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PatientHealthDataCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientHealthDataMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientHealthDataMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    bloodGroup?: SortOrder
    hasAllergies?: SortOrder
    hasDiabetes?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    smokingStatus?: SortOrder
    dietaryPreferences?: SortOrder
    pregnancyStatus?: SortOrder
    mentalHealthHistory?: SortOrder
    immunizationStatus?: SortOrder
    hasPastSurgeries?: SortOrder
    recentAnxiety?: SortOrder
    recentDepression?: SortOrder
    maritalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type EnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
  }

  export type EnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type MedicalReportCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalReportMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicalReportMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    reportName?: SortOrder
    reportLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorSpecialtiesCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput | DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput> | DoctorSpecialtiesCreateWithoutDoctorInput[] | DoctorSpecialtiesUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutDoctorInput | DoctorSpecialtiesCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorSpecialtiesCreateManyDoctorInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput | DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type PatientHealthDataCreateNestedOneWithoutPatientInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    connect?: PatientHealthDataWhereUniqueInput
  }

  export type MedicalReportCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
  }

  export type PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    connect?: PatientHealthDataWhereUniqueInput
  }

  export type MedicalReportUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type PatientHealthDataUpdateOneWithoutPatientNestedInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    upsert?: PatientHealthDataUpsertWithoutPatientInput
    disconnect?: PatientHealthDataWhereInput | boolean
    delete?: PatientHealthDataWhereInput | boolean
    connect?: PatientHealthDataWhereUniqueInput
    update?: XOR<XOR<PatientHealthDataUpdateToOneWithWhereWithoutPatientInput, PatientHealthDataUpdateWithoutPatientInput>, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalReportUpsertWithWhereUniqueWithoutPatientInput | MedicalReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    set?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    disconnect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    delete?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    update?: MedicalReportUpdateWithWhereUniqueWithoutPatientInput | MedicalReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalReportUpdateManyWithWhereWithoutPatientInput | MedicalReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
  }

  export type PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    connectOrCreate?: PatientHealthDataCreateOrConnectWithoutPatientInput
    upsert?: PatientHealthDataUpsertWithoutPatientInput
    disconnect?: PatientHealthDataWhereInput | boolean
    delete?: PatientHealthDataWhereInput | boolean
    connect?: PatientHealthDataWhereUniqueInput
    update?: XOR<XOR<PatientHealthDataUpdateToOneWithWhereWithoutPatientInput, PatientHealthDataUpdateWithoutPatientInput>, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput> | MedicalReportCreateWithoutPatientInput[] | MedicalReportUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicalReportCreateOrConnectWithoutPatientInput | MedicalReportCreateOrConnectWithoutPatientInput[]
    upsert?: MedicalReportUpsertWithWhereUniqueWithoutPatientInput | MedicalReportUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicalReportCreateManyPatientInputEnvelope
    set?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    disconnect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    delete?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    connect?: MedicalReportWhereUniqueInput | MedicalReportWhereUniqueInput[]
    update?: MedicalReportUpdateWithWhereUniqueWithoutPatientInput | MedicalReportUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicalReportUpdateManyWithWhereWithoutPatientInput | MedicalReportUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
  }

  export type DoctorSpecialtiesCreateNestedManyWithoutSpecialtiesInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | DoctorSpecialtiesCreateWithoutSpecialtiesInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtiesInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSpecialtiesUncheckedCreateNestedManyWithoutSpecialtiesInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | DoctorSpecialtiesCreateWithoutSpecialtiesInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtiesInputEnvelope
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
  }

  export type DoctorSpecialtiesUpdateManyWithoutSpecialtiesNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | DoctorSpecialtiesCreateWithoutSpecialtiesInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtiesInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput | DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesNestedInput = {
    create?: XOR<DoctorSpecialtiesCreateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput> | DoctorSpecialtiesCreateWithoutSpecialtiesInput[] | DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput[]
    connectOrCreate?: DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput | DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput[]
    upsert?: DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput | DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput[]
    createMany?: DoctorSpecialtiesCreateManySpecialtiesInputEnvelope
    set?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    disconnect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    delete?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    connect?: DoctorSpecialtiesWhereUniqueInput | DoctorSpecialtiesWhereUniqueInput[]
    update?: DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput | DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput[]
    updateMany?: DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput | DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput[]
    deleteMany?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
  }

  export type SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput = {
    create?: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput
    connect?: SpecialtiesWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutDoctorSpecialtiesInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialtiesInput
    connect?: DoctorWhereUniqueInput
  }

  export type SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput = {
    create?: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput
    upsert?: SpecialtiesUpsertWithoutDoctorSpecialtiesInput
    connect?: SpecialtiesWhereUniqueInput
    update?: XOR<XOR<SpecialtiesUpdateToOneWithWhereWithoutDoctorSpecialtiesInput, SpecialtiesUpdateWithoutDoctorSpecialtiesInput>, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput = {
    create?: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDoctorSpecialtiesInput
    upsert?: DoctorUpsertWithoutDoctorSpecialtiesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDoctorSpecialtiesInput, DoctorUpdateWithoutDoctorSpecialtiesInput>, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type PatientCreateNestedOneWithoutPatientHealthDataInput = {
    create?: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientHealthDataInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender | null
  }

  export type NullableEnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup | null
  }

  export type NullableEnumMaritalStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaritalStatus | null
  }

  export type PatientUpdateOneRequiredWithoutPatientHealthDataNestedInput = {
    create?: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPatientHealthDataInput
    upsert?: PatientUpsertWithoutPatientHealthDataInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPatientHealthDataInput, PatientUpdateWithoutPatientHealthDataInput>, PatientUncheckedUpdateWithoutPatientHealthDataInput>
  }

  export type PatientCreateNestedOneWithoutMedicalReportInput = {
    create?: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalReportInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutMedicalReportNestedInput = {
    create?: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicalReportInput
    upsert?: PatientUpsertWithoutMedicalReportInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicalReportInput, PatientUpdateWithoutMedicalReportInput>, PatientUncheckedUpdateWithoutMedicalReportInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGenderNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableFilter<$PrismaModel> | $Enums.Gender | null
  }

  export type NestedEnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null
  }

  export type NestedEnumMaritalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableFilter<$PrismaModel> | $Enums.MaritalStatus | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel> | null
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel> | null
    not?: NestedEnumGenderNullableWithAggregatesFilter<$PrismaModel> | $Enums.Gender | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumGenderNullableFilter<$PrismaModel>
    _max?: NestedEnumGenderNullableFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupNullableFilter<$PrismaModel>
  }

  export type NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaritalStatus | EnumMaritalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MaritalStatus[] | ListEnumMaritalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMaritalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.MaritalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumMaritalStatusNullableFilter<$PrismaModel>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type DoctorCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctorSpecialties?: DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesCreateWithoutDoctorInput = {
    specialties: SpecialtiesCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type DoctorSpecialtiesUncheckedCreateWithoutDoctorInput = {
    specialitiesId: string
  }

  export type DoctorSpecialtiesCreateOrConnectWithoutDoctorInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    create: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesCreateManyDoctorInputEnvelope = {
    data: DoctorSpecialtiesCreateManyDoctorInput | DoctorSpecialtiesCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DoctorSpecialtiesUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    update: XOR<DoctorSpecialtiesUpdateWithoutDoctorInput, DoctorSpecialtiesUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorSpecialtiesCreateWithoutDoctorInput, DoctorSpecialtiesUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    data: XOR<DoctorSpecialtiesUpdateWithoutDoctorInput, DoctorSpecialtiesUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorSpecialtiesUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorSpecialtiesScalarWhereInput
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorSpecialtiesScalarWhereInput = {
    AND?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
    OR?: DoctorSpecialtiesScalarWhereInput[]
    NOT?: DoctorSpecialtiesScalarWhereInput | DoctorSpecialtiesScalarWhereInput[]
    specialitiesId?: StringFilter<"DoctorSpecialties"> | string
    doctorId?: StringFilter<"DoctorSpecialties"> | string
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutUserInput
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    email: string
    password: string
    role: $Enums.UserRole
    needPasswordChange?: boolean
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type PatientHealthDataCreateWithoutPatientInput = {
    id?: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bloodGroup?: $Enums.BloodGroup | null
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: string | null
    weight?: string | null
    smokingStatus?: boolean
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: $Enums.MaritalStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataUncheckedCreateWithoutPatientInput = {
    id?: string
    dateOfBirth?: Date | string | null
    gender?: $Enums.Gender | null
    bloodGroup?: $Enums.BloodGroup | null
    hasAllergies?: boolean
    hasDiabetes?: boolean
    height?: string | null
    weight?: string | null
    smokingStatus?: boolean
    dietaryPreferences?: string | null
    pregnancyStatus?: boolean
    mentalHealthHistory?: string | null
    immunizationStatus?: string | null
    hasPastSurgeries?: boolean
    recentAnxiety?: boolean
    recentDepression?: boolean
    maritalStatus?: $Enums.MaritalStatus | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientHealthDataCreateOrConnectWithoutPatientInput = {
    where: PatientHealthDataWhereUniqueInput
    create: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportCreateWithoutPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUncheckedCreateWithoutPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportCreateOrConnectWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    create: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportCreateManyPatientInputEnvelope = {
    data: MedicalReportCreateManyPatientInput | MedicalReportCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutUserNestedInput
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    needPasswordChange?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PatientHealthDataUpsertWithoutPatientInput = {
    update: XOR<PatientHealthDataUpdateWithoutPatientInput, PatientHealthDataUncheckedUpdateWithoutPatientInput>
    create: XOR<PatientHealthDataCreateWithoutPatientInput, PatientHealthDataUncheckedCreateWithoutPatientInput>
    where?: PatientHealthDataWhereInput
  }

  export type PatientHealthDataUpdateToOneWithWhereWithoutPatientInput = {
    where?: PatientHealthDataWhereInput
    data: XOR<PatientHealthDataUpdateWithoutPatientInput, PatientHealthDataUncheckedUpdateWithoutPatientInput>
  }

  export type PatientHealthDataUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    hasAllergies?: BoolFieldUpdateOperationsInput | boolean
    hasDiabetes?: BoolFieldUpdateOperationsInput | boolean
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    smokingStatus?: BoolFieldUpdateOperationsInput | boolean
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: BoolFieldUpdateOperationsInput | boolean
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: BoolFieldUpdateOperationsInput | boolean
    recentAnxiety?: BoolFieldUpdateOperationsInput | boolean
    recentDepression?: BoolFieldUpdateOperationsInput | boolean
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientHealthDataUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableEnumGenderFieldUpdateOperationsInput | $Enums.Gender | null
    bloodGroup?: NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null
    hasAllergies?: BoolFieldUpdateOperationsInput | boolean
    hasDiabetes?: BoolFieldUpdateOperationsInput | boolean
    height?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    smokingStatus?: BoolFieldUpdateOperationsInput | boolean
    dietaryPreferences?: NullableStringFieldUpdateOperationsInput | string | null
    pregnancyStatus?: BoolFieldUpdateOperationsInput | boolean
    mentalHealthHistory?: NullableStringFieldUpdateOperationsInput | string | null
    immunizationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    hasPastSurgeries?: BoolFieldUpdateOperationsInput | boolean
    recentAnxiety?: BoolFieldUpdateOperationsInput | boolean
    recentDepression?: BoolFieldUpdateOperationsInput | boolean
    maritalStatus?: NullableEnumMaritalStatusFieldUpdateOperationsInput | $Enums.MaritalStatus | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    update: XOR<MedicalReportUpdateWithoutPatientInput, MedicalReportUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicalReportCreateWithoutPatientInput, MedicalReportUncheckedCreateWithoutPatientInput>
  }

  export type MedicalReportUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicalReportWhereUniqueInput
    data: XOR<MedicalReportUpdateWithoutPatientInput, MedicalReportUncheckedUpdateWithoutPatientInput>
  }

  export type MedicalReportUpdateManyWithWhereWithoutPatientInput = {
    where: MedicalReportScalarWhereInput
    data: XOR<MedicalReportUpdateManyMutationInput, MedicalReportUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicalReportScalarWhereInput = {
    AND?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
    OR?: MedicalReportScalarWhereInput[]
    NOT?: MedicalReportScalarWhereInput | MedicalReportScalarWhereInput[]
    id?: StringFilter<"MedicalReport"> | string
    patientId?: StringFilter<"MedicalReport"> | string
    reportName?: StringFilter<"MedicalReport"> | string
    reportLink?: StringFilter<"MedicalReport"> | string
    createdAt?: DateTimeFilter<"MedicalReport"> | Date | string
    updatedAt?: DateTimeFilter<"MedicalReport"> | Date | string
  }

  export type DoctorSpecialtiesCreateWithoutSpecialtiesInput = {
    doctor: DoctorCreateNestedOneWithoutDoctorSpecialtiesInput
  }

  export type DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput = {
    doctorId: string
  }

  export type DoctorSpecialtiesCreateOrConnectWithoutSpecialtiesInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    create: XOR<DoctorSpecialtiesCreateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput>
  }

  export type DoctorSpecialtiesCreateManySpecialtiesInputEnvelope = {
    data: DoctorSpecialtiesCreateManySpecialtiesInput | DoctorSpecialtiesCreateManySpecialtiesInput[]
    skipDuplicates?: boolean
  }

  export type DoctorSpecialtiesUpsertWithWhereUniqueWithoutSpecialtiesInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    update: XOR<DoctorSpecialtiesUpdateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedUpdateWithoutSpecialtiesInput>
    create: XOR<DoctorSpecialtiesCreateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedCreateWithoutSpecialtiesInput>
  }

  export type DoctorSpecialtiesUpdateWithWhereUniqueWithoutSpecialtiesInput = {
    where: DoctorSpecialtiesWhereUniqueInput
    data: XOR<DoctorSpecialtiesUpdateWithoutSpecialtiesInput, DoctorSpecialtiesUncheckedUpdateWithoutSpecialtiesInput>
  }

  export type DoctorSpecialtiesUpdateManyWithWhereWithoutSpecialtiesInput = {
    where: DoctorSpecialtiesScalarWhereInput
    data: XOR<DoctorSpecialtiesUpdateManyMutationInput, DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesInput>
  }

  export type SpecialtiesCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    title: string
    icon: string
  }

  export type SpecialtiesCreateOrConnectWithoutDoctorSpecialtiesInput = {
    where: SpecialtiesWhereUniqueInput
    create: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDoctorSpecialtiesInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    registrationNumber: string
    experience?: number
    gender: $Enums.Gender
    appointmentFee: number
    qualification: string
    currentWorkingPlace: string
    designation: string
    averageRating: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorCreateOrConnectWithoutDoctorSpecialtiesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
  }

  export type SpecialtiesUpsertWithoutDoctorSpecialtiesInput = {
    update: XOR<SpecialtiesUpdateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
    create: XOR<SpecialtiesCreateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedCreateWithoutDoctorSpecialtiesInput>
    where?: SpecialtiesWhereInput
  }

  export type SpecialtiesUpdateToOneWithWhereWithoutDoctorSpecialtiesInput = {
    where?: SpecialtiesWhereInput
    data: XOR<SpecialtiesUpdateWithoutDoctorSpecialtiesInput, SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type SpecialtiesUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialtiesUncheckedUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUpsertWithoutDoctorSpecialtiesInput = {
    update: XOR<DoctorUpdateWithoutDoctorSpecialtiesInput, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
    create: XOR<DoctorCreateWithoutDoctorSpecialtiesInput, DoctorUncheckedCreateWithoutDoctorSpecialtiesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDoctorSpecialtiesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDoctorSpecialtiesInput, DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput>
  }

  export type DoctorUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDoctorSpecialtiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    registrationNumber?: StringFieldUpdateOperationsInput | string
    experience?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    appointmentFee?: IntFieldUpdateOperationsInput | number
    qualification?: StringFieldUpdateOperationsInput | string
    currentWorkingPlace?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateWithoutPatientHealthDataInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    medicalReport?: MedicalReportCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutPatientHealthDataInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medicalReport?: MedicalReportUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPatientHealthDataInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
  }

  export type PatientUpsertWithoutPatientHealthDataInput = {
    update: XOR<PatientUpdateWithoutPatientHealthDataInput, PatientUncheckedUpdateWithoutPatientHealthDataInput>
    create: XOR<PatientCreateWithoutPatientHealthDataInput, PatientUncheckedCreateWithoutPatientHealthDataInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPatientHealthDataInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPatientHealthDataInput, PatientUncheckedUpdateWithoutPatientHealthDataInput>
  }

  export type PatientUpdateWithoutPatientHealthDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    medicalReport?: MedicalReportUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutPatientHealthDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicalReport?: MedicalReportUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutMedicalReportInput = {
    id?: string
    name: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatientInput
    patientHealthData?: PatientHealthDataCreateNestedOneWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicalReportInput = {
    id?: string
    name: string
    email: string
    profilePhoto?: string | null
    contactNumber: string
    address?: string | null
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patientHealthData?: PatientHealthDataUncheckedCreateNestedOneWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicalReportInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
  }

  export type PatientUpsertWithoutMedicalReportInput = {
    update: XOR<PatientUpdateWithoutMedicalReportInput, PatientUncheckedUpdateWithoutMedicalReportInput>
    create: XOR<PatientCreateWithoutMedicalReportInput, PatientUncheckedCreateWithoutMedicalReportInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicalReportInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicalReportInput, PatientUncheckedUpdateWithoutMedicalReportInput>
  }

  export type PatientUpdateWithoutMedicalReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatientNestedInput
    patientHealthData?: PatientHealthDataUpdateOneWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicalReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    contactNumber?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patientHealthData?: PatientHealthDataUncheckedUpdateOneWithoutPatientNestedInput
  }

  export type DoctorSpecialtiesCreateManyDoctorInput = {
    specialitiesId: string
  }

  export type DoctorSpecialtiesUpdateWithoutDoctorInput = {
    specialties?: SpecialtiesUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type DoctorSpecialtiesUncheckedUpdateWithoutDoctorInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutDoctorInput = {
    specialitiesId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicalReportCreateManyPatientInput = {
    id?: string
    reportName: string
    reportLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicalReportUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicalReportUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportName?: StringFieldUpdateOperationsInput | string
    reportLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecialtiesCreateManySpecialtiesInput = {
    doctorId: string
  }

  export type DoctorSpecialtiesUpdateWithoutSpecialtiesInput = {
    doctor?: DoctorUpdateOneRequiredWithoutDoctorSpecialtiesNestedInput
  }

  export type DoctorSpecialtiesUncheckedUpdateWithoutSpecialtiesInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorSpecialtiesUncheckedUpdateManyWithoutSpecialtiesInput = {
    doctorId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}