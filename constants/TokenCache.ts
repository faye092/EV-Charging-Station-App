import * as SecureStore from 'expo-secure-store';

export interface TokenCache {
    getToken: (key: string) => Promise<string | null>;
    saveToken: (key: string, token: string) => Promise<void>;
    clearToken?: (key: string) => Promise<void>;
}

export const tokenCache: TokenCache = {
    getToken:(key: string) => {
       return SecureStore.getItemAsync(key);
    },
    saveToken:(key: string, token: string) => {
        return SecureStore.setItemAsync(key, token);
    },
    clearToken:(key: string) => {
        return SecureStore.deleteItemAsync(key);
    },
};