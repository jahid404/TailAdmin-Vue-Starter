<template>
    <div>
        <div
            class="rounded-2xl border border-gray-200 bg-white p-5 mb-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
        >
            <div>
                <h4
                    class="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6"
                >
                    Browser Data
                </h4>

                <pre class="whitespace-pre-wrap">{{ browserData }}</pre>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useIpInfo } from '../../composables/useIpInfo';

    const { ipInfo, initIpInfo } = useIpInfo();
    const browserData = ref({});

    const getFullClientData = async () => {
        const data = {};

        // 1️⃣ Navigator basic info
        data.userAgent = navigator.userAgent;
        data.language = navigator.language;
        data.languages = navigator.languages;
        data.platform = navigator.platform;
        data.cookieEnabled = navigator.cookieEnabled;
        data.online = navigator.onLine;

        // 2️⃣ Navigator UA-CH (high entropy values, if available)
        if (navigator.userAgentData?.getHighEntropyValues) {
            const highEntropyKeys = [
                'architecture',
                'bitness',
                'brands',
                'fullVersionList',
                'model',
                'platform',
                'platformVersion',
                'uaFullVersion',
                'wow64',
            ];
            const uaData = await navigator.userAgentData.getHighEntropyValues(
                highEntropyKeys
            );
            data.userAgentData = {
                mobile: navigator.userAgentData.mobile,
                brands: navigator.userAgentData.brands,
                ...uaData,
            };
        }

        // 3️⃣ Screen info
        data.screen = {
            width: window.screen.width,
            height: window.screen.height,
            availWidth: window.screen.availWidth,
            availHeight: window.screen.availHeight,
            colorDepth: window.screen.colorDepth,
            pixelDepth: window.screen.pixelDepth,
            orientation: screen.orientation?.type || null,
        };

        // 4️⃣ Geolocation
        data.location = await new Promise((resolve) => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (pos) =>
                        resolve({
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                            accuracy: pos.coords.accuracy,
                            google_map_url: `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`,
                        }),
                    (err) => resolve({ error: err.message })
                );
            } else {
                resolve({ error: 'Geolocation not supported' });
            }
        });

        browserData.value = data;
    };

    onMounted(() => {
        getFullClientData();
    });
</script>
