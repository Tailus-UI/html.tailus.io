import type { Code } from "src/types";

const htmlCode = `<div class="fixed inset-0 isolate hidden contain-strict lg:block">
    <div class="fixed left-0 top-0 h-[1280px] w-[560px] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
    <div class="fixed left-0 top-0 h-[1280px] w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"></div>
    <div class="fixed left-0 top-0 h-[1280px] w-[240px] -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
</div>
<div class="fixed inset-0 isolate hidden contain-strict lg:block">
    <div class="fixed left-0 top-0 h-[1280px] w-[560px] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
    <div class="fixed left-0 top-0 h-[1280px] w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"></div>
    <div class="fixed left-0 top-0 h-[1280px] w-[240px] -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
</div>
<div class="fixed inset-x-0 bottom-12 hidden h-px w-1/2 bg-[--ui-border-color] lg:block"></div>
<div class="fixed inset-y-0 left-1/2 hidden w-px bg-[--ui-border-color] lg:block"></div>
<main class="relative mx-auto grid h-full min-h-screen max-w-5xl px-6 lg:grid-cols-2">
    <div class="relative inset-y-0 grid [grid-template-rows:1fr_auto]">
        <div class="relative h-full py-6 pr-6 lg:py-20">
            <a href="/" aria-label="home" class="flex items-center space-x-2">
                <svg class="text-title h-6" height="28" viewBox="0 0 298 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M107 30.7857H113.6V16.3429H122.686V30.7857H131.386V38.5H122.686V53.5429C122.686 55.4286 123 56.8429 123.629 57.7857C124.286 58.7286 125.214 59.2 126.414 59.2C127.414 59.2 128.2 59.0143 128.771 58.6429C129.371 58.2714 129.729 58.0143 129.843 57.8714L133.229 64.5143C133.057 64.6857 132.557 64.9714 131.729 65.3714C130.9 65.7714 129.829 66.1429 128.514 66.4857C127.2 66.8286 125.7 67 124.014 67C121.043 67 118.557 66.1143 116.557 64.3429C114.586 62.5714 113.6 59.8 113.6 56.0286V38.5H107V30.7857ZM167.156 65.9714V59.4571C166.928 60.1429 166.27 61.0857 165.185 62.2857C164.128 63.4857 162.67 64.5714 160.813 65.5429C158.985 66.5143 156.813 67 154.299 67C151.013 67 148.056 66.2143 145.428 64.6429C142.799 63.0714 140.728 60.8857 139.213 58.0857C137.699 55.2857 136.942 52.0571 136.942 48.4C136.942 44.7429 137.699 41.5143 139.213 38.7143C140.728 35.9143 142.799 33.7286 145.428 32.1571C148.056 30.5571 151.013 29.7571 154.299 29.7571C156.756 29.7571 158.885 30.1857 160.685 31.0429C162.485 31.9 163.928 32.8857 165.013 34C166.128 35.1143 166.813 36.0857 167.07 36.9143V30.7857H176.156V65.9714H167.156ZM145.985 48.4C145.985 50.6571 146.485 52.6286 147.485 54.3143C148.485 56 149.785 57.3 151.385 58.2143C153.013 59.1286 154.756 59.5857 156.613 59.5857C158.613 59.5857 160.385 59.1143 161.928 58.1714C163.499 57.2286 164.728 55.9286 165.613 54.2714C166.528 52.5857 166.985 50.6286 166.985 48.4C166.985 46.1714 166.528 44.2286 165.613 42.5714C164.728 40.8857 163.499 39.5714 161.928 38.6286C160.385 37.6571 158.613 37.1714 156.613 37.1714C154.756 37.1714 153.013 37.6429 151.385 38.5857C149.785 39.5 148.485 40.8 147.485 42.4857C146.485 44.1714 145.985 46.1429 145.985 48.4ZM186.271 65.9714V30.7857H195.4V65.9714H186.271ZM190.943 20.2429C189.4 20.2429 188.071 19.6857 186.957 18.5714C185.871 17.4571 185.329 16.1286 185.329 14.5857C185.329 13.0429 185.871 11.7143 186.957 10.6C188.071 9.45714 189.4 8.88571 190.943 8.88571C191.971 8.88571 192.914 9.15714 193.771 9.7C194.657 10.2143 195.357 10.9 195.871 11.7571C196.414 12.5857 196.686 13.5286 196.686 14.5857C196.686 16.1286 196.129 17.4571 195.014 18.5714C193.9 19.6857 192.543 20.2429 190.943 20.2429ZM215.437 65.9714H206.222V7H215.437V65.9714ZM234.044 48.0571C234.044 51.4857 234.744 54.2143 236.144 56.2429C237.572 58.2714 239.815 59.2857 242.872 59.2857C245.958 59.2857 248.201 58.2714 249.601 56.2429C251.001 54.2143 251.701 51.4857 251.701 48.0571V30.7857H260.787V49.2143C260.787 52.7571 260.087 55.8714 258.687 58.5571C257.287 61.2143 255.258 63.2857 252.601 64.7714C249.944 66.2571 246.701 67 242.872 67C239.072 67 235.844 66.2571 233.187 64.7714C230.53 63.2857 228.501 61.2143 227.101 58.5571C225.701 55.8714 225.001 52.7571 225.001 49.2143V30.7857H234.044V48.0571ZM284.016 29.7571C285.988 29.7571 287.816 29.9429 289.502 30.3143C291.188 30.6857 292.631 31.1286 293.831 31.6429C295.031 32.1571 295.859 32.5857 296.316 32.9286L292.973 38.5857C292.402 38.1 291.373 37.5429 289.888 36.9143C288.431 36.2857 286.788 35.9714 284.959 35.9714C283.131 35.9714 281.588 36.3 280.331 36.9571C279.073 37.6143 278.445 38.6 278.445 39.9143C278.445 41.2 279.102 42.2286 280.416 43C281.759 43.7714 283.573 44.4143 285.859 44.9286C287.745 45.3571 289.545 45.9571 291.259 46.7286C292.973 47.4714 294.373 48.5429 295.459 49.9429C296.573 51.3143 297.131 53.1571 297.131 55.4714C297.131 57.6714 296.659 59.5143 295.716 61C294.802 62.4571 293.573 63.6286 292.031 64.5143C290.488 65.4 288.773 66.0286 286.888 66.4C285.031 66.8 283.159 67 281.273 67C278.959 67 276.888 66.7714 275.059 66.3143C273.259 65.8571 271.759 65.3286 270.559 64.7286C269.359 64.1 268.502 63.5714 267.988 63.1429L271.331 56.8C272.073 57.5143 273.288 58.2714 274.973 59.0714C276.659 59.8429 278.545 60.2286 280.631 60.2286C282.859 60.2286 284.645 59.8 285.988 58.9429C287.331 58.0857 288.002 56.9429 288.002 55.5143C288.002 54.4571 287.673 53.6 287.016 52.9429C286.388 52.2857 285.516 51.7571 284.402 51.3571C283.288 50.9571 282.045 50.6 280.673 50.2857C279.388 49.9714 278.088 49.5714 276.773 49.0857C275.488 48.5714 274.302 47.9143 273.216 47.1143C272.131 46.2857 271.259 45.2571 270.602 44.0286C269.945 42.8 269.616 41.3571 269.616 39.7C269.616 37.5857 270.288 35.7857 271.631 34.3C272.973 32.8143 274.745 31.6857 276.945 30.9143C279.145 30.1429 281.502 29.7571 284.016 29.7571Z"
                        fill="currentColor"></path>
                    <path d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z" fill="currentColor"></path>
                    <path d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z" fill="currentColor"></path>
                    <path d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z" fill="currentColor"></path>
                    <path d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z" fill="currentColor"></path>
                    <path
                        d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z"
                        fill="currentColor"></path>
                    <path
                        d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z"
                        fill="currentColor"></path>
                    <path
                        d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z"
                        fill="currentColor"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z" fill="currentColor"></path>
                </svg>
            </a>

            <ul class="mt-16 hidden max-w-sm list-outside space-y-6 lg:block">
                <li class="grid gap-3 [grid-template-columns:auto_1fr]">
                    <svg class="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                    <div class="space-y-2">
                        <div class="text-title text-sm font-medium">Feature name</div>
                        <p class="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                    </div>
                </li>
                <li class="grid gap-3 [grid-template-columns:auto_1fr]">
                    <svg class="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                    <div class="space-y-2">
                        <div class="text-title text-sm font-medium">Feature name</div>
                        <p class="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                    </div>
                </li>
                <li class="grid gap-3 [grid-template-columns:auto_1fr]">
                    <svg class="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                    <div class="space-y-2">
                        <div class="text-title text-sm font-medium">Feature name</div>
                        <p class="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                    </div>
                </li>
                <li class="grid gap-3 [grid-template-columns:auto_1fr]">
                    <svg class="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                    </svg>
                    <div class="space-y-2">
                        <div class="text-title text-sm font-medium">Feature name</div>
                        <p class="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="hidden h-12 items-center lg:flex">
            <div class="mx-auto max-w-5xl px-6">
                <span class="text-caption block text-center text-sm">By signing up, you agree our <a href="" class="link variant-animated intent-info">Terms of use</a></span>
            </div>
        </div>
    </div>
    <div class="lg:py-20">
        <div class="mx-auto w-full max-w-sm lg:flex lg:items-center">
            <div class="mb-12 w-full lg:mb-0">
                <h1 class="text-title text-xl font-semibold">Sign Up</h1>
                <form action="/signup" method="post" class="mt-12">
                    <div class="grid grid-cols-2 gap-3">
                        <button type="button" class="btn sz-md variant-outlined">
                            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                ><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg
                            >
                            <span class="btn-label">Google</span>
                        </button>
                        <button type="button" class="btn sz-md variant-outlined">
                            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"></path></svg>
                            <span class="btn-label">Microsoft</span>
                        </button>
                    </div>
                    <hr class="my-6 border-dashed" />
                    <div class="mb-8 space-y-6" data-shade="950">
                        <div class="grid grid-cols-2 gap-3">
                            <div class="field">
                                <label for="name" class="text-title text-sm font-medium">First name</label>
                                <input type="text" required name="name" id="name" class="input sz-md variant-outlined" />
                            </div>
                            <div class="field">
                                <label for="lname" class="text-title text-sm font-medium">Last name</label>
                                <input type="text" required name="lname" id="lname" class="input sz-md variant-outlined" />
                            </div>
                        </div>
                        <div class="field">
                            <label for="email" class="text-title text-sm font-medium">Email</label>
                            <input class="input variant-outlined sz-md" type="email" id="email" name="email" required />
                        </div>
                        <div class="field">
                            <label for="password" class="text-title text-sm font-medium">Password</label>
                            <input class="input variant-outlined sz-md" type="password" id="password" name="password" required />
                        </div>
                    </div>
                    <button type="submit" class="btn variant-primary sz-md w-full">
                        <span class="btn-label">Sign Up</span>
                    </button>
                    <div class="mt-12">
                        <p class="text-caption text-center text-sm">Already have an account <a href="" class="link variant-underlined intent-neutral">Login</a></p>
                    </div>
                </form>
            </div>
            <span class="text-caption block border-t py-4 text-center text-sm lg:hidden">By signing up, you agree our <a href="" class="link variant-animated intent-info">Terms of use</a></span>
        </div>
    </div>
</main>`

const nextjsCode = `import Link from 'next/link';

export default function SignUpPage(){
    return (
        <>
            <div className="fixed inset-0 isolate hidden contain-strict lg:block">
                <div className="fixed left-0 top-0 h-[1280px] w-[560px] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
                <div className="fixed left-0 top-0 h-[1280px] w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"></div>
                <div className="fixed left-0 top-0 h-[1280px] w-[240px] -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
            </div>
            <div className="fixed inset-0 isolate hidden contain-strict lg:block">
                <div className="fixed left-0 top-0 h-[1280px] w-[560px] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
                <div className="fixed left-0 top-0 h-[1280px] w-[240px] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]"></div>
                <div className="fixed left-0 top-0 h-[1280px] w-[240px] -translate-y-[350px] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
            </div>
            <div className="fixed inset-x-0 bottom-12 hidden h-px w-1/2 bg-[--ui-border-color] lg:block"></div>
            <div className="fixed inset-y-0 left-1/2 hidden w-px bg-[--ui-border-color] lg:block"></div>
            <main className="relative mx-auto grid h-full min-h-screen max-w-5xl px-6 lg:grid-cols-2">
                <div className="relative inset-y-0 grid [grid-template-rows:1fr_auto]">
                    <div className="relative h-full py-6 pr-6 lg:py-20">
                        <Link href="/" aria-label="home" className="flex items-center space-x-2">
                            <svg className="text-title h-6" height="28" viewBox="0 0 298 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M107 30.7857H113.6V16.3429H122.686V30.7857H131.386V38.5H122.686V53.5429C122.686 55.4286 123 56.8429 123.629 57.7857C124.286 58.7286 125.214 59.2 126.414 59.2C127.414 59.2 128.2 59.0143 128.771 58.6429C129.371 58.2714 129.729 58.0143 129.843 57.8714L133.229 64.5143C133.057 64.6857 132.557 64.9714 131.729 65.3714C130.9 65.7714 129.829 66.1429 128.514 66.4857C127.2 66.8286 125.7 67 124.014 67C121.043 67 118.557 66.1143 116.557 64.3429C114.586 62.5714 113.6 59.8 113.6 56.0286V38.5H107V30.7857ZM167.156 65.9714V59.4571C166.928 60.1429 166.27 61.0857 165.185 62.2857C164.128 63.4857 162.67 64.5714 160.813 65.5429C158.985 66.5143 156.813 67 154.299 67C151.013 67 148.056 66.2143 145.428 64.6429C142.799 63.0714 140.728 60.8857 139.213 58.0857C137.699 55.2857 136.942 52.0571 136.942 48.4C136.942 44.7429 137.699 41.5143 139.213 38.7143C140.728 35.9143 142.799 33.7286 145.428 32.1571C148.056 30.5571 151.013 29.7571 154.299 29.7571C156.756 29.7571 158.885 30.1857 160.685 31.0429C162.485 31.9 163.928 32.8857 165.013 34C166.128 35.1143 166.813 36.0857 167.07 36.9143V30.7857H176.156V65.9714H167.156ZM145.985 48.4C145.985 50.6571 146.485 52.6286 147.485 54.3143C148.485 56 149.785 57.3 151.385 58.2143C153.013 59.1286 154.756 59.5857 156.613 59.5857C158.613 59.5857 160.385 59.1143 161.928 58.1714C163.499 57.2286 164.728 55.9286 165.613 54.2714C166.528 52.5857 166.985 50.6286 166.985 48.4C166.985 46.1714 166.528 44.2286 165.613 42.5714C164.728 40.8857 163.499 39.5714 161.928 38.6286C160.385 37.6571 158.613 37.1714 156.613 37.1714C154.756 37.1714 153.013 37.6429 151.385 38.5857C149.785 39.5 148.485 40.8 147.485 42.4857C146.485 44.1714 145.985 46.1429 145.985 48.4ZM186.271 65.9714V30.7857H195.4V65.9714H186.271ZM190.943 20.2429C189.4 20.2429 188.071 19.6857 186.957 18.5714C185.871 17.4571 185.329 16.1286 185.329 14.5857C185.329 13.0429 185.871 11.7143 186.957 10.6C188.071 9.45714 189.4 8.88571 190.943 8.88571C191.971 8.88571 192.914 9.15714 193.771 9.7C194.657 10.2143 195.357 10.9 195.871 11.7571C196.414 12.5857 196.686 13.5286 196.686 14.5857C196.686 16.1286 196.129 17.4571 195.014 18.5714C193.9 19.6857 192.543 20.2429 190.943 20.2429ZM215.437 65.9714H206.222V7H215.437V65.9714ZM234.044 48.0571C234.044 51.4857 234.744 54.2143 236.144 56.2429C237.572 58.2714 239.815 59.2857 242.872 59.2857C245.958 59.2857 248.201 58.2714 249.601 56.2429C251.001 54.2143 251.701 51.4857 251.701 48.0571V30.7857H260.787V49.2143C260.787 52.7571 260.087 55.8714 258.687 58.5571C257.287 61.2143 255.258 63.2857 252.601 64.7714C249.944 66.2571 246.701 67 242.872 67C239.072 67 235.844 66.2571 233.187 64.7714C230.53 63.2857 228.501 61.2143 227.101 58.5571C225.701 55.8714 225.001 52.7571 225.001 49.2143V30.7857H234.044V48.0571ZM284.016 29.7571C285.988 29.7571 287.816 29.9429 289.502 30.3143C291.188 30.6857 292.631 31.1286 293.831 31.6429C295.031 32.1571 295.859 32.5857 296.316 32.9286L292.973 38.5857C292.402 38.1 291.373 37.5429 289.888 36.9143C288.431 36.2857 286.788 35.9714 284.959 35.9714C283.131 35.9714 281.588 36.3 280.331 36.9571C279.073 37.6143 278.445 38.6 278.445 39.9143C278.445 41.2 279.102 42.2286 280.416 43C281.759 43.7714 283.573 44.4143 285.859 44.9286C287.745 45.3571 289.545 45.9571 291.259 46.7286C292.973 47.4714 294.373 48.5429 295.459 49.9429C296.573 51.3143 297.131 53.1571 297.131 55.4714C297.131 57.6714 296.659 59.5143 295.716 61C294.802 62.4571 293.573 63.6286 292.031 64.5143C290.488 65.4 288.773 66.0286 286.888 66.4C285.031 66.8 283.159 67 281.273 67C278.959 67 276.888 66.7714 275.059 66.3143C273.259 65.8571 271.759 65.3286 270.559 64.7286C269.359 64.1 268.502 63.5714 267.988 63.1429L271.331 56.8C272.073 57.5143 273.288 58.2714 274.973 59.0714C276.659 59.8429 278.545 60.2286 280.631 60.2286C282.859 60.2286 284.645 59.8 285.988 58.9429C287.331 58.0857 288.002 56.9429 288.002 55.5143C288.002 54.4571 287.673 53.6 287.016 52.9429C286.388 52.2857 285.516 51.7571 284.402 51.3571C283.288 50.9571 282.045 50.6 280.673 50.2857C279.388 49.9714 278.088 49.5714 276.773 49.0857C275.488 48.5714 274.302 47.9143 273.216 47.1143C272.131 46.2857 271.259 45.2571 270.602 44.0286C269.945 42.8 269.616 41.3571 269.616 39.7C269.616 37.5857 270.288 35.7857 271.631 34.3C272.973 32.8143 274.745 31.6857 276.945 30.9143C279.145 30.1429 281.502 29.7571 284.016 29.7571Z"
                                    fill="currentColor"></path>
                                <path d="M53.6523 31.5142C53.6523 28.5967 51.2872 26.2316 48.3697 26.2316C45.4522 26.2316 43.0871 28.5967 43.0871 31.5142C43.0871 34.4317 45.4522 36.7968 48.3697 36.7968C51.2872 36.7968 53.6523 34.4317 53.6523 31.5142Z" fill="currentColor"></path>
                                <path d="M42.6502 36.769C42.5195 36.7593 42.3875 36.7543 42.2543 36.7543C39.3572 36.7543 37.0087 39.1029 37.0087 42C37.0087 44.8971 39.3572 47.2457 42.2543 47.2457C45.1514 47.2457 47.5 44.8971 47.5 42C47.5 40.92 47.1736 39.9162 46.6141 39.0819C45.0637 38.7237 43.691 37.9013 42.6502 36.769Z" fill="currentColor"></path>
                                <path d="M34.8047 39.7898C34.5971 40.4904 34.4857 41.2322 34.4857 42C34.4857 42.7679 34.5971 43.5097 34.8047 44.2102C33.969 46.0163 32.1408 47.2693 30.02 47.2693C27.1098 47.2693 24.7507 44.9102 24.7507 42C24.7507 39.0899 27.1098 36.7308 30.02 36.7308C32.1408 36.7308 33.969 37.9837 34.8047 39.7898Z" fill="currentColor"></path>
                                <path d="M48.3708 47.2122C51.2834 47.2122 53.6445 49.5733 53.6445 52.4859C53.6445 55.3984 51.2834 57.7595 48.3708 57.7595C45.4583 57.7595 43.0971 55.3984 43.0971 52.4859C43.0971 51.4104 43.4191 50.4101 43.9718 49.5761C45.5507 49.2193 46.9472 48.3816 47.9994 47.225C48.1221 47.2165 48.246 47.2122 48.3708 47.2122Z" fill="currentColor"></path>
                                <path
                                    d="M59.7461 42C59.7461 39.0938 57.3901 36.7378 54.4838 36.7378C54.3567 36.7378 54.2306 36.7423 54.1057 36.7512C53.0573 37.8988 51.6691 38.7307 50.1003 39.0877C49.9504 39.3129 49.8173 39.5503 49.703 39.7982C49.909 40.4962 50.0195 41.2352 50.0195 42C50.0195 42.7648 49.909 43.5038 49.703 44.2019C49.8173 44.4497 49.9504 44.6872 50.1003 44.9124C51.6691 45.2694 53.0573 46.1013 54.1057 47.2489C54.2306 47.2578 54.3567 47.2623 54.4838 47.2623C57.3901 47.2623 59.7461 44.9063 59.7461 42Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M40.6028 52.4859C40.6028 51.718 40.7143 50.9761 40.9219 50.2755C40.809 50.0315 40.678 49.7976 40.5306 49.5755C38.9544 49.2187 37.56 48.3825 36.5088 47.2283C36.3856 47.2197 36.2612 47.2153 36.1358 47.2153C36.0102 47.2153 35.8855 47.2197 35.7621 47.2284C34.7111 48.3823 33.317 49.2184 31.7411 49.5753C31.1877 50.4093 30.8653 51.4099 30.8653 52.4859C30.8653 55.3967 33.225 57.7564 36.1358 57.7564C38.2573 57.7564 40.0861 56.503 40.9219 54.6962C40.7143 53.9957 40.6028 53.2538 40.6028 52.4859Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M40.5094 34.4263C40.6608 34.1992 40.795 33.9595 40.9102 33.7094C40.705 33.0126 40.595 32.2752 40.595 31.512C40.595 30.7489 40.705 30.0115 40.9102 29.3147C40.0777 27.5058 38.2492 26.25 36.1274 26.25C33.2213 26.25 30.8654 28.6059 30.8654 31.512C30.8654 32.5894 31.1892 33.5912 31.7448 34.4253C33.3117 34.7828 34.6983 35.6141 35.7457 36.7605C35.8718 36.7695 35.9991 36.7741 36.1274 36.7741C36.2572 36.7741 36.3858 36.7694 36.5132 36.7602C37.5596 35.615 38.9445 34.7843 40.5094 34.4263Z"
                                    fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M42 84C65.196 84 84 65.196 84 42C84 18.804 65.196 0 42 0C18.804 0 0 18.804 0 42C0 65.196 18.804 84 42 84ZM42 74.518C24.0408 74.518 9.48201 59.9592 9.48201 42C9.48201 24.0408 24.0408 9.48201 42 9.48201C59.9592 9.48201 74.518 24.0408 74.518 42C74.518 59.9592 59.9592 74.518 42 74.518Z" fill="currentColor"></path>
                            </svg>
                        </Link>

                        <ul className="mt-16 hidden max-w-sm list-outside space-y-6 lg:block">
                            <li className="grid gap-3 [grid-template-columns:auto_1fr]">
                                <svg className="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <div className="text-title text-sm font-medium">Feature name</div>
                                    <p className="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                                </div>
                            </li>
                            <li className="grid gap-3 [grid-template-columns:auto_1fr]">
                                <svg className="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <div className="text-title text-sm font-medium">Feature name</div>
                                    <p className="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                                </div>
                            </li>
                            <li className="grid gap-3 [grid-template-columns:auto_1fr]">
                                <svg className="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <div className="text-title text-sm font-medium">Feature name</div>
                                    <p className="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                                </div>
                            </li>
                            <li className="grid gap-3 [grid-template-columns:auto_1fr]">
                                <svg className="size-5 text-primary-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                                </svg>
                                <div className="space-y-2">
                                    <div className="text-title text-sm font-medium">Feature name</div>
                                    <p className="text-body text-sm">Natus cupiditate iste assumenda, soluta nostrum? Quod voluptate dolor repellat. Accusantium.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden h-12 items-center lg:flex">
                        <div className="mx-auto max-w-5xl px-6">
                            <span className="text-caption block text-center text-sm">By signing up, you agree our <a href="" className="link variant-animated intent-info">Terms of use</a></span>
                        </div>
                    </div>
                </div>
                <div className="lg:py-20">
                    <div className="mx-auto w-full max-w-sm lg:flex lg:items-center">
                        <div className="mb-12 w-full lg:mb-0">
                            <h1 className="text-title text-xl font-semibold">Sign Up</h1>
                            <form action="/signup" method="post" className="mt-12">
                                <div className="grid grid-cols-2 gap-3">
                                    <button type="button" className="btn sz-md variant-outlined">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                            ><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg
                                        >
                                        <span className="btn-label">Google</span>
                                    </button>
                                    <button type="button" className="btn sz-md variant-outlined">
                                        <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.501 3v8.5h-8.5V3zm0 18h-8.5v-8.5h8.5zm1-18h8.5v8.5h-8.5zm8.5 9.5V21h-8.5v-8.5z"></path></svg>
                                        <span className="btn-label">Microsoft</span>
                                    </button>
                                </div>
                                <hr className="my-6 border-dashed" />
                                <div className="mb-8 space-y-6" data-shade="950">
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="field">
                                            <label htmlFor="name" className="text-title text-sm font-medium">First name</label>
                                            <input type="text" required name="name" id="name" className="input sz-md variant-outlined" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="lname" className="text-title text-sm font-medium">Last name</label>
                                            <input type="text" required name="lname" id="lname" className="input sz-md variant-outlined" />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email" className="text-title text-sm font-medium">Email</label>
                                        <input className="input variant-outlined sz-md" type="email" id="email" name="email" required />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="password" className="text-title text-sm font-medium">Password</label>
                                        <input className="input variant-outlined sz-md" type="password" id="password" name="password" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn variant-primary sz-md w-full">
                                    <span className="btn-label">Sign Up</span>
                                </button>
                                <div className="mt-12">
                                    <p className="text-caption text-center text-sm">Already have an account <Link href="" className="link variant-underlined intent-neutral">Login</Link></p>
                                </div>
                            </form>
                        </div>
                        <span className="text-caption block border-t py-4 text-center text-sm lg:hidden">By signing up, you agree our <Link href="" className="link variant-animated intent-info">Terms of use</Link></span>
                    </div>
                </div>
            </main>
        </>
    )
}`

const nuxtjsCode = `<template>
    <section class="flex min-h-screen">
        <form action="" class="card bg-ui tls-shadow-md m-auto h-fit w-full max-w-sm p-1">
            <div class="p-8">
                <div>
                    <h1 class="text-title mb-1 text-xl font-semibold">Sign In to Tailus UI</h1>
                    <p class="text-sm">Welcome back! Sign in to continue</p>
                </div>

                <div class="mt-6 grid grid-cols-2 gap-3">
                    <button type="button" class="btn sz-sm variant-outlined">
                        <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262">
                            <path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                            <path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                            <path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path>
                            <path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                        </svg>
                        <span class="btn-label">Google</span>
                    </button>
                    <button type="button" class="btn sz-sm variant-outlined">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                            <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path>
                            <path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path>
                            <path fill="#00adef" d="M121.663 256.002H0V134.336h121.663z"></path>
                            <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path>
                        </svg>
                        <span class="btn-label">Microsoft</span>
                    </button>
                </div>

                <hr class="my-8 border-dashed" />

                <div class="space-y-6">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="field">
                            <label for="name" class="text-title text-sm">Firstname</label>
                            <input type="text" required name="name" id="name" class="input sz-md variant-mixed" />
                        </div>
                        <div class="field">
                            <label for="lname" class="text-title text-sm">Lastname</label>
                            <input type="text" required name="lname" id="lname" class="input sz-md variant-mixed" />
                        </div>
                    </div>

                    <div class="field">
                        <label for="email2" class="text-title text-sm"> Username</label>
                        <input type="email" required name="email2" id="email2" class="input sz-md variant-mixed" />
                    </div>

                    <div class="field">
                        <div class="flex justify-between">
                            <label for="pwd" class="text-title text-sm"> Password</label>
                            <a href="#" class="link intent-info variant-ghost text-sm"> Forgot your Password ?</a>
                        </div>
                        <input type="password" required name="pwd" id="pwd" class="input sz-md variant-mixed" />
                    </div>

                    <button class="btn variant-primary sz-md w-full">Sign In</button>
                </div>
            </div>

            <div data-shade="925" class="card variant-soft rounded-[calc(var(--card-radius)-4px)] dark:!bg-[--ui-bg]">
                <p class="text-center text-sm">
                    Don't have an account ?
                    <a href="#" class="link intent-neutral variant-underlined"> Create account</a>
                </p>
            </div>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'SignUpPage',
    }
</script>`

export const signupCode3: Code = {
    html: htmlCode,
    astro: htmlCode,
    nextjs: nextjsCode,
    nuxtjs: nuxtjsCode,
}