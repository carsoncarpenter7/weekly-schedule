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
//                             {id,name,category:'pill'|'powder',form:'capsule'|'tablet'|'softgel'|'scoop',
//                              doseAmount,doseUnit,pillCount,timing:'am'|'pm'|'with_meal'|'before_sleep'|'pre_workout'|'post_workout'|null}
//   exerciseLibrary       — default lifts per muscle group
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
    {id:'dextrose', name:'Dextrose', unit:'scoop', unitPer:1, label:'scoops', P:0, C:18, F:0, kcal:70, category:'powder'},
  ],
  mealPresets: [
    {name:'Post-gym Shake', items:[{id:'protein',sv:1},{id:'dextrose',sv:2}]},
    {name:'Chicken + Rice', items:[{id:'chicken',sv:6},{id:'rice',sv:1}]},
    {name:'Oats Bowl',      items:[{id:'oats',sv:1},{id:'protein',sv:1}]},
  ],
  brandStripWords: [],
  postFastProteinFoodId: 'chicken',
  tradeFirms: ['Topstep','Apex'],
  proteinDrinks: [
    {id:'default',name:'Whey protein',P:24,C:2,F:1,kcal:120,defaultServings:1},
  ],
  drinkColorFixed: {},
  supplementTypes: [
    {id:'sp_creatine',name:'Creatine',category:'powder',form:'scoop',doseAmount:null,doseUnit:null,pillCount:1,timing:null},
    {id:'sp_multivitamin',name:'Multivitamin',category:'pill',form:'capsule',doseAmount:null,doseUnit:null,pillCount:1,timing:null},
    {id:'sp_vitd',name:'Vitamin D',category:'pill',form:'softgel',doseAmount:null,doseUnit:null,pillCount:1,timing:null},
    {id:'sp_fishoil',name:'Fish Oil',category:'pill',form:'softgel',doseAmount:null,doseUnit:null,pillCount:1,timing:null},
    {id:'sp_magnesium',name:'Magnesium',category:'pill',form:'capsule',doseAmount:null,doseUnit:null,pillCount:1,timing:null},
  ],
  exerciseLibrary: {
    CHEST:['Bench Press','Incline Dumbbell Press','Cable Fly','Push-Ups'],
    BACK:['Lat Pulldown','Barbell Row','Face Pulls','Pull-Ups'],
    LEGS:['Squat','Leg Press','Leg Curl','Leg Extension'],
    ABS:['Cable Crunch','Hanging Leg Raise','Plank'],
    ARMS:['Tricep Pushdown','Barbell Curl','Hammer Curl','Lateral Raise'],
    TRICEPS:[],BICEPS:[],SHOULDERS:[],
  },
};
