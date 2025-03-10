import type { Code } from "src/types";

const htmlCode = `<section class="bg-white py-20 dark:bg-transparent">
    <div class="mx-auto max-w-5xl space-y-16 px-6">
        <div class="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
            <h2 class="text-title text-4xl font-medium lg:text-5xl">Build by makers, loved by thousand developers</h2>
            <p class="text-body">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--ui-soft-bg:var(--ui-bg)]">
            <div class="card variant-soft grid gap-8 [grid-template-rows:auto_1fr] sm:col-span-2 lg:row-span-2 lg:p-12">
                <img class="h-6 w-fit dark:invert" src="/blocks/customers/nike.svg" alt="Nike Logo" height="24" width="auto" />

                <blockquote class="grid gap-6 [grid-template-rows:1fr_auto]">
                    <p class="text-title text-xl font-medium">"Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development"</p>

                    <div class="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                        <div class="avatar sz-md">
                            <img src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                        </div>
                        <div>
                            <cite class="text-title text-sm font-medium">Shekinah Tshiokufila</cite>
                            <span class="text-caption block text-sm">Software Ingineer</span>
                        </div>
                    </div>
                </blockquote>
            </div>
            <div class="card variant-soft sm:col-span-2 lg:p-12">
                <blockquote class="grid h-full gap-6 [grid-template-rows:1fr_auto]">
                    <p class="text-title text-xl font-medium">"Tailus is really extraordinary and very practical, no need to break your head. A real gold mine."</p>

                    <div class="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                        <div class="avatar sz-md">
                            <img src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
                        </div>
                        <div>
                            <cite class="text-title text-sm font-medium">Jonathan Yombo</cite>
                            <span class="text-caption block text-sm">Software Ingineer</span>
                        </div>
                    </div>
                </blockquote>
            </div>
            <div class="card variant-soft">
                <blockquote class="space-y-6">
                    <p>"Great work on tailfolio template. This is one of the best personal website that I have seen so far :)"</p>

                    <div class="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                        <div class="avatar sz-md">
                            <img src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                        </div>
                        <div>
                            <cite class="text-title text-sm font-medium">Yucel Faruksahan</cite>
                            <span class="text-caption block text-sm">Creator, Tailkits</span>
                        </div>
                    </div>
                </blockquote>
            </div>
            <div class="card variant-soft">
                <blockquote class="space-y-6">
                    <p>"Great work on tailfolio template. This is one of the best personal website that I have seen so far :)"</p>

                    <div class="grid gap-3 [grid-template-columns:auto_1fr]">
                        <div class="avatar sz-md">
                            <img src="https://tailus.io/images/reviews/rodrigo.webp" alt="Rodrigo Aguilar" height="400" width="400" loading="lazy" />
                        </div>
                        <div>
                            <p class="text-title text-sm font-medium">Rodrigo Aguilar</p>
                            <span class="text-caption block text-sm">Creator, TailwindAwesome</span>
                        </div>
                    </div>
                </blockquote>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function FAQs(){
    return (
        <section className="bg-white py-20 dark:bg-transparent">
            <div className="mx-auto max-w-5xl space-y-16 px-6">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-title text-4xl font-medium lg:text-5xl">Build by makers, loved by thousand developers</h2>
                    <p className="text-body">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--ui-soft-bg:var(--ui-bg)]">
                    <div className="card variant-soft grid gap-8 [grid-template-rows:auto_1fr] sm:col-span-2 lg:row-span-2 lg:p-12">
                        <img className="h-6 w-fit dark:invert" src="/blocks/customers/nike.svg" alt="Nike Logo" height="24" width="auto" />

                        <blockquote className="grid gap-6 [grid-template-rows:1fr_auto]">
                            <p className="text-title text-xl font-medium">"Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development"</p>

                            <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                <div className="avatar sz-md">
                                    <img src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                                </div>
                                <div>
                                    <cite className="text-title text-sm font-medium">Shekinah Tshiokufila</cite>
                                    <span className="text-caption block text-sm">Software Ingineer</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="card variant-soft sm:col-span-2 lg:p-12">
                        <blockquote className="grid h-full gap-6 [grid-template-rows:1fr_auto]">
                            <p className="text-title text-xl font-medium">"Tailus is really extraordinary and very practical, no need to break your head. A real gold mine."</p>

                            <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                <div className="avatar sz-md">
                                    <img src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
                                </div>
                                <div>
                                    <cite className="text-title text-sm font-medium">Jonathan Yombo</cite>
                                    <span className="text-caption block text-sm">Software Ingineer</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="card variant-soft">
                        <blockquote className="space-y-6">
                            <p>"Great work on tailfolio template. This is one of the best personal website that I have seen so far :)"</p>

                            <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                <div className="avatar sz-md">
                                    <img src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                                </div>
                                <div>
                                    <cite className="text-title text-sm font-medium">Yucel Faruksahan</cite>
                                    <span className="text-caption block text-sm">Creator, Tailkits</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="card variant-soft">
                        <blockquote className="space-y-6">
                            <p>"Great work on tailfolio template. This is one of the best personal website that I have seen so far :)"</p>

                            <div className="grid gap-3 [grid-template-columns:auto_1fr]">
                                <div className="avatar sz-md">
                                    <img src="https://tailus.io/images/reviews/rodrigo.webp" alt="Rodrigo Aguilar" height="400" width="400" loading="lazy" />
                                </div>
                                <div>
                                    <p className="text-title text-sm font-medium">Rodrigo Aguilar</p>
                                    <span className="text-caption block text-sm">Creator, TailwindAwesome</span>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const bentoSoftCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}