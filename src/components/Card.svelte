<script lang="ts">           
    import {lists} from '~/store/list'
    
    export let list:{id: number, imgUrl: string, title: string, like: number}
    // console.log(list)        

    // 하트 버튼 클릭시
    function likeToggle() {        
        lists.likeEdit({
            listId: list.id
        })                     
    }
</script>

<div class="container">
    <div class="card">
        <div class="image">
            {#if !list.imgUrl}
                <img src="./asset/svg/dead.svg" alt="empty-image">
            {:else}
                <img src= {list.imgUrl} alt="card-image">
            {/if}            
        </div>       
        <div class="title">{list.title}</div>
        <button on:click={likeToggle}>
            {#if list.like == 1}
                <img src="./asset/svg/heart.svg" alt="like">
            {:else}
                <img src="./asset/svg/empty-heart.svg" alt="like">    
            {/if}
            
        </button>
    </div>
</div>

<style lang="scss">
    .card {
        width: 200px;
        height: 300px;
        margin: 10px;
        border: 5px solid $color--primary;
        border-radius: 6px;         
        box-sizing: border-box;
        position: relative;
        .image {            
            width: 100%;            
            background-color: $color--white;             
            img {                                                 
                width: 160px;    
                height: auto;
                padding: 20px;     
                object-position: center;                      
                object-fit: cover;
            }            
        }
        .title {
            width: 90%;        
            margin: 0 auto;
            color: $color--primary;
            overflow: hidden;            
            text-overflow: ellipsis;    
            white-space: nowrap;
            padding: 12px 2px;                        
        }
        button {
            width: 100%;   
            padding: 10px;                     
            position: absolute;            
            background-color: $color--white;            
            left: 0;
            bottom: 0;            
            box-sizing: border-box;
            border:none;
            border-top: 4px solid $color--primary;
            color: $color--primary;             
            cursor: pointer;
            img {
                width: 16px;
            }
        }
    }
    
</style>