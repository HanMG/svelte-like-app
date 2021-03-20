import Home from './Home.svelte'
import MyList from './MyList.svelte'
import NotFound from './NotFound.svelte'

export default {
    '/': Home,
    '/mylist': MyList,
    '*':NotFound
}

