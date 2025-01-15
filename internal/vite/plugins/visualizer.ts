import { visualizer } from 'rollup-plugin-visualizer'

export function createVisualizerPlugin() {
  return visualizer({
    // 打包完成后自动打开浏览器，显示产物分析页面
    open: true,
    // 分析图表的标题
    title: 'Bundle Visualizer',
    // 图表输出的文件名
    filename: './node_modules/.cache/visualizer/stats.html',
    // 是否显示 gzip 大小
    gzipSize: true,
    // 是否显示 brotli 大小
    brotliSize: true,
    // 排除某些包
    exclude: [],
    // 自定义项目根目录
    // projectRoot: process.cwd(),
    // 模板类型： sunburst, treemap, network
    template: 'sunburst',
  })
}
