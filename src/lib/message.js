import MessageVue from './Message.vue'
import {createVNode ,render} from 'vue'

const instances = [];
let seed = 1;

export const Message = (options)=>{
    if(typeof options === 'string'){
        options = {
            message:options
        }
    }
    let verticalOffset = options.offset || 50
    instances.forEach((vm) => {
        verticalOffset += (vm.el?.offsetHeight || 0) + 16
    })
    verticalOffset += 40
    const id = `message_${seed++}`
    const userOnClose = options.onClose
    const opt ={
        ...options,
        id,
        offset:verticalOffset,
        onClose: () => {
            close(id, userOnClose)
        }
    }


    const container = document.createElement('div');
    const vm = createVNode(MessageVue,opt);
    vm.props.onDestroy = (id) => {
        
        render(null, container);
    }


    render(vm,container);
    instances.push( vm )
    document.body.appendChild(container.firstElementChild)
}

function close(id,userOnClose){
    const idx = instances.findIndex(( vm ) => id === vm.component.props.id)
    if (idx === -1) return
    const  vm  = instances[idx]
    if (!vm) return
    userOnClose?.(vm)
    const removedHeight = vm.el.offsetHeight;//获取卸载的元素的高度
    instances.splice(idx, 1)
    const len = instances.length
    if (len < 1) return
    for (let i = idx; i < len; i++) {
        const pos =
          Number.parseInt(instances[i].el.style['top'], 10) - removedHeight - 16
    
        instances[i].component.props.offset = pos
      }
}
