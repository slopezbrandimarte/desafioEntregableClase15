import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: {
        user:"SebaLopez",
        items:[],
        total: null,
        updateAt:""
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem:(state,actions)=>{
            const foundItem = state.value.items.find(item => item.id === actions.payload.id)
            if(foundItem) foundItem.quantity++
            else state.value.items.push({...actions.payload,quantity:1})
            state.value.total = state.value.items.reduce((acc, item)=> acc + (item.price * item.quantity),0)
            state.value.updateAt= new Date().toLocaleDateString()

            
        },
        removeItem: (state)=>{
            state.value.id = null
        
        }
    },
})


export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer