/** Trackly 插画与 spot 资产（public/images/Tracklyimage） */
const base = "/images/Tracklyimage";

function asset(filename: string) {
  return `${base}/${encodeURIComponent(filename)}`;
}

export const tracklyAssets = {
  /** 快递员奔跑 — Research Methodology */
  deliveryRunner: asset("Trackly3.png"),
  /** 客服单人挥手 */
  supportAgent: asset("image 44.png"),
  /** 双人客服 */
  supportTeam: asset("image 45.png"),
  /** 走廊困惑用户 */
  confusedResident: asset("image 46.png"),
  /** 担忧快递员 + 包裹 */
  worriedCourier: asset("image 47.png"),
  /** 担忧用户看手机 */
  worriedUserPhone: asset("image 53.png"),
  /** 智能柜 */
  lockerUnit: asset("image 54.png"),
  /** 包裹 + 问号 */
  boxQuestion: asset("image 56.png"),
  /** 盾牌锁 */
  shieldLock: asset("image 57.png"),
  /** 包裹 + 轨迹弧 */
  boxVisibility: asset("image 58.png"),
  /** 微笑快递员 */
  courierFriendly: asset("image 96.png"),
  /** 担忧快递员（圆底） */
  courierWorried: asset("image 97.png"),
  /** 戴眼镜参与者 */
  participantGlasses: asset("image 98.png"),
  /** Who have these problem most — 双人插画（透明底） */
  audienceCharacters: asset("image-49-transparent.png"),
} as const;

export type TracklyAssetKey = keyof typeof tracklyAssets;
