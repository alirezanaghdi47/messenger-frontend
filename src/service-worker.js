/* eslint-disable no-restricted-globals */

// libraries
import {clientsClaim} from 'workbox-core';
import {ExpirationPlugin} from 'workbox-expiration';
import {precacheAndRoute, createHandlerBoundToURL} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';

const precacheRoutes = [
    '/index.html',
    '/favicon.ico',
    '/robot.txt',
    '/manifest.json',
    '/icon-192x192.png', '/icon-256x256.png', '/icon-384x384.png', '/icon-512x512.png', '/maskable_icon.png', '/logo192.png', '/logo512.png', '/screenshot-1.png', '/screenshot-2.png',
    '/images/offline-dark.svg', '/images/offline-light.svg', '/images/pwa-dark.svg', '/images/pwa-light.svg', '/images/orientation-dark.svg', '/images/orientation-light.svg'
];

clientsClaim();
const ignored = self.__WB_MANIFEST;
precacheAndRoute(precacheRoutes);
// precacheAndRoute(self.__WB_MANIFEST); for precaching

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
    // Return false to exempt requests from being fulfilled by index.html.
    ({request, url}) => {
        // If this isn't a navigation, skip.
        if (request.mode !== 'navigate') {
            return false;
        } // If this is a URL that starts with /_, skip.

        if (url.pathname.startsWith('/_')) {
            return false;
        } // If this looks like a URL for a resource, because it contains // a file extension, skip.

        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        } // Return true to signal that we want to use the handler.

        return true;
    },
    createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
    new RegExp('\.woff2$'),
    new CacheFirst({
        cacheName: 'fonts',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxEntries: 50,
            }),
        ],
    })
);

registerRoute(
    new RegExp('\.(png|svg|jpg|jpeg)$'),
    new CacheFirst({
        cacheName: 'images',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 30 * 24 * 60 * 60,
                maxEntries: 50,
            }),
        ],
    })
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

