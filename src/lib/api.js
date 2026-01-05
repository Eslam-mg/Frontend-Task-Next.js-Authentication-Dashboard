// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://tinytales.trendline.marketing/api';

/**
 * Make an API request
 * @param {string} endpoint - API endpoint (e.g., '/auth/login')
 * @param {object} options - Fetch options
 * @returns {Promise} Response data
 */
export async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
        headers: {
            'Accept': 'application/json',
            ...options.headers,
        },
        ...options,
    };

    // Add authorization token if available
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
    }

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        if (!response.ok) {
            throw {
                status: response.status,
                message: data.message || 'An error occurred',
                errors: data.errors || {},
                data: data,
            };
        }

        return data;
    } catch (error) {
        if (error.status) {
            throw error;
        }
        throw {
            status: 500,
            message: 'Network error occurred',
            errors: {},
        };
    }
}

/**
 * Make a POST request with FormData
 * @param {string} endpoint - API endpoint
 * @param {object} data - Data to send
 * @returns {Promise} Response data
 */
export async function apiPostFormData(endpoint, data) {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
        if (data[key] !== null && data[key] !== undefined) {
            formData.append(key, data[key]);
        }
    });

    return apiRequest(endpoint, {
        method: 'POST',
        body: formData,
    });
}

/**
 * Authentication API calls
 */
export const authAPI = {
    register: (data) => apiPostFormData('/auth/register', data),
    login: (data) => apiPostFormData('/auth/login', data),
    verifyEmail: (code) => apiPostFormData('/auth/verify-email', { code }),
    resendCode: () => apiPostFormData('/auth/verify-email/resend-code', {}),
    getUserData: () => apiRequest('/auth/user-data'),
    logout: () => apiPostFormData('/auth/logout', {}),
};
