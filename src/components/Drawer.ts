
// 左侧栏
export interface Drawer {
    label: string,
    icon: string,
    url: string
}

// 写死的左侧栏
export const DRAWERS: Drawer[] = [
    {label: '地图',icon: 'map', url: '/test/map'}
]