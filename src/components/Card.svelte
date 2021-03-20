<div class="container">
    <div class="card">
        <div class="image">
            <img src="./asset/dead.svg" alt="image">
        </div>       
        <div class="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi accusantium saepe architecto ab doloremque voluptates. Rem, molestiae totam aperiam dolorum soluta possimus perferendis error deserunt quibusdam dolores nisi neque?</div> 
        <button><img src="./asset/empty-heart.svg" alt="like"></button>
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