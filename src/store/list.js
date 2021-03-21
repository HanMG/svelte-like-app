import { writable } from 'svelte/store'
import _find from 'lodash/find'
import _remove from 'lodash/remove'


const _lists = writable([
    {
      id: 1,
      imgUrl: './asset/dead.svg',
      title: 'Lorem1',
      like: 0
    },
    {
      id: 2,
      imgUrl: './asset/dead.svg',
      title: 'Lorem2',
      like: 0
    },
    {
      id: 3,
      imgUrl: './asset/dead.svg',
      title: 'Lorem3',
      like: 0
    },
    {
      id: 4,
      imgUrl: './asset/dead.svg',
      title: 'Lorem4',
      like: 0
    },
    {
      id: 5,
      imgUrl: './asset/dead.svg',
      title: 'Lorem5',
      like: 0
    },
    {
      id: 6,
      imgUrl: './asset/dead.svg',
      title: 'Lorem6',
      like: 0
    },
    {
      id: 7,
      imgUrl: './asset/dead.svg',
      title: 'Lorem7',
      like: 0
    },
    {
      id: 8,
      imgUrl: './asset/dead.svg',
      title: 'Lorem8',
      like: 0
    },
    {
      id: 9,
      imgUrl: './asset/dead.svg',
      title: 'Lorem9',
      like: 0
    },
    {
      id: 10,
      imgUrl: './asset/dead.svg',
      title: 'Lorem10',
      like: 0
    },
]);

const _wishLists = writable([]);

export const lists = {
   ..._lists,      
   likeEdit(payload) {       
        const {listId} = payload
        _lists.update($lists => {
            const foundList = _find($lists, { id: listId })
            if (foundList.like){
                foundList.like = 0
            }            
            else {
                foundList.like = 1
            }
            return $lists
        })       
   }
}



