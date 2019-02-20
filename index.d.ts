/**
 * Make all defined properties in T required
 */
type TRequired<T> = T extends object ? { [P in keyof T]-?: NonNullable<T[P]>; } : T;
// type TRequired<T> = { [P in keyof T]-?: T[P]; };
// type TDeepRequired<T, U extends object | undefined = undefined> =
//     T extends object
//     ? { [P in keyof T]-?: NonNullable<T[P]> extends NonNullable<U | Function | Class> ? NonNullable<T[P]> : DeepRequired<NonNullable<T[P]>, U>; }
//     : T;