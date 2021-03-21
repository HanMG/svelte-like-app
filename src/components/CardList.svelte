<script lang="ts">    
    import Card from '~/components/Card.svelte'  
    export let lists:Array<{id:number, imgUrl:string, title: string, like: number}>

     console.log(lists)
</script>

<div class="card-list">
    <div class="cards">
        {#if !lists.length}
            <div class="no-list">
                <p>You Don't Have A List</p>                
            </div>
        {:else}
            {#each lists as list (list.id)}            
                <Card {list} />
            {/each}
        {/if}        
    </div>
</div>

<style lang="scss">
    .card-list {
        margin-top: 30px;
        padding: 10px;
        border-radius: 4px;
        text-align: center;
        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .no-list {
                font-size: 20px;
                width: 100%;
                height: 600px;              
                display: flex;
                justify-content: center;
                align-items: center;
                color: $color--primary;                
                background-color: $color--white-5;                
            }
        }
    }
</style>