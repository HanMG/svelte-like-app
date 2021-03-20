<script>
    import { link } from 'svelte-spa-router'
    import active from 'svelte-spa-router/active'
    import Logo from '~/components/Logo.svelte'    

    const menus = [
        {
            href: '/',
            name: 'Home',
            path: '/'
        },        
        {
            href: '/mylist',
            name: 'MyList',
            path: /^\/mylist/
        }
    ]
</script>

<header>  
    <Logo />
    <nav>
        <ul>
            {#each menus as {href, name, path} (name) }
                <li>
                    <a use:link
                        use:active={path}
                        {href}>
                        {name}
                    </a>
                </li>
            {/each}            
        </ul>
    </nav>     
</header>

<style lang="scss">    
    header {
        padding: 20px 40px;
        background-color: $color--black-90;
        position: sticky;
        top: 0;
        z-index: 10;
        display: flex;
        align-items: center;      
        nav {
            margin-left: 40px;            
            ul {
                display: flex;
                li {
                    margin-left: 10px;
                    &:first-child {
                        margin-left: 0;
                    }
                    a {
                        font-size: 16px;
                        font-weight: 700;
                        color: $color--white-50;
                        text-decoration: none;
                    }
                }
            }
        }       
    }
    header :global(a.active) {
        color: $color--primary !important;
    }   
</style>