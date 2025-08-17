<template>
    <admin-layout>
        <div class="mb-4 inline-flex flex-col gap-1">
            <math-field
                >\text{The equation is: } \frac{1}{10} = \frac{1}{v} + \frac{1}{20}
            </math-field>
            <math-field
                >\text{সমীকরণের সমাধানটি হলোঃ } \frac{1}{v} = \frac{2 - 1}{20}
            </math-field>
            <math-field readonly>x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}</math-field>
            <math-field readonly>E = mc^2</math-field>
            <math-field readonly>$\triangle ABC$</math-field>
            <math-field readonly>$\angle ABC={50}^{\circ}$</math-field>
            <math-field readonly>U=\{1,2,3,4,5,6,7\}</math-field>
            <math-field readonly>\tan^{-1} a + \frac{1}{2} \sec^{-1} \left( \frac{1 + b^2}{1 - b^2} \right) + \frac{1}{2} \csc^{-1} \left( \frac{1 + c^2}{2c} \right) = \pi</math-field>

            <math-field class="text-xl" readonly>
                \frac{15}{12}= \frac {\placeholder[numerator]{?}}
                {\placeholder[denominator]{?}}
            </math-field>
        </div>

        <div class="grid grid-cols-12 gap-2 md:gap-3">
            <div class="col-span-12">
                <system-metrics />
            </div>
            <div class="col-span-12 lg:col-span-6">
                <monthly-sale />
            </div>
            <div class="col-span-12 lg:col-span-6">
                <monthly-target />
            </div>
            <div class="col-span-12">
                <statistics-chart />
            </div>
            <div class="col-span-12 lg:col-span-6">
                <customer-demographic />
            </div>
            <div class="col-span-12 lg:col-span-6">
                <recent-orders />
            </div>
        </div>
    </admin-layout>
</template>

<script setup>
    import { onMounted } from 'vue';
    import 'mathlive';
    import AdminLayout from '@/components/layout/AdminLayout.vue';
    import SystemMetrics from '@/components/ecommerce/SystemMetrics.vue';
    import MonthlySale from '@/components/ecommerce/MonthlySale.vue';
    import MonthlyTarget from '@/components/ecommerce/MonthlyTarget.vue';
    import StatisticsChart from '@/components/ecommerce/StatisticsChart.vue';
    import CustomerDemographic from '@/components/ecommerce/CustomerDemographic.vue';
    import RecentOrders from '@/components/ecommerce/RecentOrders.vue';

    onMounted(async () => {});
</script>

<style>
    math-field {
        background-color: transparent;
    }

    math-field:not(:defined) {
        display: none;
    }

    math-field::part(virtual-keyboard-toggle) {
        display: none;
    }

    math-field::part(menu-toggle) {
        display: none;
    }
</style>
