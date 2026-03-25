// types.ts
export type AuthGatewayConfig = {
  port: number;
  authServerUrl: string;
  authServerPort: number;
  authServerPath: string;
  authServerScheme: 'http' | 'https';
  authServerTokenAuth: boolean;
  authServerUsername: string;
  authServerPassword: string;
  authServerToken: string;
};

export type AuthGatewayOptions = {
  port: number;
  host: string;
  username: string;
  password: string;
  token: string;
  authServerUrl: string;
  authServerPort: number;
  authServerPath: string;
  authServerScheme: 'http' | 'https';
  authServerTokenAuth: boolean;
};