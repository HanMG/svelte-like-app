<script lang="ts">
  import CardList from '~/components/CardList.svelte' 
</script>

<div class="content-wrap">
  <div>
    <h2>Choose What You Wants</h2>
  </div>
  <CardList />
</div>


<style lang="scss">    
  h2 {
    padding: 12px 4px;
    background-color: $color--primary;
    color: white;
    font-weight: 700;
  }  
</style>
