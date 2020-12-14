const Model = () => {
    const data = []

    const observers = []

    const newList = (title='Todo List') => {
        data.push(todoList(title))
    }

    const removeList = (i) => {
        data.splice(i, 1)
    }
    
    const getList = (i) => {
        return data[i]
    }

    const getData = () => data

    const getJSON = () => {
        return data.map(list => {
            return {
                title: list.title,
                items: list.getItems()
            }
        })
    } 

    const loadData = (obj) => {
        obj.forEach(list => {
            let nuList = todoList(list.title)
            nuList.loadItems(list.items)
            data.push(nuList)
        })
    }

    const notify = () => {
        observers.forEach(observer => {
            observer.update(data)
        })
    }  

    const addObserver = (observers) => {
        observers.push(observer)
    }

    return {
        newList,
        removeList,
        getList,
        notify,
        addObserver,
        getData,
        getJSON,
        loadData
    }
}

const todoList = (title='Todo List') => {
    const items = []

    const newItem = (title) => {
        const item = todoItem(title)
        items.push(item)
    }

    const removeItem = (i) => {
        items.splice(i, 1)
    }

    const getItem = (i) => {
        return items[i]
    } 

    const getItems = () => items

    const loadItems = (arr) => {
        arr.forEach(item => {
            items.push(item)
        })
    }

    return {
        title,
        newItem,
        removeItem,
        getItem,
        getItems,
        loadItems
    }
}

const todoItem = (title='Todo Item', desc='A todo item.') => {
    return {
        title,
        desc,
        dueDate: null,
        priority: 'low',
        complete: false
    }
}

export default Model