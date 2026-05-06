<script lang="ts">
    let { 
        current, 
        total 
    } = $props<{
        current: number;
        total: number;
    }>();

    let progress = $derived((current / total) * 100);
</script>

<div class="w-full px-6 py-4">
    <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-medium text-slate-500 uppercase tracking-wider">Question {current} of {total}</span>
        <span class="text-sm font-semibold text-terracotta-600">{Math.round(progress)}%</span>
    </div>
    <div class="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
        <div 
            class="h-full bg-terracotta-500 rounded-full transition-all duration-500 ease-out"
            style="width: {progress}%"
        ></div>
    </div>
</div>
