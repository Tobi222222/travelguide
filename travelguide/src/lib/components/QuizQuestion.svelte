<script lang="ts">
    let { 
        question, 
        subtext,
        options, 
        selected = null, 
        onselect
    } = $props<{
        question: string;
        subtext?: string;
        options: { id: string; label: string; subtitle?: string; Icon?: any }[];
        selected?: string | null;
        onselect: (id: string) => void;
    }>();
</script>

<div class="w-full pb-8">
    <div class="text-center mb-8 sm:mb-10">
        <h2 class="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-3 leading-tight tracking-tight drop-shadow-sm">
            {question}
        </h2>
        {#if subtext}
            <p class="text-slate-500 text-sm sm:text-base font-medium">{subtext}</p>
        {/if}
    </div>

    <div class="grid gap-4 {options.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}">
        {#each options as opt}
            {@const isSelected = selected === opt.id}
            <button
                class="relative text-left rounded-3xl p-5 sm:p-6 transition-all duration-300 overflow-hidden group transform-gpu
                       {isSelected 
                           ? 'bg-gradient-to-br from-terracotta-50 to-cream-100 shadow-md scale-[1.02] ring-2 ring-terracotta-500' 
                           : 'bg-white shadow-sm hover:shadow-md hover:scale-[1.01] ring-1 ring-cream-200 active:scale-[0.98]'}"
                onclick={() => onselect(opt.id)}
            >
                <div class="flex items-start gap-4 sm:gap-5 relative z-10">
                    {#if opt.Icon}
                        <div class="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300
                                    {isSelected ? 'bg-terracotta-500 text-white' : 'bg-cream-100 text-slate-500 group-hover:bg-cream-200 group-hover:text-slate-700'}">
                            <opt.Icon size={24} strokeWidth={isSelected ? 2.5 : 2} />
                        </div>
                    {/if}
                    
                    <div class="flex-1 flex flex-col justify-center min-h-[3rem]">
                        <span class="font-display font-bold text-lg sm:text-xl leading-tight mb-1 transition-colors duration-300
                                     {isSelected ? 'text-terracotta-800' : 'text-navy-900'}">
                            {opt.label}
                        </span>
                        {#if opt.subtitle}
                            <span class="text-xs sm:text-sm leading-snug transition-colors duration-300
                                         {isSelected ? 'text-terracotta-700/80 font-medium' : 'text-slate-500'}">
                                {opt.subtitle}
                            </span>
                        {/if}
                    </div>
                </div>
                
                <!-- Background decorative element for selected state -->
                {#if isSelected}
                    <div class="absolute -right-8 -bottom-8 w-32 h-32 bg-terracotta-200 rounded-full opacity-30 blur-2xl"></div>
                {/if}
            </button>
        {/each}
    </div>
</div>
