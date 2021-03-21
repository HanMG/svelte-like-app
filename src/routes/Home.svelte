<script lang="ts">
  import {lists} from '~/store/list'
  import CardList from '~/components/CardList.svelte' 
  
  // $:{
  //   console.log($lists)
  // }
</script>

<div class="content-wrap">
  <div>
     <h2>Choose What You Wants</h2>
  </div>  
  <CardList 
    lists = {$lists}
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
