<script lang="ts">    
    import Card from '~/components/Card.svelte'  
    export let lists

    console.log(lists)
</script>

<div class="card-list">
    <div class="cards">
        {#each lists as list (list.id)}            
            <Card {list} />
        {/each}
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
        }
    }
</style>