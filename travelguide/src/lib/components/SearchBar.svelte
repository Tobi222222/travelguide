<script lang="ts">
    import { Search } from 'lucide-svelte';

    let { 
        value = $bindable(), 
        placeholder = "Search places..." 
    } = $props<{
        value: string;
        placeholder?: string;
    }>();
</script>

<div class="relative w-full group">
    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-terracotta-500 text-slate-400">
        <Search size={20} />
    </div>
    <input 
        type="text" 
        bind:value
        class="block w-full pl-12 pr-4 py-3.5 bg-white border-0 rounded-2xl text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-terracotta-400 focus:outline-none transition-shadow shadow-sm hover:shadow text-base sm:text-lg" 
        placeholder={placeholder}
    >
</div>
