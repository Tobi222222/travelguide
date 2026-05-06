<script lang="ts">
    let { 
        categories, 
        selectedCategory = $bindable(),
    } = $props<{
        categories: { id: string, label: string }[];
        selectedCategory: string;
    }>();
</script>

<div class="w-full overflow-x-auto no-scrollbar py-2">
    <div class="flex gap-3 px-4 sm:px-6 w-max">
        {#each categories as cat}
            <button
                class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform active:scale-95 whitespace-nowrap
                       {selectedCategory === cat.id 
                           ? 'bg-terracotta-600 text-white shadow-md' 
                           : 'bg-white text-slate-600 border border-cream-200 hover:border-terracotta-300 hover:text-terracotta-600'}"
                onclick={() => selectedCategory = cat.id}
            >
                {cat.label}
            </button>
        {/each}
    </div>
</div>
