/**
 * EmployeeDetails interface model
 */
// With sorting
export interface EmployeeDetails {
  age: number;
  firstName: string;
  id: number;
}

/**
 * IUserLoginSuccess interface model
 */
// With sorting
export interface IUserLoginSuccess {
  email: string;
  firstName: string;
  gender: string;
  id: number;
  lastName: string;
  message: string;
  success: boolean;
  token: string;
  username: string;
}

/**
 * IDefaultSimpleMessageOptions interface model
 */
export interface IDefaultSimpleMessageOptions {
  bodyText: string;
  btnText?: string;
  icon?: string;
  titleText: string;
}

/**
 * DecodedToken interface model
 */
export interface DecodedToken {
  email: string;
  exp: number;
  firstName: string;
  gender: string;
  iat: number;
  id: number;
  image: string;
  lastName: string;
  username: string;
}

export type AUTHORIZATION_SCOPE = DecodedToken;

/**
 * AuthorizationDetails
 */
export enum AuthorizationDetails {
  email = 'email',
  firstName = 'firstName',
  id = 'id',
  lastName = 'lastName',
  username = 'username',
}

/**
 * IAccountData interface model
 */
export interface IAccountData {
  email: string;
  firstName?: string;
  lastName?: string;
}

/**
 * QuotesData interface model
 */
export interface QuotesData {
  author: string;
  id: number;
  quote: string;
}

/**
 * Quotes interface model
 */
export interface Quotes {
  quotes: QuotesData[];
}
