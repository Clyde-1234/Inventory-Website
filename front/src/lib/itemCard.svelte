<script lang="ts">
    import Icon from "@iconify/svelte";

    let {itemName, itemId} = $props()

    let showItemInfo: Boolean = $state(false)
    let tagInput: String = $state("")
    let tags: Array<String> = $state([])
    
</script>

<button class=" flex-row bg-slate-700 h-128 w-96 hover:bg-slate-600 hover:shadow-2xl hover:shadow-slate-500 transition rounded-lg active:bg-slate-800" onclick={() => showItemInfo = !showItemInfo}>
    <div class=" ml-3 mr-3 justify-center h-96 bg-slate-500" style="width: 22.5rem;"></div>
    <div class=" flex flex-1 flex-col items-center justify-center text-lg select-none">
        <p>{itemName}</p>
        <p>{itemId}</p>
    </div>
</button>

{#if showItemInfo}
    <div class=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div class=" bg-slate-600 rounded-2xl h-192 w-256 flex items-center justify-center lg:bg-green-500 sm:bg-white" id="addItem">
            <div class=" m-4 w-full h-full bg-slate-700" style="height: 46rem;">
                <!-- Top -->
                <div class="w-full h-16 flex ">
                    <div class=" w-full"></div>
                    <button onclick={() => showItemInfo = !showItemInfo}>
                        <Icon icon="mdi:close" class=" standard-icon text-6xl "></Icon>
                    </button>
                </div>

                <div class="flex-row w-full relative" style="height: 42rem;">
                    <div class=" w-full flex justify-between content-center">
                        <div class=" flex-row ml-4">
                            <p class="text-slate-300">Item name: <input class=" w-80 bg-slate-800 text-slate-400 rounded-xl" type="text"></p>
                            <p class="text-slate-300">Units(max): <input class=" bg-slate-800 text-slate-400 rounded-xl w-1/4:" type="number" min="0"></p>
                            <p class="text-slate-300 flex-row">Tags: 
                                <span class=" text-green-400"> {tags}</span>
                            </p>
                            <input class=" w-32 bg-slate-800 text-slate-400 rounded-xl" type="text" onkeydown={(event) => {if (event.key === 'Enter') {tags.push(tagInput);tagInput = ""}}} bind:value={tagInput}>
                            <div class=" bg-slate-600 h-96 mt-4 ">
                                <div class=" relative w-full flex justify-between content-center bg-slate-800">
                                    <span class=" absolute bottom-0 left-0 text-slate-300 ">Groups:</span>
                                    <div></div>
                                    <button class=" bg-green-700 mr-4 rounded-lg text-slate-300 hover:bg-green-600 active:bg-green-500">Add to Group</button>
                                </div>
                                
                            </div>
                            
                        </div>

                        <!-- Photo container -->
                        <div class=" w-96 h-96 bg-slate-400 mr-4">

                        </div>

                    </div>
                    
                    <button class=" h-8 w-20 rounded-lg bg-green-800 text-slate-300 bottom-4 right-4 absolute text-xl hover:bg-green-700 active:bg-green-600"> Submit </button>
                </div>
                
            </div>
        </div>
    </div>
    {/if}