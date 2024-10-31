import type { Code } from "src/types";

const htmlCode = `<section class="py-32">
    <div class="mx-auto max-w-5xl border-t px-6">
        <span class="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
        <div class="mt-24 gap-4 sm:grid sm:grid-cols-2">
            <div class="sm:w-2/5">
                <h2 class="text-title text-3xl font-bold sm:text-4xl">Our dream team</h2>
            </div>
            <div class="mt-6 sm:mt-0">
                <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
            </div>
        </div>
        <div class="mt-24">
            <div class="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div class="group overflow-hidden">
                    <img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-one.webp" alt="team member" width="826" height="1239" />
                    <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
                        <div class="flex justify-between">
                            <h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Liam Brown</h3>
                            <span class="text-xs">_01</span>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Founder - CEO</span>
                            <a href="" class="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden">
                    <img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[23rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-two.webp" alt="team member" width="826" height="1239" />
                    <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
                        <div class="flex justify-between">
                            <h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Elijah Jones</h3>
                            <span class="text-xs">_02</span>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Co-Founder - CTO</span>
                            <a href="" class="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden">
                    <img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-three.webp" alt="team member" width="826" height="1239" />
                    <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
                        <div class="flex justify-between">
                            <h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Isabella Garcia</h3>
                            <span class="text-xs">_03</span>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Sales Manager</span>
                            <a href="" class="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden">
                    <img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-four.webp" alt="team member" width="826" height="1239" />
                    <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
                        <div class="flex justify-between">
                            <h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Henry Lee</h3>
                            <span class="text-xs">_03</span>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">UX Engeneer</span>
                            <a href="" class="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden">
                    <img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-five.webp" alt="team member" width="826" height="1239" />
                    <div class="px-3 pt-2 sm:pb-0 sm:pt-4">
                        <div class="flex justify-between">
                            <h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Ava Williams</h3>
                            <span class="text-xs">_04</span>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Interaction Designer</span>
                            <a href="" class="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                        </div>
                    </div>
                </div>
                <div class="group overflow-hidden">
                    <img class="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-six.webp" alt="team member" width="826" height="1239" />
                    <div class="px-2 pt-2 sm:pb-0 sm:pt-4">
                        <div class="flex justify-between">
                            <h3 class="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Olivia Miller</h3>
                            <span class="text-xs">_06</span>
                        </div>
                        <div class="mt-1 flex items-center justify-between">
                            <span class="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Visual Designer</span>
                            <a href="" class="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`

const nextjsCode = `export default function TeamSection(){
    return (
        <section className="py-32">
            <div className="mx-auto max-w-5xl border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Team</span>
                <div className="mt-24 gap-4 sm:grid sm:grid-cols-2">
                    <div className="sm:w-2/5">
                        <h2 className="text-title text-3xl font-bold sm:text-4xl">Our dream team</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>During the working process, we perform regular fitting with the client because he is the only person who can feel whether a new suit fits or not.</p>
                    </div>
                </div>
                <div className="mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group overflow-hidden">
                            <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-one.webp" alt="team member" width="826" height="1239" />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Liam Brown</h3>
                                    <span className="text-xs">_01</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Founder - CEO</span>
                                    <a href="" className="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                            <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[23rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-two.webp" alt="team member" width="826" height="1239" />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Elijah Jones</h3>
                                    <span className="text-xs">_02</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Co-Founder - CTO</span>
                                    <a href="" className="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                            <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-three.webp" alt="team member" width="826" height="1239" />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Isabella Garcia</h3>
                                    <span className="text-xs">_03</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Sales Manager</span>
                                    <a href="" className="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                            <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-four.webp" alt="team member" width="826" height="1239" />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Henry Lee</h3>
                                    <span className="text-xs">_03</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">UX Engeneer</span>
                                    <a href="" className="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                            <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-five.webp" alt="team member" width="826" height="1239" />
                            <div className="px-3 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Ava Williams</h3>
                                    <span className="text-xs">_04</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Interaction Designer</span>
                                    <a href="" className="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                                </div>
                            </div>
                        </div>
                        <div className="group overflow-hidden">
                            <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src="https://alt.tailus.io/images/team/member-six.webp" alt="team member" width="826" height="1239" />
                            <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                <div className="flex justify-between">
                                    <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">Olivia Miller</h3>
                                    <span className="text-xs">_06</span>
                                </div>
                                <div className="mt-1 flex items-center justify-between">
                                    <span className="inline-block translate-y-6 text-sm transition duration-300 group-hover:translate-y-0">Visual Designer</span>
                                    <a href="" className="inline-block translate-y-8 text-sm tracking-wide transition-all duration-500 group-hover:translate-y-0 group-hover:text-primary-600 dark:group-hover:text-primary-400"> Linktree</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}`

const nuxtjsCode = ``

export const threeCode: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}