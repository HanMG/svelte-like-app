<script lang="ts">
    import Card from '~/components/Card.svelte'  
  
  </script>

<div class="card-list">
    <div class="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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