var DataFrame = dfd.DataFrame;
// create GEST df in lieu of reading from csv
function Make_GEST_df(){
    let data1 = [
        ["G1","Dry to moderately moist grassland","(2~), 2+, 2- ",NaN,NaN,NaN,NaN,"2+",-2,-0.01,24,31.44,16,31.5,8.574245455],
        ["G2","Moist grassland","3+, 3+/2+",NaN,NaN,NaN,"3+","2+",NaN,0.01,48,19.37,38,19.5,5.283027273],
        ["G3","Moist to very moist grassland","4+/3+",NaN,NaN,NaN,"3+",NaN,NaN,0.03,3,13.46,4,13.5,3.671809091],
        ["G3f","Periodically flooded grasslands","4~, 3~",NaN,NaN,"4+","3+","2+",NaN,-0.05,3,13.46,NaN,13,3.669409091],
        ["G3s","Moist to very moist grassland with shunt  species","4+/3+, 3~, (3+, 3+/2+)",NaN,NaN,NaN,"3+","2+",NaN,0.75,7,13.46,NaN,14,3.693409091],
        ["G3m","Moist to very moist acidic Molinia meadows","4+/3+",NaN,NaN,NaN,"3+",NaN,NaN,4.85,6,6.45,NaN,11.5,1.904590909],
        ["G4","Very moist grassland","4+, 4~",NaN,NaN,"4+","3+",NaN,NaN,0.39,7,6.45,3,7,1.770790909],
        ["G4s","Very moist grassland with shunt species ","4+",NaN,NaN,"4+",NaN,NaN,NaN,2.1,4,6.45,NaN,8.5,1.822090909],
        ["G5","Wet grassland","5+/4+",NaN,NaN,"4+",NaN,NaN,NaN,0.05,3,-3.89,5,-4,-1.059409091],
        ["G5s","Wet grassland with shunt species","5+, 5+/4+, (4~)",NaN,"5+","4+","3+",NaN,NaN,2.93,4,-3.89,NaN,-1,-0.973009091],
        ["A1","Dry to moderately moist arable land","2+, 2-",NaN,NaN,NaN,NaN,"2+",-2,0.08,11,41.69,10,42,11.3724],
        ["A2","Moist arable land","3+, 3+/2+",NaN,NaN,NaN,"3+","2+",NaN,0.17,6,23.44,4,23.5,6.397827273],
        ["U1","Moist bare peat","3~, 3+",NaN,NaN,NaN,"3+","2+",NaN,0.03,2,8.99,2,9,2.452718182],
        ["U2","Moist bog heath","3+",NaN,NaN,NaN,"3+",NaN,NaN,0.25,10,12.33,5,12.5,3.370227273],
        ["U3","Moist Reeds","3+, (3~)",NaN,NaN,NaN,"3+","2+",NaN,0.04,1,2.77,2,3,0.756654545],
        ["U6","Very moist bog heath","(5+/4+), 4+",NaN,NaN,"4+",NaN,NaN,NaN,0.92,6,4.67,5,5.5,1.301236364],
        ["U7","Very moist forbs and sedges","(5+/4+), 4+, (4+/3+)",NaN,NaN,"4+","3+",NaN,NaN,0.25,5,12.56,6,13,3.432954545],
        ["U8","Very moist Sphagnum lawn","(5+/4+), 4+",NaN,NaN,"4+",NaN,NaN,NaN,1.5,12,-4.3,11,-3,-1.127727273],
        ["U9","Very moist tall sedges","(5+/4+), 4~, 4+, (4+/3+)",NaN,NaN,"4+","3+",NaN,NaN,1.6,12,10.72,4,12.5,2.971636364],
        ["U10","Wet bare peat","5+/4+",NaN,NaN,"4+",NaN,NaN,NaN,0.22,3,1.34,3,1.5,0.372054545],
        ["U11","Wet meadows and forbs","5+",NaN,"5+",NaN,NaN,NaN,NaN,7.35,2,-3.89,NaN,3.5,-0.840409091],
        ["U12","Wet small sedges with mosses","5+ (4+)",NaN,"5+","4+",NaN,NaN,NaN,4.72,23,-1.99,15,2.5,-0.401127273],
        ["U13","Wet sphagnum lawn","5+, (5+/4+)",NaN,"5+","4+",NaN,NaN,NaN,5.25,6,-3.02,6,2,-0.666136364],
        ["U14","Wet tall reeds","(5~), 5+, (5+/4+)",NaN,"5+","4+",NaN,NaN,NaN,6.47,10,0.21,2,6.5,0.251372727],
        ["U15","Wet tall sedges","5~, 5+, (5+/4+)",NaN,"5+","4+",NaN,NaN,NaN,9.49,3,1.03,2,10.5,0.565609091],
        ["U16","Wet bog heath","6+/5+, 5+, (5+/4+)",NaN,"5+","4+",NaN,NaN,NaN,17.8,1,-0.01,7,18,0.531272727],
        ["U17","Very wet tall sedges and Typha","6+, 6+/5+","6+","5+",NaN,NaN,NaN,NaN,6.81,8,-1.08,8,5.5,-0.090245455],
        ["U18","Very wet Phragmites reeds","6+, (6+/5+, 5~)","6+","5+","4+",NaN,NaN,NaN,12.44,12,-12.38,8,0,-3.003163636],
        ["U19","Wet to very wet Sphagnum hollows","6+, (5+)","6+","5+",NaN,NaN,NaN,NaN,11.81,8,-4.58,8,7,-0.894790909],
        ["U20","Flooded tall reeds (> 20 cm above surface)","6+","6+",NaN,NaN,NaN,NaN,NaN,28.29,30,-32.74,6,-4.5,-8.080390909],
        ["S1","Dry to moderately moist grassland on peaty soils (Anmoor)","2-, 2+/2-, 2+",NaN,NaN,NaN,NaN,"2+",-2,-0.05,9,46.09,14,46,12.5685],
        ["S2","Dry to moderately moist arable land on peaty soils(Anmoor)","2+, 2-",NaN,NaN,NaN,NaN,"2+",-2,0.07,8,35.11,12,35,9.577554545],
        ["S3","Cropland (2+) flooded in summer (wet year)","3+",NaN,NaN,NaN,"3+",NaN,NaN,10.29,1,22.61,1,33,6.475063636],
        ["S4","Grassland (2+/3+) flooded in summer (wet year) ","(5+), 5+/4+, (4+)",NaN,"5+","4+",NaN,NaN,NaN,26.02,7,-0.13,6,26,0.745145455],
        ["S5","Simulated harvest (Paludiculture)","(5+), 5+/4+",NaN,"5+","4+",NaN,NaN,NaN,3.08,3,11.46,3,14.5,3.217854545],
        ["S6","Wet tall reeds (dry year)","(5+/4+), 4~, 4+",NaN,NaN,"4+","3+",NaN,NaN,0.79,7,10.72,NaN,11.5,2.947336364],
        ["S7","Sphagnum lawn  at former peat cut areas","5+, 5+/4+",NaN,"5+","4+",NaN,NaN,NaN,37.27,3,2.83,2,40,1.889918182],
        ["S8","Very wet reeds with lateral import of organic matter","6+, 6+/5+, (5~, 5+)","6+","5+","4+",NaN,NaN,NaN,42.27,18,2.39,18,44.5,1.919918182],
        ["S9","Ditches in low intensity grassland","6+","6+",NaN,NaN,NaN,NaN,NaN,3.17,3,"+/- 0",NaN,3,0.0951]
    ];
    let cols1 = ["Name","GEST","Soil Moisture Classes","smcd_6","smcd_5","smcd_4","smcd_3","smcd_2","smcd_l2","CH4_GWP","CH4_n","CO2_GWP","CO2_n","Total C-flux (GWP)","Total C-flux (ton C/ha)"];
    let df = new DataFrame(data1, {columns: cols1});
    return df;
}

function Parse_SET_Input(){
    let inputs = {
        'gen_site_data': 
            {'site_name': document.getElementById("site_name").value,
            'tot_area': parseFloat(document.getElementById("tot_area").value), 
            'coords': document.getElementById("coords").value, 
            'elevation': parseFloat(document.getElementById("elevation").value), 
            'peat_type': document.getElementById("peat_type").value,
            'peat_thick': parseFloat(document.getElementById("peat_thick").value),
            'year_start': parseFloat(document.getElementById("year_start").value)
        }, 
        'base': 
            {'med_gw_level_summer': parseFloat(document.getElementById("bs_med_gw_level_summer").value),
            'veg_class': document.getElementById("bs_veg_class").value,
            'amount_manure': parseFloat(document.getElementById("bs_amount_manure").value),
            'amount_org_fert': parseFloat(document.getElementById("bs_amount_org_fert").value),
            'type_synth_fert': document.getElementById("bs_type_synth_fert").value,
            'amount_synth_fert': parseFloat(document.getElementById("bs_amount_synth_fert").value),
            'type_animals': document.getElementById("bs_type_animals").value,
            'avg_num_animals': parseFloat(document.getElementById("bs_avg_num_animals").value),
            'avg_num_days': parseFloat(document.getElementById("bs_avg_num_days").value),
            'crop_yield': parseFloat(document.getElementById("bs_crop_yield").value),
            'crop_resid': document.getElementById("bs_crop_resid").checked,
            'crop_name': document.getElementById("bs_crop_name").value,
            'diesel_per_site': parseFloat(document.getElementById("bs_diesel_per_site").value),
            'elec_per_site': parseFloat(document.getElementById("bs_elec_per_site").value)
        },
        'rewet': 
            {'med_gw_level_summer': parseFloat(document.getElementById("rw_med_gw_level_summer").value),
            'veg_class': document.getElementById("rw_veg_class").value,
            'amount_manure': parseFloat(document.getElementById("rw_amount_manure").value),
            'amount_org_fert': parseFloat(document.getElementById("rw_amount_org_fert").value),
            'type_synth_fert': document.getElementById("rw_type_synth_fert").value,
            'amount_synth_fert': parseFloat(document.getElementById("rw_amount_synth_fert").value),
            'type_animals': document.getElementById("rw_type_animals").value,
            'avg_num_animals': parseFloat(document.getElementById("rw_avg_num_animals").value),
            'avg_num_days': parseFloat(document.getElementById("rw_avg_num_days").value),
            'crop_yield': parseFloat(document.getElementById("rw_crop_yield").value),
            'crop_resid': document.getElementById("rw_crop_resid").checked,
            'crop_name': document.getElementById("rw_crop_name").value,
            'diesel_per_site': parseFloat(document.getElementById("rw_diesel_per_site").value),
            'elec_per_site': parseFloat(document.getElementById("rw_elec_per_site").value),
            'crop_use': document.getElementById("rw_crop_use").value
        }
        };
    return inputs;
}

function Create_Data_Tab(user_input, gest){
    //Initiate the Data dict
    let data = {'base': {}, 'rewet': {}};

    //Start populating the data dict with simple data
    data['base']['veg_class'] = user_input['base']['veg_class'];
    data['base']['type_animals'] = user_input['base']['type_animals'];
    data['base']['type_synth_fert'] = user_input['base']['type_synth_fert'];

    data['rewet']['veg_class'] = user_input['rewet']['veg_class'];
    data['rewet']['type_animals'] = user_input['rewet']['type_animals'];
    data['rewet']['type_synth_fert'] = user_input['rewet']['type_synth_fert'];

    //Calculate the Animal Emission Factor and Nitrogen Excretion per head per year
    if(data['base']['type_animals'] == 'No Animals'){
        data['base']['animal_ef'] = 0;
        data['base']['n_excretion'] = 0;
    }else if(data['base']['type_animals'] == 'Dairy Cattle'){
        data['base']['animal_ef'] = 0.02;
        data['base']['n_excretion'] = 130.1;
    }else if(data['base']['type_animals'] == 'Beef Cattle'){
        data['base']['animal_ef'] = 0.02;
        data['base']['n_excretion'] = 28.2;
    }else if(data['base']['type_animals'] == 'Sheep'){
        data['base']['animal_ef'] = 0.01;
        data['base']['n_excretion'] = 9.9;
    }else if(data['base']['type_animals'] == 'Goats'){
        data['base']['animal_ef'] = 0.01;
        data['base']['n_excretion'] = 7.4;
    }else if(data['base']['type_animals'] == 'Water Buffalo'){
        data['base']['animal_ef'] = 0.02;
        data['base']['n_excretion'] = 76.5;
    }

    if(data['rewet']['type_animals'] == data['base']['type_animals']){
        data['rewet']['animal_ef'] = data['base']['animal_ef'];
        data['rewet']['n_excretion'] = data['base']['n_excretion'];
    }else{
        data['rewet']['animal_ef'] = 0;
        data['rewet']['n_excretion'] = 0;
    }

    //Calculate Synthetic Fertilizer emission factor
    if(data['base']['type_synth_fert'] == 'Nitrate Based'){
        data['base']['fert_ef'] = 0.02;
    }else if(data['base']['type_synth_fert'] == 'Ammonium Based'){
        data['base']['fert_ef'] = 0.01;
    }else{
        //////////// IS THIS TRUE
        data['base']['fert_ef'] = 0;
    }
    if(data['rewet']['type_synth_fert'] == 'Nitrate Based'){
        data['rewet']['fert_ef'] = 0.02;
    }else if(data['rewet']['type_synth_fert'] == 'Ammonium Based'){
        data['rewet']['fert_ef'] = 0.01;
    }else{
        //////////// IS THIS TRUE
        data['rewet']['fert_ef'] = 0;
    }

    //Find Crop Residues number
    if(user_input['base']['crop_resid']){
        data['base']['crop_resid'] = 1;
    }else{
        data['base']['crop_resid'] = 2;
    }

    if(user_input['rewet']['crop_resid']){
        data['rewet']['crop_resid'] = 1;
    }else{
        data['rewet']['crop_resid'] = 2;
    }

    //Find Number of crop Name
    if(user_input['base']['crop_name'] == 'Cattail (Typha Sp.)'){
        data['base']['crop_name'] = 1;
    }else if(user_input['base']['crop_name'] == 'Reed (Phragmites Australis)'){
        data['base']['crop_name'] = 2;
    }else if(user_input['base']['crop_name'] == 'Peat Moss (Sphagnum Sp.) '){
        data['base']['crop_name'] = 3;
    }else if(user_input['base']['crop_name'] == 'Grasses like Reed Canary Grass'){
        data['base']['crop_name'] = 4;
    }else if(user_input['base']['crop_name'] == 'Alder (Alnus Sp.)'){
        data['base']['crop_name'] = 5;
    }else if(user_input['base']['crop_name'] == 'Other'){
        data['base']['crop_name'] = 6;
    }else{
        data['base']['crop_name'] = 0;
    }

    if(user_input['rewet']['crop_name'] == 'Cattail (Typha Sp.)'){
        data['rewet']['crop_name'] = 1;
    }else if(user_input['rewet']['crop_name'] == 'Reed (Phragmites Australis)'){
        data['rewet']['crop_name'] = 2;
    }else if(user_input['rewet']['crop_name'] == 'Peat Moss (Sphagnum Sp.) '){
        data['rewet']['crop_name'] = 3;
    }else if(user_input['rewet']['crop_name'] == 'Grasses like Reed Canary Grass'){
        data['rewet']['crop_name'] = 4;
    }else if(user_input['rewet']['crop_name'] == 'Alder (Alnus Sp.)'){
        data['rewet']['crop_name'] = 5;
    }else if(user_input['rewet']['crop_name'] == 'Other'){
        data['rewet']['crop_name'] = 6;
    }else{
        data['rewet']['crop_name'] = 0;
    }

    //Find Product Use Number
    if(user_input['rewet']['crop_use'] == 'Building Materials e.g insulation, taching, timber'){
        data['rewet']['crop_use'] = 1;
    }else if(user_input['rewet']['crop_use'] == 'Bedding Material'){
        data['rewet']['crop_use'] = 2;
    }else if(user_input['rewet']['crop_use'] == 'Food Application'){
        data['rewet']['crop_use'] = 3;
    }else if(user_input['rewet']['crop_use'] == 'Fodder/Feed Application'){
        data['rewet']['crop_use'] = 4;
    }else if(user_input['rewet']['crop_use'] == 'Energy Use: biogas, combustion, wood etc'){
        data['rewet']['crop_use'] = 5;
    }else if(user_input['rewet']['crop_use'] == 'Paper'){
        data['rewet']['crop_use'] = 6;
    }else if(user_input['rewet']['crop_use'] == 'Extraction of Ingredients/Building Blocks: proteins, fibres, cellulose etc'){
        data['rewet']['crop_use'] = 7;
    }else if(user_input['rewet']['crop_use'] == 'High Quality Substrate in Horticulture'){
        data['rewet']['crop_use'] = 8;
    }else if(user_input['rewet']['crop_use'] == 'Other Uses/Unknown'){
        data['rewet']['crop_use'] = 9;
    }else{
        data['rewet']['crop_use'] = 0;
    }

    //Perform Vegetation Class emission calculations
    let veg_num_base = data['base']['veg_class'];
    let veg_num_rewet = data['rewet']['veg_class'];
    
    for(let i =0; i< gest.index.length; i++){
        if(veg_num_base == gest.at(i,'Name')){
            data['base']['veg_ch4_gwp'] = gest.at(i,'CH4_GWP');
            data['base']['veg_c02_gwp'] = gest.at(i,'CO2_GWP');
            data['base']['veg_cflux_gwp'] = gest.at(i,'Total C-flux (GWP)');
        }
        if(veg_num_rewet == gest.at(i,'Name')){
            data['rewet']['veg_ch4_gwp'] = gest.at(i,'CH4_GWP');
            data['rewet']['veg_c02_gwp'] = gest.at(i,'CO2_GWP');
            data['rewet']['veg_cflux_gwp'] = gest.at(i,'Total C-flux (GWP)');
        }
    }
    return data;
}

function Create_crop_Use_Tab(user_input, data){
    //Initialize crop_use dictionary
    let crop_use = {};

    //Populate the crop_use dictionary
    crop_use['crop_yield'] = user_input['rewet']['crop_yield'];

    if(data['rewet']['crop_use'] == 2 || data['rewet']['crop_use'] == 3 || data['rewet']['crop_use'] == 4 || data['rewet']['crop_use'] == 9){
        crop_use['product_weight'] = 0;
    }else{
        crop_use['product_weight'] = crop_use['crop_yield'];
    }
    crop_use['carbon_weight'] = crop_use['product_weight']*0.475;
    crop_use['ton_co2'] = crop_use['carbon_weight']*(44/12);
    crop_use['ton_co2_per_ha'] = crop_use['ton_co2']*(-1);
    crop_use['ton_co2_per_site'] = crop_use['ton_co2_per_ha']*user_input['gen_site_data']['tot_area'];

    //Save crop_use as a pandas dataframe
    crop_use = {'Values': crop_use};
    return crop_use;
}

function run_set(){
    //console.log(document.getElementById("site_name"));
    let gest = Make_GEST_df();
    let inputs = Parse_SET_Input();
    let data_tab = Create_Data_Tab(inputs, gest);
    let crop_use_tab = Create_crop_Use_Tab(inputs, data_tab);
    console.log(data_tab);
    console.log(crop_use_tab);
}

run_set();

/*
function Create_C_Content_Soil_Tab(user_input){
    //Initialize the C Content Soil dictionary
    c_content = {}

    //Populate C Content dictionary
    c_content['peat_type'] = user_input['gen_site_data']['peat_type']

    if c_content['peat_type'] == 'Sphagnum':
        c_content['c_content_per_cm_thick'] = 0.3496
    elif c_content['peat_type'] == 'Herbaceous':
        c_content['c_content_per_cm_thick'] = 0.5959
    elif c_content['peat_type'] == 'Woody':
        c_content['c_content_per_cm_thick'] = 0.54972
    elif c_content['peat_type'] == 'Brown moss':
        c_content['c_content_per_cm_thick'] = 0.84783
    elif c_content['peat_type'] == 'Unknown':
        c_content['c_content_per_cm_thick'] = 0.55224
    elif c_content['peat_type'] == 'Humidified':
        c_content['c_content_per_cm_thick'] = 0.91008

    c_content['peat_thick'] = user_input['gen_site_data']['peat_thick']
    c_content['c_stock_ton_per_ha'] = c_content['peat_thick']*c_content['c_content_per_cm_thick']*10
    c_content['c_stock_tco2_per_ha'] = c_content['c_stock_ton_per_ha']*(44/12)

    //Save C Content Soil tab as a pandas dataframe
    c_content = {'Values': c_content}
    return pd.DataFrame.from_dict(c_content)
}

function Create_Soil_Moisture_Classes_Tab(user_input){
    //Initialize the Soil Moisture Classes dictionary
    sm_classes = {'base': {}, 'rewet': {}}

    //Populate dictionary
    if user_input['base']['med_gw_level_summer'] >= 0 and user_input['base']['med_gw_level_summer'] <= 140:
        sm_classes['base']['summer_moist_class_num'] = '6+'
        sm_classes['base']['summer_moist_class_name'] = 'Flooded (lower eulittoral)'
        sm_classes['base']['summer_moist_class'] = '6+ (Flooded (lower eulittoral))'
    elif user_input['base']['med_gw_level_summer'] >= -10 and user_input['base']['med_gw_level_summer'] < 0:
        sm_classes['base']['summer_moist_class_num'] = '5+'
        sm_classes['base']['summer_moist_class_name'] = 'Wet (upper eulittoral)'
        sm_classes['base']['summer_moist_class'] = '5+ (Wet (upper eulittoral))'
    elif user_input['base']['med_gw_level_summer'] >= -20 and user_input['base']['med_gw_level_summer'] < -10:
        sm_classes['base']['summer_moist_class_num'] = '4+'
        sm_classes['base']['summer_moist_class_name'] = 'Semi wet (very moist)'
        sm_classes['base']['summer_moist_class'] = '4+ (Semi wet (very moist))'
    elif user_input['base']['med_gw_level_summer'] >= -45 and user_input['base']['med_gw_level_summer'] < -20:
        sm_classes['base']['summer_moist_class_num'] = '3+'
        sm_classes['base']['summer_moist_class_name'] = 'Moist'
        sm_classes['base']['summer_moist_class'] = '3+ (Moist)'
    elif user_input['base']['med_gw_level_summer'] >= -85 and user_input['base']['med_gw_level_summer'] < -45:
        sm_classes['base']['summer_moist_class_num'] = '2+'
        sm_classes['base']['summer_moist_class_name'] = 'Moderate moist'
        sm_classes['base']['summer_moist_class'] = '2+ (Moderate moist)'
    elif user_input['base']['med_gw_level_summer'] < -85:
        sm_classes['base']['summer_moist_class_num'] = '2-'
        sm_classes['base']['summer_moist_class_name'] = 'Moderate dry'
        sm_classes['base']['summer_moist_class'] = '2- (Moderate dry)'

    if user_input['rewet']['med_gw_level_summer'] >= 0 and user_input['rewet']['med_gw_level_summer'] <= 140:
        sm_classes['rewet']['summer_moist_class_num'] = '6+'
        sm_classes['rewet']['summer_moist_class_name'] = 'Flooded (lower eulittoral)'
        sm_classes['rewet']['summer_moist_class'] = '6+ (Flooded (lower eulittoral))'
    elif user_input['rewet']['med_gw_level_summer'] >= -10 and user_input['rewet']['med_gw_level_summer'] < 0:
        sm_classes['rewet']['summer_moist_class_num'] = '5+'
        sm_classes['rewet']['summer_moist_class_name'] = 'Wet (upper eulittoral)'
        sm_classes['rewet']['summer_moist_class'] = '5+ (Wet (upper eulittoral))'
    elif user_input['rewet']['med_gw_level_summer'] >= -20 and user_input['rewet']['med_gw_level_summer'] < -10:
        sm_classes['rewet']['summer_moist_class_num'] = '4+'
        sm_classes['rewet']['summer_moist_class_name'] = 'Semi wet (very moist)'
        sm_classes['rewet']['summer_moist_class'] = '4+ (Semi wet (very moist))'
    elif user_input['rewet']['med_gw_level_summer'] >= -45 and user_input['rewet']['med_gw_level_summer'] < -20:
        sm_classes['rewet']['summer_moist_class_num'] = '3+'
        sm_classes['rewet']['summer_moist_class_name'] = 'Moist'
        sm_classes['rewet']['summer_moist_class'] = '3+ (Moist)'
    elif user_input['rewet']['med_gw_level_summer'] >= -85 and user_input['rewet']['med_gw_level_summer'] < -45:
        sm_classes['rewet']['summer_moist_class_num'] = '2+'
        sm_classes['rewet']['summer_moist_class_name'] = 'Moderate moist'
        sm_classes['rewet']['summer_moist_class'] = '2+ (Moderate moist)'
    elif user_input['rewet']['med_gw_level_summer'] < -85:
        sm_classes['rewet']['summer_moist_class_num'] = '2-'
        sm_classes['rewet']['summer_moist_class_name'] = 'Moderate dry'
        sm_classes['rewet']['summer_moist_class'] = '2- (Moderate dry)'

    //Save Soil Moisture Classes tab as a pandas dataframe
    return pd.DataFrame.from_dict(sm_classes)
}

// Functions corresponding to calculations used in the N2O fertilizer tab

//Direct N2O emissions

function Manure_CO2Site_Base(manure_applied_base, tot_area){

    EF=0.02
    N2O_CO2eq=265 //value from the CO2 equivalent table, just this value is used from the table
    N2O_N=EF*manure_applied_base
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_manure_base=N2O_site*N2O_CO2eq

    return CO2_site_manure_base
}

function Organic_Fert_CO2Site_Base(organic_applied_base,tot_area){

    EF=0.02
    N2O_CO2eq=265 
    N2O_N=EF*organic_applied_base
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_organic_base=N2O_site*N2O_CO2eq

    return CO2_site_organic_base
}

function Grazing_CO2Site_Base(avg_n_animals_base, avg_days_base, n_excretion_value_b, EF_animal_b, tot_area){

    N2O_CO2eq=265
    N_amount_base=(n_excretion_value_b*avg_n_animals_base*(avg_days_base/365)) / tot_area
    N2O_N=EF_animal_b*N_amount_base
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_grazing_base=N2O_site*N2O_CO2eq

    return CO2_site_grazing_base, N_amount_base
}

function Synth_CO2Site_Base(fert_applied_base, EF_fert_b, tot_area){

    N2O_CO2eq=265 
    N2O_N=EF_fert_b*fert_applied_base
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_synth_fert_base=N2O_site*N2O_CO2eq

    return CO2_site_synth_fert_base
}

function Residue_Left_Input_Base(answer_b, crop_b){

    crops = ["Cattail (Typha sp.)", "Reed (Phragmites australis)", "Peat moss (Sphagnum sp.)", "Grasses like reed canary grass", "Alder (Alnus sp.)", "Other" ]  // List of all crop names
    
    if answer_b == "Yes" and crop_b in crops:
        
        if crop_b == "Cattail (Typha sp.)":
            cropresidue_fraction_tot_yield_b = 0.11627907
        elif crop_b == "Reed (Phragmites australis)":
            cropresidue_fraction_tot_yield_b = 0.046511628
        else:
            cropresidue_fraction_tot_yield_b = 0.0
            
    else:
        cropresidue_fraction_tot_yield_b = 0.0

    return cropresidue_fraction_tot_yield_b
}

function crop_Residue_Base(cropresidue_fraction_tot_yield_b, crop_yield_base, tot_area){

    nitrogen_content=0.015
    EF=0.02
    N2O_CO2eq=265
    amount_applied=cropresidue_fraction_tot_yield_b*crop_yield_base*1000*nitrogen_content
    N2O_N=EF*amount_applied
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_cropres_base=N2O_site*N2O_CO2eq

    return CO2_site_cropres_base
}

function Basis_value_managed_soils(tot_area){

    N2O_CO2eq=265
    N2O_ha=8 //Not sure why this value is 8
    N2O_site=N2O_ha*tot_area
    CO2_site_managed_soil=N2O_site*N2O_CO2eq

    return  CO2_site_managed_soil
}

function Total_Direct_N2Oemissions_Base(CO2_site_managed_soil, CO2_site_cropres_base, CO2_site_synth_fert_base, CO2_site_grazing_base, CO2_site_organic_base, CO2_site_manure_base ){

    total_direct_N2Oemiss_base= (CO2_site_managed_soil + CO2_site_cropres_base + CO2_site_synth_fert_base + CO2_site_grazing_base + CO2_site_organic_base + CO2_site_manure_base)/1000
    
    return total_direct_N2Oemiss_base
}

//Indirect N2O Emissions

function Animal_Ammonia_Base(manure_applied_base, N_amount_base, tot_area, avg_animals, avg_days){

    EF_ammonia=0.1035
    EF_N2O_N=0.01
    N2O_CO2eq=265
    ammonia_applied= manure_applied_base + ((N_amount_base*avg_animals*(avg_days/365))/tot_area)
    volatilization_N= ammonia_applied*EF_ammonia
    N2O_N=EF_N2O_N*volatilization_N
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_animal_amm_base=N2O_site*N2O_CO2eq

    return CO2_site_animal_amm_base
}

function Fert_Ammonia_Base(fert_applied_base, EF_ammonia_b, tot_area){

    EF_N2O_N=0.01
    N2O_CO2eq=265

    if EF_ammonia_b == 0.02:
        EF = 0.015
    else:
        EF = 0.1

    volatilization_N=fert_applied_base*EF
    N2O_N=EF_N2O_N*volatilization_N
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_fert_amm_base=N2O_site*N2O_CO2eq

    return CO2_site_fert_amm_base
}

function N_Oxide_Base(manure_applied_base, fert_applied_base, N_amount_base, avg_animals, avg_days, tot_area){

    EF_NOxide_ammonia=0.15
    EF_N2O_N=0.01
    N2O_CO2eq=265
    N=manure_applied_base + fert_applied_base + ((N_amount_base*avg_animals*(avg_days/365))/tot_area)
    volatilization_N= EF_NOxide_ammonia*N
    N2O_N=EF_N2O_N*volatilization_N
    N2O_ha= N2O_N*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_NOxide_base=N2O_site*N2O_CO2eq

    return CO2_site_NOxide_base
}

function Nitrate_Base(manure_applied_base, organic_applied_base, cropresidue_fraction_tot_yield_b, crop_yield, fert_applied_base, tot_area, rewet){
    
    EF_nitrate_leaching=0.3
    EF_N2O_N_leached=0.025
    N2O_CO2eq=265


    applied_animal=manure_applied_base + organic_applied_base

    if rewet == True:
        applied_remaining=organic_applied_base + (cropresidue_fraction_tot_yield_b*1000*crop_yield*0.015)
    else:
        applied_remaining = organic_applied_base + cropresidue_fraction_tot_yield_b
        
    nitrate_leached= (applied_animal +  fert_applied_base +  applied_remaining) * EF_nitrate_leaching
    N2O_N_leached= nitrate_leached * EF_N2O_N_leached
    N2O_ha= N2O_N_leached*(44/28)
    N2O_site=N2O_ha*tot_area
    CO2_site_nitrate_base=N2O_site*N2O_CO2eq

    return CO2_site_nitrate_base
}

function Total_Indirect_N2Oemissions_Base( CO2_site_nitrate_base, CO2_site_NOxide_base, CO2_site_fert_amm_base, CO2_site_animal_amm_base){

    tot_indirect_N2Oemiss_base=(CO2_site_nitrate_base + CO2_site_NOxide_base + CO2_site_fert_amm_base + CO2_site_animal_amm_base)/1000
    return tot_indirect_N2Oemiss_base
}

function Create_Outcome_Tab(user_input, data, crop_use, c_content, gest){
    //Initialize the Soil Moisture Classes dictionary
    outcome = {'base': {}, 'rewet': {}, 'creditable_year': {}}

    //Populate the base dictionary
    outcome['base']['veg_ch4_gwp'] = float(data.loc['veg_ch4_gwp']['base'])*user_input['gen_site_data']['tot_area']
    outcome['base']['veg_c02_gwp'] = float(data.loc['veg_c02_gwp']['base'])*user_input['gen_site_data']['tot_area']

    outcome['base']['tot_direct_n2o'] = Total_Direct_N2Oemissions_Base(Basis_value_managed_soils(user_input['gen_site_data']['tot_area']), 
                                                                            crop_Residue_Base(Residue_Left_Input_Base(user_input['base']['crop_resid'], user_input['base']['crop_name']), user_input['base']['crop_yield'], user_input['gen_site_data']['tot_area']), 
                                                                            Synth_CO2Site_Base(user_input['base']['amount_synth_fert'], data.loc['fert_ef']['base'], user_input['gen_site_data']['tot_area']),
                                                                            Grazing_CO2Site_Base(user_input['base']['avg_num_animals'], user_input['base']['avg_num_days'], data.loc['n_excretion']['base'], data.loc['animal_ef']['base'], user_input['gen_site_data']['tot_area'])[0],
                                                                            Organic_Fert_CO2Site_Base(user_input['base']['amount_org_fert'], user_input['gen_site_data']['tot_area']),
                                                                            Manure_CO2Site_Base(user_input['base']['amount_manure'], user_input['gen_site_data']['tot_area']))

    outcome['base']['tot_indirect_n2o'] = Total_Indirect_N2Oemissions_Base(Nitrate_Base(user_input['base']['amount_manure'], user_input['base']['amount_org_fert'], Residue_Left_Input_Base(user_input['base']['crop_resid'], user_input['base']['crop_name']), user_input['base']['crop_yield'], user_input['base']['amount_synth_fert'], user_input['gen_site_data']['tot_area'], False), 
                                                                                 N_Oxide_Base(user_input['base']['amount_manure'], user_input['base']['amount_synth_fert'], data.loc['n_excretion']['base'], user_input['base']['avg_num_animals'], user_input['base']['avg_num_days'], user_input['gen_site_data']['tot_area']), 
                                                                                 Fert_Ammonia_Base(user_input['base']['amount_synth_fert'], data.loc['fert_ef']['base'], user_input['gen_site_data']['tot_area']), 
                                                                                 Animal_Ammonia_Base(user_input['base']['amount_manure'], data.loc['n_excretion']['base'], user_input['gen_site_data']['tot_area'], user_input['base']['avg_num_animals'], user_input['base']['avg_num_days']))
    
    outcome['base']['activity'] = ((user_input['base']['diesel_per_site']*3.35)+(user_input['base']['elec_per_site']*0.581))/1000
    outcome['base']['total'] = sum((float(outcome['base']['veg_ch4_gwp']), float(outcome['base']['veg_c02_gwp']), float(outcome['base']['tot_direct_n2o']), float(outcome['base']['tot_indirect_n2o']), float(outcome['base']['activity'])), 0)
    
    //Populate the Rewetting dictionary
    outcome['rewet']['veg_ch4_gwp'] = float(data.loc['veg_ch4_gwp']['rewet'])*user_input['gen_site_data']['tot_area']
    outcome['rewet']['veg_c02_gwp'] = float(data.loc['veg_c02_gwp']['rewet'])*user_input['gen_site_data']['tot_area']

    outcome['rewet']['tot_direct_n2o'] = Total_Direct_N2Oemissions_Base(Basis_value_managed_soils(user_input['gen_site_data']['tot_area']), 
                                                                            crop_Residue_Base(Residue_Left_Input_Base(user_input['rewet']['crop_resid'], user_input['rewet']['crop_name']), user_input['rewet']['crop_yield'], user_input['gen_site_data']['tot_area']), 
                                                                            Synth_CO2Site_Base(user_input['rewet']['amount_synth_fert'], data.loc['fert_ef']['rewet'], user_input['gen_site_data']['tot_area']),
                                                                            Grazing_CO2Site_Base(user_input['rewet']['avg_num_animals'], user_input['rewet']['avg_num_days'], data.loc['n_excretion']['rewet'], data.loc['animal_ef']['rewet'], user_input['gen_site_data']['tot_area'])[0],
                                                                            Organic_Fert_CO2Site_Base(user_input['rewet']['amount_org_fert'], user_input['gen_site_data']['tot_area']),
                                                                            Manure_CO2Site_Base(user_input['rewet']['amount_manure'], user_input['gen_site_data']['tot_area']))
    
    outcome['rewet']['tot_indirect_n2o'] = Total_Indirect_N2Oemissions_Base(Nitrate_Base(user_input['rewet']['amount_manure'], user_input['rewet']['amount_org_fert'], Residue_Left_Input_Base(user_input['rewet']['crop_resid'], user_input['rewet']['crop_name']), user_input['rewet']['crop_yield'], user_input['rewet']['amount_synth_fert'], user_input['gen_site_data']['tot_area'], True), 
                                                                                 N_Oxide_Base(user_input['rewet']['amount_manure'], user_input['rewet']['amount_synth_fert'], data.loc['n_excretion']['base'], user_input['base']['avg_num_animals'], user_input['base']['avg_num_days'], user_input['gen_site_data']['tot_area']), 
                                                                                 Fert_Ammonia_Base(user_input['rewet']['amount_synth_fert'], data.loc['fert_ef']['rewet'], user_input['gen_site_data']['tot_area']), 
                                                                                 Animal_Ammonia_Base(user_input['rewet']['amount_manure'], data.loc['n_excretion']['rewet'], user_input['gen_site_data']['tot_area'], user_input['rewet']['avg_num_animals'], user_input['rewet']['avg_num_days']))
    
    outcome['rewet']['Product ton_co2_per_site'] = crop_use.loc['ton_co2_per_site']['Values']
    outcome['rewet']['activity'] = ((user_input['rewet']['diesel_per_site']*3.35)+(user_input['rewet']['elec_per_site']*0.581))/1000
    outcome['rewet']['total'] = sum((float(outcome['rewet']['veg_ch4_gwp']), float(outcome['rewet']['veg_c02_gwp']), float(outcome['rewet']['tot_direct_n2o']), float(outcome['rewet']['tot_indirect_n2o']), float(outcome['rewet']['activity']), float(outcome['rewet']['Product ton_co2_per_site'])), 0)

    //Populate creditable_year tab
    veg_num_base = data['base']['veg_class'].split(':', 1)[0]
    veg_num_rewet = data['rewet']['veg_class'].split(':', 1)[0]
    
    for i in range(2, 44):
        if veg_num_base == gest.iloc[i]['Name']:
            outcome['creditable_year']['base_scenario'] = float(c_content.loc['c_stock_ton_per_ha']['Values'])/(float(gest.iloc[i]['Total C-flux (ton C/ha)']))
        
        if veg_num_rewet == gest.iloc[i]['Name']:
            if float(c_content.loc['c_stock_ton_per_ha']['Values'])/float(gest.iloc[i]['Total C-flux (ton C/ha)']) > 0:
                outcome['creditable_year']['rewet_scenario'] = float(c_content.loc['c_stock_ton_per_ha']['Values'])/float(gest.iloc[i]['Total C-flux (ton C/ha)'])
            else:
                //outcome['creditable_year']['rewet_scenario'] = float('inf')
                outcome['creditable_year']['rewet_scenario'] = "Infinity"
    
    //Save the outcome tab in a pandas database
    return pd.DataFrame.from_dict(outcome)
}

function Create_Timeline_tab(user_input, outcome, c_content, gest){
    //Initialize the Timeline dict
    timeline = {}
    list_colnames = ['base_emissions', 'base_GESTv2', 'rewet_emissions', 'rewet_GESTv2', 'carbon_savings_flow', 'carbon_savings_stock', 'carbon_savings_product', 'carbon_savings_total', 'base_GESTnr', 'c_sequestration_base', 'c_stock_soil_base', 'stock_savings_creditable', 'rewet_GESTnr', 'c_sequestration_rewet', 'c_credits_' + user_input['gen_site_data']['site_name']]
    for i in list_colnames:
        timeline[i] = {}
        for j in range(int(user_input['gen_site_data']['year_start']), int(user_input['gen_site_data']['year_start'])+50):
            timeline[i][j] = None

    //Populate dict column by column
    for i in range(list(timeline['base_emissions'].keys())[0], list(timeline['base_emissions'].keys())[-1]+1):
        timeline['base_emissions'][i] = outcome.loc['total']['base']
        timeline['base_GESTv2'][i] = user_input['base']['veg_class']
        timeline['rewet_emissions'][i] = outcome.loc['total']['rewet']
        timeline['rewet_GESTv2'][i] = user_input['rewet']['veg_class']
        timeline['carbon_savings_flow'][i] = float(outcome.loc['tot_direct_n2o']['base']) + float(outcome.loc['tot_indirect_n2o']['base']) + float(outcome.loc['activity']['base']) - float(outcome.loc['tot_direct_n2o']['rewet']) - float(outcome.loc['tot_indirect_n2o']['rewet']) - float(outcome.loc['activity']['rewet'])
        timeline['carbon_savings_stock'][i] = float(outcome.loc['veg_ch4_gwp']['base']) + float(outcome.loc['veg_c02_gwp']['base']) - float(outcome.loc['veg_ch4_gwp']['rewet']) - float(outcome.loc['veg_c02_gwp']['rewet'])
        timeline['carbon_savings_product'][i] = (-1)*float(outcome.loc['Product ton_co2_per_site']['rewet'])
        timeline['carbon_savings_total'][i] = sum((timeline['carbon_savings_flow'][i], timeline['carbon_savings_stock'][i], timeline['carbon_savings_product'][i]), 0)
        timeline['base_GESTnr'][i] = timeline['base_GESTv2'][i].split(':', 1)[0]
        timeline['rewet_GESTnr'][i] = timeline['rewet_GESTv2'][i].split(':', 1)[0]

        for j in range(2, 44):
            if timeline['base_GESTnr'][i] == gest.iloc[j]['Name']:
                timeline['c_sequestration_base'][i] = float(gest.iloc[j]['Total C-flux (ton C/ha)'])*user_input['gen_site_data']['tot_area']*(-1)
            if timeline['rewet_GESTnr'][i] == gest.iloc[j]['Name']:
                timeline['c_sequestration_rewet'][i] = float(gest.iloc[j]['Total C-flux (ton C/ha)'])*user_input['gen_site_data']['tot_area']*(-1)

        if i == list(timeline['base_emissions'].keys())[0]:
            timeline['c_stock_soil_base'][i] = (c_content.loc['c_stock_ton_per_ha']['Values']*user_input['gen_site_data']['tot_area']) + timeline['c_sequestration_base'][i]
        else:
            timeline['c_stock_soil_base'][i] = timeline['c_stock_soil_base'][i-1] + timeline['c_sequestration_base'][i]

        if timeline['c_stock_soil_base'][i] > 0:
            timeline['stock_savings_creditable'][i] = 1
        else:
            timeline['stock_savings_creditable'][i] = 0

        if timeline['stock_savings_creditable'][i] == 1:
            timeline['c_credits_' + user_input['gen_site_data']['site_name']][i] = timeline['carbon_savings_total'][i]
        else:
            if timeline['c_sequestration_rewet'][i] > 0:
                timeline['c_credits_' + user_input['gen_site_data']['site_name']][i] = timeline['carbon_savings_flow'][i] + timeline['carbon_savings_product'][i] + (timeline['c_sequestration_rewet'][i]*(44/12))
            else:
                timeline['c_credits_' + user_input['gen_site_data']['site_name']][i] = timeline['carbon_savings_flow'][i] + timeline['carbon_savings_product'][i]

    //Save the outcome tab in a pandas database
    return pd.DataFrame.from_dict(timeline)
}

function Create_Output_tab(output_file, user_input, sm_classes, data_tab, outcome, c_content, crop_use){
    //Initialise Output dict
    output = {'site_data': {}, 'base_outcomes': {}, 'rewet_outcomes': {}, 'carbon_savings': {}}

    //Populate the site_data section
    output['site_data']['site_name'] = user_input['gen_site_data']['site_name']
    output['site_data']['coords'] = user_input['gen_site_data']['coords']
    output['site_data']['tot_area'] = user_input['gen_site_data']['tot_area']
    output['site_data']['peat_type'] = user_input['gen_site_data']['peat_type']
    output['site_data']['peat_thick'] = user_input['gen_site_data']['peat_thick']
    output['site_data']['year_start'] = user_input['gen_site_data']['year_start']
    output['site_data']['sm_class_base'] = sm_classes.loc['summer_moist_class']['base']
    output['site_data']['sm_class_rewet'] = sm_classes.loc['summer_moist_class']['rewet']
    output['site_data']['base veg_class'] = user_input['base']['veg_class']
    output['site_data']['rewet_veg_class'] = user_input['rewet']['veg_class']

    //Populate the base_outcomes section
    output['base_outcomes']['CH4'] = (float(data_tab.loc['veg_ch4_gwp']['base'])*user_input['gen_site_data']['tot_area'])
    output['base_outcomes']['CO2'] = float(data_tab.loc['veg_c02_gwp']['base'])*user_input['gen_site_data']['tot_area']
    output['base_outcomes']['c_emission_gwp_subtotal'] = float(output['base_outcomes']['CH4']) + float(output['base_outcomes']['CO2'])

    output['base_outcomes']['n2o_direct'] = outcome.loc['tot_direct_n2o']['base']
    output['base_outcomes']['n2o_indirect'] = outcome.loc['tot_indirect_n2o']['base']
    output['base_outcomes']['n2o_emission_gwp_subtotal'] = float(output['base_outcomes']['n2o_direct']) + float(output['base_outcomes']['n2o_indirect'])

    output['base_outcomes']['activity_gwp_subtotal'] = outcome.loc['activity']['base']
    output['base_outcomes']['gwp_total'] = outcome.loc['total']['base']

    //Populate the rewet_outcomes section
    output['rewet_outcomes']['CH4'] = (float(data_tab.loc['veg_ch4_gwp']['rewet'])*user_input['gen_site_data']['tot_area'])
    output['rewet_outcomes']['CO2'] = (float(data_tab.loc['veg_c02_gwp']['rewet'])*user_input['gen_site_data']['tot_area'])
    output['rewet_outcomes']['c_emission_gwp_subtotal'] = float(output['rewet_outcomes']['CH4']) + float(output['rewet_outcomes']['CO2'])

    output['rewet_outcomes']['n2o_direct'] = outcome.loc['tot_direct_n2o']['rewet']
    output['rewet_outcomes']['n2o_indirect'] = outcome.loc['tot_indirect_n2o']['rewet']
    output['rewet_outcomes']['n2o_emission_gwp_subtotal'] = float(output['rewet_outcomes']['n2o_direct']) + float(output['rewet_outcomes']['n2o_indirect'])

    output['rewet_outcomes']['activity_gwp_subtotal'] = outcome.loc['activity']['rewet']
    output['rewet_outcomes']['product_gwp_subtotal'] = outcome.loc['Product ton_co2_per_site']['rewet']
    output['rewet_outcomes']['gwp_total'] = outcome.loc['total']['rewet']

    //Populate carbon_savings section
    output['carbon_savings']['ghg_savings_total_per_year_per_site'] = output['base_outcomes']['gwp_total'] - output['rewet_outcomes']['gwp_total']
    output['carbon_savings']['ghg_savings_total_per_year_per_ha'] = output['carbon_savings']['ghg_savings_total_per_year_per_site']/output['site_data']['tot_area']
    output['carbon_savings']['ghg_savings_stock_per_year_per_site'] = float(outcome.loc['veg_ch4_gwp']['base']) + float(outcome.loc['veg_c02_gwp']['base']) - float(outcome.loc['veg_ch4_gwp']['rewet']) - float(outcome.loc['veg_c02_gwp']['rewet'])
    output['carbon_savings']['ghg_savings_stock_per_year_per_ha'] = output['carbon_savings']['ghg_savings_stock_per_year_per_site']/output['site_data']['tot_area']
    output['carbon_savings']['ghg_savings_flow_per_year_per_site'] = float(outcome.loc['tot_direct_n2o']['base']) + float(outcome.loc['tot_indirect_n2o']['base']) +float(outcome.loc['activity']['base']) - float(outcome.loc['tot_direct_n2o']['rewet']) - float(outcome.loc['tot_indirect_n2o']['rewet']) - float(outcome.loc['activity']['rewet'])
    output['carbon_savings']['ghg_savings_flow_per_year_per_ha'] = output['carbon_savings']['ghg_savings_flow_per_year_per_site']/output['site_data']['tot_area']
    output['carbon_savings']['ghg_savings_product_use_per_year_per_site'] = crop_use.loc['ton_co2_per_site']['Values']*(-1)
    output['carbon_savings']['ghg_savings_product_use_per_year_per_ha'] = crop_use.loc['ton_co2_per_ha']['Values']*(-1)
    
    output['carbon_savings']['carbon_stock_peat_soil_start_year_tco2_per_site'] = c_content.loc['c_stock_tco2_per_ha']['Values']*output['site_data']['tot_area']
    output['carbon_savings']['carbon_stock_peat_soil_start_year_ton_c_per_site'] = c_content.loc['c_stock_ton_per_ha']['Values']*output['site_data']['tot_area']
    output['carbon_savings']['carbon_stock_peat_soil_start_year_tco2_per_ha'] = c_content.loc['c_stock_tco2_per_ha']['Values']
    output['carbon_savings']['carbon_stock_peat_soil_start_year_ton_c_per_ha'] = c_content.loc['c_stock_ton_per_ha']['Values']

    output['carbon_savings']['time_til_peat_is_lost_base_scenario'] = outcome.loc['base_scenario']['creditable_year']
    output['carbon_savings']['time_til_peat_is_lost_rewet_scenario'] = outcome.loc['rewet_scenario']['creditable_year']
    
    //////////////////////////////////////////////////////////////////// 
    // round

    output['base_outcomes']['CH4'] = round(output['base_outcomes']['CH4'],2)
    output['base_outcomes']['CO2'] = round(output['base_outcomes']['CO2'],2)
    output['base_outcomes']['c_emission_gwp_subtotal'] = round(output['base_outcomes']['c_emission_gwp_subtotal'],2)
    output['base_outcomes']['n2o_direct'] = round(output['base_outcomes']['n2o_direct'],2)
    output['base_outcomes']['n2o_indirect'] = round(output['base_outcomes']['n2o_indirect'],2)
    output['base_outcomes']['n2o_emission_gwp_subtotal'] =round(output['base_outcomes']['n2o_emission_gwp_subtotal'],2)
    output['base_outcomes']['activity_gwp_subtotal'] = round(output['base_outcomes']['activity_gwp_subtotal'],2)
    output['base_outcomes']['gwp_total'] = round(output['base_outcomes']['gwp_total'],2)
    output['rewet_outcomes']['CH4'] = round(output['rewet_outcomes']['CH4'],2)
    output['rewet_outcomes']['CO2'] = round(output['rewet_outcomes']['CO2'],2)
    output['rewet_outcomes']['c_emission_gwp_subtotal'] = round(output['rewet_outcomes']['c_emission_gwp_subtotal'],2)
    output['rewet_outcomes']['n2o_direct'] = round(output['rewet_outcomes']['n2o_direct'],2)
    output['rewet_outcomes']['n2o_indirect'] = round(output['rewet_outcomes']['n2o_indirect'],2)
    output['rewet_outcomes']['n2o_emission_gwp_subtotal'] = round(output['rewet_outcomes']['n2o_emission_gwp_subtotal'],2)
    output['rewet_outcomes']['activity_gwp_subtotal'] = round(output['rewet_outcomes']['activity_gwp_subtotal'],2)
    output['rewet_outcomes']['product_gwp_subtotal'] = round(output['rewet_outcomes']['product_gwp_subtotal'],2)
    output['rewet_outcomes']['gwp_total'] = round(output['rewet_outcomes']['gwp_total'],2)
    output['carbon_savings']['ghg_savings_total_per_year_per_site'] = round(output['carbon_savings']['ghg_savings_total_per_year_per_site'],2)
    output['carbon_savings']['ghg_savings_total_per_year_per_ha'] = round(output['carbon_savings']['ghg_savings_total_per_year_per_ha'],2)
    output['carbon_savings']['ghg_savings_stock_per_year_per_site'] = round(output['carbon_savings']['ghg_savings_stock_per_year_per_site'],2)
    output['carbon_savings']['ghg_savings_stock_per_year_per_ha'] = round(output['carbon_savings']['ghg_savings_stock_per_year_per_ha'],2)
    output['carbon_savings']['ghg_savings_flow_per_year_per_site'] = round(output['carbon_savings']['ghg_savings_flow_per_year_per_site'],2)
    output['carbon_savings']['ghg_savings_flow_per_year_per_ha'] = round(output['carbon_savings']['ghg_savings_flow_per_year_per_ha'],2)
    output['carbon_savings']['ghg_savings_product_use_per_year_per_site'] = round(output['carbon_savings']['ghg_savings_product_use_per_year_per_site'],2)
    output['carbon_savings']['ghg_savings_product_use_per_year_per_ha'] = round(output['carbon_savings']['ghg_savings_product_use_per_year_per_ha'],2)
    output['carbon_savings']['carbon_stock_peat_soil_start_year_tco2_per_site'] = round(output['carbon_savings']['carbon_stock_peat_soil_start_year_tco2_per_site'],2)
    output['carbon_savings']['carbon_stock_peat_soil_start_year_ton_c_per_site'] = round(output['carbon_savings']['carbon_stock_peat_soil_start_year_ton_c_per_site'],2)
    output['carbon_savings']['carbon_stock_peat_soil_start_year_tco2_per_ha'] =round(output['carbon_savings']['carbon_stock_peat_soil_start_year_tco2_per_ha'],2)
    output['carbon_savings']['carbon_stock_peat_soil_start_year_ton_c_per_ha'] = round(output['carbon_savings']['carbon_stock_peat_soil_start_year_ton_c_per_ha'],2)
    
    if type(output['carbon_savings']['time_til_peat_is_lost_base_scenario']) != str:
        output['carbon_savings']['time_til_peat_is_lost_base_scenario']= round(output['carbon_savings']['time_til_peat_is_lost_base_scenario'],2)

    if type(output['carbon_savings']['time_til_peat_is_lost_rewet_scenario']) != str:
        output['carbon_savings']['time_til_peat_is_lost_rewet_scenario']= round(output['carbon_savings']['time_til_peat_is_lost_rewet_scenario'],2)
    
    return output
}

function set_run(inputs_dict, path_to_gest, output_file){
    dict_of_csvs = Load_csvs(path_to_gest)
    gest = dict_of_csvs['GEST_2_Static_Values.csv']
    data_tab = Create_Data_Tab(inputs_dict, gest)
    crop_use_tab = Create_crop_Use_Tab(inputs_dict, data_tab)
    c_content_tab = Create_C_Content_Soil_Tab(inputs_dict)
    sm_classes = Create_Soil_Moisture_Classes_Tab(inputs_dict)
    outcome = Create_Outcome_Tab(inputs_dict, data_tab, crop_use_tab, c_content_tab, gest)
    timeline = Create_Timeline_tab(inputs_dict, outcome, c_content_tab, gest)
    output = Create_Output_tab(output_file, inputs_dict, sm_classes, data_tab, outcome, c_content_tab, crop_use_tab)
}

function run_set(){
    gest_df = Make_GEST_df()
    SET_USR_OUTPT_FILE = './outputs/output_SET.json'
    
    input_dct = Create_Input_Dict()
    set_run(input_dct, path_to_gest, SET_USR_OUTPT_FILE)
    print("Done.")
}
*/