/**
 * EmployeeDetails interface model
 */
// With sorting
export type EmployeeDetails = {
  age: number;
  firstName: string;
  id: number;
};

/**
 * IUserLoginSuccess interface model
 */
// With sorting
export type IUserLoginSuccess = Pick<EmployeeDetails, 'id' | 'firstName'> & {
  email: string;
  gender: string;
  lastName: string;
  message: string;
  success: boolean;
  token: string;
  username: string;
};

/**
 * IDefaultSimpleMessageOptions interface model
 */
export type IDefaultSimpleMessageOptions = {
  bodyText: string;
  btnText?: string;
  icon?: string;
  titleText: string;
};

/**
 * DecodedToken interface model
 */
export type DecodedToken = Pick<
  IUserLoginSuccess,
  'email' | 'firstName' | 'gender' | 'id' | 'lastName' | 'username'
> & {
  exp: number;
  iat: number;
  image: string;
};

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
 * IAccountData type model
 */
export type IAccountData = Pick<
  IUserLoginSuccess,
  'email' | 'firstName' | 'lastName'
>;

/**
 * QuotesData type model
 */
export type QuotesData = {
  author: string;
  id: number;
  quote: string;
};

/**
 * Quotes type model
 */
export type Quotes = {
  quotes: QuotesData[];
};
