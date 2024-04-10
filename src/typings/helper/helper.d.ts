// 定义排除类型：将U从T中剔除, keyof 会取出T与U的所有键, 限定P的取值范围为T中的所有键, 并将其类型设为never
export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

// 定义互斥类型，T或U只有一个能出现（互相剔除时，被剔除方必须存在）
export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)
