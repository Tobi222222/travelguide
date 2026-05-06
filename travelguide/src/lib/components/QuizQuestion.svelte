<script lang="ts">
    import { fade, slide } from 'svelte/transition';

    let { 
        question, 
        options, 
        selected = null, 
        onselect
    } = $props<{
        question: string;
        options: { id: string; label: string; icon?: string; image?: string }[];
        selected?: string | null;
        onselect: (id: string) => void;
    }>();
</script>

<div class="w-full" in:fade={{ duration: 300, delay: 100 }} out:fade={{ duration: 200 }}>
    <h2 class="font-display text-2xl sm:text-3xl font-semibold text-slate-800 mb-6 text-center leading-tight">
        {question}
    </h2>

    <div class="grid gap-4 {options[0]?.image ? 'grid-cols-2' : 'grid-cols-1'}">
        {#each options as opt}
            <button
                class="relative text-left rounded-2xl border-2 transition-all duration-300 overflow-hidden group
                       {selected === opt.id 
                           ? 'border-terracotta-500 bg-terracotta-50' 
                           : 'border-cream-200 bg-white hover:border-terracotta-300 hover:shadow-md'}"
                onclick={() => onselect(opt.id)}
            >
                {#if opt.image}
                    <div class="h-32 w-full overflow-hidden">
                        <img 
                            src={opt.image} 
                            alt={opt.label} 
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                        />
                    </div>
                    <div class="p-4 text-center font-medium text-slate-800 {selected === opt.id ? 'text-terracotta-700' : ''}">
                        {opt.label}
                    </div>
                {:else}
                    <div class="p-5 flex items-center gap-4">
                        {#if opt.icon}
                            <span class="text-3xl">{opt.icon}</span>
                        {/if}
                        <span class="font-medium text-lg {selected === opt.id ? 'text-terracotta-700' : 'text-slate-700'}">
                            {opt.label}
                        </span>
                    </div>
                {/if}
                
                {#if selected === opt.id}
                    <div class="absolute inset-0 ring-4 ring-terracotta-500/20 rounded-2xl" in:fade={{duration: 200}}></div>
                {/if}
            </button>
        {/each}
    </div>
</div>
