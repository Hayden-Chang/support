# Privacy Policy

DayMosaic

- **Effective date:** September 2, 2026
- **App version:** Beta
- **Operator:** Haichao Zhang (张海超), China
- **Contact:** <shenshuoyouguang@outlook.com>

**Summary:** DayMosaic stores tasks, schedules, external-event copies, focus records, and settings locally. Its optional AI planning feature sends your planning instruction and the relevant plan to `api.keeline.xyz`, which uses an external AI model provider to generate a proposal. The App does not change your real schedule until you apply that proposal. Raw AI requests and outputs are retained for no more than 30 days. The App does not use advertising or cross-app tracking.

## 1. Local information

The App stores in its local iOS sandbox:

- task titles, notes, durations, repeat rules, priority or pinned state, and completion state;
- task occurrences, schedules, dates, time segments, and placement state;
- external-event copies you choose to add, including titles, dates, durations, time segments, all-day state, and fixed state;
- focus-session timing and status;
- App settings; and
- a randomly generated AI guest installation identifier.

This information stays on your device unless you use AI planning as described below, send it to support, or include it in a device backup you control. Because titles, notes, and AI instructions are free-form, avoid entering sensitive information that is not needed for planning.

## 2. Optional AI planning

AI planning is optional. Before planning content is sent for the first time, the App displays a disclosure and asks for your agreement. If you decline, non-AI features remain available. AI output is a temporary proposal and does not change your real tasks or schedule until you review and apply it.

When you agree and request a plan, the App sends to `https://api.keeline.xyz`:

- your planning instruction;
- the selected date, current date and time, and any earliest-start setting;
- relevant task and external-event titles, durations, time segments, and completion, pinned, all-day, or fixed states;
- internal item references, a request identifier, and a planning-baseline fingerprint used to validate the proposal; and
- a random installation identifier used to issue a temporary guest token and enforce the AI quota.

The Beta AI feature requires no account. The installation identifier is not your Apple ID, advertising identifier, phone number, email address, or precise location. Reinstalling the App may generate a new identifier.

## 3. External AI model provider

The DayMosaic service uses an external AI model provider to interpret your instruction and propose structured planning operations. The provider receives a reduced projection containing your instruction, the current date and time, and relevant plan items with scheduling fields.

Before sending that projection, the service removes the App request identifier, baseline fingerprint, and real domain references. The model provider does not receive the App installation identifier from us.

The provider or model may change as we maintain the service. The provider processes the reduced content under its service and privacy terms. We do not authorize use of DayMosaic content for advertising or cross-app tracking.

## 4. Server processing and retention

The service validates requests, enforces a per-installation quota, calls the model provider, converts the output into structured operations, runs deterministic scheduling and validation, and returns a proposal for your review.

For a model-backed request, the service may store a pseudonymous key derived from the installation identifier; request identifier, route, pipeline, timestamps, status, and duration; request and response content; model-call input and output, model metadata, errors, and call count; and token counts when reported.

Raw API request and response content and raw model-call input and output are removed after no more than 30 days. Pseudonymous keys, request identifiers, status, timing, call counts, token metadata, and quota records may remain as reasonably necessary to operate quotas, secure and troubleshoot the service, investigate abuse, and maintain aggregate reliability. Authorization headers and guest Bearer tokens are not persisted in these operational records.

Local App information remains until you delete it, reset the relevant data, or delete the App, subject to backups controlled by you or Apple.

## 5. Purposes and disclosure

We process information only to provide App features; authenticate guest AI requests; enforce quotas; generate and validate requested proposals; prevent duplicate or abusive requests; maintain security and reliability; respond to support; and comply with law.

We may disclose only what is necessary to infrastructure and network providers, the external AI model provider, Microsoft for support email, GitHub for this page, and authorities or other parties when required by law or reasonably necessary to protect rights, safety, and security.

We do not serve ads, build advertising profiles, sell or rent personal information, share it for cross-context behavioral advertising, or track you across other companies' apps or websites.

## 6. Apple, support, and this page

Apple may independently process App Store activity, backups, and user-authorized diagnostics under your settings and the [Apple Privacy Policy](https://www.apple.com/legal/privacy/). Local App data may be included in backups controlled by you or Apple; we cannot access or control them.

If you email us, we receive what you provide, such as your email address, display name, message, attachments, and email metadata. Outlook may process it under the [Microsoft Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement).

This page is hosted by GitHub Pages. We add no advertising, analytics, or tracking scripts. GitHub may process technical logs under the [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

## 7. International processing and legal bases

The operator is in China. Service providers may process information in other regions where they operate. Where a legal basis is required, we rely as applicable on your agreement for optional AI processing where consent is required, performance of requested features or support, permitted legitimate interests in securing and operating the service, and legal obligations. We apply cross-border safeguards where required.

## 8. Your choices and rights

You can use the App without AI planning, decline the AI disclosure, review a proposal without applying it, delete local information using available controls, or delete the App.

Email <shenshuoyouguang@outlook.com> to request access, correction, deletion, restriction, an explanation, or withdrawal of consent where applicable. Because there is no account and the server uses a pseudonymous installation key, we may need information shown in the App or a related support code to locate a record.

## 9. Children, security, and changes

DayMosaic is not directed to children. We do not knowingly collect personal information from children through the App, including children under 14 in China, under 13 in the United States, or below the applicable minimum age elsewhere.

Risk-reduction measures include iOS sandboxing, HTTPS, temporary guest tokens, pseudonymous server keys, restricted management endpoints, and time-limited raw-content retention. No method is completely secure.

We may update this Policy when the App, provider arrangement, practices, or law changes. We will post the new version here, revise the effective date, and provide additional notice or consent when required.

## 10. Contact

- **Operator:** Haichao Zhang (张海超)
- **Location:** China
- **Email:** <shenshuoyouguang@outlook.com>

---

# 隐私政策

DayMosaic

- **生效日期：**2026 年 9 月 2 日
- **应用版本：**Beta 版
- **运营者：**张海超（Haichao Zhang），中国
- **联系方式：**<shenshuoyouguang@outlook.com>

**摘要：**DayMosaic 会在设备本地保存任务、日程、外部事件副本、专注记录和设置。可选的 AI 规划功能会将您的规划要求及相关计划发送至 `api.keeline.xyz`，并由外部 AI 模型服务商协助生成建议。您主动选择“应用”前，本应用不会改动真实日程。AI 原始请求与输出最长保留 30 天。本应用不投放广告，也不进行跨应用追踪。

## 一、设备本地信息

本应用会在 iOS 本地沙盒中保存任务标题、备注、时长、重复规则、优先级或固定状态、完成状态；任务实例、日程、日期、时间片段和排期状态；您选择加入的外部事件副本；专注会话；应用设置；以及随机生成的 AI 访客安装标识。

除非您使用下述 AI 功能、主动发送支持信息，或使用由您控制的设备备份，上述信息会留在设备上。标题、备注和 AI 要求可自由输入，请勿输入规划不需要的敏感信息。

## 二、可选 AI 规划

AI 规划是可选功能。首次发送规划内容前，本应用会展示处理说明并征求您的同意。拒绝后仍可使用非 AI 功能。AI 返回的是临时建议；只有您审阅并主动“应用”后，建议才会写入真实任务或日程。

当您同意并要求生成计划时，本应用会向 `https://api.keeline.xyz` 发送：您的规划要求；所选日期、当前日期和时间及可选最早开始时间；相关任务和外部事件的标题、时长、时间片段、完成、固定、全天等状态；用于校验建议的内部项目引用、请求标识和规划基线指纹；以及用于临时访客令牌和 AI 配额的随机安装标识。

Beta 版 AI 功能不要求账号。安装标识不是 Apple ID、广告标识符、电话号码、邮箱或精确位置。重新安装后可能生成新标识。

## 三、外部 AI 模型服务商

DayMosaic 服务使用外部 AI 模型服务商理解要求并提出结构化规划操作。服务商收到裁剪后的信息：您的要求、当前日期和时间，以及相关计划项目与排期字段。

发送前，服务端会移除应用请求标识、基线指纹和真实领域引用。我们不会向模型服务商提供本应用安装标识。具体模型或服务商可能随维护调整；我们不授权其将 DayMosaic 内容用于广告或跨应用追踪。

## 四、服务端处理与保存期限

服务端会校验请求、执行按安装标识计算的配额、调用模型、转换结构化操作、运行确定性排期和校验，再返回供您审阅的建议。

每次调用模型时，服务端可能保存化名设备键；请求标识、路由、处理管线、时间戳、状态和耗时；请求与响应内容；模型调用输入输出、模型元数据、错误、调用次数及 Token 数量。

API 原始请求与响应、模型调用原始输入与输出会在最长 30 天后移除。化名键、请求标识、状态、耗时、调用次数、Token 元数据和配额记录，可能在执行配额、保障安全、排查故障、调查滥用和维护汇总可靠性所合理需要的期限内继续保存。运维记录不持久保存授权请求头或访客 Bearer 令牌。

本地信息保留至您将其删除、重置相关数据或删除本应用，但由您或 Apple 控制的备份除外。

## 五、目的与披露

我们仅为提供应用功能、验证 AI 访客请求、执行配额、生成和校验建议、防止重复或滥用请求、维护安全可靠性、回复支持及履行法律义务而处理信息。

我们仅在必要范围内向基础设施和网络服务商、外部 AI 模型服务商、支持邮箱使用的 Microsoft、本页面使用的 GitHub，以及法律要求或保护权利与安全所必需的主体披露信息。

我们不投放广告、不建立广告画像、不出售或出租个人信息、不为跨场景行为广告共享个人信息，也不跨其他公司的应用或网站追踪您。

## 六、Apple、支持与本页面

Apple 可能依据您的设置及 [Apple 隐私政策](https://www.apple.com/legal/privacy/) 独立处理 App Store 活动、备份和您授权的诊断。我们无法访问或控制由您或 Apple 管理的备份。

如果您发送邮件，我们会收到您提供的邮箱地址、显示名称、正文、附件及邮件元数据。Outlook 可能依据 [Microsoft 隐私声明](https://privacy.microsoft.com/en-us/privacystatement) 处理邮件数据。

本页面由 GitHub Pages 托管，我们未加入广告、分析或追踪脚本。GitHub 可能依据 [GitHub 一般隐私声明](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) 处理技术日志。

## 七、法律依据与跨境处理

运营者位于中国，服务商可能在其他运营地区处理信息。法律要求时，我们会视情形依据您对可选 AI 处理的同意、履行您要求的功能或支持、法律允许的服务安全运营权益及法定义务，并采取所需跨境保障。

## 八、您的选择与权利

您可以不使用 AI 规划、拒绝 AI 处理说明、审阅建议但不应用、使用应用内控制删除本地信息，或删除本应用。

您可以发送邮件至 <shenshuoyouguang@outlook.com>，请求访问、更正、删除、限制、解释或依法撤回同意。由于没有账号且服务端使用化名安装键，我们可能需要您提供应用内信息或相关支持代码来定位记录。

## 九、儿童、安全与变更

DayMosaic 并非面向儿童。我们不会有意通过本应用收集儿童个人信息，包括中国境内不满 14 周岁、美国境内不满 13 周岁，或其他地区低于适用最低年龄的儿童。

降低风险的措施包括 iOS 沙盒、HTTPS、临时访客令牌、化名服务端键、受限管理端点和限定原始内容保存期限。任何方式都无法保证绝对安全。

应用、服务商安排、处理方式或法律变化时，我们可能更新本政策，在本网址发布并修改生效日期；法律要求时会另行通知或征求同意。

## 十、联系我们

- **运营者：**张海超（Haichao Zhang）
- **所在地：**中国
- **电子邮箱：**<shenshuoyouguang@outlook.com>
