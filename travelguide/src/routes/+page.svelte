<script lang="ts">
    import { base } from '$app/paths';
    import { fade, fly } from 'svelte/transition';
</script>

<div class="relative h-[100dvh] w-full flex flex-col items-center justify-end overflow-hidden pb-16 px-6">
    <!-- Hero Image Background -->
    <div class="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1583422409516-15eba5336080?auto=format&fit=crop&q=80&w=1200" 
            alt="Barcelona" 
            class="w-full h-full object-cover"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full flex flex-col items-center text-center" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
        <h2 class="text-terracotta-400 font-semibold uppercase tracking-[0.2em] mb-3 text-sm">Welcome to</h2>
        <h1 class="font-display text-5xl sm:text-6xl font-bold text-white mb-4 leading-tight">
            Barcelona <br/> <span class="font-serif italic font-light">Travel Guide</span>
        </h1>
        <p class="text-cream-100 text-lg sm:text-xl font-light mb-10 max-w-[280px]">
            Discover the Mediterranean magic, tailored exactly to your vibe.
        </p>

        <a 
            href="{base}/quiz"
            class="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-terracotta-500 rounded-full hover:bg-terracotta-600 active:scale-95 shadow-xl hover:shadow-2xl overflow-hidden w-full max-w-[280px]"
        >
            <span class="relative z-10 flex items-center gap-2 text-lg">
                Start the Quiz
            </span>
            <div class="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </a>
    </div>
</div>
