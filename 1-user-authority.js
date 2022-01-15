/* 
    后端仅用数值 userFlag 表示用户属性。
    注释如下：
    用户操作属性，userFlag 十位数为操作属性:  1 可新建； 2 可继承；两者组合
    用户继承属性，userFlag 个位数为继承属性:  1 父租户；2 子租户；4 兄弟租户；三者组合
    如：userFlag 为 13，操作属性为1，即可新建；继承属性为3，即为 1+2，父租户和子租户
*/
export function getAuthority(number) {
    const binaryNum = Number(number).toString(2); // 数值转换成二进制数
    const binaryNumConverse =  binaryNum.split('').reverse().join(''); // 取反
    return binaryNumConverse.padEnd(3, '0'); // 以‘0’进行尾部补全
}