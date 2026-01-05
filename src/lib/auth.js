/**
 * Token Management Utilities
 */

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const authStorage = {
    // Token methods
    setToken: (token) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(TOKEN_KEY, token);
        }
    },

    getToken: () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem(TOKEN_KEY);
        }
        return null;
    },

    removeToken: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(TOKEN_KEY);
        }
    },

    // User data methods
    setUser: (user) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
    },

    getUser: () => {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem(USER_KEY);
            return user ? JSON.parse(user) : null;
        }
        return null;
    },

    removeUser: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(USER_KEY);
        }
    },

    // Check if user is authenticated
    isAuthenticated: () => {
        return !!authStorage.getToken();
    },

    // Clear all auth data
    clearAuth: () => {
        authStorage.removeToken();
        authStorage.removeUser();
    },
};
