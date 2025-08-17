<template>
    <admin-layout>
        <PageBreadcrumb :pageTitle="currentPageTitle" :showNav="false">
            <template #actions>
                <Button
                    size="xs"
                    :startIcon="Plus"
                    colorClass="bg-brand-500 text-white hover:bg-brand-600"
                    @click="addQuestion"
                >
                    Add Question
                </Button>
            </template>
        </PageBreadcrumb>

        <div
            class="rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12"
        >
            <div class="mx-auto w-full max-w-[630px] text-center">
                <h3
                    class="ont-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl"
                >
                    Questions Will Be Shown Here
                </h3>
            </div>
        </div>

        <ImportQuestion :show="isImportQuestionModal" @close="isImportQuestionModal = false"/>
    </admin-layout>
</template>

<script setup>
    import { ref } from 'vue';
    import AdminLayout from '@/components/layout/AdminLayout.vue';
    import PageBreadcrumb from '@/components/common/PageBreadcrumb.vue';
    import Button from '@/components/ui/Button.vue';
    import ImportQuestion from '@/views/Backend/Admin/QuestionBank/Question/ImportQuestion.vue';
    import ToastService from '@/plugins/toast';
    import { Plus } from 'lucide-vue-next';

    const currentPageTitle = ref('Question Bank');
    const isImportQuestionModal = ref(false);

    const addQuestion = () => {
        isImportQuestionModal.value = true;
    };
</script>
