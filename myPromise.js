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