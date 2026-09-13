// Example personal profile — safe to commit. Copy to personal-profile.js and customize.
// window.__PERSONAL__.profile fields:
//   baseline              — body scan comparison point for progress UI
//   recompGoal            — target BF %, lean loss share, start weight/BF
//   baseSchedule          — weekly template (SUN–SAT) used when no saved schedule
//   mealMacrosTraining    — DM keys (CHEST, BACK, … ABS) without DEFAULT
//   soccerSchedule        — date-keyed one-off Sunday block arrays
//   mealPlannerFoods      — MP_FOODS_DEFAULT list
//   mealPresets           — meal planner preset recipes (food ids must exist in mealPlannerFoods)
//   brandStripWords       — words stripped from food names in compact UI labels
//   postFastProteinFoodId — mealPlannerFoods id used for post-fast Meal 3 chicken macros
//   tradeFirms            — prop firm names for trading log
//   proteinDrinks         — default shake products (per scoop macros)
//   drinkColorFixed       — optional map of drink id → palette index for stable accents
//   supplementTypes       — checklist: pills + powders
//                             {id,name,category:'pill'|'powder',form:'pill'|'scoop',
//                              doseAmount,doseUnit,pillCount,servingsPerContainer,inStock,timing:'am'|'pm'|'with_meal'|'pre_workout'|'post_workout'|'anytime'|null}
//   exerciseLibrary       — default lifts per muscle group
//   defaultTodoItems      — recurring daily task definitions
//                             [{id,label,priority:'focus'|'normal'}]
window.__PERSONAL__ = window.__PERSONAL__ || {};
window.__PERSONAL__.profile = {
  baseline: null,
  recompGoal: {targetBF:15,leanLossShare:0.15,startWeight:null,startBF:null,active:true},
  baseSchedule: null,
  mealMacrosTraining: null,
  soccerSchedule: {},
  mealPlannerFoods: [
    {id:'chicken', name:'Chicken breast', unit:'oz', unitPer:1, label:'oz', P:8, C:0, F:2, kcal:50, category:'food'},
    {id:'rice', name:'White rice (cooked)', unit:'cup', unitPer:1, label:'cups', P:4, C:45, F:0, kcal:200, category:'food'},
    {id:'oats', name:'Rolled oats (dry)', unit:'cup', unitPer:1, label:'cups', P:10, C:54, F:5, kcal:300, category:'food'},
    {id:'protein', name:'Whey protein', unit:'scoop', unitPer:1, label:'scoops', P:24, C:2, F:1, kcal:120, category:'powder'},
    {id:'dextrose', name:'Dextrose', unit:'scoop', unitPer:1, label:'scoops', P:0, C:18, F:0, kcal:70, category:'powder', refillQty:227, stockQty:227, inStock:true},
    {id:'creatine', name:'Creatine', unit:'scoop', unitPer:1, label:'scoops', P:0, C:0, F:0, kcal:0, category:'powder', refillQty:200, stockQty:200, inStock:true},
    {id:'collagen', name:'Collagen', unit:'scoop', unitPer:1, label:'scoops', P:18, C:0, F:0, kcal:70, category:'powder', refillQty:28, stockQty:28, inStock:true},
  ],
  mealPresets: [
    {name:'Post-gym Shake', items:[{id:'protein',sv:1},{id:'dextrose',sv:2}]},
    {name:'Chicken + Rice', items:[{id:'chicken',sv:6},{id:'rice',sv:1}]},
    {name:'Oats Bowl',      items:[{id:'oats',sv:1},{id:'protein',sv:1}]},
  ],
  brandStripWords: [],
  postFastProteinFoodId: 'chicken',
  tradeFirms: ['Topstep','Apex'],
  firmEvalPrices: { 'Lucid': 105, 'Tradeify': 94, 'Topstep': 85, 'Apex': 35 },
  proteinDrinks: [
    {id:'default',name:'Whey protein',P:24,C:2,F:1,kcal:120,defaultServings:1},
  ],
  drinkColorFixed: {},
  supplementTypes: [
    {id:'sp_creatine',name:'Creatine',category:'powder',form:'scoop',doseAmount:5,doseUnit:'g',pillCount:1,servingsPerContainer:200,inStock:true,timing:'anytime'},
    {id:'sp_collagen',name:'Collagen',category:'powder',form:'scoop',doseAmount:20,doseUnit:'g',pillCount:1,servingsPerContainer:28,inStock:true,timing:'anytime'},
    {id:'sp_dextrose',name:'Dextrose',category:'powder',form:'scoop',doseAmount:20,doseUnit:'g',pillCount:1,servingsPerContainer:227,inStock:true,timing:'anytime'},
    {id:'sp_vitd',name:'Vitamin D3 + K2',category:'pill',form:'pill',doseAmount:125,doseUnit:'mcg',pillCount:2,servingsPerContainer:60,inStock:true,timing:'am'},
    {id:'sp_fishoil',name:'Fish Oil',category:'pill',form:'pill',doseAmount:1200,doseUnit:'mg',pillCount:2,servingsPerContainer:67,inStock:true,timing:'with_meal'},
    {id:'sp_magglycinate',name:'Magnesium Glycinate',category:'pill',form:'pill',doseAmount:100,doseUnit:'mg',pillCount:2,servingsPerContainer:30,inStock:true,timing:'pm'},
    {id:'sp_ltyrosine',name:'L-Tyrosine',category:'pill',form:'pill',doseAmount:500,doseUnit:'mg',pillCount:1,servingsPerContainer:100,inStock:true,timing:'am'},
    {id:'sp_multivitamin',name:'Multivitamin',category:'pill',form:'pill',doseAmount:null,doseUnit:null,pillCount:1,servingsPerContainer:null,inStock:false,timing:null},
    {id:'sp_magnesium',name:'Magnesium',category:'pill',form:'pill',doseAmount:null,doseUnit:null,pillCount:1,servingsPerContainer:null,inStock:false,timing:null},
  ],
  exerciseLibrary: {
    CHEST:['Bench Press','Incline Dumbbell Press','Cable Fly','Push-Ups'],
    BACK:['Lat Pulldown','Barbell Row','Face Pulls','Pull-Ups'],
    LEGS:['Squat','Leg Press','Leg Curl','Leg Extension'],
    ABS:['Cable Crunch','Hanging Leg Raise','Plank'],
    ARMS:[],
    TRICEPS:['Tricep Pushdown'],
    BICEPS:['Barbell Curl','Hammer Curl'],
    SHOULDERS:['Lateral Raise'],
  },
  defaultTodoItems: [
    {id:'td_water',label:'16oz water upon waking',priority:'normal'},
    {id:'td_supps',label:'Take daily supplements',priority:'normal'},
    {id:'td_charts',label:'Prep daily charts & market levels',priority:'focus'},
    {id:'td_stretch',label:'10 min mobility & stretching',priority:'normal'},
    {id:'td_read',label:'Read 15 min or review journal',priority:'normal'},
  ],
};
