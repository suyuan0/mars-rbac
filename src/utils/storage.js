const storage = window.sessionStorage
// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  storage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const value = storage.getItem(key)
  if (value) {
    try {
      return JSON.parse(value)
    } catch (e) {
      return value
    }
  }
  return null
}
// 删除单条数据
export const removeItem = (key) => {
  storage.removeItem(key)
}

// 删除所有数据
export const clear = () => {
  storage.clear()
}
