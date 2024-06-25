<template>
    <button @click="count++" class="p-4">
        {{ count }}
    </button>
</template>

<script lang="ts" setup>
const count = ref(0);
</script>

<style></style>