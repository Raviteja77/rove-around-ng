const baseUrl = 'http://localhost:9090';

export const environment = {
    production: false,
    endpoints: {
        register: `${baseUrl}/api/v1/auth/register`,
        login: `${baseUrl}/api/v1/auth/login`,
        logout: `${baseUrl}/api/v1/auth/logout`,
    }
}