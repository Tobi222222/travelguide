<script lang="ts">
    import { page } from '$app/state';
    import { base } from '$app/paths';
    import { Compass, Map as MapIcon, Bookmark, User, Compass as LogoIcon } from 'lucide-svelte';

    const currentPath = $derived(page.url.pathname);

    const navItems = [
        { path: `${base}/home`, icon: Compass, label: 'Home' },
        { path: `${base}/explore`, icon: MapIcon, label: 'Explore' },
        { path: `${base}/favorites`, icon: Bookmark, label: 'Saved' },
        { path: `${base}/profile`, icon: User, label: 'Profile' }
    ];
</script>

<nav class="hidden md:flex fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-cream-200 transition-all duration-300">
    <div class="max-w-7xl mx-auto w-full px-6 lg:px-12 h-20 flex items-center justify-between">
        
        <!-- Logo -->
        <a href="{base}/" class="flex items-center gap-2 text-terracotta-600 hover:opacity-80 transition-opacity">
            <div class="bg-terracotta-100 p-2 rounded-xl">
                <LogoIcon size={24} strokeWidth={2.5} />
            </div>
            <span class="font-display font-bold text-xl tracking-tight text-navy-900">BCN Guide</span>
        </a>

        <!-- Center Nav -->
        <div class="flex items-center gap-8">
            {#each navItems as item}
                <a 
                    href={item.path}
                    class="flex items-center gap-2 font-medium text-sm transition-all duration-300 border-b-2 {currentPath === item.path ? 'text-terracotta-600 border-terracotta-600' : 'text-slate-500 border-transparent hover:text-navy-900 hover:border-slate-300'} pb-1"
                >
                    {item.label}
                </a>
            {/each}
        </div>

        <!-- Right CTA -->
        <div>
            <a 
                href="{base}/quiz"
                class="px-6 py-2.5 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95"
            >
                Take the Quiz
            </a>
        </div>
    </div>
</nav>
