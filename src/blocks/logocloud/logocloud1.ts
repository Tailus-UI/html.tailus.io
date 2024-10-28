import type { Code } from "src/types";

const htmlCode = `<section class="py-16 bg-white dark:bg-gray-950">
    <div class="max-w-5xl m-auto px-6">
        <h2 class="text-lg text-center text-title font-medium">Your favorite companies are our partners.</h2>
        <div class="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            <img class="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto">
            <img class="h-4 w-fit dark:invert" src="/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto">
            <img class="h-4 w-fit dark:invert" src="/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto">
            <img class="h-5 w-fit dark:invert" src="/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto">
            <img class="h-4 w-fit dark:invert" src="/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto">
            <img class="h-7 w-fit dark:invert" src="/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto">
            <img class="h-5 w-fit dark:invert" src="/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto">
            <img class="h-6 w-fit dark:invert" src="/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto">
            <img class="h-4 w-fit dark:invert" src="/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto">
            <img class="h-5 w-fit dark:invert" src="/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto">
            <img class="h-5 w-fit dark:invert" src="/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto"> 
        </div>
    </div>
</section>`

const nextjsCode = `export default function LogoCloud(){
    return (
        <section className="py-16 bg-white dark:bg-gray-950">
            <div className="max-w-5xl m-auto px-6">
                <h2 className="text-lg text-center text-title font-medium">Your favorite companies are our partners.</h2>
                <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                    <img className="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto">
                    <img className="h-4 w-fit dark:invert" src="/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto">
                    <img className="h-4 w-fit dark:invert" src="/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto">
                    <img className="h-5 w-fit dark:invert" src="/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto">
                    <img className="h-4 w-fit dark:invert" src="/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto">
                    <img className="h-7 w-fit dark:invert" src="/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto">
                    <img className="h-5 w-fit dark:invert" src="/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto">
                    <img className="h-6 w-fit dark:invert" src="/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto">
                    <img className="h-4 w-fit dark:invert" src="/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto">
                    <img className="h-5 w-fit dark:invert" src="/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto">
                    <img className="h-5 w-fit dark:invert" src="/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto"> 
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = `<template>
    <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-5xl m-auto px-6">
            <h2 className="text-lg text-center text-title font-medium">Your favorite companies are our partners.</h2>
            <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                <img className="h-5 w-fit dark:invert" src="/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto">
                <img className="h-4 w-fit dark:invert" src="/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto">
                <img className="h-4 w-fit dark:invert" src="/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto">
                <img className="h-5 w-fit dark:invert" src="/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto">
                <img className="h-4 w-fit dark:invert" src="/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto">
                <img className="h-7 w-fit dark:invert" src="/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto">
                <img className="h-5 w-fit dark:invert" src="/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto">
                <img className="h-6 w-fit dark:invert" src="/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto">
                <img className="h-4 w-fit dark:invert" src="/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto">
                <img className="h-5 w-fit dark:invert" src="/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto">
                <img className="h-5 w-fit dark:invert" src="/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto"> 
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'LogoCloud',
    }
</script>`

export const logoCloudCode1: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}