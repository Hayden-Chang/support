# InterBeat App Store 关键词策略

源数据：[`support/keyword_research.csv`](./keyword_research.csv)

## 产品匹配摘要

根据 [`design_all_phases_integrated.md`](../design_all_phases_integrated.md) 和当前支持页内容，InterBeat 最适合被定位为：

- 一款 **间歇训练计时器**
- 核心场景聚焦于 **HIIT / Tabata / 循环训练 / 跑步间歇 / 跳绳**
- 通过 **自定义 work/rest 阶段** 和 **训练中自动切换音乐** 来形成差异化

这意味着关键词集合应该尽量围绕 `interval`、`workout`、`hiit`、`tabata`、`circuit`，以及 `running`、`jumprope` 这类具体场景词展开。

---

## keyword_research.csv 深度分析

### 方法

CSV 中的每个关键词都按三个维度进行评分：

- **Popularity**（0–100）：App Store 搜索量
- **Difficulty**（0–100）：竞争强度；越低越容易排上去
- **Effectiveness**（0–100）：综合 Popularity 和 Difficulty 得出的效率指标；越高代表投入产出比越好

核心筛选原则是：**高 Popularity × 低 Difficulty**，同时再经过**产品相关性**过滤。

### 第 1 层 —— 高效率且与产品高度相关的关键词（主目标）

| Keyword | Pop | Diff | Eff | 为什么适合 InterBeat |
| --- | ---: | ---: | ---: | --- |
| interval timer free | 38 | 25 | 51 | 核心品类词，`free` 也符合免费工具层定位 |
| workout timer free | 33 | 28 | 42 | 直接描述产品，且带 `free` |
| workout timer | 35 | 30 | 41 | 核心搜索词，与产品高度一致 |
| hiit timer | 34 | 32 | 41 | HIIT 是核心使用场景之一，产品内也有 Tabata 预设 |
| circuit timer | 27 | 25 | 43 | 循环训练是支持场景 |
| tabata free | 26 | 24 | 43 | 内置 Tabata 预设，`free` 也符合定位 |
| jumprope | 32 | 24 | 55 | 整份 CSV 中效率最高的词之一，跳绳也是支持场景 |
| interval timer | 55 | 49 | 35 | 相关词里搜索量最高，虽然泛，但仍然重要 |
| workout interval timer | 20 | 25 | 34 | 长尾但表达准确 |
| 0 60 timer | 30 | 25 | 43 | 难度低、量级不错，`0-60` 与 work/rest 间歇语义相关 |
| stopwatch timer | 23 | 25 | 43 | 难度低，与 timer 品类相邻 |
| tabata timer pro | 21 | 25 | 43 | `pro` 代表功能更完整，InterBeat 也有计划版本和音乐提示能力 |
| boxing timer free | 14 | 21 | 35 | 难度很低，拳击回合训练和 interval 高度相关 |
| kettle bell workout | 25 | 14 | 46 | Pop ≥ 25 的词里难度最低，壶铃训练也常见于间歇训练 |
| watch tracker collection | 23 | 22 | 44 | 难度低，但更多偏向 Apple Watch / tracking 方向 |
| emom | 14 | 25 | 34 | EMOM 属于典型间歇训练形式，虽然小众但竞争低 |
| time box | 14 | 23 | 35 | 难度低，timeboxing 与 interval timing 有语义接近性 |
| timer for ipad | 16 | 23 | 35 | 难度低，且 InterBeat 确实支持 iPad 方向布局 |
| 10 minute workout short intense fitness workouts | 13 | 24 | 35 | 难度低，匹配“短时高强度训练”心智 |

### 第 2 层 —— 效率中等，但仍有相关性（次级目标）

| Keyword | Pop | Diff | Eff | 备注 |
| --- | ---: | ---: | ---: | --- |
| tabata timer | 44 | 36 | 39 | 搜索量高，但竞争中等；可由标题/副标题部分覆盖 |
| workout timer custom intervals | 18 | 38 | 25 | `custom intervals` 很贴合产品，但难度偏高 |
| timer for workouts | 33 | 29 | 42 | 相关，但当标题/副标题已有 `workout` + `timer` 后会变得重复 |
| interval running | 29 | 35 | 32 | 跑步间歇是支持场景，但难度一般 |
| crossfit timer | 30 | 31 | 33 | CrossFit 与 interval 高相关，但竞争中等 |
| simple interval timer | 29 | 34 | 32 | `simple` 不是最优定位，InterBeat 不只是简单计时器 |
| run interval | 21 | 39 | 31 | 相关，但难度更高 |
| free timer | 21 | 26 | 34 | 泛词，难度不高，但产品信号弱 |
| loop timer | 14 | 26 | 27 | 难度低，但表达偏泛 |
| rest timer | 13 | 29 | 27 | `rest` 是核心概念，但搜索量偏低 |

### 第 3 层 —— 搜索量高，但竞争太强或过于宽泛

| Keyword | Pop | Diff | Eff | 为什么避开 |
| --- | ---: | ---: | ---: | --- |
| timer | 60 | 65 | 12 | 过于宽泛，基本被时钟/秒表类应用占据 |
| workout | 61 | 67 | 11 | 过于宽泛，容易被综合训练/记录类应用吞掉 |
| studio | 53 | 59 | 19 | 品类不相关 |
| hiit | 27 | 55 | 20 | 没有 `timer` 时过于泛，竞争也高 |
| interval | 36 | 53 | 20 | 过于泛，需要和 `timer` 组合才更有意义 |
| tabata | 31 | 48 | 36 | 更适合作为 `tabata timer` 或 `tabata free` |
| health fitness | 13 | 54 | 16 | 过于泛，而且竞争太强 |

### 第 4 层 —— 竞品品牌词（不要使用）

- `seconds`、`seconds pro`、`seconds interval timer`、`seconds pro interval timer`：Seconds 竞品流量
- `flex timer`：Flex Timer 竞品
- `sezzy timer`：Sezzy Timer 竞品
- `smartwod timer`：SmartWOD 竞品
- `timer plus`：Timer+ 竞品
- `sunny health fitness`：Sunny Health 品牌词
- `tone pacer pro`：Tone Pacer Pro 竞品
- `whoop 5 0`：Whoop 品牌词
- `da fit watch`、`gloryfit watch`：偏硬件/表盘流量
- `fitnesstime`：竞品词
- `tiner`、`timeer`、`timet`：`timer` 的拼写错误流量

### 第 5 层 —— 不相关品类

- `contraction tracker timer`：孕期/宫缩，不是健身场景
- `med timer apple watch`：医疗场景，不是健身场景
- `workout apple watch`、`watch apps`、`watch apple`、`apple watches`、`apple smart watch`：更偏硬件/表盘搜索
- `apple fitness plus`、`fitness plus`、`apple exercise`：Apple Fitness+ 品牌相关
- `sprint timer`：偏田径冲刺计时，不是当前主要使用场景
- `free fitness apps`：过于宽泛
- `تمرينات`：阿拉伯语“训练”，当前不是本项目的本地化目标

---

## 推荐的 App Store 元数据

### 应用名称

`InterBeat: Workout Music Timer`

原因：

- 保留品牌名
- 直接把 `Music` 放进标题，而不是藏在副标题或描述里
- 同时保留 `Workout` 和 `Timer`，确保搜索结果里一眼能看懂产品是什么
- 长度仍在 App Store 标题限制内

### 副标题

`HIIT, Tabata & Intervals`

原因：

- 让标题专门承担“音乐差异化”卖点
- 用副标题把最强的训练意图词补回来：`HIIT`、`Tabata`、`Intervals`

### 关键词

`free,circuit,custom intervals,running,jumprope,playlist,rest`

为什么这一组可用：

- 它可以和标题/副标题组合出 `workout music timer`、`hiit timer`、`tabata timer`、`circuit timer`、`custom interval timer`、`running interval timer`、`jumprope timer` 等搜索意图
- `playlist` 和 `rest` 能继续强化“work/rest 自动切换音乐”的产品模型，同时不浪费位置去重复过于泛化的词
- 与产品真实能力高度相关
- 避开了竞品品牌词

---

## 修订版关键词建议（更偏高热度 + 低竞争）

上面的原始关键词字段是合理的，但还有进一步优化空间。下面这版在保持 100 字符限制之内的前提下，纳入了更多来自 CSV 的低难度、高效率关键词。

### 优化关键词

`free,circuit,running,jumprope,playlist,rest,emom,boxing,kettlebell`

**字符数：66**（明显低于 100 字符上限）

为什么这版优于原始版：

| 变化 | 原因 |
| --- | --- |
| 去掉 `custom intervals` | 标题/副标题已经明确表达 interval training 意图，去掉可节省 16 个字符 |
| 增加 `emom` | Effectiveness 34、Difficulty 25，EMOM 是典型间歇训练，小众但竞争低 |
| 增加 `boxing` | Effectiveness 35、Difficulty 21，拳击回合训练是典型 interval，用词难度低 |
| 增加 `kettlebell` | Effectiveness 46、Difficulty 14，是 Pop ≥ 25 词里难度最低的一档 |
| 保留 `playlist` 并加入 `rest` | 在扩展低竞争场景词的同时，仍保留音乐/work-rest 差异化表达 |

### 这会覆盖哪些搜索组合？

当标题为 `InterBeat: Workout Music Timer`，副标题为 `HIIT, Tabata & Intervals`，关键词为 `free,circuit,running,jumprope,playlist,rest,emom,boxing,kettlebell` 时：

| 搜索词 | 组合方式 | 预估难度 |
| --- | --- | --- |
| interval timer free | 副标题意图 + `free` | 25 |
| interval timer | 副标题意图 | 49 |
| hiit timer | 副标题 | 32 |
| hiit timer free | 副标题 + `free` | ~28 |
| circuit timer | `circuit` + 标题中的 `timer` | 25 |
| tabata timer | 副标题 + 标题中的 `timer` | 36 |
| running interval timer | `running` + 副标题中的 interval 意图 | 35 |
| jumprope timer | `jumprope` + 标题中的 `timer` | 24 |
| emom timer | `emom` + 标题中的 `timer` | 25 |
| boxing timer | `boxing` + 标题中的 `timer` | 21 |
| kettlebell timer | `kettlebell` + 标题中的 `timer` | 14 |
| workout timer | 标题 | 30 |
| workout music timer | 标题 | — |
| playlist workout timer | `playlist` + 标题 | — |

---

## 为什么现在要把 music 放进去

第一版方案过于偏向 CSV 里 timer 类关键词的数据表现。这样虽然提升了泛搜索可见度，但会明显弱化 InterBeat 的产品身份。

对这个项目来说，`music` 不是边缘功能，而是产品规格里明确写出的差异化能力：

- Work 段和 Rest 段可以使用不同音乐
- 训练过程中会按阶段自动切换
- 相比普通 interval timer，这是核心区分点之一

因此，当前元数据改成了“音乐优先”的策略：

- **标题**：直接使用 `Workout Music Timer`
- **副标题**：用 `HIIT`、`Tabata`、`Intervals` 把训练搜索意图补回来
- **关键词**：继续用 `circuit`、`running`、`jumprope`、`playlist`、`rest` 等词填满剩余空间

需要明确的是：CSV 里**没有** music 相关的搜索词，所以这套方案不是“纯低竞争 ASO”路线，而是“产品定位 + ASO”之间的平衡。

---

## 可用于 A/B 测试的替代关键词集

### 方案 A —— 最大化搜索覆盖（更激进）

`free,circuit,running,jumprope,playlist,rest,emom,boxing,kettlebell,0 60`

增加 `0 60`（Effectiveness 43、Difficulty 25），去覆盖 “0-60 second timer” 这类搜索意图。总长度 68 字符。

### 方案 B —— 更强调差异化（更保守）

`free,circuit,custom intervals,running,jumprope,playlist,rest,music`

保留 `custom intervals`，继续覆盖 “custom interval timer” 这类长尾，同时加入 `rest` 用于补 `rest timer` 场景。总长度 73 字符。

### 方案 C —— 小众垂类覆盖优先

`free,circuit,running,jumprope,emom,boxing,kettlebell,tabata,stopwatch`

去掉 `playlist`，弱化音乐方向，换取更多低难度训练细分词。这样做更偏原始搜索量，而不是产品差异化。总长度 68 字符。**不建议** 作为主方案，除非你的截图和描述已经足够强地证明“音乐切换”卖点。

---

## 从 research CSV 中最终选出的关键词

下面这些词，是 CSV 里兼顾“相关性”和“Popularity / Difficulty 性价比”的最终候选：

| Keyword | Popularity | Difficulty | Effectiveness | 结论 |
| --- | ---: | ---: | ---: | --- |
| interval timer free | 38 | 25 | 51 | 核心目标词，可由标题/副标题 + `free` 组合覆盖 |
| workout timer free | 33 | 28 | 42 | 核心目标词，可由标题 + `free` 组合覆盖 |
| workout timer | 35 | 30 | 41 | 核心目标词，标题可直接覆盖 |
| hiit timer | 34 | 32 | 41 | 核心目标词，副标题可直接覆盖 |
| circuit timer | 27 | 25 | 43 | 强二级目标词，可由 `circuit` 覆盖 |
| tabata timer | 44 | 36 | 39 | 高热度相邻词，可由副标题覆盖 |
| timer for workouts | 33 | 29 | 42 | 相关，但标题已有 `workout` + `timer` 后会变得重复 |
| interval running | 29 | 35 | 32 | 次级相关场景，可由 `running` 覆盖 |
| jumprope | 32 | 24 | 55 | 非常值得抢的小众高效词，可直接覆盖 |
| kettle bell workout | 25 | 14 | 46 | 难度极低、量级也不错，但最终只保留其 `kettlebell` 搜索价值 |
| emom | 14 | 25 | 34 | 小众 interval 形式，竞争低 |
| boxing timer free | 14 | 21 | 35 | 邻近运动场景，难度很低 |

## 明确排除的关键词

这些词从数字上看不错，但不应该用于当前应用：

- `seconds interval timer`、`seconds`、`seconds pro`、`seconds pro interval timer`：竞品品牌流量（Seconds）
- `flex timer`、`sezzy timer`、`smartwod timer`、`timer plus`、`sunny health fitness`、`tone pacer pro`：竞品品牌流量
- `contraction tracker timer`：不相关品类（孕期）
- `med timer apple watch`：不相关品类（医疗）
- `kettle bell workout`：过于偏器械场景，不适合作为当前主定位词，但可拆出 `kettlebell` 去蹭搜索意图
- `timer`、`workout`、`interval`：过于宽泛，且竞争过高
- `tiner`、`timeer`、`timet`：拼写错误流量，不适合品牌形象
- `whoop 5 0`、`da fit watch`、`gloryfit watch`：竞品硬件/品牌词
- `apple fitness plus`、`fitness plus`、`apple exercise`：Apple 品牌词，放进关键词有被拒风险

---

## 执行说明

- 标题、副标题、关键词字段要与支持页文案保持一致。
- 不要在 keywords 字段里重复填写标题或副标题里已经完整出现的短语。
- 当前关键词串故意没有塞满 100 字符，目的是给后续本地化或 A/B 替换留空间。
- **推荐主方案**：`free,circuit,running,jumprope,playlist,rest,emom,boxing,kettlebell`（66 字符）
- **推荐 A/B 测试动作**：上线 2 周后，把 `boxing` / `kettlebell` 替换成 `0 60` / `tabata`，比较哪个细分词带来的安装量更高
