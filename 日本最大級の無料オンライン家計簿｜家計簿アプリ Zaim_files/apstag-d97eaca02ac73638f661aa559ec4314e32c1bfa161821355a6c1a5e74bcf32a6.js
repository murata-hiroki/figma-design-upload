
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function() {
  googletag.defineSlot('/70958982/Amazon_160*600', [160, 600], 'div-gpt-ad-1464267814296-0').addService(googletag.pubads());
  googletag.defineSlot('/70958982/Amazon_300*250', [300, 250], 'div-gpt-ad-1464267814296-1').addService(googletag.pubads());

  googletag.pubads().disableInitialLoad();
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});


/* ----- Begin Step 1 ----- */
//Load the APS JavaScript Library
!function(a9,a,p,s,t,A,g){if(a[a9])return;function q(c,r){a[a9]._Q.push([c,r])}a[a9]={init:function(){q("i",arguments)},fetchBids:function(){q("f",arguments)},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]};A=p.createElement(s);A.async=!0;A.src=t;g=p.getElementsByTagName(s)[0];g.parentNode.insertBefore(A,g)}("apstag",window,document,"script","//c.amazon-adsystem.com/aax2/apstag.js");

//Initialize the Library
apstag.init({
     pubID: '3370',
     adServer: 'googletag'
});
/* ----- End Step 1 ----- */

/* ----- Begin Step 2 ----- */
 apstag.fetchBids({
     slots: [{
         slotID: 'div-gpt-ad-1464267814296-0',
         slotName: '/70958982/Amazon_160*600', // Make sure your slotName value is ad unit specific and descriptive
         sizes: [[160, 600]]
     },
     {
         slotID: 'div-gpt-ad-1464267814296-1',
         slotName: '/70958982/Amazon_300*250',
         sizes: [[300, 250]]
     }],
     timeout: 2e3
 }, function(bids) {
/* ----- Begin Step 3 ----- */
     // set apstag targeting on googletag, then trigger the first DFP request in googletag's disableInitialLoad integration
     googletag.cmd.push(function(){
         apstag.setDisplayBids();
         googletag.pubads().refresh();
     });
/* ----- End Step 3 ----- */
 });
/* ----- End Step 2 ----- */
    
;
