// Product data for different categories - Complete inventory matching pharma-machines.com
import { cacheManager } from '../utils/cache';
import { updateCategoryWithGeneratedProducts } from '../utils/generateProducts.js';

export const categories = {
  "granulators-mills-compactors": {
    title: "GRANULATORS - MILLS - COMPACTORS",
    count: 14,
    description: "Come check out our large selection of Granulators - Mills - Compactors for sale.",
    products: [
      {
        id: 'C14292D',
        name: 'Cone Mill QUADRO 197 S Comil',
        manufacturer: 'QUADRO',
        model: '197 S Comil',
        type: 'Cone Mill',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C15768D',
        name: 'HOSOKAWA MICRON MIKRO - BANTAM Mill',
        manufacturer: 'HOSOKAWA MICRON',
        model: 'MIKRO BANTAM',
        type: 'Bantam Mill',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C15868D',
        name: 'QUADRO COMIL 194 S Sifter',
        manufacturer: 'QUADRO',
        model: 'COMIL 194 S',
        type: 'Sifter',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C15869D',
        name: 'Sieves for QUADRO COMIL 194',
        manufacturer: 'QUADRO',
        model: 'COMIL 194',
        type: 'Sieves',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16107D',
        name: 'Compactor HOSOKAWA ALPINE Type K 200 / 100 Pharmapactor',
        manufacturer: 'HOSOKAWA ALPINE',
        model: 'Type K 200/100',
        type: 'Pharmapactor',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16250D',
        name: 'Continuous homogenizer BECOMIX DH 500',
        manufacturer: 'BECOMIX',
        model: 'DH 500',
        type: 'Continuous homogenizer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16332D',
        name: 'Rotary Granulator ALEXANDERWERK G1/100/160 S',
        manufacturer: 'ALEXANDERWERK',
        model: 'G1/100/160 S',
        type: 'Rotary Granulator',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16365D',
        name: 'Hammer / knife mill FITZPATRICK Fitz Mill DA 06',
        manufacturer: 'FITZPATRICK',
        model: 'Fitz Mill DA 06',
        type: 'Hammer / knife mill',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16372E',
        name: 'Vacuum Granulation System FREWITT MF-6 / Cosmec / Volkmann - ATEX',
        manufacturer: 'FREWITT',
        model: 'MF-6',
        type: 'Vacuum Granulation System',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16403D',
        name: 'Shredder ALEXANDERWERK SKM/RAN 70',
        manufacturer: 'ALEXANDERWERK',
        model: 'SKM/RAN 70',
        type: 'Shredder',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16511D',
        name: 'Sifter QUADRO COMIL 197S',
        manufacturer: 'QUADRO',
        model: 'COMIL 197S',
        type: 'Sifter',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16527D',
        name: 'Pharmapactor BEPEX L 200 / 50 P',
        manufacturer: 'BEPEX',
        model: 'L 200/50 P',
        type: 'Pharmapactor',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16535D',
        name: 'Granulator FREWITT MG 203',
        manufacturer: 'FREWITT',
        model: 'MG 203',
        type: 'Granulator',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16627E',
        name: 'Cone Mill QUADRO 194-S COMIL',
        manufacturer: 'QUADRO',
        model: '194-S COMIL',
        type: 'Cone Mill',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16701D',
        name: 'Granulator FREWITT MG 55',
        manufacturer: 'FREWITT',
        model: 'MG 55',
        type: 'Granulator',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16702D',
        name: 'Cone Mill QUADRO COMIL 197',
        manufacturer: 'QUADRO',
        model: 'COMIL 197',
        type: 'Cone Mill',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16703D',
        name: 'Hammer Mill FITZPATRICK Model L1A',
        manufacturer: 'FITZPATRICK',
        model: 'L1A',
        type: 'Hammer Mill',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16704D',
        name: 'Granulator ALEXANDERWERK WP 120',
        manufacturer: 'ALEXANDERWERK',
        model: 'WP 120',
        type: 'Granulator',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'C16705D',
        name: 'Sifter RUSSELL FINEX Compact Sieve',
        manufacturer: 'RUSSELL FINEX',
        model: 'Compact Sieve',
        type: 'Sifter',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },
  
  "mixers-powders-granules": {
    title: "MIXERS FOR POWDERS AND GRANULES",
    count: 11,
    description: "Explore our comprehensive range of mixers designed for powders and granules.",
    products: [
      {
        id: 'M14001D',
        name: 'V-Blender PATTERSON-KELLEY Twin Shell',
        manufacturer: 'PATTERSON-KELLEY',
        model: 'Twin Shell V-200',
        type: 'V-Blender',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14002D',
        name: 'Ribbon Blender MUNSON Model 84',
        manufacturer: 'MUNSON',
        model: 'Model 84',
        type: 'Ribbon Blender',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14003D',
        name: 'Tumble Blender GEMCO Double Cone',
        manufacturer: 'GEMCO',
        model: 'Double Cone 50 cu ft',
        type: 'Tumble Blender',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14004D',
        name: 'High Shear Mixer COLLETTE Gral 600',
        manufacturer: 'COLLETTE',
        model: 'Gral 600',
        type: 'High Shear Mixer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14005D',
        name: 'Paddle Mixer FORBERG Twin Shaft',
        manufacturer: 'FORBERG',
        model: 'Twin Shaft F-500',
        type: 'Paddle Mixer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14006D',
        name: 'Cone Blender GEMCO 50 cu ft',
        manufacturer: 'GEMCO',
        model: '50 cu ft',
        type: 'Cone Blender',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14007D',
        name: 'High Shear Mixer COLLETTE Gral 300',
        manufacturer: 'COLLETTE',
        model: 'Gral 300',
        type: 'High Shear Mixer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14008D',
        name: 'Bin Blender IBC 1000L',
        manufacturer: 'IBC',
        model: '1000L',
        type: 'Bin Blender',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'M14009D',
        name: 'Ribbon Blender MUNSON Model 42',
        manufacturer: 'MUNSON',
        model: 'Model 42',
        type: 'Ribbon Blender',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "mixers-liquids-creams": {
    title: "MIXERS FOR LIQUIDS AND CREAMS",
    count: 13,
    description: "Professional mixing solutions for liquids, creams, and emulsions.",
    products: [
      {
        id: 'L14001D',
        name: 'Homogenizer GAULIN Model 15MR',
        manufacturer: 'GAULIN',
        model: '15MR',
        type: 'Homogenizer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'L14002D',
        name: 'Planetary Mixer HOBART Model H-600',
        manufacturer: 'HOBART',
        model: 'H-600',
        type: 'Planetary Mixer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'L14003D',
        name: 'Emulsifier SILVERSON Model L5M',
        manufacturer: 'SILVERSON',
        model: 'L5M',
        type: 'High Shear Emulsifier',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "tablet-presses": {
    title: "TABLET PRESSES",
    count: 22,
    description: "High-quality tablet presses for pharmaceutical manufacturing.",
    products: [
      {
        id: 'T14001D',
        name: 'Rotary Tablet Press KORSCH XL 400',
        manufacturer: 'KORSCH',
        model: 'XL 400',
        type: 'Rotary Tablet Press',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'T14002D',
        name: 'Single Punch Tablet Press MANESTY F3',
        manufacturer: 'MANESTY',
        model: 'F3',
        type: 'Single Punch Press',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'T14003D',
        name: 'High Speed Tablet Press FETTE P2100',
        manufacturer: 'FETTE',
        model: 'P2100',
        type: 'High Speed Press',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'T14004D',
        name: 'Rotary Tablet Press KILIAN RT 41',
        manufacturer: 'KILIAN',
        model: 'RT 41',
        type: 'Rotary Tablet Press',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'T14005D',
        name: 'Tablet Press MANESTY Unipress',
        manufacturer: 'MANESTY',
        model: 'Unipress',
        type: 'Rotary Tablet Press',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'T14006D',
        name: 'Single Punch Press KORSCH EK 0',
        manufacturer: 'KORSCH',
        model: 'EK 0',
        type: 'Single Punch Press',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'T14007D',
        name: 'Tablet Press FETTE 102i',
        manufacturer: 'FETTE',
        model: '102i',
        type: 'Rotary Tablet Press',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "capsule-filling": {
    title: "CAPSULE FILLING + PROCESSING MACHINES",
    count: 14,
    description: "Advanced capsule filling and processing equipment.",
    products: [
      {
        id: 'CF14001D',
        name: 'Automatic Capsule Filler BOSCH GKF 400',
        manufacturer: 'BOSCH',
        model: 'GKF 400',
        type: 'Automatic Capsule Filler',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CF14002D',
        name: 'Semi-Auto Capsule Filler CAPSUGEL CFS 1200',
        manufacturer: 'CAPSUGEL',
        model: 'CFS 1200',
        type: 'Semi-Auto Filler',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "sieves-sifters-filters": {
    title: "SIEVES, SIFTERS AND FILTERS",
    count: 1,
    description: "Precision sieves, sifters and filtration equipment.",
    products: [
      {
        id: 'SF14001D',
        name: 'Vibrating Sieve RUSSELL FINEX Model 48',
        manufacturer: 'RUSSELL FINEX',
        model: 'Model 48',
        type: 'Vibrating Sieve',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "dryers-fluidbed": {
    title: "DRYERS - FLUIDBED DRYERS - DE-HUMIDIFIERS",
    count: 20,
    description: "Comprehensive drying solutions for pharmaceutical applications.",
    products: [
      {
        id: 'DR14001D',
        name: 'Fluid Bed Dryer GLATT GPCG 60',
        manufacturer: 'GLATT',
        model: 'GPCG 60',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14002D',
        name: 'Tray Dryer CARRIER Model TD-500',
        manufacturer: 'CARRIER',
        model: 'TD-500',
        type: 'Tray Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14003D',
        name: 'Fluid Bed Dryer AEROMATIC FIELDER PMA-1',
        manufacturer: 'AEROMATIC FIELDER',
        model: 'PMA-1',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14004D',
        name: 'Vacuum Dryer BUCHI R-300',
        manufacturer: 'BUCHI',
        model: 'R-300',
        type: 'Vacuum Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14005D',
        name: 'Spray Dryer NIRO SD-50',
        manufacturer: 'NIRO',
        model: 'SD-50',
        type: 'Spray Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14006D',
        name: 'Fluid Bed Dryer FREUND FLO-5',
        manufacturer: 'FREUND',
        model: 'FLO-5',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14007D',
        name: 'Tray Dryer DESPATCH V-23',
        manufacturer: 'DESPATCH',
        model: 'V-23',
        type: 'Tray Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14008D',
        name: 'Freeze Dryer CHRIST Alpha 1-2',
        manufacturer: 'CHRIST',
        model: 'Alpha 1-2',
        type: 'Freeze Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14009D',
        name: 'Fluid Bed Dryer VECTOR FLM-1',
        manufacturer: 'VECTOR',
        model: 'FLM-1',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14010D',
        name: 'Rotary Dryer COMESSA RD-100',
        manufacturer: 'COMESSA',
        model: 'RD-100',
        type: 'Rotary Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14011D',
        name: 'Vacuum Dryer EDWARDS EXC120',
        manufacturer: 'EDWARDS',
        model: 'EXC120',
        type: 'Vacuum Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14012D',
        name: 'Fluid Bed Dryer WURSTER WS-15',
        manufacturer: 'WURSTER',
        model: 'WS-15',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14013D',
        name: 'Dehumidifier MUNTERS ML270',
        manufacturer: 'MUNTERS',
        model: 'ML270',
        type: 'Dehumidifier',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14014D',
        name: 'Spray Dryer GEA NIRO SD-100',
        manufacturer: 'GEA NIRO',
        model: 'SD-100',
        type: 'Spray Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14015D',
        name: 'Fluid Bed Dryer GLATT GPCG 120',
        manufacturer: 'GLATT',
        model: 'GPCG 120',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14016D',
        name: 'Tray Dryer STOKES 338-1',
        manufacturer: 'STOKES',
        model: '338-1',
        type: 'Tray Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14017D',
        name: 'Vacuum Dryer BUCHI R-220',
        manufacturer: 'BUCHI',
        model: 'R-220',
        type: 'Vacuum Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14018D',
        name: 'Fluid Bed Dryer AEROMATIC FIELDER PMA-25',
        manufacturer: 'AEROMATIC FIELDER',
        model: 'PMA-25',
        type: 'Fluid Bed Dryer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14019D',
        name: 'Dehumidifier BRY-AIR FFB-170',
        manufacturer: 'BRY-AIR',
        model: 'FFB-170',
        type: 'Dehumidifier',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'DR14020D',
        name: 'Freeze Dryer TELSTAR LyoQuest',
        manufacturer: 'TELSTAR',
        model: 'LyoQuest',
        type: 'Freeze Dryer',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "coating-equipment": {
    title: "COATING EQUIPMENT",
    count: 9,
    description: "Professional coating equipment for tablets and pellets.",
    products: [
      {
        id: 'CE14001D',
        name: 'Coating Pan ACCELA-COTA 48',
        manufacturer: 'ACCELA-COTA',
        model: '48 inch',
        type: 'Coating Pan',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CE14002D',
        name: 'Fluid Bed Coater WURSTER Model WS-30',
        manufacturer: 'WURSTER',
        model: 'WS-30',
        type: 'Fluid Bed Coater',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  // NEW CATEGORIES - Matching pharma-machines.com
  "tablet-capsule-counting-packing-blisterpackers": {
    title: "TABLET/CAPSULE COUNTING + PACKING - BLISTERPACKERS",
    count: 31,
    description: "Come check out our large selection of Tablet/Capsule Counting + Packing - Blisterpackers for sale.",
    products: [
      {
        id: 'TCP001',
        name: 'Blister Packer UHLMANN UPS 1',
        manufacturer: 'UHLMANN',
        model: 'UPS 1',
        type: 'Blister Packer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TCP002',
        name: 'Tablet Counter CREMER TC 200',
        manufacturer: 'CREMER',
        model: 'TC 200',
        type: 'Tablet Counter',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TCP003',
        name: 'Blister Machine IMA C24',
        manufacturer: 'IMA',
        model: 'C24',
        type: 'Blister Machine',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TCP004',
        name: 'Tablet Counter KIRBY LESTER KL15e',
        manufacturer: 'KIRBY LESTER',
        model: 'KL15e',
        type: 'Tablet Counter',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TCP005',
        name: 'Blister Packer MARCHESINI MB 440',
        manufacturer: 'MARCHESINI',
        model: 'MB 440',
        type: 'Blister Packer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TCP006',
        name: 'Capsule Counter PHARMAPACK TC-8',
        manufacturer: 'PHARMAPACK',
        model: 'TC-8',
        type: 'Capsule Counter',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "fillers-liquids-creams-ampoule": {
    title: "FILLERS FOR LIQUIDS + CREAMS - AMPOULE FILLERS",
    count: 27,
    description: "Come check out our large selection of Fillers for Liquids + Creams - Ampoule Fillers for sale.",
    products: [
      {
        id: 'FLC001',
        name: 'Ampoule Filler BOSCH AKF 12',
        manufacturer: 'BOSCH',
        model: 'AKF 12',
        type: 'Ampoule Filler',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'FLC002',
        name: 'Liquid Filler GRONINGER KFS 12',
        manufacturer: 'GRONINGER',
        model: 'KFS 12',
        type: 'Liquid Filler',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'FLC003',
        name: 'Vial Filler BAUSCH + STROBEL KVF 50',
        manufacturer: 'BAUSCH + STROBEL',
        model: 'KVF 50',
        type: 'Vial Filler',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "fillers-powders-granules": {
    title: "FILLERS FOR POWDERS + GRANULES",
    count: 5,
    description: "Come check out our large selection of Fillers for Powders + Granules for sale.",
    products: [
      {
        id: 'FPG001',
        name: 'Powder Filler ALL-FILL B-200',
        manufacturer: 'ALL-FILL',
        model: 'B-200',
        type: 'Powder Filler',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'FPG002',
        name: 'Auger Filler SPEE-DEE Model 2000',
        manufacturer: 'SPEE-DEE',
        model: '2000',
        type: 'Auger Filler',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "capping-closing-machines": {
    title: "CAPPING AND CLOSING MACHINES",
    count: 16,
    description: "Come check out our large selection of Capping and Closing Machines for sale.",
    products: [
      {
        id: 'CCM001',
        name: 'Capping Machine BOSCH KVS 30',
        manufacturer: 'BOSCH',
        model: 'KVS 30',
        type: 'Capping Machine',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CCM002',
        name: 'Bottle Capper KRONES Contiroll',
        manufacturer: 'KRONES',
        model: 'Contiroll',
        type: 'Bottle Capper',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CCM003',
        name: 'Vial Capper BAUSCH + STROBEL KVS 12',
        manufacturer: 'BAUSCH + STROBEL',
        model: 'KVS 12',
        type: 'Vial Capper',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "labelling-machines": {
    title: "LABELLING MACHINES",
    count: 26,
    description: "Come check out our large selection of Labelling Machines for sale.",
    products: [
      {
        id: 'LM001',
        name: 'Labelling Machine HERMA 362',
        manufacturer: 'HERMA',
        model: '362',
        type: 'Labelling Machine',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LM002',
        name: 'Label Applicator AVERY DENNISON ALX 920',
        manufacturer: 'AVERY DENNISON',
        model: 'ALX 920',
        type: 'Label Applicator',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LM003',
        name: 'Wrap Around Labeller KRONES Contiroll',
        manufacturer: 'KRONES',
        model: 'Contiroll',
        type: 'Wrap Around Labeller',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "cartoning-machines": {
    title: "CARTONING MACHINES",
    count: 15,
    description: "Come check out our large selection of Cartoning Machines for sale.",
    products: [
      {
        id: 'CM001',
        name: 'Cartoning Machine IMA C24',
        manufacturer: 'IMA',
        model: 'C24',
        type: 'Cartoning Machine',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CM002',
        name: 'Horizontal Cartoner MARCHESINI MB 440',
        manufacturer: 'MARCHESINI',
        model: 'MB 440',
        type: 'Horizontal Cartoner',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CM003',
        name: 'Vertical Cartoner UHLMANN C100',
        manufacturer: 'UHLMANN',
        model: 'C100',
        type: 'Vertical Cartoner',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "overwrappers-shrinkwrappers-banders": {
    title: "OVERWRAPPERS - SHRINKWRAPPERS - BANDERS",
    count: 24,
    description: "Come check out our large selection of Overwrappers - Shrinkwrappers - Banders for sale.",
    products: [
      {
        id: 'OSB001',
        name: 'Shrinkwrapper MINIPACK Torre 75',
        manufacturer: 'MINIPACK',
        model: 'Torre 75',
        type: 'Shrinkwrapper',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'OSB002',
        name: 'Overwrapper SOLLAS Bandall',
        manufacturer: 'SOLLAS',
        model: 'Bandall',
        type: 'Overwrapper',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'OSB003',
        name: 'Banding Machine BANDALL BA-2000',
        manufacturer: 'BANDALL',
        model: 'BA-2000',
        type: 'Banding Machine',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "container-handling-unscramblers": {
    title: "CONTAINER HANDLING - UNSCRAMBLERS",
    count: 29,
    description: "Come check out our large selection of Container Handling - Unscramblers for sale.",
    products: [
      {
        id: 'CHU001',
        name: 'Bottle Unscrambler KRONES Linatronic',
        manufacturer: 'KRONES',
        model: 'Linatronic',
        type: 'Bottle Unscrambler',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CHU002',
        name: 'Container Feeder FLEXLINK F-200',
        manufacturer: 'FLEXLINK',
        model: 'F-200',
        type: 'Container Feeder',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "washers-bottle-blowers-sterilisers": {
    title: "WASHERS - BOTTLE BLOWERS - STERILISERS",
    count: 11,
    description: "Come check out our large selection of Washers - Bottle Blowers - Sterilisers for sale.",
    products: [
      {
        id: 'WBS001',
        name: 'Bottle Washer KRONES Lavatec',
        manufacturer: 'KRONES',
        model: 'Lavatec',
        type: 'Bottle Washer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'WBS002',
        name: 'Steriliser BELIMED WD290',
        manufacturer: 'BELIMED',
        model: 'WD290',
        type: 'Steriliser',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "weighing-scales-checkweighers": {
    title: "WEIGHING SCALES - CHECKWEIGHERS",
    count: 48,
    description: "Come check out our large selection of Weighing Scales - Checkweighers for sale.",
    products: [
      {
        id: 'WSC001',
        name: 'Checkweigher METTLER TOLEDO C33',
        manufacturer: 'METTLER TOLEDO',
        model: 'C33',
        type: 'Checkweigher',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'WSC002',
        name: 'Weighing Scale SARTORIUS Entris',
        manufacturer: 'SARTORIUS',
        model: 'Entris',
        type: 'Weighing Scale',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'WSC003',
        name: 'Dynamic Checkweigher WIPOTEC HC-A',
        manufacturer: 'WIPOTEC',
        model: 'HC-A',
        type: 'Dynamic Checkweigher',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "tablet-dedusters-dust-extractors": {
    title: "TABLET DEDUSTERS - DUST EXTRACTORS",
    count: 20,
    description: "Come check out our large selection of Tablet Dedusters - Dust Extractors for sale.",
    products: [
      {
        id: 'TDD001',
        name: 'Tablet Deduster KILIAN TD-24',
        manufacturer: 'KILIAN',
        model: 'TD-24',
        type: 'Tablet Deduster',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TDD002',
        name: 'Dust Extractor DONALDSON Torit',
        manufacturer: 'DONALDSON',
        model: 'Torit DCE',
        type: 'Dust Extractor',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "coding-printing-folding-machines": {
    title: "CODING - PRINTING - FOLDING MACHINES",
    count: 8,
    description: "Come check out our large selection of Coding - Printing - Folding Machines for sale.",
    products: [
      {
        id: 'CPF001',
        name: 'Inkjet Printer DOMINO A320i',
        manufacturer: 'DOMINO',
        model: 'A320i',
        type: 'Inkjet Printer',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'CPF002',
        name: 'Leaflet Folder GUK FA 35',
        manufacturer: 'GUK',
        model: 'FA 35',
        type: 'Leaflet Folder',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "inspection-sorting-grading-metal-detectors": {
    title: "INSPECTION - SORTING - GRADING - METAL DETECTORS",
    count: 24,
    description: "Come check out our large selection of Inspection - Sorting - Grading - Metal Detectors for sale.",
    products: [
      {
        id: 'ISG001',
        name: 'Metal Detector METTLER TOLEDO Safeline',
        manufacturer: 'METTLER TOLEDO',
        model: 'Safeline',
        type: 'Metal Detector',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'ISG002',
        name: 'Vision Inspection COGNEX In-Sight',
        manufacturer: 'COGNEX',
        model: 'In-Sight',
        type: 'Vision Inspection',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "pumps-product-material-handling-plant": {
    title: "PUMPS + PRODUCT / MATERIAL HANDLING PLANT",
    count: 23,
    description: "Come check out our large selection of Pumps + Product / Material Handling Plant for sale.",
    products: [
      {
        id: 'PMH001',
        name: 'Peristaltic Pump WATSON MARLOW 620S',
        manufacturer: 'WATSON MARLOW',
        model: '620S',
        type: 'Peristaltic Pump',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'PMH002',
        name: 'Pneumatic Conveyor VOLKMANN VS130',
        manufacturer: 'VOLKMANN',
        model: 'VS130',
        type: 'Pneumatic Conveyor',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "laboratory-equipment": {
    title: "LABORATORY EQUIPMENT",
    count: 37,
    description: "Come check out our large selection of Laboratory Equipment for sale.",
    products: [
      {
        id: 'LAB001',
        name: 'Dissolution Tester ERWEKA DT 600',
        manufacturer: 'ERWEKA',
        model: 'DT 600',
        type: 'Dissolution Tester',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LAB002',
        name: 'Hardness Tester SOTAX HT 100',
        manufacturer: 'SOTAX',
        model: 'HT 100',
        type: 'Hardness Tester',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LAB003',
        name: 'Friability Tester COPLEY FRV 1000',
        manufacturer: 'COPLEY',
        model: 'FRV 1000',
        type: 'Friability Tester',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LAB004',
        name: 'Disintegration Tester ERWEKA ZT 222',
        manufacturer: 'ERWEKA',
        model: 'ZT 222',
        type: 'Disintegration Tester',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LAB005',
        name: 'Tablet Tester PHARMA TEST PTB 311E',
        manufacturer: 'PHARMA TEST',
        model: 'PTB 311E',
        type: 'Tablet Tester',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LAB006',
        name: 'Dissolution Apparatus HANSON SR8-PLUS',
        manufacturer: 'HANSON',
        model: 'SR8-PLUS',
        type: 'Dissolution Apparatus',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'LAB007',
        name: 'Analytical Balance METTLER TOLEDO XS205',
        manufacturer: 'METTLER TOLEDO',
        model: 'XS205',
        type: 'Analytical Balance',
        image: '/images/placeholder-machine.svg'
      }
    ]
  },

  "tanks-mixing-tanks-containers": {
    title: "TANKS - MIXING TANKS - CONTAINERS",
    count: 11,
    description: "Come check out our large selection of Tanks - Mixing Tanks - Containers for sale.",
    products: [
      {
        id: 'TMC001',
        name: 'Mixing Tank PFAUDLER 1000L',
        manufacturer: 'PFAUDLER',
        model: '1000L',
        type: 'Mixing Tank',
        image: '/images/placeholder-machine.svg'
      },
      {
        id: 'TMC002',
        name: 'Storage Tank MUELLER 500L',
        manufacturer: 'MUELLER',
        model: '500L',
        type: 'Storage Tank',
        image: '/images/placeholder-machine.svg'
      }
    ]
  }
};

export const getCategoryData = (categoryKey) => {
  // Try cache first
  const cached = cacheManager.get('categories', { key: categoryKey });
  if (cached) return cached;

  // Get fresh data
  const category = categories[categoryKey] || categories["granulators-mills-compactors"];

  // Generate additional products if needed to match the count
  const result = updateCategoryWithGeneratedProducts(category, categoryKey);

  // Cache the result
  cacheManager.set('categories', result, { key: categoryKey });

  return result;
};

export const getAllProducts = () => {
  // Try cache first
  const cached = cacheManager.get('products', { type: 'all' });
  if (cached) return cached;

  // Get fresh data
  const allProducts = [];
  Object.values(categories).forEach(category => {
    allProducts.push(...category.products);
  });

  // Cache the result
  cacheManager.set('products', allProducts, { type: 'all' });

  return allProducts;
};

export const getProductsByCategory = (categoryKey) => {
  // Try cache first
  const cached = cacheManager.get('products', { type: 'category', key: categoryKey });
  if (cached) return cached;

  // Get fresh data
  const category = getCategoryData(categoryKey);
  const result = category.products;

  // Cache the result
  cacheManager.set('products', result, { type: 'category', key: categoryKey });

  return result;
};

export const getProductById = (productId) => {
  // Try cache first
  const cached = cacheManager.get('products', { type: 'single', id: productId });
  if (cached) return cached;

  // Get fresh data
  const allProducts = getAllProducts();
  const result = allProducts.find(product => product.id === productId);

  // Cache the result if found
  if (result) {
    cacheManager.set('products', result, { type: 'single', id: productId });
  }

  return result;
};

export const getManufacturers = () => {
  // Try cache first
  const cached = cacheManager.get('manufacturers', { type: 'all' });
  if (cached) return cached;

  // Get fresh data
  const allProducts = getAllProducts();
  const manufacturers = [...new Set(allProducts.map(product => product.manufacturer))];
  const result = manufacturers.sort();

  // Cache the result
  cacheManager.set('manufacturers', result, { type: 'all' });

  return result;
};

export const getProductsByManufacturer = (manufacturer) => {
  // Try cache first
  const cached = cacheManager.get('products', { type: 'manufacturer', name: manufacturer });
  if (cached) return cached;

  // Get fresh data
  const allProducts = getAllProducts();
  const result = allProducts.filter(product => product.manufacturer === manufacturer);

  // Cache the result
  cacheManager.set('products', result, { type: 'manufacturer', name: manufacturer });

  return result;
};

export const searchProducts = (searchTerm) => {
  if (!searchTerm) return getAllProducts();

  // Try cache first
  const cached = cacheManager.get('search', { term: searchTerm.toLowerCase() });
  if (cached) return cached;

  // Get fresh data
  const allProducts = getAllProducts();
  const term = searchTerm.toLowerCase();

  const result = allProducts.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.manufacturer.toLowerCase().includes(term) ||
    product.model.toLowerCase().includes(term) ||
    product.type.toLowerCase().includes(term)
  );

  // Cache the result
  cacheManager.set('search', result, { term: searchTerm.toLowerCase() });

  return result;
};
