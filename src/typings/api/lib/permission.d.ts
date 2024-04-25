/**
 * 权限模型
 */
export interface IPermission {
  /**
   * 权限code
   */
  code: string
  /**
   * id
   */
  id: number | string
  /**
   * 菜单名称
   */
  name: string
  /**
   * 父级id
   */
  parentId: number
  /**
   * 状态
   */
  state: string
  /**
   * 菜单路径
   */
  url?: string
  /**
   * 菜单排序
   */
  sort: number
}
