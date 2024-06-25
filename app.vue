<template>
    <NuxtPage />
</template>

<script lang="ts" setup>
const reqUrl = useRequestURL()
const path = reqUrl.href;

const pageDescription = "Your favourite Todo App"

// `${reqUrl.origin}/favicon.ico` does not work...
const previewImageUrl = undefined;

useSeoMeta({
    title: title(),
    description: description(),
    ogTitle: title(),
    ogDescription: description(),
    ogImage: previewImageUrl,
    ogUrl: path,
    twitterTitle: title(),
    twitterDescription: description(),
    twitterImage: previewImageUrl,
    twitterCard: 'summary'
})

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }
    ]
})
</script>