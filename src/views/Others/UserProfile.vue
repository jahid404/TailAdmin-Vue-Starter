<template>
    <admin-layout>
        <PageBreadcrumb :pageTitle="currentPageTitle" />

        <profile-card />
        <address-card />
        <browser-data />
    </admin-layout>
</template>

<script setup>
    import { ref } from 'vue';
    import AdminLayout from '../../components/layout/AdminLayout.vue';
    import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
    import ProfileCard from '../../components/profile/ProfileCard.vue';
    import AddressCard from '../../components/profile/AddressCard.vue';
    import BrowserData from '../../components/profile/BrowserData.vue';

    const currentPageTitle = ref('User Profile');
</script>
