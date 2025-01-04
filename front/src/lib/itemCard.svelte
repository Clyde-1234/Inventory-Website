<script lang="ts">
    let {itemName, itemId} = $props()
</script>

<div class=" flex-row bg-slate-700 h-128 w-96 hover:bg-slate-600 hover:shadow-2xl hover:shadow-slate-500 transition rounded-lg active:bg-slate-800">
    <div class=" ml-3 mr-3 mt-3 justify-center h-96 bg-slate-500" style="width: 22.5rem;"></div>
    <div class=" flex flex-1 flex-col items-center justify-center text-lg select-none">
        <p>{itemName}</p>
        <p>{itemId}</p>
    </div>
</div>