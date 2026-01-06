
import { Category, VideoCourse } from './types';

export const CATEGORIES: Category[] = [
  { id: 'features', name: 'UiBot 6.0-产品功能' },
  { id: 'commands', name: 'UiBot 6.0-基本命令' },
  { id: 'input', name: 'UiBot 6.0-鼠标键盘操作' },
  { id: 'interface', name: 'UiBot 6.0-界面操作' },
  { id: 'mage', name: 'UiBot 6.0-Mage AI' },
  { id: 'automation', name: 'UiBot 6.0-软件自动化' },
  { id: 'data', name: 'UiBot 6.0-数据处理' },
  { id: 'file', name: 'UiBot 6.0-文件处理' },
  { id: 'system', name: 'UiBot 6.0-系统操作' },
  { id: 'network', name: 'UiBot 6.0-网络命令' },
  { id: 'tools', name: 'UiBot 6.0-开发工具' },
  { id: 'cert', name: '中级认证教学视频' },
  { id: 'qa', name: '【消失吧问题】开发者问答' },
  { id: 'invite', name: '学妹邀你学RPA' },
];

export const COURSES: VideoCourse[] = [
  // 产品功能 (Features)
  {
    id: 'f1',
    category: 'features',
    title: '产品功能-UiBot Creator功能介绍',
    duration: '12:45',
    thumbnail: '',
    description: '深入了解 UiBot Creator 的核心设计环境与组件化开发流程。'
  },
  {
    id: 'f2',
    category: 'features',
    title: '产品功能-UiBot Worker功能介绍',
    duration: '10:20',
    thumbnail: '',
    description: '学习如何管理与部署 RPA 机器人，执行自动化任务。'
  },
  {
    id: 'f3',
    category: 'features',
    title: '产品功能-UiBot Commander功能介绍',
    duration: '15:30',
    thumbnail: '',
    description: '掌握大型机器人集群的管理、监控与调度能力。'
  },
  // 基本命令 (Commands)
  {
    id: 'bc1',
    category: 'commands',
    title: '基本命令-基础知识',
    duration: '10:15',
    thumbnail: '',
    description: 'RPA 基本概念与 UiBot 基础操作入门。'
  },
  {
    id: 'bc2',
    category: 'commands',
    title: '基本命令-变量&数据',
    duration: '12:30',
    thumbnail: '',
    description: '学习如何在流程中定义和使用变量及不同数据类型。'
  },
  {
    id: 'bc3',
    category: 'commands',
    title: '基本命令-数据操作',
    duration: '08:45',
    thumbnail: '',
    description: '掌握数组、字典等复杂数据的处理技巧。'
  },
  {
    id: 'bc4',
    category: 'commands',
    title: '词法语法-条件语句',
    duration: '15:20',
    thumbnail: '',
    description: '深入理解 If、Else 等逻辑分支控制流程。'
  },
  {
    id: 'bc5',
    category: 'commands',
    title: '词法语法-循环语句',
    duration: '11:10',
    thumbnail: '',
    description: '学习 For Each、While 等循环结构的实战应用。'
  },
  {
    id: 'bc6',
    category: 'commands',
    title: '词法语法-异常处理',
    duration: '09:55',
    thumbnail: '',
    description: '如何捕获错误并保证 RPA 流程的稳健运行。'
  },
  {
    id: 'bc7',
    category: 'commands',
    title: '基本命令-日志',
    duration: '06:40',
    thumbnail: '',
    description: '记录与调试：通过日志监控机器人执行情况。'
  }
];
