好，给你完整的排版脚本，每个区块标注图片位置和文字内容。

HORIZON
Meta Quest 3 · Unity · VR Experience · 3 weeks · 4-person team My role: UI Design · Spatial Design · Interaction Design

介绍
定位
〔左图：Access Mars 截图 / 右图：HORIZON 截图，并排对比〕
Existing Mars VR sits at two extremes — NASA-grade training systems built for astronauts, or low-immersion WebXR experiences that feel like a 360° documentary. HORIZON sits in between: high immersion, scientific accuracy, and accessible to the general public.
Target audience: science museum visitors, space enthusiasts — people who deserve to feel what planetary exploration actually weighs.


Goal
卡片
〔左栏〕 Problem The most dangerous conditions on Mars — radiation, pressure loss, oxygen depletion — are invisible and abstract. Existing media tells you they exist. Nothing makes you feel them.
〔右栏〕 Goal Design a high-immersion VR experience that makes these invisible hazards physically perceivable — for general public audiences, not astronaut trainees.


Research
〔研究引用卡片或文献来源标注图，4个来源横排：PMC · arXiv · NASA · MIT Media Lab〕
Three research-backed reasons for choosing VR over other media:
High-immersion VR significantly outperforms low-immersion environments in both declarative and procedural knowledge acquisition — while increasing presence, intrinsic motivation, and cognitive engagement.
VR is the only medium that can reconstruct the scale, isolation, and embodied experience of planetary exploration.
Invisible hazards — radiation, pressure loss, oxygen depletion — need a spatial layer to become perceivable. A HUD overlay makes abstract parameters readable in context.

设计决策
〔四条决策，竖向排列，每条左侧一个简单图标〕
Based on research, four design directions drive everything that follows:
Embody the invisible — Use VR's presence to make unfelt dangers felt.
Diegetic everything — All UI lives inside the world. Nothing breaks the surface.
Real physics, real scale — 38% Martian gravity. Smooth locomotion. Distance means something.
Agency over punishment — Users choose to take risks. The weight comes from the decision, not the penalty.

体验
流程
〔横向流程图：Lobby → Tutorial → Phase 1 → Phase 2 → Phase 3 → Phase 4 (Optional) → Station Return〕 每个节点下方一行小字说明该阶段核心动作
The experience moves from orientation to escalating survival pressure, with an optional fourth phase that introduces unpredictable risk events.

地图
〔火星表面俯视地图或场景布局图，标注各任务区域位置〕
The surface mission takes place across [X] distinct zones. Each zone anchors one primary objective and one environmental hazard. Navigation is intentional — distance and exposure are part of the experience design.

四个阶段
Phase 1 — [任务名] 〔截图〕 Objective: [一句话] Key interaction: [一句话] Environmental state: [一句话]

Phase 2 — [任务名] 〔截图〕 Objective: [一句话] Key interaction: [一句话] Environmental state: [一句话]

Phase 3 — [任务名] 〔截图〕 Objective: [一句话] Key interaction: [一句话] Environmental state: [一句话]

Phase 4 — [任务名] (Optional) 〔截图，氛围更暗或有警报视觉〕 A radiation burst or sandstorm event triggers. Stay and complete the mission, or return to the habitat. The choice is yours — and it carries real consequences.

视觉设计
UI System
〔四张截图，2×2 网格布局〕
Helmet HUD 〔截图〕 Real-time O₂, radiation, and temperature overlay. Anchored within Quest 3's safe FOV zone — always readable, never obstructive. Key decision: Critical parameters placed at natural gaze center, not screen edge.
Wrist Panel 〔截图〕 Raise your arm to check mission status. A natural spatial gesture that keeps you present in the world. Key decision: Designed for both controller input and hand tracking — identical feedback, two input models.
Navigation Map (Wrist) 〔截图〕 Lightweight surface orientation layer on the wrist panel. Same visual language as the Station console map. Key decision: Two contexts, one system — so switching between them never requires relearning.
Diegetic Console 〔截图〕 Settings and system access live inside the world as physical consoles. You walk up. You operate. Key decision: Intentional friction — the cost of walking there reinforces that you're somewhere real.

场景与地图
〔Mars Station 全景大图〕
Mars Station spatial design: [功能分区说明一句话]. The station's layout defines the rhythm of the experience — briefing, preparation, departure, return.
〔表面环境截图 1–2 张，横排〕
The surface environment is built around scale and exposure. No cover. No landmarks. Just horizon.

交互设计
手势系统
〔手势对照图或录屏截图：左侧手柄输入 / 右侧手部追踪输入〕
Every interaction in HORIZON supports both controller and hand tracking input. The challenge: the two input models have fundamentally different precision and affordance requirements.
Controller input maps to button triggers with haptic confirmation. Hand tracking relies on spatial gesture recognition with visual feedback substituting for haptics. Each interactive element was designed with both feedback paths — not one adapted from the other.

任务系统
〔任务面板截图序列：任务下发 → 进行中 → 完成状态〕
Tasks flow through a three-state system: assigned → active → resolved. Status is visible on both the wrist panel and the HUD — the wrist panel for detail, the HUD for at-a-glance awareness during high-pressure moments.
Completion and failure states are communicated through visual signals only — no audio dependency, designed for museum environments where sound is unpredictable.

Item 交互
〔三组截图横排，每组2张：触发前 + 触发后〕
Geological Scanner Trigger → scan animation → data readout. Three states, each with a distinct visual signal.
Resource Collector Trigger → collection progress → capacity feedback. Overload state triggers HUD warning.
Station Systems Drive console · resource management panel · habitat monitor. Each operates as a physical diegetic object — approached, activated, read.

反馈与展望
用户反馈
〔可选：测试照片 / 试戴截图〕
Internal team testing and external trial sessions with invited users. [如果有具体发现，一句话写在这里。如果没有：Initial testing confirmed the readability of the diegetic UI system and the intuitiveness of wrist-panel interaction without guided instruction.]

未来展望
〔三个卡片横排〕
Structured usability testing Current testing lacks quantitative data. Next step: task completion rates, error rates, and presence measurement via IPQ scale — particularly for HUD readability under high-pressure task conditions.
Locomotion comfort calibration Smooth locomotion + 38% gravity simulation currently relies on subjective judgment. Systematic testing needed to define safe velocity and acceleration parameters across user tolerance ranges.
Adaptive map system The current map is designed for a fixed mission layout. Expanding to procedural terrain or user-defined waypoints would require rethinking the map's information architecture from the ground up.