class MyPromise {
    constructor(executor) {
        this.status = 'pending' // 初始状态为pending
        this.value = undefined // 存储成功的值
        this.reason = undefined // 存储失败的   原因
    }

}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (this.status === 'fulfilled') { // 如果状态为fulfilled，执行onFulfilled回调函数
        onFulfilled(this.value)
    } else if (this.status === 'rejected') { // 如果状态为rejected，执行onRejected回调          
        onRejected(this.reason)
    }
}
MyPromise.prototype.catch = function (onRejected) { // 捕获错误的方法
    if (this.status === 'rejected') { // 如果状态为rejected，执行onRejected回调
        onRejected(this.reason)
    }
}
console.log("设计模式study")
console.log("手写Promise")
const promise = new MyPromise((resolve, reject) => { // 创建一个新的Promise实例
    setTimeout(() => { // 模拟异步操作
        resolve('成功') // 调用resolve方法，将状态改为fulfilled，并存储成功的值
    }, 1000)
})