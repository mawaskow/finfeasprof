import Overlay from 'https://cdn.skypack.dev/ol/Overlay.js';
import {toLonLat} from 'https://cdn.skypack.dev/ol/proj.js';
import {toStringHDMS} from 'https://cdn.skypack.dev/ol/coordinate.js';
import {getLayerByName} from './customFunctions.js'
//import { get } from 'jquery';

const map=$('#map').data('map');

/**
 * Elements that make up the popup.
 */
const container = document.getElementById('popup');
const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');

/**
 * Create an overlay to anchor the popup to the map.
 */
const overlay = new Overlay({
  element: container,
  autoPan: {
    animation: {
      duration: 250,
    },
  },
});

/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

const key = 'Get your own API key at https://www.maptiler.com/cloud/';
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';


map.addOverlay(overlay);

/**
 * Add a click handler to the map to render the popup.
 */
map.on('singleclick', function (evt) {
  const coordinate = evt.coordinate;
  const hdms = toStringHDMS(toLonLat(coordinate));

  const view=map.getView();
  const resolution=view.getResolution();
  const projection=view.getProjection();

  // bnm
  const bogInfo=$('#bog-info');
  bogInfo.html('');
  // policies
  const ipolInfo=$('#ipol-info');
  ipolInfo.html('');
  // dipm
  const IEInfo=$('#IE-info');
  IEInfo.html('');
  // project sites
  const PSInfo=$('#PS-info');
  PSInfo.html('');
  // Raised Bog
  const D1Info=$('#D1-info');
  D1Info.html('');
  // LL Atlantic Bog
  const D2Info=$('#D2-info');
  D2Info.html('');
  // HL Montane Bog
  const D3Info=$('#D3-info');
  D3Info.html('');
  // default
  const noFeatures=$('#no-features');
  noFeatures.html('<p>No features</p>');

  // getting the layer source: getting the layer itself
  const bogLayer=getLayerByName('Bord_na_Mona');
  const bogSource=bogLayer.getSource();
  const bogUrl=bogSource.getFeatureInfoUrl(coordinate, resolution, projection,
    {'INFO_FORMAT':'application/json'});

    if(bogUrl){
        $.ajax({
            url:bogUrl,
            method:'GET',
            success:function(result){
                const bog=result.features[0];
                if(bog){
                    const bogName=bog.properties.name;
                    //const bogGroup=bog.properties.boggroup;
                    const bogArea=bog.properties.area_km2;

                    bogInfo.html(`<h5>Bog Info</h5> 
                        <p>Name: ${bogName}</p>
                        <p>Area (sqkm): ${bogArea.toFixed(2)}</p>`);
                    noFeatures.html('');
                    }

            }
        })
    }

  const ipolLayer=getLayerByName('Policies');
  const ipolSource=ipolLayer.getSource();
  const ipolUrl=ipolSource.getFeatureInfoUrl(coordinate, resolution, projection,
      {'INFO_FORMAT':'application/json', 'FEATURE_COUNT':'1000'});    
  if(ipolUrl){
      $.ajax({
          url:ipolUrl,
          method:'GET',
          success:function(result){
              const ipol=result.features[result.features.length-1];
              if(ipol){
                  const ipolPol=ipol.properties.name;
                  const lvlPol=ipol.properties.level;
                  const lnkPol=ipol.properties.link;
                  //const ipolCounty=ipol.properties.a_name;

                  ipolInfo.html(`<br><h5>Policy Info</h5> 
                      <p>Name: ${ipolPol}</p>
                      <p>Level: ${lvlPol}</p>
                      <a href=${lnkPol}>Link to Policy</a>`);
                  noFeatures.html('');
              }

          }
      })
  }

  const PSLayer=getLayerByName('Project_Sites');
  const PSSource=PSLayer.getSource();
  const PSUrl=PSSource.getFeatureInfoUrl(coordinate, resolution, projection,
    {'INFO_FORMAT':'application/json'});

    if(PSUrl){
        $.ajax({
            url:PSUrl,
            method:'GET',
            success:function(result){
                const PS=result.features[0];
                if(PS){
                    const Sname=PS.properties.site_name;
                    const Pname=PS.properties.proj_name;

                    PSInfo.html(`<br><h5>Project Info</h5> 
                        <p>Site Name: ${Sname}</p>
                        <p>Project Name: ${Pname}</p>`);
                    noFeatures.html('');
                    }

            }
        })
    }

  const D1Layer=getLayerByName('Raised_Bog');
  const D1Source=D1Layer.getSource();
  const D1Url=D1Source.getFeatureInfoUrl(coordinate, resolution, projection,
    {'INFO_FORMAT':'application/json'});

    if(D1Url){
        $.ajax({
            url:D1Url,
            method:'GET',
            success:function(result){
                const D1=result.features[0];
                if(D1){
                    const D1gc=D1.properties.site_type;

                    D1Info.html(`<br><h5>Bog Type</h5> 
                      <p>${D1gc}</p>`);
                    noFeatures.html('');
                    }

            }
        })
    }

  const D2Layer=getLayerByName('LL_Atlantic_Bog');
  const D2Source=D2Layer.getSource();
  const D2Url=D2Source.getFeatureInfoUrl(coordinate, resolution, projection,
    {'INFO_FORMAT':'application/json'});

    if(D2Url){
        $.ajax({
            url:D2Url,
            method:'GET',
            success:function(result){
                const D2=result.features[0];
                if(D2){
                    const D2gc=D2.properties.site_type;

                    D2Info.html(`<br><h5>Bog Type</h5> 
                      <p>${D2gc}</p>`);
                    noFeatures.html('');
                    }

            }
        })
    }
  
  const D3Layer=getLayerByName('HL_Montane_Bog');
  const D3Source=D3Layer.getSource();
  const D3Url=D3Source.getFeatureInfoUrl(coordinate, resolution, projection,
    {'INFO_FORMAT':'application/json'});

    if(D3Url){
        $.ajax({
            url:D3Url,
            method:'GET',
            success:function(result){
                const D3=result.features[0];
                if(D3){
                    const D3gc=D3.properties.site_type;

                    D3Info.html(`<br><h5>Bog Type</h5> 
                      <p>${D3gc}</p>`);
                    noFeatures.html('');
                    }

            }
        })
    }

  overlay.setPosition(coordinate);
});
