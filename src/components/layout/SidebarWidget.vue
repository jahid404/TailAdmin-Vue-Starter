<template>
    <div
        class="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]"
    >
        <h3 class="mb-2 font-semibold text-xl text-gray-900 dark:text-white">
            BrainWave
            <span class="text-gray-800 text-theme-xs dark:text-gray-400">
                v{{ appConfigs.version }}
            </span>
        </h3>
        <p class="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
            Smart MCQ Practice & AI-Powered Exam Preparation
        </p>
        <a
            href="https://dreamersdesire.com"
            target="_blank"
            rel="nofollow"
            class="flex items-center justify-center p-2 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600 transition-all duration-100"
        >
            Developer
        </a>
    </div>
</template>

<script setup>
    import appConfigs from '../../config/app-config';
</script>
