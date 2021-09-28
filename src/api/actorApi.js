import axiosClient from './axiosClient';

export function getAll() {
    return axiosClient({
        url: '/actors',
        method: 'GET',
    });
}

export function createActor(data) {
    return axiosClient({
        url: '/secure/create-actor',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
        data,
    });
}
