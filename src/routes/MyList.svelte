<script lang="ts">
    import { lists } from '~/store/list'
    import CardList from '~/components/CardList.svelte'  
    
    let myLists:Array<{id: number, imgUrl: string, title: string, like: number}>

    $: {
        myLists = $lists.filter(list => list.like === 1)
        //console.log(myLists)  
    }
    
</script>

<div class="content-wrap">
    <div>
        <h2>Is Your LikeList</h2>
    </div>
    <CardList             
        lists={myLists}         
    />
</div>

<style lang="scss">
  h2 {
    padding: 12px 4px;
    background-color: $color--primary;
    color: $color--area;
    font-weight: 700;
  }  
</style>