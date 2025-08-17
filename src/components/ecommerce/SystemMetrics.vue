<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3"
    >
        <div
            v-for="(card, index) in cards"
            :key="index"
            class="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] hover:bg-blue-100/[75] hover:shadow-xs transition-all duration-300 p-3 md:p-4"
        >
            <!-- Header -->
            <div class="flex justify-between items-center">
                <div>
                    <span class="text-gray-700 dark:text-gray-400">
                        {{ card.text }}
                    </span>
                </div>

                <div
                    class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-lg dark:bg-gray-800"
                >
                    <component
                        :is="card.icon"
                        size="22"
                        class="text-gray-800 dark:text-white/80"
                    />
                </div>
            </div>

            <div class="flex items-end justify-between mt-2">
                <div>
                    <h4 class="font-semibold text-gray-800 text-xl dark:text-white/90">
                        {{ card.value }}
                    </h4>
                </div>

                <!-- badge -->
                <span
                    v-if="card.badge"
                    class="flex items-center gap-1 rounded-full py-0.5 pl-2 pr-2.5 text-sm font-medium"
                    :class="badgeClasses(card.badge.type)"
                >
                    <component :is="card.badge.icon" size="15" strokeWidth="2" />
                    {{ card.badge.text }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import {
        Users,
        Layers,
        ArrowUp,
        ArrowDown,
        ShoppingCart,
        Calendar,
        Bell,
        MessageCircle,
        Settings,
        Activity,
        FileText,
        DollarSign,
        Star,
        Clock,
        Mail,
        BarChart2,
        Heart,
    } from 'lucide-vue-next';

    const cards = ref([
        {
            icon: Users,
            text: 'Customers',
            value: '3,782',
            badge: { text: '11.01%', icon: ArrowUp, type: 'success' },
        },
        {
            icon: Layers,
            text: 'Orders',
            value: '3,782',
            badge: { text: '9.05%', icon: ArrowDown, type: 'error' },
        },
        { icon: Users, text: 'Visitors', value: '15,230' },
        {
            icon: ShoppingCart,
            text: 'Products Sold',
            value: '1,240',
            badge: { text: '5.2%', icon: ArrowUp, type: 'success' },
        },
        {
            icon: DollarSign,
            text: 'Revenue',
            value: '$52,300',
            badge: { text: '3.8%', icon: ArrowDown, type: 'error' },
        },
        {
            icon: BarChart2,
            text: 'Stats',
            value: '89%',
            badge: { text: '7.4%', icon: ArrowUp, type: 'success' },
        },
        { icon: Heart, text: 'Likes', value: '12,450' },
        {
            icon: Star,
            text: 'Reviews',
            value: '3,210',
            badge: { text: '2.1%', icon: ArrowUp, type: 'success' },
        },
        {
            icon: Clock,
            text: 'Active Time',
            value: '320h',
            badge: { text: '0.5%', icon: ArrowDown, type: 'error' },
        },
        { icon: Mail, text: 'Messages', value: '1,024' },
        {
            icon: Calendar,
            text: 'Events',
            value: '54',
            badge: { text: '1.2%', icon: ArrowUp, type: 'success' },
        },
        {
            icon: Bell,
            text: 'Notifications',
            value: '450',
            badge: { text: '4.3%', icon: ArrowDown, type: 'error' },
        },
        { icon: MessageCircle, text: 'Chats', value: '1,230' },
        {
            icon: Settings,
            text: 'Settings Updated',
            value: '21',
            badge: { text: '9.9%', icon: ArrowUp, type: 'success' },
        },
        {
            icon: Activity,
            text: 'Activities',
            value: '3,540',
            badge: { text: '6.5%', icon: ArrowDown, type: 'error' },
        },
        { icon: FileText, text: 'Reports', value: '112' },
    ]);

    // render badge class based on type
    const badgeClasses = (type) => {
        const styles = {
            success:
                'bg-green-50 text-green-600 dark:bg-green-500/15 dark:text-green-500',
            error: 'bg-red-50 text-red-600 dark:bg-red-500/15 dark:text-red-500',
        };
        return styles[type] || '';
    };
</script>
