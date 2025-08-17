<template>
    <button
        :class="[
            'flex items-center justify-center gap-1 transition-all duration-100',
            sizeClasses[size],
            colorClass,
            className,
            roundedClass,
            { 'cursor-not-allowed opacity-50': disabled },
        ]"
        @click="onClick"
        :disabled="disabled"
    >
        <span v-if="startIcon" class="flex items-center">
            <component :is="startIcon" size="18" />
        </span>
        <slot></slot>
        <span v-if="endIcon" class="flex items-center">
            <component :is="endIcon" size="18" />
        </span>
    </button>
</template>

<script setup>
    const props = defineProps({
        size: { type: String, default: 'sm' },
        startIcon: { type: [Object, Function], default: null },
        endIcon: { type: [Object, Function], default: null },
        onClick: { type: Function, default: null },
        className: { type: String, default: '' },
        colorClass: { type: String, default: '' },
        roundedClass: { type: String, default: 'rounded-lg' },
        disabled: { type: Boolean, default: false },
    });

    const sizeClasses = {
        xs: 'px-2 py-1 text-theme-xs',
        sm: 'px-3 py-2 text-theme-sm',
        md: 'px-5 py-3.5 text-base h-11',
        lg: 'px-6 py-4 text-base',
    };

    const onClick = () => {
        if (!props.disabled && props.onClick) {
            props.onClick();
        }
    };
</script>
