<template>
    <Modal v-if="show" @close="$emit('close')" :outSideClose="false" :maxWidth="'1200px'">
        <template #header>
            <div class="px-2 pr-14">
                <h4 class="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                    Import Question
                </h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    Import your question from a file.
                </p>
            </div>
        </template>

        <template #body>
            <div class="flex items-start justify-between gap-3">
                <div class="flex-1">
                    <div class="flex flex-col gap-1">
                        <FileInput
                            ref="fileInput"
                            :label="false"
                            id="file-input"
                            type="file"
                            accept=".json, .csv"
                            @change="handleUploadedFile"
                        />
                        <span class="text-sm text-gray-600 dark:text-gray-400">
                            Supported file types: .json, .csv
                        </span>
                    </div>
                </div>

                <Button
                    size="md"
                    colorClass="bg-brand-500 text-white hover:bg-brand-600"
                    @click="handleUploadedFile"
                >
                    <Repeat size="18" />
                    <span class="hidden md:inline-block">Process</span>
                </Button>
            </div>

            <div class="mt-4 rounded-lg bg-gray-200 dark:bg-gray-700 p-3">
                <pre class="text-sm text-gray-700 dark:text-gray-300 text-wrap">{{
                    questionsData?.slice(0, 5) ?? 'No questions found'
                }}</pre>
            </div>
        </template>

        <template #footer>
            <button
                @click="$emit('close')"
                class="px-4 py-2 border rounded-lg border-gray-300 dark:border-gray-700"
            >
                Cancel
            </button>
            <button
                @click="$emit('close')"
                class="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600"
            >
                Import
            </button>
        </template>
    </Modal>
</template>

<script setup>
    import { ref, defineProps } from 'vue';
    import Papa from 'papaparse';
    import Modal from '@/components/common/Modal.vue';
    import Button from '@/components/ui/Button.vue';
    import FileInput from '@/components/form-element/FileInput.vue';
    import ToastService from '@/plugins/toast';
    import { Repeat } from 'lucide-vue-next';

    const props = defineProps({
        show: { type: Boolean, default: false },
    });

    const fileInput = ref(null);
    const questionsData = ref([]);

    // --- handle uploaded file ---
    const handleUploadedFile = () => {
        ToastService.info('Processing file...');

        const files = fileInput.value?.$el?.querySelector('input[type=file]')?.files;
        if (!files || !files.length) {
            ToastService.error('No file selected.');
            return;
        }

        const file = files[0];

        if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    const records = results.data;
                    processRecords(records);

                    ToastService.success('CSV file processed successfully.');
                },
                error: (err) => {
                    ToastService.error('Error parsing CSV. Error: ' + err);
                },
            });
        } else if (file.type === 'application/json' || file.name.endsWith('.json')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const records = JSON.parse(e.target.result);
                    processRecords(records);
                } catch (err) {
                    console.error('Invalid JSON file', err);
                }
            };
            reader.readAsText(file);
        } else {
            ToastService.error('Unsupported file type. File type: ' + file.type);
        }
    };

    // --- process data ---
    const processRecords = (records) => {
        const questions = records.map((row) => {
            let { id = '', question = '', options = '', answer = '' } = row;

            id = (id || '').trim();
            question = (question || '').trim();
            answer = (answer || '').trim().replace(/^['"`]+|['"`]+$/g, '');

            let parsedOptions = [];
            if (typeof options === 'string') {
                if (options.startsWith('[') && options.endsWith(']')) {
                    try {
                        parsedOptions = JSON.parse(
                            options.replace(/'/g, '"')
                        ).map((opt) => opt.replace(/^['"`]+|['"`]+$/g, ''));
                    } catch (e) {
                        parsedOptions = options
                            .replace(/^\[|\]$/g, '')
                            .split(/,(?=(?:[^']*'[^']*')*[^']*$)/)
                            .map((opt) => opt.replace(/^['"`\s]+|['"`\s]+$/g, '').trim());
                    }
                } else {
                    parsedOptions = options
                        .split(',')
                        .map((opt) => opt.replace(/^['"`\s]+|['"`\s]+$/g, '').trim());
                }
            }

            return {
                id,
                title: question,
                options: parsedOptions,
                correct_ans: answer,
            };
        });

        questionsData.value = questions;
    };
</script>
