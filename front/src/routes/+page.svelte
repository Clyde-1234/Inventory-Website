<script lang="ts">
    import InventoryPage from "../lib/inventoryPage.svelte";
    import Icon from "@iconify/svelte";
    import ClientPage from "../lib/clientPage.svelte";
    import GroupPage from "../lib/groupPage.svelte";

    let searchText = "";

    let currentPage : "client" | 'group' | 'inventory' = "inventory"

    function searchInput(){
        /* Prevent default  */
        if(searchText.trim() === "") return
        alert(searchText)
        searchText = ""
    }
</script>

<div class=" h-screen w-screen overflow-hidden">


    <!-- Header / Top Nav -->
    <header class=" h-20 bg-gray-900 w-full place-items-center flex space-x-16 z-50 ">

        <div class=" flex-1"></div>
         <!-- search input -->
        <div class=" w-96 bg-slate-700 rounded-xl flex">
            <input type="text" placeholder="Search" class=" w-80 bg-slate-800 text-slate-400 rounded-l-xl" onkeydown={(event) => {
                if (event.key === 'Enter') {
                  searchInput();
                }}} bind:value={searchText}>
    
            <Icon icon="mdi-search" class=" self-center flex-1 text-4xl cursor-pointer text-slate-300 hover:text-slate-500 active:text-slate-400" onclick={searchInput}></Icon>
        </div>
    
        <div class=" flex-1"></div>
    
        <Icon icon="mdi-settings" class="standard-icon"></Icon>
        <div></div>
    </header>

    
    <div class=" flex-1 flex">


        <!-- Side Nav -->
        <aside class=" w-48 bg-slate-900 overflow-auto" style="height: calc(100vh - 5rem);">
            <button class="side-nav-button" onclick={() => currentPage = "inventory"}>
                <Icon icon="mdi-warehouse" class="standard-icon ml-auto"></Icon>
                <div class=" p-4 mr-auto content-center h-full">
                    <p class=" text-3xl font-sans">Inventory</p>
                </div>
            </button>

            
            <button class="side-nav-button" onclick={() => currentPage = "group"}>
                <Icon icon="mdi-account-group" class="standard-icon ml-auto"></Icon>
                <div class=" p-4 mr-auto content-center h-full">
                    <p class=" text-2xl font-sans">Item Groups</p>
                </div>
            </button>


            <button class="side-nav-button" onclick={() => currentPage = "client"}>
                <Icon icon="fa-solid:cubes" class="standard-icon ml-auto"></Icon>
                <div class=" p-4 mr-auto content-center h-full">
                    <p class=" text-3xl font-sans">Clients</p>
                </div>
            </button>

            
        </aside>

        <!-- Main Content -->
        {#if currentPage === "inventory"}
        <InventoryPage></InventoryPage>
        {:else if currentPage === "group"}
        <GroupPage></GroupPage>
        {:else if currentPage === "client"}
        <ClientPage></ClientPage>
        {/if}
        
    </div>
    
</div>

