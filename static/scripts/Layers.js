import {getLayerByName} from "./customFunctions.js";

const map=$('#map').data('map');
const layers=map.getLayers();

const layersDivContent=$('#layers-div');
layersDivContent.html('');

const lyrClrLib = {
    'Project_Sites':`proj-sites-box`,
    'Raised_Bog':`raised-bog-box`,
    'LL_Atlantic_Bog':`ll-atl-box`,
    'HL_Montane_Bog':`hl-mont-box`,
    'PL_Alk_Fens':`alk-fen-box`,
    'Corine18':`corine-box`
};

layers.forEach(layer => {
    if(layer.get('name')){
        const element = `<div class="form-check drag">
        <input class="form-check-input ${lyrClrLib[layer.get('name')]}" type="checkbox" value="" id=${layer.get('name')}>
        <label class="form-check-label" for=${layer.get('name')}>
        ${layer.get('display')}</label>
        </div>`;
        layersDivContent.append(element);
        $(`#${layer.get('name')}`).prop('checked', layer.getVisible());
    }
});

$('.form-check-input').on('change', function(){
    const checkbox=this;
    const layerName=checkbox.id;
    const layer=getLayerByName(layerName);
    // @ts-ignore
    layer.setVisible(checkbox.checked);
});