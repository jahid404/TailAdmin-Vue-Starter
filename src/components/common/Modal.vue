<template>
    <div class="fixed inset-0 flex items-center justify-center overflow-y-auto z-[99999]">
        <!-- Overlay -->
        <div
            class="fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[5px]"
            aria-hidden="true"
            @click="$emit('close')"
        ></div>

        <!-- Modal Container -->
        <div
            class="relative w-full max-w-[700px] max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-gray-900"
        >
            <!-- Header (fixed) -->
            <div
                class="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4"
            >
                <slot name="header"></slot>
            </div>

            <!-- Body (scrollable) -->
            <div class="flex-1 overflow-y-auto custom-scrollbar p-4">
                <slot name="body"></slot>
            </div>

            <!-- Footer -->
            <div
                class="border-t border-gray-200 dark:border-gray-700 p-4 flex justify-end gap-2"
            >
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>
