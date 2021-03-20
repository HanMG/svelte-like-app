<script>
    import { link } from 'svelte-spa-router'
</script>

<a 
    use:link
    href="/">
    <span>Svelte App</span>
</a>

<style lang="scss">
    a {
        display: block;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        color: $color--primary;
        padding: 5px;
        border: 4px solid $color--primary;
        text-decoration: none;        
    }
</style>