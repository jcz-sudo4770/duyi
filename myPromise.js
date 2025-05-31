class MyPromise {
    constructor(executor) {
        this.status = 'pending' // 初始状态为pending
        this.value = undefined // 存储成功的值
        this.reason = undefined // 存储失败的   原因
    }

}