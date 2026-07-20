## 1. 架构设计

```mermaid
flowchart TD
    "前端 React SPA" --> "React Router"
    "React Router" --> "新闻页 /news"
    "React Router" --> "更多页 /more"
    "新闻页 /news" --> "HN API Hook"
    "更多页 /more" --> "HN API Hook"
    "HN API Hook" --> "Hacker News Firebase API"
    "Hacker News Firebase API" --> "实时新闻数据"
```

## 2. 技术说明
- 前端：React@18 + TypeScript + Tailwind CSS@3 + Vite
- 初始化工具：vite-init（react-ts 模板）
- 后端：无（纯前端项目，直连公开 API）
- 数据源：Hacker News Firebase API（`https://hacker-news.firebaseio.com/v0/`），免费、免 Key、CORS 启用、实时
- 部署：GitHub Pages（静态托管，SPA 路由通过 404.html 重定向兜底）

## 3. 路由定义
| 路由 | 用途 |
|------|------|
| `/` | 重定向到 `/news` |
| `/news` | 新闻页：实时头条列表 + 搜索 + 分类切换 |
| `/more` | 更多页：Show HN / 招聘 / 统计仪表盘 |

## 4. API 定义
所有 API 均为 Hacker News 公开 Firebase API，无鉴权。

```typescript
// 获取某分类的故事 ID 列表
interface StoryIdsResponse extends Array<number> {}

// 获取单条故事详情
interface HNStory {
  id: number;
  title: string;
  url?: string;        // 外部原文链接（无则指向 HN 讨论页）
  text?: string;       // Ask HN / Show HN / Job 的内嵌文本
  by: string;          // 作者
  score: number;       // 得分
  descendants?: number;// 评论数
  time: number;        // Unix 秒级时间戳
  type: 'story' | 'job';
  kids?: number[];
}

// 端点
// GET /topstories.json   -> number[]   首页 Top Stories
// GET /newstories.json   -> number[]   最新
// GET /beststories.json  -> number[]   Best
// GET /showstories.json  -> number[]   Show HN
// GET/jobstories.json    -> number[]   招聘
// GET /item/<id>.json    -> HNStory    单条详情
```

## 5. 服务端架构
无后端。前端通过 `fetch` 直连 HN API，分页逻辑在前端实现（取前 N 个 ID，逐条并发拉取详情）。

## 6. 数据模型
### 6.1 前端领域模型

```typescript
// 经过前端加工的新闻条目
interface NewsItem {
  id: number;
  title: string;
  url: string;            // 已兜底为 HN 讨论页
  domain: string;         // 从 url 解析的域名，无则为 ''
  by: string;
  score: number;
  commentsCount: number;
  timeLabel: string;      // 相对时间，如 "3 小时前"
  type: 'story' | 'job';
}

type NewsCategory = 'top' | 'new' | 'best';
type MoreTab = 'top' | 'show' | 'job';
```

### 6.2 数据获取策略
- 首次进入页面：拉取 ID 列表 → 取前 20 个 ID → 并发拉取详情（Promise.all）→ 渲染
- 加载更多：取下一批 20 个 ID → 并发拉取 → 追加到列表
- 切换分类：清空列表 → 重新走首次流程
- 手动刷新：清空列表 → 重新走首次流程
- 搜索：在当前已加载列表上做前端过滤（避免额外请求）
