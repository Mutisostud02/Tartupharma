// Utility to generate realistic pharmaceutical equipment products

const manufacturers = {
  'granulators-mills-compactors': ['FITZPATRICK', 'QUADRO', 'COMIL', 'GLATT', 'ALEXANDERWERK', 'HOSOKAWA', 'FREWITT'],
  'mixers-powders-granules': ['BOHLE', 'DIOSNA', 'GLATT', 'COLLETTE', 'FIELDER', 'LITTLEFORD', 'LODIGE'],
  'mixers-liquids-creams': ['SILVERSON', 'IKA', 'ROSS', 'ADMIX', 'LIGHTNIN', 'CHEMINEER', 'PHILADELPHIA'],
  'sieves-sifters-filters': ['RUSSELL FINEX', 'SWECO', 'KASON', 'ROTEX'],
  'tablet-presses': ['KORSCH', 'FETTE', 'MANESTY', 'KILIAN', 'STOKES', 'CADMACH', 'RIDDHI'],
  'capsule-filling': ['BOSCH', 'IMA', 'CAPSUGEL', 'MG2', 'TORPAC', 'QUALICAPS'],
  'coating-equipment': ['ACCELA-COTA', 'WURSTER', 'GLATT', 'FREUND', 'VECTOR', 'COATING PLACE'],
  'labelling-machines': ['HERMA', 'AVERY DENNISON', 'KRONES', 'MARCHESINI', 'SACMI', 'SIDEL'],
  'cartoning-machines': ['IMA', 'MARCHESINI', 'UHLMANN', 'BOSCH', 'ROVEMA', 'ECONOCORP'],
  'weighing-scales-checkweighers': ['METTLER TOLEDO', 'SARTORIUS', 'WIPOTEC', 'LOMA', 'BIZERBA', 'ISHIDA'],
  'laboratory-equipment': ['ERWEKA', 'SOTAX', 'COPLEY', 'PHARMA TEST', 'ELECTROLAB', 'LOGAN']
};

const equipmentTypes = {
  'granulators-mills-compactors': ['Granulator', 'Mill', 'Compactor', 'Oscillating Granulator', 'Hammer Mill', 'Roller Compactor'],
  'mixers-powders-granules': ['Powder Mixer', 'Ribbon Blender', 'V-Blender', 'Bin Blender', 'Paddle Mixer', 'Cone Mixer'],
  'mixers-liquids-creams': ['High Shear Mixer', 'Homogenizer', 'Emulsifier', 'Planetary Mixer', 'Rotor Stator Mixer'],
  'sieves-sifters-filters': ['Vibrating Sieve', 'Rotary Sifter', 'Centrifugal Sifter', 'Air Classifier'],
  'tablet-presses': ['Rotary Tablet Press', 'Single Punch Press', 'High Speed Press', 'Bi-Layer Press'],
  'capsule-filling': ['Capsule Filler', 'Capsule Sealer', 'Capsule Polisher', 'Capsule Sorter'],
  'coating-equipment': ['Coating Pan', 'Fluid Bed Coater', 'Spray Coater', 'Sugar Coater'],
  'labelling-machines': ['Wrap Around Labeller', 'Front & Back Labeller', 'Top Labeller', 'Sleeve Labeller'],
  'cartoning-machines': ['Horizontal Cartoner', 'Vertical Cartoner', 'End Load Cartoner', 'Side Load Cartoner'],
  'weighing-scales-checkweighers': ['Checkweigher', 'Weighing Scale', 'Dynamic Checkweigher', 'Multi-head Weigher'],
  'laboratory-equipment': ['Dissolution Tester', 'Hardness Tester', 'Friability Tester', 'Disintegration Tester']
};

const modelPrefixes = {
  'granulators-mills-compactors': ['FG', 'MG', 'CG', 'OG', 'HM', 'RC'],
  'mixers-powders-granules': ['PM', 'RB', 'VB', 'BB', 'PDM', 'CM'],
  'mixers-liquids-creams': ['HSM', 'HOM', 'EM', 'PLM', 'RSM'],
  'sieves-sifters-filters': ['VS', 'RS', 'CS', 'AC'],
  'tablet-presses': ['RTP', 'SPP', 'HSP', 'BLP'],
  'capsule-filling': ['CF', 'CS', 'CP', 'CSO'],
  'coating-equipment': ['CP', 'FBC', 'SC', 'SUC'],
  'labelling-machines': ['WAL', 'FBL', 'TL', 'SL'],
  'cartoning-machines': ['HC', 'VC', 'ELC', 'SLC'],
  'weighing-scales-checkweighers': ['CW', 'WS', 'DCW', 'MHW'],
  'laboratory-equipment': ['DT', 'HT', 'FT', 'DIT']
};

export function generateProductsForCategory(categoryId, targetCount, existingProducts = []) {
  const categoryManufacturers = manufacturers[categoryId] || ['GENERIC', 'STANDARD', 'PHARMA'];
  const categoryTypes = equipmentTypes[categoryId] || ['Equipment'];
  const categoryPrefixes = modelPrefixes[categoryId] || ['EQ'];
  
  const products = [...existingProducts];
  const currentCount = existingProducts.length;
  
  if (currentCount >= targetCount) {
    return products.slice(0, targetCount);
  }
  
  const productsToGenerate = targetCount - currentCount;
  
  for (let i = 0; i < productsToGenerate; i++) {
    const manufacturer = categoryManufacturers[i % categoryManufacturers.length];
    const type = categoryTypes[i % categoryTypes.length];
    const prefix = categoryPrefixes[i % categoryPrefixes.length];
    const modelNumber = Math.floor(Math.random() * 900) + 100;
    const productNumber = String(currentCount + i + 1).padStart(3, '0');
    
    const product = {
      id: `${prefix}${productNumber}${categoryId.substring(0, 2).toUpperCase()}`,
      name: `${type} ${manufacturer} ${prefix}-${modelNumber}`,
      manufacturer: manufacturer,
      model: `${prefix}-${modelNumber}`,
      type: type,
      image: '/images/placeholder-machine.svg'
    };
    
    products.push(product);
  }
  
  return products;
}

export function updateCategoryWithGeneratedProducts(categoryData, categoryId) {
  const targetCount = categoryData.count;
  const existingProducts = categoryData.products || [];
  
  return {
    ...categoryData,
    products: generateProductsForCategory(categoryId, targetCount, existingProducts)
  };
}
