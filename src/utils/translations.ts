export type Language = "en" | "vi" | "zh" | "es" | "ja";

export interface TranslationDict {
  navGenesis: string;
  navCurve: string;
  navPerformance: string;
  navSpecs: string;
  navInquire: string;
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  heroPrice: string;
  heroScroll: string;
  curveStage: string;
  curveTitle1: string;
  curveTitle2: string;
  curveDesc: string;
  curveMetric1: string;
  curveMetric1Label: string;
  curveMetric2: string;
  curveMetric2Label: string;
  perfStage: string;
  perfTitle: string;
  perfSub: string;
  perfDesc: string;
  specTitle: string;
  specSubtitle: string;
  specEngine: string;
  specTrans: string;
  specDrive: string;
  specYear: string;
  specPriceLabel: string;
  specBtn: string;
  footRights: string;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    navGenesis: "Genesis",
    navCurve: "Aerodynamics",
    navPerformance: "Performance",
    navSpecs: "Specifications",
    navInquire: "Inquire",
    heroTitle1: "AUDI A5",
    heroTitle2: "SPORTBACK 2012.",
    heroDesc: "A timeless masterpiece combining coupe elegance, saloon functionality, and turbocharged sports performance. Handcrafted engineering now within reach.",
    heroPrice: "399,000,000 VND",
    heroScroll: "↓ Scroll to Inspect",
    curveStage: "STAGE 02",
    curveTitle1: "AERODYNAMIC",
    curveTitle2: "SWEEPING ROOFLINE",
    curveDesc: "The legendary Audi Sportback silhouette features frameless doors and a dynamic coupe line, slashing air resistance and boosting cornering stability.",
    curveMetric1: "0.29 Cd",
    curveMetric1Label: "Drag Coefficient",
    curveMetric2: "1520 kg",
    curveMetric2Label: "Lightweight Structure",
    perfStage: "STAGE 03",
    perfTitle: "2.0 TFSI TURBOCHARGED HEART",
    perfSub: "Quattro All-Wheel Drive Dynamics",
    perfDesc: "Experience the thrilling response of the turbocharged direct-injection engine paired with a 7-speed S-Tronic double-clutch transmission. Direct control, power, and traction.",
    specTitle: "VEHICLE INFORMATION",
    specSubtitle: "AUDI A5 SPORTBACK 2012",
    specEngine: "2.0 TFSI Turbocharged Engine",
    specTrans: "7-Speed S-Tronic Automatic Dual-Clutch",
    specDrive: "Quattro AWD system",
    specYear: "Model Year: 2012",
    specPriceLabel: "Selling Price: 399 Million VND",
    specBtn: "Schedule Test Drive",
    footRights: "© 2026 AUDI COUPE RE-IMAGINED. ALL RIGHTS RESERVED.",
  },
  vi: {
    navGenesis: "Nguồn gốc",
    navCurve: "Khí động học",
    navPerformance: "Hiệu năng",
    navSpecs: "Thông số",
    navInquire: "Liên hệ",
    heroTitle1: "AUDI A5",
    heroTitle2: "SPORTBACK 2012.",
    heroDesc: "Kiệt tác vượt thời gian kết hợp giữa sự thanh lịch của xe coupe, sự thực dụng của sedan và hiệu năng thể thao tăng áp mạnh mẽ. Sự sang trọng nay trong tầm tay.",
    heroPrice: "399.000.000 VNĐ",
    heroScroll: "↓ Cuộn để chiêm ngưỡng",
    curveStage: "GIAI ĐOẠN 02",
    curveTitle1: "ĐƯỜNG CONG TỶ LỆ VÀNG",
    curveTitle2: "KHÍ ĐỘNG HỌC",
    curveDesc: "Dáng coupe vuốt dài đặc trưng của Audi Sportback kết hợp cửa không viền (frameless doors) quyến rũ, giúp xé gió tối đa và ổn định khi vào cua tốc độ cao.",
    curveMetric1: "0.29 Cd",
    curveMetric1Label: "Hệ số cản gió",
    curveMetric2: "1520 kg",
    curveMetric2Label: "Trọng lượng tối ưu",
    perfStage: "GIAI ĐOẠN 03",
    perfTitle: "ĐỘNG CƠ TĂNG ÁP 2.0 TFSI",
    perfSub: "Hệ dẫn động 4 bánh Quattro trứ danh",
    perfDesc: "Cảm nhận phản hồi phấn khích từ khối động cơ phun xăng trực tiếp tăng áp, kết hợp hộp số ly hợp kép S-Tronic 7 cấp cho khả năng chuyển số tức thì, bám đường tuyệt hảo.",
    specTitle: "THÔNG TIN CHI TIẾT",
    specSubtitle: "AUDI A5 SPORTBACK 2012",
    specEngine: "Động cơ tăng áp 2.0 TFSI",
    specTrans: "Hộp số tự động 7 cấp S-Tronic ly hợp kép",
    specDrive: "Dẫn động 4 bánh toàn thời gian Quattro",
    specYear: "Năm sản xuất: 2012",
    specPriceLabel: "Giá bán: 399 Triệu Đồng",
    specBtn: "Đặt lịch lái thử",
    footRights: "© 2026 AUDI COUPE RE-IMAGINED. BẢO LƯU MỌI QUỀN.",
  },
  zh: {
    navGenesis: "源起",
    navCurve: "空气动力学",
    navPerformance: "性能动能",
    navSpecs: "车辆参数",
    navInquire: "咨询购买",
    heroTitle1: "奥迪 A5",
    heroTitle2: "SPORTBACK 2012.",
    heroDesc: "将轿跑车的优雅、轿车的实用性与涡轮增压运动性能融为一体的传世之作。豪华科技，触手可及。",
    heroPrice: "3.99 亿 越南盾",
    heroScroll: "↓ 向下滚动查看详情",
    curveStage: "第二阶段",
    curveTitle1: "空气动力学",
    curveTitle2: "溜背式车顶线条",
    curveDesc: "经典的奥迪 Sportback 溜背曲线搭配无框车门，大幅降低风阻系数，提升高速过弯时的操控稳定性。",
    curveMetric1: "0.29 Cd",
    curveMetric1Label: "风阻系数",
    curveMetric2: "1520 公斤",
    curveMetric2Label: "轻量化车身结构",
    perfStage: "第三阶段",
    perfTitle: "2.0 TFSI 涡轮增压核心",
    perfSub: "Quattro 全时四驱系统动能",
    perfDesc: "体验涡轮增压直喷发动机与 7 速 S-Tronic 双离合变速箱配合带来的澎湃动力输出。纯粹的操控、动力与抓地力。",
    specTitle: "车辆详细参数",
    specSubtitle: "奥迪 A5 SPORTBACK 2012",
    specEngine: "2.0 TFSI 涡轮增压发动机",
    specTrans: "7速 S-Tronic 双离合自动变速箱",
    specDrive: "Quattro 全时四轮驱动系统",
    specYear: "生产年份：2012年",
    specPriceLabel: "售价：3.99亿 越南盾",
    specBtn: "预约试驾",
    footRights: "© 2026 奥迪轿跑重塑版。保留所有权利。",
  },
  es: {
    navGenesis: "Génesis",
    navCurve: "Aerodinámica",
    navPerformance: "Rendimiento",
    navSpecs: "Especificaciones",
    navInquire: "Contacto",
    heroTitle1: "AUDI A5",
    heroTitle2: "SPORTBACK 2012.",
    heroDesc: "Una obra maestra atemporal que combina la elegancia de un coupé, la funcionalidad de una berlina y el rendimiento deportivo turboalimentado. Lujo al alcance de tu mano.",
    heroPrice: "399.000.000 VND",
    heroScroll: "↓ Desliza para Inspeccionar",
    curveStage: "ETAPA 02",
    curveTitle1: "AERODINÁMICA",
    curveTitle2: "LÍNEA DE TECHO ELEGANTE",
    curveDesc: "La legendaria silueta Audi Sportback cuenta con puertas sin marco y una línea coupé dinámica, lo que reduce la resistencia al viento y mejora la estabilidad.",
    curveMetric1: "0.29 Cd",
    curveMetric1Label: "Coeficiente de Arrastre",
    curveMetric2: "1520 kg",
    curveMetric2Label: "Estructura Ligera",
    perfStage: "ETAPA 03",
    perfTitle: "CORAZÓN TURBOALIMENTADO 2.0 TFSI",
    perfSub: "Dinámica de Tracción Integral Quattro",
    perfDesc: "Experimente la respuesta emocionante del motor de inyección directa turboalimentado acoplado a una transmisión S-Tronic de doble embrague y 7 velocidades.",
    specTitle: "INFORMACIÓN DETALLADA",
    specSubtitle: "AUDI A5 SPORTBACK 2012",
    specEngine: "Motor Turboalimentado 2.0 TFSI",
    specTrans: "Transmisión Automática S-Tronic de 7 Velocidades",
    specDrive: "Tracción Integral Quattro",
    specYear: "Año Modelo: 2012",
    specPriceLabel: "Precio de Venta: 399 Millones VND",
    specBtn: "Reservar Prueba de Manejo",
    footRights: "© 2026 AUDI COUPE RE-IMAGINED. TODOS LOS DERECHOS RESERVADOS.",
  },
  ja: {
    navGenesis: "起源",
    navCurve: "空力デザイン",
    navPerformance: "パフォーマンス",
    navSpecs: "主要諸元",
    navInquire: "問い合わせ",
    heroTitle1: "アウディ A5",
    heroTitle2: "スポーツバック 2012.",
    heroDesc: "クーペの優雅さ、セダンの実用性、そしてターボチャージャーによるスポーツ性能を融合させた時代を超越した傑作。洗練された高級感が手の届く価格に。",
    heroPrice: "3億9900万 ドン",
    heroScroll: "↓ スクロールして車を見る",
    curveStage: "ステージ 02",
    curveTitle1: "流麗な空力フォルム",
    curveTitle2: "スポーツバックシルエット",
    curveDesc: "伝説的なアウディ・スポーツバックのフォルムは、サッシュレスドアとダイナミックなルーフラインを採用。空気抵抗を最小限に抑え、コーナリング性能を最大化します。",
    curveMetric1: "0.29 Cd",
    curveMetric1Label: "空気抵抗係数",
    curveMetric2: "1520 kg",
    curveMetric2Label: "軽量高剛性ボディ",
    perfStage: "ステージ 03",
    perfTitle: "2.0 TFSI ターボチャージャー心臓部",
    perfSub: "フルタイム4輪駆動クワトロ・ダイナミクス",
    perfDesc: "直噴ターボエンジンと7速Sトロニックデュアルクラッチトランスミッションの融合による俊敏な応答性。圧倒的なコントロール性能、加速力、そしてグリップ力。",
    specTitle: "車両詳細情報",
    specSubtitle: "アウディ A5 スポーツバック 2012",
    specEngine: "2.0 TFSI 直噴ターボエンジン",
    specTrans: "7速 Sトロニック デュアルクラッチトランスミッション",
    specDrive: "Quattro フルタイム四輪駆動システム",
    specYear: "年式：2012年",
    specPriceLabel: "販売価格：3億9900万 ドン",
    specBtn: "試乗予約をする",
    footRights: "© 2026 アウディクーペ再構築版。ALL RIGHTS RESERVED.",
  },
};
