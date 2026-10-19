// AUTO-GENERATED from lvkon.com/en/product.php catalog. Product models, images and specs are factual partner data.
import type { Locale } from './i18n'

export type LvkonProduct = { model: string; image: string; specs: Record<string, string> }
export type LvkonSubgroup = { id: string; name: string; products: LvkonProduct[] }
export type LvkonGroup = { id: string; slug: string; name: string; color: string; label: Record<Locale,string>; desc: Record<Locale,string>; subgroups: LvkonSubgroup[] }

export const lvkonGroups: LvkonGroup[] = [
  {
    id: "432", slug: "drive-assembly", name: "Drive Assembly", color: "#FF5C2A",
    label: { tr: "Tahrik Grubu", en: "Drive Assembly", de: "Antriebsstrang" },
    desc: { tr: "AMT, kesintisiz güç ve hibrit seçenekleriyle ticari araçlar için komple elektrikli ve hibrit tahrik sistemleri.", en: "Complete electric & hybrid drive systems for commercial vehicles — AMT, uninterrupted-power and hybrid configurations.", de: "Komplette elektrische & hybride Antriebssysteme für Nutzfahrzeuge — AMT, unterbrechungsfreie Leistung und Hybrid." },
    subgroups: [
      {
        id: "499", name: "Pure Electric System with AMT",
        products: [
          { model: "TED1020", image: "/lvkon/TED1020.png", specs: {"Product Model": "TED1020", "Applicable Vehicle Types": "4.5 - 6t Truck", "Transmission": "Two-Speed Transmission: 2.7/1", "Motor Power Torque": "170/380Nm 55/120kW", "Maximum Motor Speed": "6000rpm", "Maximum Output Torque": "1026Nm"} },
          { model: "TED1360", image: "/lvkon/TED1360.png", specs: {"Product Model": "TED1360", "Applicable Vehicle Types": "4.5 - 7t Truck", "Transmission": "Two-Speed Transmission: 2.73/1", "Motor Power Torque": "300/500Nm 60/120kW", "Maximum Motor Speed": "5000rpm", "Maximum Output Torque": "1365Nm"} },
          { model: "TED2330S", image: "/lvkon/TED2330S.png", specs: {"Product Model": "TED2330S", "Applicable Vehicle Types": "7 - 12t Truck", "Transmission": "Two-Speed Transmission: 2.741/1", "Motor Power Torque": "350/850Nm 75/120kw", "Maximum Motor Speed": "5000rpm", "Maximum Output Torque": "2330Nm"} },
          { model: "TED3010S", image: "/lvkon/TED3010S.png", specs: {"Product Model": "TED3010S", "Applicable Vehicle Types": "8 - 10m passenger bus, 10-m public bus 11 - 14t truck", "Transmission": "Two-Speed Transmission: 2.741/1", "Motor Power Torque": "500/1100Nm 80/160kW", "Maximum Motor Speed": "4500rpm", "Maximum Output Torque": "3015Nm"} },
          { model: "TED3380S", image: "/lvkon/TED3380S.png", specs: {"Product Model": "TED3380S", "Applicable Vehicle Types": "10-m passenger bus, 12-m public bus", "Transmission": "Two-Speed Transmission: 2.741/1", "Motor Power Torque": "500/1300Nm 120/185kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "3380Nm"} },
          { model: "STED7000S", image: "/lvkon/STED7000S.png", specs: {"Product Model": "TED7000S", "Applicable Vehicle Types": "14 - 18t truck, special-purpose vehicle", "Transmission": "Four-Speed Transmission: 6.61/3.52/1.89/1", "Motor Power Torque": "500/1100Nm 100/185kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "7000Nm"} },
          { model: "HTED16000", image: "/lvkon/HTED16000.png", specs: {"Product Model": "HTED16000", "Applicable Vehicle Types": "25 - 30t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.39/3.54/1.74/1", "Motor Power Torque": "850Nm/1950Nm 180/300kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "16360Nm"} },
          { model: "HTED20000L", image: "/lvkon/HTED20000L.png", specs: {"Product Model": "HTED20000L", "Applicable Vehicle Types": "35 - 60t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.39/3.54/1.74/1", "Motor Power Torque": "1500Nm/2400Nm 270/405kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "20136Nm"} },
          { model: "HTED20000L2", image: "/lvkon/HTED20000L2.png", specs: {"Product Model": "HTED20000L2", "Applicable Vehicle Types": "31 - 49t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.39/3.54/1.74/1", "Motor Power Torque": "1200Nm/2400Nm 250/380kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "20136Nm"} },
          { model: "HTED20000H", image: "/lvkon/HTED20000H.png", specs: {"Product Model": "HTED20000H", "Applicable Vehicle Types": "60 - 90t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.39/3.54/1.74/1", "Motor Power Torque": "1500Nm/2400Nm 300/450kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "20136Nm"} },
          { model: "HTED22000", image: "/lvkon/HTED22000.png", specs: {"Product Model": "HTED22000", "Applicable Vehicle Types": "50 - 70t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.39/3.54/1.74/1", "Motor Power Torque": "1500Nm/2600Nm 280/420kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "21814Nm"} },
          { model: "HTED24000L", image: "/lvkon/HTED24000L.png", specs: {"Product Model": "HTED24000L", "Applicable Vehicle Types": "70 - 100t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.67/4.57/2.29/1", "Motor Power Torque": "1650Nm/2800Nm 315/510kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "24276Nm"} },
          { model: "HTED24000H", image: "/lvkon/HTED24000H.png", specs: {"Product Model": "HTED24000H", "Applicable Vehicle Types": "70 - 100t heavy-duty truck", "Transmission": "Four-Speed Transmission: 8.67/4.57/2.29/1", "Motor Power Torque": "1800Nm/2800Nm 360/550kW", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "24276Nm"} },
          { model: "NTED6500", image: "/lvkon/NTED6500.png", specs: {"Product Model": "NTED6500", "Applicable Vehicle Types": "5 - 6t loader", "Transmission": "Two-Speed Transmission: 5.43/1.95", "Motor Power Torque": "440/1200Nm 140/200kW", "Maximum Motor Speed": "8300rpm", "Maximum Output Torque": "6516Nm"} },
          { model: "NTED7500", image: "/lvkon/NTED7500.png", specs: {"Product Model": "NTED7500", "Applicable Vehicle Types": "7t loader", "Transmission": "Two-Speed Transmission: 5.43/1.95", "Motor Power Torque": "540/1382Nm 158/340kW", "Maximum Motor Speed": "7600rpm", "Maximum Output Torque": "7500Nm"} },
        ],
      },
      {
        id: "500", name: "Pure Electric System with Uninterrupted Power",
        products: [
          { model: "CED20000", image: "/lvkon/CED20000.png", specs: {"Product Model": "CED20000", "Applicable Vehicle Types": "55 - 90t heavy-duty truck", "Transmission": "No.1 Transmission: 8.39/1.74 No.2 Transmission: 3.54/1", "Motor Power Torque": "150/270kW 750/1500Nm", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "20136Nm"} },
          { model: "CED21000", image: "/lvkon/CED21000.png", specs: {"Product Model": "CED21000", "Applicable Vehicle Types": "90 - 120t mining truck", "Transmission": "No.1 Transmission: 7.23/3.05/1.42 No.2 Transmission: 4.67/2.06/1", "Motor Power Torque": "210/350kW 1100/1800Nm", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "21420Nm"} },
          { model: "CED34000", image: "/lvkon/CED34000.png", specs: {"Product Model": "CED34000", "Applicable Vehicle Types": "120 - 180t mining truck", "Transmission": "No.1 Transmission: 9.16/3.02/1.22 No.2 Transmission: 5.27/2.17/1", "Motor Power Torque": "270/400kW 1200/2400Nm", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "34632Nm"} },
        ],
      },
      {
        id: "501", name: "Parallel Hybrid Power System",
        products: [
          { model: "PHD3300", image: "/lvkon/PHD3300.png", specs: {"Product Model": "PHD3300", "Applicable Vehicle Types": "4.5 - 12t light-duty truck", "Transmission": "6-speed AMT R=5.645 Rated Input Torque: 539Nm 6.091/3.65/2.274/1.478/1/0.774", "Motor Power Torque": "30/65kW 130/320Nm", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "3280Nm"} },
          { model: "PHD6300", image: "/lvkon/PHD6300.png", specs: {"Product Model": "PHD6300", "Applicable Vehicle Types": "9 - 12m highway coach, public buses, 16 - 25t truck, etc.", "Transmission": "6-speed AMT R=6.045 Rated Input Torque: 950Nm 6.621/3.725/2.303/1.514/1/0.754", "Motor Power Torque": "80/135kW 600/1000Nm", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "6300Nm"} },
          { model: "PHD6300B", image: "/lvkon/PHD6300B.png", specs: {"Product Model": "PHD6300B", "Applicable Vehicle Types": "12 - 18t cargo and sanitation truck", "Transmission": "6-speed AMT R=6.045 Rated Input Torque: 950Nm 6.621/3.725/2.303/1.514/1/0.754", "Motor Power Torque": "60/110kW 300/750Nm", "Maximum Motor Speed": "4500rpm", "Maximum Output Torque": "6300Nm"} },
          { model: "PHD29000G", image: "/lvkon/PHD29000G.png", specs: {"Product Model": "PHD29000G", "Applicable Vehicle Types": "25 - 31t standard loader and mixer", "Transmission": "12-speed AMT R=11.56/2.59 Rated Input Torque: 2400Nm 12.1/9.41/7.31/5.71/4.46/3.48/2.71/2.11/1.64/1.28/1/0.78", "Motor Power Torque": "65/120kW* 560/1200Nm*", "Maximum Motor Speed": "2500rpm", "Maximum Output Torque": "29040Nm"} },
          { model: "PHD29000E", image: "/lvkon/PHD29000E.png", specs: {"Product Model": "PHD29000E", "Applicable Vehicle Types": "25 - 49t standard load heavy-duty truck (mixer and tractor)", "Transmission": "12-speed AMT R=11.56/2.59 Rated Input Torque: 2400Nm 12.1/9.41/7.31/5.71/4.46/3.48/2.71/2.11/1.64/1.28/1/0.78", "Motor Power Torque": "78/150kW 620/1400Nm", "Maximum Motor Speed": "3500rpm", "Maximum Output Torque": "29040Nm"} },
          { model: "PHD29000B", image: "/lvkon/PHD29000B.png", specs: {"Product Model": "PHD29000B", "Applicable Vehicle Types": "40 - 60t heavy-duty tractor", "Transmission": "12-speed AMT R=11.56/2.59 Rated Input Torque: 2400Nm 12.1/9.41/7.31/5.71/4.46/3.48/2.71/2.11/1.64/1.28/1/0.78", "Motor Power Torque": "105/200kW *930/2000Nm", "Maximum Motor Speed": "3000rpm", "Maximum Output Torque": "29040Nm"} },
        ],
      },
      {
        id: "509", name: "Series-Parallel Hybrid Power System",
        products: [
          { model: "MHD3500", image: "/lvkon/MHD3500.png", specs: {"Product Model": "MHD3500", "Applicable Vehicle Types": "10.5-m public bus", "Transmission": "2-speed AMT: 1.35/1 Rated Input Torque: 1300Nm", "Motor Power Torque": "ISG:75/114kW TM:80/150kW ISG:355/755Nm TM:750/1700Nm", "Maximum Motor Speed": "IM：4500rpm TM：3000rpm", "Maximum Output Torque": "3500Nm"} },
          { model: "MHD3900", image: "/lvkon/MHD3900.png", specs: {"Product Model": "MHD3900", "Applicable Vehicle Types": "10.5 - 12 m public bus", "Transmission": "2-speed AMT: 1.35/1 Rated Input Torque: 1300Nm", "Motor Power Torque": "ISG:65/115kW TM:80/140kW ISG:480/900Nm TM:960/2100Nm", "Maximum Motor Speed": "IM：3500rpm TM：2500rpm", "Maximum Output Torque": "3855Nm"} },
          { model: "MHD4500", image: "/lvkon/MHD4500.png", specs: {"Product Model": "MHD4500", "Applicable Vehicle Types": "18-m bus", "Transmission": "2-speed AMT: 1.35/1 Rated Input Torque: 1300Nm", "Motor Power Torque": "ISG:65/115kW TM:130/210kW ISG:480/900Nm TM:1300/2800Nm", "Maximum Motor Speed": "IM：3500rpm TM：2500rpm", "Maximum Output Torque": "4500Nm"} },
        ],
      },
      {
        id: "510", name: "Hybrid System with Uninterrupted Power",
        products: [
          { model: "CHD1600", image: "/lvkon/CHD1600.png", specs: {"Product Model": "CHD1600", "Applicable Vehicle Types": "4.5 - 8t light-duty truck", "Transmission": "Dual Input 4DHT 3.985/1.83/1/0.765", "Motor Power Torque": "ISG:30/70kW TM:40/90kW ISG:100/210Nm TM:130/300Nm", "Maximum Motor Speed": "IM：5500rpm TM：8500rpm", "Maximum Output Torque": "1645Nm"} },
          { model: "CHD24000", image: "/lvkon/CHD24000.png", specs: {"Product Model": "CHD24000", "Applicable Vehicle Types": "25 - 60t dump truck, mixer", "Transmission": "Dual Input 8DHT 9.164/5.271/5.305/3.409/3.015/ 2.168/1.436/1.000", "Motor Power Torque": "ISG:60/120kW TM:117/255kW ISG:350/950Nm TM:700/1770Nm", "Maximum Motor Speed": "IM：3600rpm TM：4000rpm", "Maximum Output Torque": "24150Nm"} },
          { model: "CHD32000", image: "/lvkon/CHD32000.png", specs: {"Product Model": "CHD32000", "Applicable Vehicle Types": "60 - 130t mining truck", "Transmission": "Dual Input 8DHT (mining truck version) 9.164/5.271/5.305/3.409/3.015/ 2.168/1.436/1.000", "Motor Power Torque": "ISG:90/180kW TM:140/310kW ISG:700/1400Nm TM:900/2100Nm", "Maximum Motor Speed": "IM：3600rpm TM：3600rpm", "Maximum Output Torque": "32420Nm"} },
          { model: "CHD36000", image: "/lvkon/CHD36000.png", specs: {"Product Model": "CHD36000", "Applicable Vehicle Types": "130 - 160t mining truck", "Transmission": "Dual Input 8DHT (mining truck version) 9.164/5.271/5.305/3.409/3.015/ 2.168/1.436/1.000", "Motor Power Torque": "ISG:140/310kW TM:200/350kW ISG:900/2100Nm TM:1100/2500Nm", "Maximum Motor Speed": "IM：3600rpm TM：3600rpm", "Maximum Output Torque": "36080Nm"} },
          { model: "CHD36000B", image: "/lvkon/CHD36000B.png", specs: {"Product Model": "CHD36000B", "Applicable Vehicle Types": "130 - 160t mining truck", "Transmission": "Dual Input 8DHT (mining truck version) 9.164/3.482/5.305/2.252/3.015/1.000/1.436/0.698", "Motor Power Torque": "ISG:140/310kW TM:220/450kW ISG:900/2100Nm TM:1300/2800Nm", "Maximum Motor Speed": "IM：3600rpm TM：4000rpm", "Maximum Output Torque": "36080Nm"} },
        ],
      },
    ],
  },
  {
    id: "433", slug: "electric-drive-axle", name: "Electric Drive Axle", color: "#3b82f6",
    label: { tr: "Elektrikli Tahrik Aksı", en: "Electric Drive Axle", de: "Elektrische Antriebsachse" },
    desc: { tr: "Ağır, orta ve hafif hizmet tipi ticari araçlar için entegre elektrikli tahrik aksları.", en: "Integrated electric drive axles for heavy-, medium- and light-duty commercial vehicles.", de: "Integrierte elektrische Antriebsachsen für schwere, mittlere und leichte Nutzfahrzeuge." },
    subgroups: [
      {
        id: "502", name: "Heavy-duty Electric Drive Axle",
        products: [
          { model: "STEA45000Z", image: "/lvkon/STEA45000Z.png", specs: {"Product Model": "STEA45000Z", "Applicable Vehicle Types": "6*4, 4*2 heavy-duty truck", "Transmission": "Dual-Motor Six-Speed Transmission with Main Gearbox 71.0/36.3/20.0/10.2 Auxiliary Gearbox 46.8/13.2", "Motor Power Torque": "144*2/320*2 kW 156*2/380*2 Nm", "Maximum Motor Speed": "9000rpm", "Maximum Output Torque": "45000Nm"} },
          { model: "STEA40000Z", image: "/lvkon/STEA40000Z.png", specs: {"Product Model": "STEA40000Z", "Applicable Vehicle Types": "6*4, 4*2 heavy-duty truck", "Transmission": "Single Motor Two-Speed Transmission 13.2/4.4", "Motor Power Torque": "121/250kW 320/850Nm", "Maximum Motor Speed": "10000rpm", "Maximum Output Torque": "40000Nm"} },
          { model: "STEA39000Z", image: "/lvkon/STEA39000Z.png", specs: {"Product Model": "STEA39000Z", "Applicable Vehicle Types": "6*4, 4*2 heavy-duty truck", "Transmission": "Single Motor Four-Speed Transmission 71.0/36.3/20.0/10.2", "Motor Power Torque": "150/252kW 285/550Nm", "Maximum Motor Speed": "9000rpm", "Maximum Output Torque": "39089Nm"} },
          { model: "STEA26000Z", image: "/lvkon/STEA26000Z.png", specs: {"Product Model": "STEA26000Z", "Applicable Vehicle Types": "6*4, 4*2 heavy-duty truck", "Transmission": "Single Motor Two-Speed Transmission 13.2/46.8", "Motor Power Torque": "150/252kW 285/550Nm", "Maximum Motor Speed": "9000rpm", "Maximum Output Torque": "25778Nm"} },
          { model: "STEA16000Z", image: "/lvkon/STEA16000Z.png", specs: {"Product Model": "STEA16000Z", "Applicable Vehicle Types": "Trailer, bus", "Transmission": "Single Motor Two-Speed Transmission 33/13，44/15，（ One-Speed：28.9 ）", "Motor Power Torque": "80/180kW，100/218kW，（107/234kW） 175/445Nm，250/500Nm，（250/570Nm）", "Maximum Motor Speed": "10000rpm", "Maximum Output Torque": "16500Nm"} },
        ],
      },
      {
        id: "503", name: "Light-duty Truck & Light-duty Electric Drive Axle",
        products: [
          { model: "STEA5300Z", image: "/lvkon/STEA5300Z.png", specs: {"Product Model": "STEA5300Z", "Applicable Vehicle Types": "4.5 - 6.0T light-duty truck 6m bus", "Transmission": "Single Reduction 16.6", "Motor Power Torque": "70/130kW（80/160kW） 146/314Nm（175/400Nm）", "Maximum Motor Speed": "12000rpm", "Maximum Output Torque": "5300Nm （6640Nm）"} },
        ],
      },
      {
        id: "504", name: "Medium-duty Electric Drive Axle",
        products: [
          { model: "STEA9000Z", image: "/lvkon/STEA9000Z.png", specs: {"Product Model": "STEA9000Z", "Applicable Vehicle Types": "6 - 10T logistics truck and sanitation truck", "Transmission": "Single Motor Two-Speed Transmission 22.6/10.0", "Motor Power Torque": "80/185kW（120/239kW） 160/400Nm（220/440Nm）", "Maximum Motor Speed": "11000rpm", "Maximum Output Torque": "9000Nm （9900Nm）"} },
        ],
      },
    ],
  },
  {
    id: "434", slug: "drive-motor", name: "Drive Motor", color: "#8b5cf6",
    label: { tr: "Tahrik Motoru", en: "Drive Motor", de: "Antriebsmotor" },
    desc: { tr: "Yüksek verimli tahrik motorları, aks üstü motorlar ve jeneratörler.", en: "High-efficiency drive motors, mounted motors and generators.", de: "Hocheffiziente Antriebsmotoren, angebaute Motoren und Generatoren." },
    subgroups: [
      {
        id: "505", name: "Drive Motor",
        products: [
          { model: "DM500", image: "/lvkon/DM500.png", specs: {"Product Model": "DM500", "Applicable Vehicle Types": "3.5t light-duty truck, airport tractor", "Rated/Peak Power": "60/120kW", "Rated/Peak Torque": "300/500Nm", "Maximum Motor Speed": "5000rpm", "Gross Weight": "93kg"} },
          { model: "DM850", image: "/lvkon/DM850.png", specs: {"Product Model": "DM850", "Applicable Vehicle Types": "Sprinter model, light-duty truck", "Rated/Peak Power": "75/120kW", "Rated/Peak Torque": "350/850Nm", "Maximum Motor Speed": "5000rpm", "Gross Weight": "98kg"} },
          { model: "DM1000", image: "/lvkon/DM1000.png", specs: {"Product Model": "DM1000", "Applicable Vehicle Types": "6-m bus, 4.5t light-duty truck", "Rated/Peak Power": "70/130kW", "Rated/Peak Torque": "400/1000Nm", "Maximum Motor Speed": "4500rpm", "Gross Weight": "120kg"} },
          { model: "DM1100", image: "/lvkon/DM1100.png", specs: {"Product Model": "DM1100", "Applicable Vehicle Types": "6.6-m public bus, 6.6-m passenger bus", "Rated/Peak Power": "110/220kW", "Rated/Peak Torque": "500/1100Nm", "Maximum Motor Speed": "4500rpm", "Gross Weight": "125kg"} },
          { model: "DM1300", image: "/lvkon/DM1300.png", specs: {"Product Model": "DM1300", "Applicable Vehicle Types": "6-m bus", "Rated/Peak Power": "100/190kW", "Rated/Peak Torque": "500/1300Nm", "Maximum Motor Speed": "4500rpm", "Gross Weight": "125kg"} },
          { model: "DM1700 bus version", image: "/lvkon/DM1700busversion.png", specs: {"Product Model": "DM1700 bus version", "Applicable Vehicle Types": "8-m bus", "Rated/Peak Power": "80/150kW", "Rated/Peak Torque": "750/1700Nm", "Maximum Motor Speed": "3000rpm", "Gross Weight": "165kg"} },
          { model: "DM1700 highway bus version", image: "/lvkon/DM1700highwaybusversion.png", specs: {"Product Model": "DM1700 highway bus version", "Applicable Vehicle Types": "8-m passenger bus, Coaster", "Rated/Peak Power": "100/220kW", "Rated/Peak Torque": "750/1700Nm", "Maximum Motor Speed": "4000rpm", "Gross Weight": "165kg"} },
          { model: "DM2100 Bus Version", image: "/lvkon/DM2100BusVersion.png", specs: {"Product Model": "DM2100 Bus Version", "Applicable Vehicle Types": "8.5-m Bus", "Rated/Peak Power": "75/155kW", "Rated/Peak Torque": "900/2100Nm", "Maximum Motor Speed": "2800rpm", "Gross Weight": "195kg"} },
          { model: "DM2100 Highway Bus Version", image: "/lvkon/DM2100HighwayBusVersion.png", specs: {"Product Model": "DM2100 Highway Bus Version", "Applicable Vehicle Types": "8.5-m Passenger Bus", "Rated/Peak Power": "90/195kW", "Rated/Peak Torque": "900/2100Nm", "Maximum Motor Speed": "3500rpm", "Gross Weight": "195kg"} },
          { model: "DM2500", image: "/lvkon/DM2500.png", specs: {"Product Model": "DM2500", "Applicable Vehicle Types": "10-m Bus", "Rated/Peak Power": "100/200kW", "Rated/Peak Torque": "1000/2500Nm", "Maximum Motor Speed": "2800rpm", "Gross Weight": "245kg"} },
          { model: "DM2800 Bus Version", image: "/lvkon/DM2800BusVersion.png", specs: {"Product Model": "DM2800 Bus Version", "Applicable Vehicle Types": "12-m Bus", "Rated/Peak Power": "115/200kW", "Rated/Peak Torque": "1200Nm/2800Nm", "Maximum Motor Speed": "2600rpm", "Gross Weight": "265kg"} },
          { model: "DM2800 Highway Bus Version", image: "/lvkon/DM2800HighwayBusVersion.png", specs: {"Product Model": "DM2800 Highway Bus Version", "Applicable Vehicle Types": "12-m Passenger Bus, Forklift, and Reach Truck", "Rated/Peak Power": "115/200kW， 135/275kW", "Rated/Peak Torque": "1200/2800Nm", "Maximum Motor Speed": "2600rpm，3500rpm", "Gross Weight": "265kg"} },
          { model: "DM3400", image: "/lvkon/DM3400.png", specs: {"Product Model": "DM3400", "Applicable Vehicle Types": "12-m Passenger Bus, Offset Terminal Tractor", "Rated/Peak Power": "180/290kW", "Rated/Peak Torque": "1600/3400Nm", "Maximum Motor Speed": "3000rpm", "Gross Weight": "284kg"} },
          { model: "DM3800", image: "/lvkon/DM3800.png", specs: {"Product Model": "DM3800", "Applicable Vehicle Types": "45t Reach Stacker, Offset Terminal Tractor", "Rated/Peak Power": "200/300kW", "Rated/Peak Torque": "1800/3800Nm", "Maximum Motor Speed": "2800rpm", "Gross Weight": "340kg"} },
          { model: "DM5000", image: "/lvkon/DM5000.png", specs: {"Product Model": "DM5000", "Applicable Vehicle Types": "18t sanitation truck", "Rated/Peak Power": "200/400kW", "Rated/Peak Torque": "2200/5000Nm", "Maximum Motor Speed": "870/3000rpm", "Gross Weight": "432kg"} },
        ],
      },
      {
        id: "506", name: "Mounted Motor",
        products: [
          { model: "UD120", image: "/lvkon/UD120.png", specs: {"Product Model": "UD120", "Voltage Level": "336VDC", "Rated/Peak Power": "15/35kW", "Rated/Peak Torque": "15/35kW", "Rated Speed": "2500rpm", "Gross Weight": "34kg"} },
          { model: "UD210", image: "/lvkon/UD210.png", specs: {"Product Model": "UD210", "Voltage Level": "336VDC", "Rated/Peak Power": "34/75kW", "Rated/Peak Torque": "90/210Nm", "Rated Speed": "3600rpm", "Gross Weight": "37kg"} },
          { model: "UD220", image: "/lvkon/UD220.png", specs: {"Product Model": "UD220", "Voltage Level": "580VDC", "Rated/Peak Power": "40/63kW", "Rated/Peak Torque": "110/220Nm", "Rated Speed": "3300rpm", "Gross Weight": "41kg"} },
          { model: "UD320", image: "/lvkon/UD320.png", specs: {"Product Model": "UD320", "Voltage Level": "540VDC", "Rated/Peak Power": "31/100kW", "Rated/Peak Torque": "120/320Nm", "Rated Speed": "2500rpm", "Gross Weight": "65kg"} },
          { model: "UD500", image: "/lvkon/UD500.png", specs: {"Product Model": "UD500", "Voltage Level": "540VDC", "Rated/Peak Power": "50/110kW", "Rated/Peak Torque": "200/500Nm", "Rated Speed": "2500rpm", "Gross Weight": "98kg"} },
          { model: "UD1000", image: "/lvkon/UD1000.png", specs: {"Product Model": "UD1000", "Voltage Level": "540VDC", "Rated/Peak Power": "65/120kW", "Rated/Peak Torque": "400/1000Nm", "Rated Speed": "2000rpm", "Gross Weight": "128kg"} },
        ],
      },
      {
        id: "511", name: "Generator",
        products: [
          { model: "IM075H37", image: "/lvkon/IM075H37.png", specs: {"Product Model": "IM075H37", "Voltage Level": "540VDC", "Rated/Peak Power": "100kW", "Rated/Peak Torque": "750Nm", "Rated Speed": "1273rpm", "Gross Weight": "140kg"} },
          { model: "IM125H41", image: "/lvkon/IM125H41.png", specs: {"Product Model": "IM125H41", "Voltage Level": "540VDC", "Rated/Peak Power": "200kW", "Rated/Peak Torque": "1250Nm", "Rated Speed": "1528rpm", "Gross Weight": "263kg"} },
          { model: "IM200H46", image: "/lvkon/IM200H46.png", specs: {"Product Model": "IM200H46", "Voltage Level": "600VDC", "Rated/Peak Power": "318kW", "Rated/Peak Torque": "2030Nm", "Rated Speed": "1500rpm", "Gross Weight": "327.5Kg"} },
        ],
      },
    ],
  },
  {
    id: "447", slug: "transmission", name: "Transmission", color: "#10b981",
    label: { tr: "Şanzıman", en: "Transmission", de: "Getriebe" },
    desc: { tr: "Madencilik, ağır hizmet kamyonları, büyük otobüsler ve hafif hizmet araçları için şanzımanlar.", en: "Transmissions for mining, heavy-duty trucks, large buses and light-duty vehicles.", de: "Getriebe für Bergbau, schwere Lkw, große Busse und leichte Nutzfahrzeuge." },
    subgroups: [
      {
        id: "507", name: "Mine-specific Transmission",
        products: [
          { model: "J8S260A", image: "/lvkon/J8S260A.png", specs: {"Product Model": "J8S260A", "Applicable Vehicle Types": "80-115T mining dump truck", "Gear Speed Ratio": "6.731/4.605/3.397/2.520/1.858/ 1.349/1.000/0.752 R=6.250", "Maximum Input Power Torque": "400kW 2600Nm", "Maximum Input Speed": "2600rpm", "Gross Weight": "544kg without PTO (Power Take-Off) and Retarder"} },
          { model: "J8S240A", image: "/lvkon/J8S240A.png", specs: {"Product Model": "J8S240A", "Applicable Vehicle Types": "80-105T mining dump truck", "Gear Speed Ratio": "8.154/6.013/4.115/3.053/2.124/1.450/1.000/0.826 R=7.571", "Maximum Input Power Torque": "400kW 2400Nm", "Maximum Input Speed": "2600rpm", "Gross Weight": "544kg without PTO (Power Take-Off) and Retarder"} },
          { model: "J8S280A", image: "/lvkon/J8S280A.png", specs: {"Product Model": "J8S280A", "Applicable Vehicle Types": "125T mining dump truck", "Gear Speed Ratio": "8.021/5.662/4.063/2.928/2.101/1.451/1.000/0.823 R=7.448", "Maximum Input Power Torque": "480kW 2800Nm", "Maximum Input Speed": "2000rpm", "Gross Weight": "705kg without PTO and Retarder"} },
        ],
      },
      {
        id: "508", name: "Heavy-duty Truck & Large Bus Transmission",
        products: [
          { model: "J6S95", image: "/lvkon/J6S95.png", specs: {"Product Model": "J6S95", "Applicable Vehicle Types": "10-12m buses, 14-18 ton trucks, special vehicles", "Gear Speed Ratio": "6.621/3.725/2.303/1.514/1/0.754 R=6.045", "Maximum Input Power Torque": "950Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "164kg"} },
          { model: "J12S240B", image: "/lvkon/J12S240B.jpg", specs: {"Product Model": "J12S240B", "Applicable Vehicle Types": "Towing vehicles, dump trucks", "Gear Speed Ratio": "12.098/9.518/7.313/5.711/4.462/ 3.476/2.712/2.133/1.639/1.280/ 1/0.779 R=11.572", "Maximum Input Power Torque": "2400Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "302kg (excluding 19kg power take-off)"} },
          { model: "J12S240", image: "/lvkon/J12S240.png", specs: {"Product Model": "J12S240", "Applicable Vehicle Types": "Towing vehicles, dump trucks", "Gear Speed Ratio": "12.098 / 9.518 / 7.313 / 5.711 / 4.462 / 3.476 / 2.712 / 2.133 / 1.639 / 1.280 / 1 / 0.779 R=11.572", "Maximum Input Power Torque": "2400Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "302kg (excluding 19kg power take-off)"} },
        ],
      },
      {
        id: "512", name: "Light-duty Truck Transmission",
        products: [
          { model: "J5S20", image: "/lvkon/J5S20.png", specs: {"Product Model": "J5S20", "Applicable Vehicle Types": "2.5T light truck", "Gear Speed Ratio": "5.089 / 2.789 / 1.639 / 1 / 0.772 R=4.782", "Maximum Input Power Torque": "196Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "65kg"} },
          { model: "J5S25", image: "/lvkon/J5S25.png", specs: {"Product Model": "J5S25", "Applicable Vehicle Types": "3.5T light truck", "Gear Speed Ratio": "5.529/2.782/1.641/1/0.785 R=5.271", "Maximum Input Power Torque": "254.8Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "75kg"} },
          { model: "J6S46", image: "/lvkon/J6S46.png", specs: {"Product Model": "J6S46", "Applicable Vehicle Types": "4.5T light truck", "Gear Speed Ratio": "6.314/3.913/2.262/1.393/1/0.788 R=5.874", "Maximum Input Power Torque": "450.8Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "100kg"} },
          { model: "J6S54", image: "/lvkon/J6S54.png", specs: {"Product Model": "J6S54A", "Applicable Vehicle Types": "6-9T light trucks", "Gear Speed Ratio": "6.091/3.650/2.274/1.478/1/0.774 R=5.645", "Maximum Input Power Torque": "540Nm", "Maximum Input Speed": "3000rpm", "Gross Weight": "100kg"} },
        ],
      },
    ],
  },
]

export const lvkonReferences = ['XCMG', 'SANY Group', 'Dongfeng Motor', 'King Long', 'Foton Motor', 'Sinotruk', 'Zoomlion']

export const lvkonFacts = {
  tr: [
    { value: '2011', label: 'Kuruluş yılı' },
    { value: '160.000+', label: 'Dünya genelinde sahadaki araç' },
    { value: '301655', label: 'Shenzhen ChiNext borsa kodu' },
    { value: '73', label: 'Katalog ürünü' },
  ],
  en: [
    { value: '2011', label: 'Founded' },
    { value: '160,000+', label: 'Vehicles in the field worldwide' },
    { value: '301655', label: 'Shenzhen ChiNext stock code' },
    { value: '73', label: 'Catalogue products' },
  ],
  de: [
    { value: '2011', label: 'Gegründet' },
    { value: '160.000+', label: 'Fahrzeuge weltweit im Einsatz' },
    { value: '301655', label: 'Shenzhen ChiNext Börsencode' },
    { value: '73', label: 'Katalogprodukte' },
  ],
} as const

export const lvkonCopy = {
  tr: {
    eyebrow: 'Ürünler · Lvkon E-Mobility Ortaklığı',
    title: 'Lvkon E-Mobility',
    lead: 'beeNEO, ticari araç elektrifikasyonunda Çin’in önde gelen üreticilerinden Suzhou Lvkon Transmission Technology Co., Ltd. ile iş ortağıdır. 2011’de kurulan ve 2026’da Shenzhen ChiNext borsasında işlem görmeye başlayan Lvkon; tahrik motorları, şanzımanlar ve kontrol sistemlerinde kendi öz teknolojisine sahiptir.',
    catalogTitle: 'Ürün Grupları & Kataloğu',
    catalogLead: 'Tüm ürün grupları, alt gruplar ve ürünler teknik verileriyle birlikte aşağıda listelenmiştir.',
    specsTitle: 'Teknik Özellikler',
    referenceExample: 'Referans örneği',
    referencesTitle: 'Lvkon Referans Müşterileri',
    referencesLead: 'Lvkon, sektörün önde gelen kuruluşlarıyla güçlü iş ortaklıkları kurmuştur; ürünleri Asya, Avrupa ve Amerika pazarlarına ihraç edilmektedir.',
    productsWord: 'ürün',
  },
  en: {
    eyebrow: 'Products · Lvkon E-Mobility Partnership',
    title: 'Lvkon E-Mobility',
    lead: 'beeNEO partners with Suzhou Lvkon Transmission Technology Co., Ltd., a leading Chinese manufacturer in commercial-vehicle electrification. Founded in 2011 and listed on the Shenzhen ChiNext board in 2026, Lvkon holds proprietary technology in drive motors, transmissions and control systems.',
    catalogTitle: 'Product Groups & Catalogue',
    catalogLead: 'All product groups, subgroups and products are listed below with their technical data.',
    specsTitle: 'Technical Specifications',
    referenceExample: 'Reference example',
    referencesTitle: 'Lvkon Reference Customers',
    referencesLead: 'Lvkon has established solid partnerships with well-known enterprises across the industry, exporting its products to markets in Asia, Europe and the Americas.',
    productsWord: 'products',
  },
  de: {
    eyebrow: 'Produkte · Lvkon E-Mobility Partnerschaft',
    title: 'Lvkon E-Mobility',
    lead: 'beeNEO ist Partner der Suzhou Lvkon Transmission Technology Co., Ltd., einem führenden chinesischen Hersteller für die Elektrifizierung von Nutzfahrzeugen. 2011 gegründet und 2026 am Shenzhen ChiNext gelistet, verfügt Lvkon über eigene Technologie bei Antriebsmotoren, Getrieben und Steuerungssystemen.',
    catalogTitle: 'Produktgruppen & Katalog',
    catalogLead: 'Alle Produktgruppen, Untergruppen und Produkte sind nachstehend mit ihren technischen Daten aufgeführt.',
    specsTitle: 'Technische Daten',
    referenceExample: 'Referenzbeispiel',
    referencesTitle: 'Lvkon Referenzkunden',
    referencesLead: 'Lvkon unterhält solide Partnerschaften mit namhaften Unternehmen der Branche und exportiert seine Produkte nach Asien, Europa und Amerika.',
    productsWord: 'Produkte',
  },
} as const

export function totalLvkonProducts() {
  return lvkonGroups.reduce((n, g) => n + g.subgroups.reduce((m, s) => m + s.products.length, 0), 0)
}
