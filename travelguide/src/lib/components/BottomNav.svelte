<script lang="ts">
    import { page } from '$app/state';
    import { Map, Compass, Sparkles, Heart, User } from 'lucide-svelte';

    const navItems = [
        { name: 'Home', path: '/home', Icon: Map },
        { name: 'Explore', path: '/explore', Icon: Compass },
        { name: 'Quiz', path: '/quiz', Icon: Sparkles },
        { name: 'Saved', path: '/favorites', Icon: Heart },
        { name: 'Profile', path: '/profile', Icon: User }
    ];
</script>

<div class="fixed bottom-0 left-0 z-50 w-full bg-white/90 backdrop-blur-md border-t border-cream-200 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] md:hidden">
    <div class="max-w-md mx-auto px-6 h-20 flex justify-between items-center">
        {#each navItems as item}
            {@const isActive = page.url.pathname.startsWith(item.path)}
            <a 
                href={item.path}
                class="flex flex-col items-center justify-center w-16 h-full gap-1 transition-all duration-300 relative group"
                aria-label={item.name}
            >
                <!-- Active dot indicator -->
                {#if isActive}
                    <span class="absolute top-1 w-1 h-1 rounded-full bg-terracotta-500"></span>
                {/if}

                <div class="transition-transform duration-300 {isActive ? '-translate-y-1' : 'group-hover:-translate-y-0.5'}">
                    <item.Icon
                        size={24} 
                        strokeWidth={isActive ? 2.5 : 2}
                        class="transition-colors duration-300 {isActive ? 'text-terracotta-500' : 'text-slate-400 group-hover:text-slate-600'}" 
                    />
                </div>
                
                <span class="text-[10px] font-medium tracking-wide transition-colors duration-300 {isActive ? 'text-terracotta-600' : 'text-slate-400 group-hover:text-slate-600'}">
                    {item.name}
                </span>
            </a>
        {/each}
    </div>
</div>

<style>
    /* Support for iPhone safe area padding at the bottom */
    .pb-safe {
        padding-bottom: env(safe-area-inset-bottom);
    }
</style>
